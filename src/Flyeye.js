import GL from "gl-react";
import React from "react";

const shaders = GL.Shaders.create({
  flyeye: {
    frag:`
precision highp float;
varying vec2 uv;
uniform sampler2D t;
uniform float value;
void main () {
  gl_FragColor = texture2D(
    t,
    uv + vec2(
      0.01 * sin(uv.x * value * 200.0),
      0.01 * sin(uv.y * value * 200.0)
    )
  );
}
    `
  }
});

export const Flyeye = GL.createComponent(
  ({ value, children: t }) =>
    <GL.Node shader={shaders.flyeye} uniforms={{ value, t }} />
);
