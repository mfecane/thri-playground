#include <packing>

#define MAX_STEPS 100
#define MAX_DIST 10.0
#define iTime time

varying vec2 vUv;

uniform sampler2D depthTexture;
uniform sampler2D colorTexture;
uniform vec2 cameraNearFar;
uniform vec2 resolution;
uniform mat4 cameraWorldMatrix;
uniform mat4 cameraProjectionMatrixInverse;
uniform float time;

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

float Noise3d(in vec3 p)
{
    float z=1.4;
	float rz = 0.;
    vec3 bp = p;
	for (float i=0.; i<= 2.; i++ )
	{
        vec3 dg = tri3(bp + vec3(sin(time)));
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
  return 0.1 + Noise3d(point / 2.0) * smoothstep(3.0, 0.0, length(point));
}

float volumetricMarch(vec3 ro, vec3 rd, float depth) {
	float dO = 0.0;
	float dens = 0.0;
	float step = 0.2; // in meters
	float density = 0.2;

	for(int i = 0; i < MAX_STEPS; i++) {
		vec3 p = ro + rd * dO;
		// this is not the proper way to do this!
		dens += density * step * densityFunction(p);
		dO += step;
		if (dO > MAX_DIST || dO > depth || dens > 0.9) {
			break;
		}
	}

	return dens;
}

void main() {
    float viewZ = -getViewZ( getDepth( vUv ) ); // in meters

    // output depth
    // gl_FragColor.rgb = vec3(viewZ);

	vec3 rayOrigin = cameraPosition;

	vec2 screenPos = ( gl_FragCoord.xy * 2.0 - resolution ) / resolution;
	vec4 ndcRay = vec4( screenPos.xy, 1.0, 1.0 );
	vec3 rayDirection = ( cameraWorldMatrix * cameraProjectionMatrixInverse * ndcRay ).xyz;

	float d = volumetricMarch(rayOrigin, rayDirection, viewZ);
	vec3 col = texture2D( colorTexture, vUv ).rgb + vec3(d);

    gl_FragColor.rgb = col;
    gl_FragColor.a = 1.0;
}