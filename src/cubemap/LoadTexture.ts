import { LinearSRGBColorSpace, SRGBColorSpace, Texture, TextureLoader } from 'three'

export async function loadTexture(src: string, flip: boolean = false, srgb: boolean = false): Promise<Texture> {
	return new Promise<Texture>((resolve) => {
		new TextureLoader().load(src, (texture) => {
			if (flip) texture.flipY = false
			if (srgb) texture.colorSpace = SRGBColorSpace
			else texture.colorSpace = LinearSRGBColorSpace
			resolve(texture)
		})
	})
}
