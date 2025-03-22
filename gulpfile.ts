import { src, dest, task, watch, series, parallel } from 'gulp'
import { rollup } from 'rollup'
import typescript from '@rollup/plugin-typescript'
import resolve from '@rollup/plugin-node-resolve'
import { dirname, join } from 'path'
import { readdirSync, statSync, readFileSync, existsSync, mkdirSync, writeFileSync } from 'fs'
import { init } from 'browser-sync'

// Why does this shit work?
const glsl = require('rollup-plugin-glsl')

interface ItemsRaw {
	id: string
	folder: string | null
}

/**
 * @param root currently 'src'
 * @param folder currently 'archive'
 * @returns list of input files and output files
 */
function readDirectoryRecursive(root: string, folder: string | null = null) {
	const items: ItemsRaw[] = []

	const targetFolder = folder ? join(root, folder) : root

	const files = readdirSync(targetFolder)

	files.forEach((file) => {
		const filePath = join(targetFolder, file)
		const stat = statSync(filePath)
		if (stat.isDirectory()) {
			const sourceFiles = readdirSync(filePath)
			sourceFiles.forEach((sourceFileName) => {
				if (sourceFileName === 'index.ts') {
					const arr = filePath.split('/')

					const id = arr[arr.length - 1] // for example 3dnoise

					items.push({ id, folder })
				}
			})
		}
	})

	return items
}

function getOutputJsFile(item: ItemsRaw) {
	let outputFile: string
	if (item.folder) {
		outputFile = `${item.folder}/${item.id}.js`
	} else {
		outputFile = `${item.id}.js`
	}
	return outputFile
}

function getInputJsFile(item: ItemsRaw) {
	let inputFile: string
	if (item.folder) {
		inputFile = `src/${item.folder}/${item.id}/index.ts`
	} else {
		inputFile = `src/${item.id}/index.ts`
	}
	return inputFile
}

function getOutputHTMLFile(item: ItemsRaw) {
	let outputFile: string
	if (item.folder) {
		outputFile = `${item.folder}/${item.id}.html`
	} else {
		outputFile = `${item.id}.html`
	}
	return outputFile
}

function buildHTMLPages(items: ItemsRaw[]) {
	const fileContent = readFileSync('src/html/page.html', 'utf-8')

	items.forEach((item) => {
		const outputjs = '../js/' + getOutputJsFile(item)
		const htmlPath = 'build/' + getOutputHTMLFile(item)

		let modifiedContent = fileContent.replaceAll('{script}', outputjs)
		modifiedContent = modifiedContent.replaceAll('{id}', item.id)

		const outputFolder = dirname(htmlPath)

		if (!existsSync(outputFolder)) {
			mkdirSync(outputFolder, { recursive: true })
		}

		writeFileSync(htmlPath, modifiedContent, 'utf-8')
	})
}

/**
 * TODO format with prettier
 */
function buildIndexHTML(items: ItemsRaw[]) {
	const fileContent = readFileSync('src/html/index.html', 'utf-8')
	const content = items
		.map((item) => {
			return `
                <li>
                    <a href="${getOutputHTMLFile(item)}">${item.id}</a>
                </li>
            `
		})
		.join('\n')
	const modifiedContent = fileContent.replaceAll('{content}', content)
	writeFileSync('build/index.html', modifiedContent, 'utf-8')
}

const items: ItemsRaw[] = []
items.push(...readDirectoryRecursive('./src'))
items.push(...readDirectoryRecursive('./src', 'archive'))

task('copy', () => {
	buildHTMLPages(items)
	buildIndexHTML(items)

	return src(`public/assets/**/*`, { encoding: false }) // Copy all files from source
		.pipe(dest('build/assets/', { encoding: false })) // Paste them into target
})

task('serve', () => {
	init({
		server: './build',
		open: false,
	})
})

items.forEach((item) => {
	const bundleTaskName = 'bundle-' + item.id
	const watchTaskName = 'watch-' + item.id

	task(bundleTaskName, async () => {
		const bundle = await rollup({
			input: getInputJsFile(item),
			plugins: [
				resolve(),
				glsl({
					include: './src/**/*.glsl',
					sourceMap: true,
				}),
				typescript(),
			],
		})

		await bundle.write({
			file: 'build/js/' + getOutputJsFile(item),
			format: 'iife',
		})
	})

	task(watchTaskName, () => {
		watch(getInputJsFile(item), series(bundleTaskName))
	})

	task(`dev:${item.id}`, series('copy', bundleTaskName, parallel(watchTaskName, 'serve')))
	task(`build:${item.id}`, series('copy', bundleTaskName))

	console.log(`dev:${item.id}`, `build:${item.id}`)
})
