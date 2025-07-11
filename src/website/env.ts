import * as THREE from 'three'

// === Perlin Noise Functions ===
const noiseGLSL = `
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
vec4 taylorInvSqrt(vec4 r){ return 1.79284291400159 - 0.85373472095314 * r; }

float perlinNoise(vec3 v) {
  const vec2 C = vec2(1.0/6.0, 1.0/3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

  vec3 i = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);

  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);

  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;

  i = mod289(i);
  vec4 p = permute(permute(permute(
            i.z + vec4(0.0, i1.z, i2.z, 1.0))
          + i.y + vec4(0.0, i1.y, i2.y, 1.0))
          + i.x + vec4(0.0, i1.x, i2.x, 1.0));

  vec4 j = p - 49.0 * floor(p / 49.0);
  vec4 x_ = floor(j / 7.0);
  vec4 y_ = floor(j - x_ * 7.0);

  vec4 x = (x_ * 2.0 + 0.5)/7.0 - 1.0;
  vec4 y = (y_ * 2.0 + 0.5)/7.0 - 1.0;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);

  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;

  vec3 g0 = vec3(a0.x, a0.y, h.x);
  vec3 g1 = vec3(a0.z, a0.w, h.y);
  vec3 g2 = vec3(a1.x, a1.y, h.z);
  vec3 g3 = vec3(a1.z, a1.w, h.w);

  vec4 norm = taylorInvSqrt(vec4(dot(g0,g0), dot(g1,g1), dot(g2,g2), dot(g3,g3)));
  g0 *= norm.x;
  g1 *= norm.y;
  g2 *= norm.z;
  g3 *= norm.w;

  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;

  return 42.0 * dot(m*m, vec4(dot(g0,x0), dot(g1,x1), dot(g2,x2), dot(g3,x3)));
}
`

// ===== Custom Shader Material for Cubemap =====
const blobShader = {
  vertexShader: `
    varying vec3 vWorldDirection;
    void main() {
      vec4 transformed = modelMatrix * vec4(position, 1.0);
      vWorldDirection = normalize(transformed.xyz);
      gl_Position = projectionMatrix * viewMatrix * transformed;
    }
  `,
  fragmentShader: `
    precision highp float;
    uniform float iTime;
    varying vec3 vWorldDirection;
    ${noiseGLSL}

    vec3 pastelPalette(float n) {
      // pastel pink, light blue, white
      vec3 pink = vec3(1.0, 0.8, 0.9);
      vec3 blue = vec3(0.8, 0.9, 1.0);
      vec3 white = vec3(1.0);

      return mix(mix(pink, blue, smoothstep(0.3, 0.6, n)), white, smoothstep(0.6, 1.0, n));
    }

    void main() {
      vec3 dir = normalize(vWorldDirection);

      // Domain warp
      float t = iTime * 0.1;
        vec3 warp = vec3(
        perlinNoise(dir * 1.5 + t),
        perlinNoise(dir * 1.5 + vec3(100.0) + t),
        perlinNoise(dir * 1.5 + vec3(200.0) + t)
        );

      float n = perlinNoise(dir * 1.5 + warp * 0.3);

      vec3 col = pastelPalette(n);
      gl_FragColor = vec4(col, 1.0);
    }
  `,
}

// ===== CubeCamera Scene =====
export function generateSmoothCubemap(renderer: THREE.WebGLRenderer): THREE.CubeTexture {
  const scene = new THREE.Scene()
  const cubeRenderTarget = new THREE.WebGLCubeRenderTarget(256, {
    format: THREE.RGBAFormat,
    generateMipmaps: true,
    minFilter: THREE.LinearMipmapLinearFilter,
  })

  const material = new THREE.ShaderMaterial(blobShader)
  const cubeMesh = new THREE.Mesh(new THREE.BoxGeometry(10, 10, 10), material)
  cubeMesh.material.side = THREE.BackSide // render inside
  scene.add(cubeMesh)

  const camera = new THREE.CubeCamera(0.1, 100, cubeRenderTarget)
  camera.update(renderer, scene)

  return cubeRenderTarget.texture
}