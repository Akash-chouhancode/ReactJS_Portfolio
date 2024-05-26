function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/TwinkleUpdater-BQmEAd_A.js","assets/OptionsColor-CwbPev8m.js","assets/index-CYkB6FRl.js","assets/index-BPnUKs0c.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./index-CYkB6FRl.js";async function n(t,a=!0){await t.addParticleUpdater("twinkle",async()=>{const{TwinkleUpdater:e}=await r(()=>import("./TwinkleUpdater-BQmEAd_A.js"),__vite__mapDeps([0,1,2,3]));return new e},a)}export{n as loadTwinkleUpdater};
