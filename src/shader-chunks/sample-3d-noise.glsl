// p from -1 to 1
// size - number of images in one row/column
float sampleNoise3d(vec3 p, float size) {
    if (abs(p.x) > 1.0 || abs(p.y) > 1.0 || abs(p.z) > 1.0) {
        return 0.0;
    }
	vec3 p2 = (p + vec3(1.0)) / 2.0;
	float yIndex = p2.z * (size * size - 1.0);
	float row = floor(yIndex / size);
	float col = floor(yIndex - row * size);
	vec2 uv2 = (vec2(col, row) + p2.xy) / size;
    return texture(texture3d, uv2).g;
}
