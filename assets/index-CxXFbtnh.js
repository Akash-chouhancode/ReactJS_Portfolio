function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/DestroyUpdater-DTg-Ab_F.js","assets/index-CYkB6FRl.js","assets/index-BPnUKs0c.css","assets/ValueWithRandom-Dk_x-zYj.js","assets/AnimationOptions-CKh9MIch.js","assets/OptionsColor-CwbPev8m.js","assets/OptionsUtils-CPNA7nqt.js","assets/AnimatableColor-B1QxUJrS.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-CYkB6FRl.js";async function _(t,r=!0){await t.addParticleUpdater("destroy",async a=>{const{DestroyUpdater:e}=await o(()=>import("./DestroyUpdater-DTg-Ab_F.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]));return new e(t,a)},r)}export{_ as loadDestroyUpdater};
