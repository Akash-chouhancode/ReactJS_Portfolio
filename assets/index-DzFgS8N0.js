function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RotateUpdater-jO4E-m1J.js","assets/index-CYkB6FRl.js","assets/index-BPnUKs0c.css","assets/ValueWithRandom-Dk_x-zYj.js","assets/AnimationOptions-CKh9MIch.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-CYkB6FRl.js";async function i(t,a=!0){await t.addParticleUpdater("rotate",async e=>{const{RotateUpdater:r}=await o(()=>import("./RotateUpdater-jO4E-m1J.js"),__vite__mapDeps([0,1,2,3,4]));return new r(e)},a)}export{i as loadRotateUpdater};
