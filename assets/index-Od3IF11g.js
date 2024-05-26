function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/EmittersCircleShapeGenerator-B-FDVC_P.js","assets/EmitterShapeBase-4KcS34Iy.js","assets/index-CYkB6FRl.js","assets/index-BPnUKs0c.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-CYkB6FRl.js";async function c(t,a=!0){var r;const e=t,{EmittersCircleShapeGenerator:i}=await o(()=>import("./EmittersCircleShapeGenerator-B-FDVC_P.js"),__vite__mapDeps([0,1,2,3]));(r=e.addEmitterShapeGenerator)==null||r.call(e,"circle",new i),await e.refresh(a)}export{c as loadEmittersShapeCircle};
