function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/EmittersPlugin-DFvQa4nY.js","assets/index-CYkB6FRl.js","assets/index-BPnUKs0c.css","assets/AnimatableColor-B1QxUJrS.js","assets/AnimationOptions-CKh9MIch.js","assets/OptionsColor-CwbPev8m.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-CYkB6FRl.js";import{E as s}from"./EmitterShapeBase-4KcS34Iy.js";async function d(a,i=!0){if(!a.emitterShapeManager){const{ShapeManager:t}=await e(()=>import("./ShapeManager-BKFAh34R.js"),[]);a.emitterShapeManager=new t(a)}a.addEmitterShapeGenerator||(a.addEmitterShapeGenerator=(t,m)=>{var r;(r=a.emitterShapeManager)==null||r.addShapeGenerator(t,m)});const{EmittersPlugin:o}=await e(()=>import("./EmittersPlugin-DFvQa4nY.js").then(t=>t.c),__vite__mapDeps([0,1,2,3,4,5])),p=new o(a);await a.addPlugin(p,i)}export{s as EmitterShapeBase,d as loadEmittersPlugin};
