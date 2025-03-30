import { Material, WebGLRenderer } from 'three'

export function dumpShaderProgram(renderer: WebGLRenderer, material: Material) {
	const properties = renderer.properties.get(material)

	if (!properties || !properties.programs) {
		return
	}

	const program = [...properties.programs.values()][0]

	if (!program) {
		return
	}

	const gl = renderer.getContext()

	console.log('=== SHADER PROGRAM DUMP ===')
	console.log('-- Vertex Shader --')
	console.log(gl.getShaderSource(program.vertexShader))

	console.log('-- Fragment Shader --')
	console.log(gl.getShaderSource(program.fragmentShader))

	console.log('-- Active Uniforms --')
	console.log('program', program)
	const numUniforms = gl.getProgramParameter(program.program, gl.ACTIVE_UNIFORMS)
	for (let i = 0; i < numUniforms; i++) {
		const info = gl.getActiveUniform(program.program, i)
		console.log(`Uniform ${i}:`, info)
	}
}
