function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/AbsorbersPlugin-xhwMro_z.js","assets/index-CYkB6FRl.js","assets/index-BPnUKs0c.css","assets/ValueWithRandom-Dk_x-zYj.js","assets/AnimationOptions-CKh9MIch.js","assets/OptionsColor-CwbPev8m.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-CYkB6FRl.js";async function n(o,r=!0){const{AbsorbersPlugin:t}=await i(()=>import("./AbsorbersPlugin-xhwMro_z.js").then(a=>a.a),__vite__mapDeps([0,1,2,3,4,5]));await o.addPlugin(new t,r)}export{n as loadAbsorbersPlugin};
