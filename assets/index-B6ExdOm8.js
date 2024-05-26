function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LifeUpdater-CTsBOv70.js","assets/ValueWithRandom-Dk_x-zYj.js","assets/AnimationOptions-CKh9MIch.js","assets/index-CYkB6FRl.js","assets/index-BPnUKs0c.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-CYkB6FRl.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-CTsBOv70.js"),__vite__mapDeps([0,1,2,3,4]));return new r(e)},a)}export{d as loadLifeUpdater};
