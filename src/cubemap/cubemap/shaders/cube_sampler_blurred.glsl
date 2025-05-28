// uniform samplerCube envMap;
uniform sampler2D envMap;
uniform mat4 cameraWorldMatrix;
uniform mat4 cameraProjectionMatrixInverse;
uniform vec2 resolution;

#include <cube_uv_reflection_fragment>

varying vec2 vUv;

void main() {
	vec2 screenPos = ( gl_FragCoord.xy * 2.0 - resolution ) / resolution;
	vec4 ndcRay = vec4( screenPos.xy, 1.0, 1.0 );
	vec3 rayDirection = ( cameraWorldMatrix * cameraProjectionMatrixInverse * ndcRay ).xyz;
	// vec4 texColor = textureCube(envMap, vUv);
	// vec4 texColor = textureCube(envMap, normalize(vec3(vUv, 1.0)));
	vec3 texColor = bilinearCubeUV( envMap, rayDirection.zxy, 0.0 );
	gl_FragColor.rgb = texColor.rgb;
    gl_FragColor.a = 1.0;
}