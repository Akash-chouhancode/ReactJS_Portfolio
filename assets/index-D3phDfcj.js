function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/TiltUpdater-B3kix7lZ.js","assets/index-CYkB6FRl.js","assets/index-BPnUKs0c.css","assets/ValueWithRandom-Dk_x-zYj.js","assets/AnimationOptions-CKh9MIch.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-CYkB6FRl.js";async function d(t,a=!0){await t.addParticleUpdater("tilt",async r=>{const{TiltUpdater:e}=await i(()=>import("./TiltUpdater-B3kix7lZ.js"),__vite__mapDeps([0,1,2,3,4]));return new e(r)},a)}export{d as loadTiltUpdater};
