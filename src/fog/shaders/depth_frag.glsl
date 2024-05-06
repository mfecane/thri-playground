#include <packing>
#include <shadowmap_pars_fragment>

#define MAX_STEPS 50
#define MAX_DIST 8.0
#define SURF_DIST 0.0001
#define iTime time
#define TEXTURE_SIZE_3D 8.0

varying vec2 vUv;

uniform sampler2D depthTexture;
uniform sampler2D texture3d;
uniform sampler2D colorTexture;
uniform vec2 cameraNearFar;
uniform vec2 resolution;
uniform mat4 cameraWorldMatrix;
uniform mat4 cameraProjectionMatrixInverse;
uniform float time;
uniform float scale2;
uniform float scale3;

uniform sampler2D shadowMap;
uniform mat4 directionalShadowMatrix;

//#region DEPTH

float getDepth( const in vec2 screenPosition ) {
	#if DEPTH_PACKING == 1
		return unpackRGBAToDepth( texture2D( depthTexture, screenPosition ) );
	#else
		return texture2D( tDepth, screenPosition ).x;
	#endif
}

float getViewZ( const in float depth ) {
	#if PERSPECTIVE_CAMERA == 1
		return perspectiveDepthToViewZ( depth, cameraNearFar.x, cameraNearFar.y );
	#else
		return orthographicDepthToViewZ( depth, cameraNearFar.x, cameraNearFar.y );
	#endif
}

//#endregion DEPTH

//#region NOISE

float rand(vec2 n) { 
	return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
}

// samples from -1 to 1
vec3 sampleNoise3d(vec3 p) {
	vec3 p2 = fract((p + vec3(1.0)) / 2.0);
	float size = TEXTURE_SIZE_3D;
	float yIndex = p2.z * (size * size - 1.0);
	float row = floor(yIndex / size);
	float col = floor(yIndex - row * size);
	vec2 uv2 = (vec2(col, row) + p2.xy) / size;
    return texture(texture3d, uv2).rgb;
}

float Noise3d(in vec3 p) {
	vec3 shift = vec3(1.213 * sin(iTime / 2.0), 2.312 * cos(iTime / 2.0), 0.312);
	vec3 samplePoint = p + scale3 * (sampleNoise3d(p / 4.0 + shift));
	float noise = sampleNoise3d(samplePoint / scale2).r *
		sampleNoise3d(samplePoint.yzx / scale2).g *
		sampleNoise3d(samplePoint.zxy / scale2).b;
	// sample 3 channels
	// float noise = sampleNoise3d(p / scale2) *
	// 	sampleNoise3d(p.yzx / scale2) *
	// 	sampleNoise3d(p.zxy / scale2);
    return noise;
}

//#endregion NOISE

float getWorldShadow(vec3 point) {
	vec4 vDirectionalShadowCoord = directionalShadowMatrix * vec4(point, 1.0);
	return getShadow(
		shadowMap, vec2(512.0, 512.0), 0.0, 1.0, vDirectionalShadowCoord
	);
}

float densityFunction(vec3 point) {
	vec3 pp = point;
	// float density = Noise3d(pp * 0.4 + vec3(time / 4.0));
	float density = 0.1 + Noise3d(pp);
	// ground density
	// density += 0.2 * smoothstep(1.0, 0.0, point.y);
	// shadow
	density *= getWorldShadow(point);
	// falloff
	// density *= smoothstep(3.0, 0.0, length(point));
    return density;
}

bool rayIntersectInfiniteCylinder(vec3 ro, vec3 rd, out float near, out float far) {
	vec3 rdp = vec3(rd.x, 0.0, rd.z);
	vec3 rop = vec3(ro.x, 0.0, ro.z);
	float b = dot(rdp, rop);
	float a = dot(rdp, rdp);
	float c = dot(rop, rop) - 4.0; // r squared
	float det = b * b - a * c;
	if (det > 0.0) {
		float detsqrt = sqrt(det);
		near = (-b - detsqrt) /  a;
		far = (-b + detsqrt) /  a;
		return far > 0.0;
	}
	return false;
}

float volumetricMarch(vec3 ro, vec3 rd, float depth) {
	float dens = 0.0;
	float step = min(0.2, depth / float(MAX_STEPS)) + rand(vUv) * 0.05; // in meters
	// dither
	// step += rand(vUv) * 0.05;
	float density = 0.1;
	float near = 0.0, far = 0.0;

	if (!rayIntersectInfiniteCylinder(ro, rd, near, far)) {
		return 0.0;
	}
	float dO = max(0.0, near);
	for(int i = 0; i < MAX_STEPS; i++) {
		vec3 p = ro + rd * dO;
		dens += density * step * densityFunction(p);
		dO += step;
		if (dO > MAX_DIST || dO > depth + 0.1 || dens > 0.9 || dO > far) {
			break;
		}
	}
	return dens;
}

vec3 rayNoise(vec3 n) {
	float scale = 0.01;
	return scale * (vec3(rand(n.xy), rand(n.yz), rand(n.zx)) - vec3(0.5)); 
}

void main() {
    float viewZ = -getViewZ( getDepth( vUv ) ); // in meters

	vec3 rayOrigin = cameraPosition;

	vec2 screenPos = ( gl_FragCoord.xy * 2.0 - resolution ) / resolution;
	vec4 ndcRay = vec4( screenPos.xy, 1.0, 1.0 );
	vec3 rayDirection = ( cameraWorldMatrix * cameraProjectionMatrixInverse * ndcRay ).xyz;
	// antialias dithering
	// rayDirection += rayNoise(rayDirection);

	float d = volumetricMarch(rayOrigin, rayDirection, viewZ);
	vec3 col = vec3(d);
	// col = vec3(texture(texture3d, vUv).r);

	gl_FragColor.rgb = col;
    gl_FragColor.a = 1.0;
}