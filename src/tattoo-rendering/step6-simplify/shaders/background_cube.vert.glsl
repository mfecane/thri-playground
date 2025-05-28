
varying vec3 vWorldDirection;
varying vec3 vWorldPosition;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );
	vWorldPosition = position.xyz;

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}