#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>

varying vec4 projTexCoord;
varying vec4 vPosition;
uniform mat4 textureMatrix;

void main() {

    #include <skinbase_vertex>
    #include <begin_vertex>
    #include <morphtarget_vertex>
    #include <skinning_vertex>
    #include <project_vertex>

    vPosition = mvPosition;

    vec4 worldPosition = vec4(transformed, 1.0);

    #ifdef USE_INSTANCING

        worldPosition = instanceMatrix * worldPosition;

    #endif
    
    worldPosition = modelMatrix * worldPosition;

    projTexCoord = textureMatrix * worldPosition;

}