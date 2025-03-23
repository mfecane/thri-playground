#include <packing>

#define MAX_STEPS 100
#define MAX_DIST 7.0
#define SURF_DIST 0.0001

uniform sampler2D depthTexture;
uniform vec2 cameraNearFar;

varying vec4 vPosition;
varying vec4 projTexCoord;
varying vec3 rayOrigin;

uniform vec2 resolution;
uniform mat4 cameraWorldMatrix;
uniform mat4 cameraProjectionMatrixInverse;

float sdSphere(vec3 p, float radius) {
  return (length(p) - radius);
}

float sceneDistance(vec3 p) {
    return sdSphere(p, 1.2);
}

float rayMarch(vec3 ro, vec3 rd, float depth) {
  float dO = 0.0;

  for(int i = 0; i < MAX_STEPS; i++) {
    vec3 p = ro + rd * dO;
    float dS = min(sceneDistance(p), depth - dO);
    dO += dS;
    if (dO > MAX_DIST || abs(dS) < SURF_DIST) {
      break;
    }
  }

  return dO;
}


vec3 GetNormal(vec3 p) {
  float d = sceneDistance(p);
  vec2 e = vec2(0.001, 0.0);
  vec3 n = d - vec3(
    sceneDistance(p - e.xyy),
    sceneDistance(p - e.yxy),
    sceneDistance(p - e.yyx)
  );

  return normalize(n);
}


void main() {
    float depth = unpackRGBAToDepth(texture2DProj(depthTexture, projTexCoord));
    float viewZ = -perspectiveDepthToViewZ(depth, cameraNearFar.x, cameraNearFar.y);

    // output depth
    // gl_FragColor.rgb = vec3(viewZ); // in meters

    vec3 rayOrigin = cameraPosition;

    vec2 screenPos = ( gl_FragCoord.xy * 2.0 - resolution ) / resolution;
    vec4 ndcRay = vec4( screenPos.xy, 1.0, 1.0 );
    vec3 rayDirection = ( cameraWorldMatrix * cameraProjectionMatrixInverse * ndcRay ).xyz;

    float d = rayMarch(rayOrigin, rayDirection, viewZ);
    vec3 col = vec3(0.0);

    if(d < MAX_DIST) {
        vec3 p = rayOrigin + rayDirection * d;
        // vec3 n = GetNormal(p);
        // col = vec3(dot(n, vec3(0.0, 1.0, 0.0)));
        col = vec3(smoothstep(2.0, 4.0, d));
    }

    gl_FragColor.rgb = col;
    gl_FragColor.a = 1.0;
}