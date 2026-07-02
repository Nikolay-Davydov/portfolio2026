"use client";

import { useEffect, useRef } from "react";

export default function LightBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl");
    if (!gl) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const vs = `
      attribute vec2 a_position;
      varying vec2 v_texCoord;
      void main() {
        v_texCoord = a_position * 0.5 + 0.5;
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    // Шейдер от Stitch. Правки: убран двойной переворот mouse.y (п.1),
    // яркость поднята напрямую в константах (п.2)
    const fs = `
      precision highp float;
      varying vec2 v_texCoord;
      uniform float u_time;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;

      vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
      float snoise(vec2 v){
        const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                 -0.577350269189626, 0.024390243902439);
        vec2 i  = floor(v + dot(v, C.yy) );
        vec2 x0 = v -   i + dot(i, C.xx);
        vec2 i1;
        i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
        vec4 x12 = x0.xyxy + C.xxzz;
        x12.xy -= i1;
        i = mod(i, 289.0);
        vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
        + i.x + vec3(0.0, i1.x, 1.0 ));
        vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
          dot(x12.zw,x12.zw)), 0.0);
        m = m*m ;
        m = m*m ;
        vec3 x = 2.0 * fract(p * C.www) - 1.0;
        vec3 h = abs(x) - 0.5;
        vec3 ox = floor(x + 0.5);
        vec3 a0 = x - ox;
        m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
        vec3 g;
        g.x  = a0.x  * x0.x  + h.x  * x0.y;
        g.yz = a0.yz * x12.xz + h.yz * x12.yw;
        return 130.0 * dot(m, g);
      }

      void main() {
          vec2 uv = v_texCoord;
          vec2 normMouse = u_mouse / u_resolution;

          vec3 bgColor = vec3(0.9608, 0.9412, 0.9098);
          vec3 inkColor1 = vec3(0.6588, 0.5137, 0.4157);
          vec3 inkColor2 = vec3(0.7412, 0.6039, 0.5137);

          float t = u_time * 0.05;
          float n1 = snoise(uv * 2.0 + vec2(t, t * 0.5));
          float n2 = snoise(uv * 1.5 - vec2(t * 0.7, t));

          float noise = (n1 + n2) * 0.5;

          vec2 grid = fract(uv * 40.0);
          float line = smoothstep(0.0, 0.03, grid.x) * smoothstep(0.0, 0.03, grid.y);
          float gridAlpha = (1.0 - line) * 0.02;

          /* было: vec2(normMouse.x, 1.0 - normMouse.y) — второй переворот убран,
             normMouse.y уже перевёрнут один раз в JS ниже */
          float dist = distance(uv, normMouse);
          float glow = smoothstep(0.4, 0.0, dist) * 0.25;

          float alpha = smoothstep(-0.5, 0.5, noise) * 0.35;
          vec3 driftColor = mix(inkColor1, inkColor2, noise * 0.5 + 0.5);

          vec3 color = bgColor;
          color = mix(color, driftColor, alpha);
          color = mix(color, inkColor1, glow);
          color = mix(color, inkColor1, gridAlpha);

          float vignette = smoothstep(1.5, 0.5, length(uv - 0.5));
          color *= mix(0.98, 1.0, vignette);

          gl_FragColor = vec4(color, 1.0);
      }
    `;

    function compile(type: number, src: string) {
      const s = gl!.createShader(type)!;
      gl!.shaderSource(s, src);
      gl!.compileShader(s);
      return s;
    }

    const program = gl.createProgram()!;
    gl.attachShader(program, compile(gl.VERTEX_SHADER, vs));
    gl.attachShader(program, compile(gl.FRAGMENT_SHADER, fs));
    gl.linkProgram(program);
    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW,
    );
    const posLoc = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(program, "u_time");
    const uRes = gl.getUniformLocation(program, "u_resolution");
    const uMouse = gl.getUniformLocation(program, "u_mouse");

    let mouse = { x: 0, y: 0 };
    function handleMouseMove(e: MouseEvent) {
      const rect = canvas!.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = rect.height - (e.clientY - rect.top);
    }
    window.addEventListener("mousemove", handleMouseMove);

    function syncSize() {
      const w = window.innerWidth;
      const h = window.innerHeight;
      if (canvas!.width !== w || canvas!.height !== h) {
        canvas!.width = w;
        canvas!.height = h;
      }
    }
    window.addEventListener("resize", syncSize);
    syncSize();

    let rafId: number;
    let isVisible = !document.hidden;

    function handleVisibility() {
      isVisible = !document.hidden;
      if (isVisible && !prefersReducedMotion) {
        rafId = requestAnimationFrame(render);
      }
    }
    document.addEventListener("visibilitychange", handleVisibility);

    function render(t: number) {
      gl!.viewport(0, 0, canvas!.width, canvas!.height);
      if (uTime) gl!.uniform1f(uTime, t * 0.001);
      if (uRes) gl!.uniform2f(uRes, canvas!.width, canvas!.height);
      if (uMouse) gl!.uniform2f(uMouse, mouse.x, mouse.y);
      gl!.drawArrays(gl!.TRIANGLE_STRIP, 0, 4);
      if (isVisible && !prefersReducedMotion) {
        rafId = requestAnimationFrame(render);
      }
    }

    render(0);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", syncSize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        pointerEvents: "none",
      }}
    />
  );
}
