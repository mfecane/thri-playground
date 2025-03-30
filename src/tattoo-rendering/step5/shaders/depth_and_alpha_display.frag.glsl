#include <packing>

varying vec2 vUv;

uniform sampler2D tDepth;
uniform float scale;

uniform vec2 cameraNearFar;

float getViewZ(const in float depth) {
	#if PERSPECTIVE_CAMERA == 1
	return perspectiveDepthToViewZ(depth, cameraNearFar.x, cameraNearFar.y);
	#else
	return orthographicDepthToViewZ(depth, cameraNearFar.x, cameraNearFar.y);
	#endif
}

void main() {
	// closest distance to scene surfaces, extracted from depth buffer, in meters
	vec4 smpl = texture2D(tDepth, vUv);

	float viewZ = -getViewZ(unpackRGBToDepth(smpl.rgb));

	// Add a scale factor for clarity
	// gl_FragColor.rgb = vec3(viewZ / scale);
	gl_FragColor.rgb = vec3(smpl.a);

	gl_FragColor.a = 1.0;
}