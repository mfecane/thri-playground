#include <packing>

varying vec2 vUv;

uniform sampler2D tDepth;
uniform float scale;

uniform vec2 cameraNearFar;

float getDepth(const in vec2 screenPosition) {
	#if DEPTH_PACKING == 1
	return unpackRGBAToDepth(texture2D(tDepth, screenPosition));
	#else
	return texture2D(tDepth, screenPosition).x;
	#endif
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
	float viewZ = -getViewZ(getDepth(vUv));

	// Add a scal factor for clarity
	gl_FragColor.rgb = vec3(viewZ / scale);

	gl_FragColor.a = 1.0;
}