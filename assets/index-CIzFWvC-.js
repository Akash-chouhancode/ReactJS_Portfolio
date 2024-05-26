function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RollUpdater-DRCl0tyb.js","assets/index-CYkB6FRl.js","assets/index-BPnUKs0c.css","assets/OptionsColor-CwbPev8m.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-CYkB6FRl.js";async function l(t,a=!0){await t.addParticleUpdater("roll",async()=>{const{RollUpdater:r}=await o(()=>import("./RollUpdater-DRCl0tyb.js"),__vite__mapDeps([0,1,2,3]));return new r},a)}export{l as loadRollUpdater};
