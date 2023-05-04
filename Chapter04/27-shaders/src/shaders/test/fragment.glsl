  uniform vec3 uColor;
  uniform sampler2D uTexture;

  varying vec2 vUv;
  varying float vElevation;


  // varying float vRandom;

  void main() {
    vec4 textureColor = texture2D(uTexture, vUv);
    textureColor.rgb *= vElevation +0.8;
    gl_FragColor = textureColor;
  }