uniform vec2 iResolution;

varying vec2 vUv;
varying vec2 vFragCoord;

void main() {
    vUv = uv;
    vFragCoord = uv * iResolution;
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}