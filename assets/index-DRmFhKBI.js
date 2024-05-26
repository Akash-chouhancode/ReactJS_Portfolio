function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-Bh1nZZFG.js","assets/index-CYkB6FRl.js","assets/index-BPnUKs0c.css","assets/index-uAUVsHL0.js","assets/index-BoLzGd5m.js","assets/index-CU66xvgT.js","assets/index-CEMqNjDi.js","assets/index-DzzDvdr9.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-CYkB6FRl.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-Bh1nZZFG.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-uAUVsHL0.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-BoLzGd5m.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-CU66xvgT.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-CEMqNjDi.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-DzzDvdr9.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
