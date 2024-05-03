#include <packing>
#include <shadowmap_pars_fragment>

#define MAX_STEPS 50
#define MAX_DIST 8.0
#define SURF_DIST 0.0001
#define iTime time

varying vec2 vUv;

uniform sampler2D depthTexture;
uniform sampler2D colorTexture;
uniform vec2 cameraNearFar;
uniform vec2 resolution;
uniform mat4 cameraWorldMatrix;
uniform mat4 cameraProjectionMatrixInverse;
uniform float time;

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

float tri(in float x){return abs(fract(x)-.5);}

vec3 tri3(in vec3 p){return vec3( tri(p.z+tri(p.y)), tri(p.z+tri(p.x)), tri(p.y+tri(p.x)));}

float rand(vec2 n) { 
	return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
}

float Noise3d(in vec3 p)
{
    float z=1.4;
	float rz = 0.;
    vec3 bp = p;
	for (float i=0.; i<= 2.; i++ )
	{
        vec3 dg = tri3(bp);
        p += (dg);

        bp *= 2.;
		z *= 1.5;
		p *= 1.3;
        
        rz+= (tri(p.z+tri(p.x+tri(p.y))))/z;
        bp += 0.14;
	}
	return rz;
}

//#endregion NOISE

float densityFunction(vec3 point) {
	vec4 vDirectionalShadowCoord = directionalShadowMatrix * vec4(point, 1.0);
	float shdwo = getShadow(
		shadowMap, vec2(512.0, 512.0), 0.0, 1.0, vDirectionalShadowCoord
	);
	if (point.y < -0.5) {
		return 0.0;
	}
	vec3 pp = point; // + vec3(0.0, rand(vUv + point.xy) * 10.0, 0.0);
    return (Noise3d(pp * 0.4 + vec3(time / 4.0)) + 0.2 * smoothstep(1.0, 0.0, point.y)) * shdwo * smoothstep(3.0, 0.0, length(point));
}

float volumetricMarch(vec3 ro, vec3 rd, float depth) {
	float dO = 0.0;
	float dens = 0.0;
	float step = min(0.2, depth / float(MAX_STEPS)); // in meters
	step += rand(vUv) * 0.05;
	float density = 0.2;

	for(int i = 0; i < MAX_STEPS; i++) {
		vec3 p = ro + rd * dO;
		dens += density * step * densityFunction(p);
		dO += step;
		if (dO > MAX_DIST || dO > depth + 0.1 || dens > 0.9) {
			break;
		}
	}

	return dens;
}

void main() {
    float viewZ = -getViewZ( getDepth( vUv ) ); // in meters

	vec3 rayOrigin = cameraPosition;

	vec2 screenPos = ( gl_FragCoord.xy * 2.0 - resolution ) / resolution;
	vec4 ndcRay = vec4( screenPos.xy, 1.0, 1.0 );
	vec3 rayDirection = ( cameraWorldMatrix * cameraProjectionMatrixInverse * ndcRay ).xyz;

	float d = volumetricMarch(rayOrigin, rayDirection, viewZ);
	vec3 col = vec3(d);
	gl_FragColor.rgb = col;
    gl_FragColor.a = 1.0;
}