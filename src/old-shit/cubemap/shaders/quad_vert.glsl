varying vec2 vUv;
varying vec3 vWorldDirection;

vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}

void main() {
    vUv = uv;
    vWorldDirection = transformDirection( position, modelMatrix );
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}