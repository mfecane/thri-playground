#include <packing>

varying vec2 vUv;

uniform sampler2D tDepth;
uniform float scale;

uniform vec2 cameraNearFar;

float getDepth() {
	return unpackRGBToDepth(texture2D(tDepth, vUv).rgb);
}

float getViewZ(const in float depth) {
	#if PERSPECTIVE_CAMERA == 1
	return perspectiveDepthToViewZ(depth, cameraNearFar.x, cameraNearFar.y);
	#else
	return orthographicDepthToViewZ(depth, cameraNearFar.x, cameraNearFar.y);
	#endif
}

void main() {
	// closest distance to scene surfaces, extracted from depth buffer, in meters
	float viewZ = -getViewZ(getDepth());

	// Add a scale factor for clarity
	gl_FragColor.rgb = vec3(viewZ / scale);

	// gl_FragColor.rgb = texture2D(tDepth, vUv).rgb;

	gl_FragColor.a = 1.0;
}