#include <packing>

varying vec4 vPosition;
varying vec4 projTexCoord;
uniform sampler2D depthTexture;
uniform vec2 cameraNearFar;

void main() {
    float depth = unpackRGBAToDepth(texture2DProj(depthTexture, projTexCoord));
    float viewZ = -perspectiveDepthToViewZ(depth, cameraNearFar.x, cameraNearFar.y);
    gl_FragColor.rgb = vec3(viewZ); // in meters
    gl_FragColor.a = 1.0;
}