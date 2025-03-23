#include <packing>

varying vec4 vPosition;
varying vec4 projTexCoord;
uniform sampler2D depthTexture;
uniform vec2 cameraNearFar;

void main() {
    float depth = unpackRGBAToDepth(texture2DProj(depthTexture, projTexCoord));
    float viewZ = -perspectiveDepthToViewZ(depth, cameraNearFar.x, cameraNearFar.y); // in meters

    // add a lil bit of scale for clarity
    gl_FragColor.rgb = vec3(viewZ) / 10.0;
    gl_FragColor.a = 1.0;
}