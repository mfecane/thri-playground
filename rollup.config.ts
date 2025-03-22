import typescript from '@rollup/plugin-typescript'
import resolve from '@rollup/plugin-node-resolve'
// TODO: add types
import glsl from 'rollup-plugin-glsl'
import path from 'path'
import { InputOptions, RollupOptions } from 'rollup'
import fs from 'fs'
import * as fsExtra from 'fs-extra'

function copyAssets() {
	const sourceFolder = 'public/assets/'
	const targetFolder = 'build/assets/'

	if (fs.existsSync(targetFolder)) {
		fs.rmSync(targetFolder, { recursive: true, force: true });
	}

	fsExtra
		.copy(sourceFolder, targetFolder)
		.then(() => {
			console.log('Folder copied successfully!')
		})
		.catch((err) => {
			console.error('Error copying folder:', err)
		})
}

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

	const targetFolder = folder ? path.join(root, folder) : root

	const files = fs.readdirSync(targetFolder)

	files.forEach((file) => {
		const filePath = path.join(targetFolder, file)
		const stat = fs.statSync(filePath)
		if (stat.isDirectory()) {
			const sourceFiles = fs.readdirSync(filePath)
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

function buildRollupConfig(items: ItemsRaw[]): RollupOptions[] {
	return items.map((item: ItemsRaw) => {
		const inputJs = getInputJsFile(item)
		const options: RollupOptions = {
			input: inputJs,
			output: { file: 'build/js/' + getOutputJsFile(item) },
			watch: {
				include: [inputJs],
				exclude: ['node_modules/**', 'public/**'],
			},
			plugins: [
				resolve(),
				glsl({
					include: './src/**/*.glsl',
					sourceMap: true,
				}),
				typescript(),
			],
		}
		return options
	})
}

function buildHTMLPages(items: ItemsRaw[]) {
	const fileContent = fs.readFileSync('src/html/page.html', 'utf-8')

	items.forEach((item) => {
		const outputjs = '../js/' + getOutputJsFile(item)
		const htmlPath = 'build/' + getOutputHTMLFile(item)

		let modifiedContent = fileContent.replaceAll('{script}', outputjs)
		modifiedContent = modifiedContent.replaceAll('{id}', item.id)

		const outputFolder = path.dirname(htmlPath)

		if (!fs.existsSync(outputFolder)) {
			fs.mkdirSync(outputFolder, { recursive: true })
		}

		fs.writeFileSync(htmlPath, modifiedContent, 'utf-8')
	})
}

/**
 * TODO format with prettier
 */
function buildIndexHTML(items: ItemsRaw[]) {
	const fileContent = fs.readFileSync('src/html/index.html', 'utf-8')
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
	fs.writeFileSync('build/index.html', modifiedContent, 'utf-8')
}

const items: ItemsRaw[] = []
items.push(...readDirectoryRecursive('./src'))
items.push(...readDirectoryRecursive('./src', 'archive'))

const config: InputOptions[] = buildRollupConfig(items)

buildHTMLPages(items)
buildIndexHTML(items)
copyAssets()

export default config
