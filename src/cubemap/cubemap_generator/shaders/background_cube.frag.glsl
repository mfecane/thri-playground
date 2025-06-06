

#ifdef ENVMAP_TYPE_CUBE

uniform samplerCube envMap;

#elif defined( ENVMAP_TYPE_CUBE_UV )

uniform sampler2D envMap;

#endif

#define TEXTURE_SIZE_3D 8.0

uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;

uniform sampler2D texture3d;

varying vec3 vWorldDirection;
varying vec3 vWorldPosition;
uniform mat4 modelMatrix;

uniform float time;
uniform vec3 baseColor;
uniform vec3 smokeColor;
uniform float density;
uniform float speed;
uniform float scale;

#include <cube_uv_reflection_fragment>

vec4 permute(vec4 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
vec3 fade(vec3 t) { return t*t*t*(t*(t*6.0-15.0)+10.0); }

float cnoise(vec3 P) {
    vec3 Pi0 = floor(P); // Integer part for indexing
    vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
    Pi0 = mod(Pi0, 289.0);
    Pi1 = mod(Pi1, 289.0);
    vec3 Pf0 = fract(P); // Fractional part for interpolation
    vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
    vec4 iy = vec4(Pi0.yy, Pi1.yy);
    vec4 iz0 = Pi0.zzzz;
    vec4 iz1 = Pi1.zzzz;

    vec4 ixy = permute(permute(ix) + iy);
    vec4 ixy0 = permute(ixy + iz0);
    vec4 ixy1 = permute(ixy + iz1);

    vec4 gx0 = ixy0 / 7.0;
    vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;
    gx0 = fract(gx0);
    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
    vec4 sz0 = step(gz0, vec4(0.0));
    gx0 -= sz0 * (step(0.0, gx0) - 0.5);
    gy0 -= sz0 * (step(0.0, gy0) - 0.5);

    vec4 gx1 = ixy1 / 7.0;
    vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;
    gx1 = fract(gx1);
    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
    vec4 sz1 = step(gz1, vec4(0.0));
    gx1 -= sz1 * (step(0.0, gx1) - 0.5);
    gy1 -= sz1 * (step(0.0, gy1) - 0.5);

    vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
    vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
    vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
    vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
    vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
    vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
    vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
    vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

    vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
    g000 *= norm0.x;
    g010 *= norm0.y;
    g100 *= norm0.z;
    g110 *= norm0.w;
    vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
    g001 *= norm1.x;
    g011 *= norm1.y;
    g101 *= norm1.z;
    g111 *= norm1.w;

    float n000 = dot(g000, Pf0);
    float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
    float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
    float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
    float n111 = dot(g111, Pf1);

    vec3 fade_xyz = fade(Pf0);
    vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
    return 2.2 * n_xyz;
}

// Fractional Brownian Motion for more organic noise
float fbm(vec3 p, int octaves) {
    float value = 0.0;
    float amplitude = 0.5;
    float frequency = 1.0;
    
    for (int i = 0; i < octaves; i++) {
        value += amplitude * cnoise(p * frequency);
        frequency *= 2.0;
        amplitude *= 0.5;
    }
    
    return value;
}

vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}

void main() {

	#ifdef ENVMAP_TYPE_CUBE

	vec4 texColor = textureCube(envMap, backgroundRotation * vec3(flipEnvMap * vWorldDirection.x, vWorldDirection.yz));

	#elif defined( ENVMAP_TYPE_CUBE_UV )

	vec4 texColor = textureCubeUV(envMap, backgroundRotation * vWorldDirection, backgroundBlurriness);

	#else

	vec4 texColor = vec4(0.0, 0.0, 0.0, 1.0);

	#endif

	texColor.rgb *= backgroundIntensity;

	// vec3 noisePos = vWorldPosition * scale + vWorldDirection * time * speed;

	vec3 noisePos = inverseTransformDirection(vWorldPosition, modelMatrix);

    float noise1 = fbm(noisePos / scale, 5);
    float noise2 = fbm(noisePos / scale * 1.5 + vec3(10.0), 3);
    float noise3 = fbm(noisePos / scale * 3.0 + vec3(20.0), 2);

 	float combinedNoise = (noise1 * 0.7 + noise2 * 0.2 + noise3 * 0.1);

	// float smoke = smoothstep(0.3, 0.8, combinedNoise * density);

   	// gl_FragColor.rgb = mix(baseColor, smokeColor, smoke);
	float d = smoothstep(0.3, 0.2, distance(normalize(vWorldDirection), normalize(vec3(2.0, 1.0, 0.0))));
   	gl_FragColor.rgb = vec3(combinedNoise + d);
	gl_FragColor.a = 1.0;


	// gl_FragColor = vec4(d, d, d, 1.0);

	#include <tonemapping_fragment>
	#include <colorspace_fragment>

}