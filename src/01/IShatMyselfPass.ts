import {
	WebGLRenderer,
	WebGLRenderTarget,
	Texture,
	ShaderMaterial,
	NoBlending,
	Vector2,
	Scene,
	MeshDepthMaterial,
	RGBADepthPacking,
	DoubleSide,
	Matrix4,
	PerspectiveCamera,
} from 'three'
import { Pass } from 'three/examples/jsm/postprocessing/Pass.js'

const DepthShader = {
	name: 'DepthShader',

	uniforms: {
		depthTexture: { value: null },
		cameraNearFar: { value: new Vector2(0.5, 0.5) },
		textureMatrix: { value: null },
	},

	vertexShader: /* glsl */ `
        #include <morphtarget_pars_vertex>
        #include <skinning_pars_vertex>

        varying vec4 projTexCoord;
        varying vec4 vPosition;
        uniform mat4 textureMatrix;

        void main() {

            #include <skinbase_vertex>
            #include <begin_vertex>
            #include <morphtarget_vertex>
            #include <skinning_vertex>
            #include <project_vertex>

            vPosition = mvPosition;

            vec4 worldPosition = vec4( transformed, 1.0 );

            #ifdef USE_INSTANCING

                worldPosition = instanceMatrix * worldPosition;

            #endif
            
            worldPosition = modelMatrix * worldPosition;

            projTexCoord = textureMatrix * worldPosition;

        }
    `,

	fragmentShader: /* glsl */ `
        #include <packing>
        varying vec4 vPosition;
        varying vec4 projTexCoord;
        uniform sampler2D depthTexture;
        uniform vec2 cameraNearFar;

        void main() {

            float depth = unpackRGBAToDepth(texture2DProj( depthTexture, projTexCoord ));
            float viewZ = - perspectiveDepthToViewZ( depth, cameraNearFar.x, cameraNearFar.y );
			gl_FragColor.rgb = vec3( viewZ ); // in meters
            gl_FragColor.a = 1.0;

        }
    `,
}

export class IShatMyselfPass extends Pass {
	private material: ShaderMaterial

	private depthBuffer = new WebGLRenderTarget(this.resolution.x, this.resolution.y)

	private depthMaterial: MeshDepthMaterial

	private textureMatrix: Matrix4 = new Matrix4()

	private downSampling = 4

	public constructor(private scene: Scene, private camera: PerspectiveCamera, private readonly resolution: Vector2) {
		super()

		this.material = new ShaderMaterial({
			uniforms: DepthShader.uniforms,
			vertexShader: DepthShader.vertexShader,
			fragmentShader: DepthShader.fragmentShader,
			blending: NoBlending,
			depthTest: false,
			depthWrite: false,
		})

		this.depthMaterial = new MeshDepthMaterial()
		this.depthMaterial.side = DoubleSide
		this.depthMaterial.depthPacking = RGBADepthPacking
		this.depthMaterial.blending = NoBlending

		this.depthBuffer = new WebGLRenderTarget(
			this.resolution.x / this.downSampling,
			this.resolution.y / this.downSampling
		)
		this.depthBuffer.texture.name = 'Depth'
		this.depthBuffer.texture.generateMipmaps = false
	}

	private updateTextureMatrix(): void {
		this.textureMatrix.set(0.5, 0.0, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.0, 0.5, 0.5, 0.0, 0.0, 0.0, 1.0)
		this.textureMatrix.multiply(this.camera.projectionMatrix)
		this.textureMatrix.multiply(this.camera.matrixWorldInverse)
	}

	public render(
		renderer: WebGLRenderer,
		writeBuffer: WebGLRenderTarget<Texture>,
		readBuffer: WebGLRenderTarget<Texture>,
		deltaTime: number,
		maskActive: boolean
	): void {
		// render depth texture

		this.scene.overrideMaterial = this.depthMaterial
		renderer.setRenderTarget(this.depthBuffer)
		renderer.render(this.scene, this.camera)
		this.scene.overrideMaterial = null

		if (this.renderToScreen) {
			this.scene.overrideMaterial = this.material

			this.updateTextureMatrix()
			this.material.uniforms['cameraNearFar'].value.set(this.camera.near, this.camera.far)
			this.material.uniforms['depthTexture'].value = this.depthBuffer.texture
			this.material.uniforms['textureMatrix'].value = this.textureMatrix

			renderer.setRenderTarget(null)
			renderer.clear()
			renderer.render(this.scene, this.camera)
			this.scene.overrideMaterial = null
		}
	}
}

// NOTE the other way is shown in examples/webgl_depth_texture.html
