import{s as l,S as c,o as g,H as u,F as i}from"./index-CYkB6FRl.js";class r{constructor(){this.angle=50,this.move=10}load(e){e&&(e.angle!==void 0&&(this.angle=l(e.angle)),e.move!==void 0&&(this.move=l(e.move)))}}class h{constructor(){this.distance=5,this.enable=!1,this.speed=new r}load(e){if(e&&(e.distance!==void 0&&(this.distance=l(e.distance)),e.enable!==void 0&&(this.enable=e.enable),e.speed!==void 0))if(c(e.speed))this.speed.load({angle:e.speed});else{const n=e.speed;n.min!==void 0?this.speed.load({angle:n}):this.speed.load(e.speed)}}}const p=0,m=2,S=Math.PI*m,w=60;function v(o,e){const{wobble:n}=o.options,{wobble:s}=o;if(!(n!=null&&n.enable)||!s)return;const b=s.angleSpeed*e.factor,f=s.moveSpeed*e.factor,d=f*((o.retina.wobbleDistance??p)*e.factor)/(g/w),a=S,{position:t}=o;s.angle+=b,s.angle>a&&(s.angle-=a),t.x+=d*Math.cos(s.angle),t.y+=d*Math.abs(Math.sin(s.angle))}const x=2,M=Math.PI*x,D=360,I=10,P=0;class W{constructor(e){this.container=e}init(e){const n=e.options.wobble;n!=null&&n.enable?e.wobble={angle:u()*M,angleSpeed:i(n.speed.angle)/D,moveSpeed:i(n.speed.move)/I}:e.wobble={angle:0,angleSpeed:0,moveSpeed:0},e.retina.wobbleDistance=i((n==null?void 0:n.distance)??P)*this.container.retina.pixelRatio}isEnabled(e){var n;return!e.destroyed&&!e.spawning&&!!((n=e.options.wobble)!=null&&n.enable)}loadOptions(e,...n){e.wobble||(e.wobble=new h);for(const s of n)e.wobble.load(s==null?void 0:s.wobble)}update(e,n){this.isEnabled(e)&&v(e,n)}}export{W as WobbleUpdater};
