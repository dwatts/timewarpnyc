import{ej as v,ai as n,bo as y,aQ as p,ek as c,cB as b,el as w,bx as l}from"./index-2c565904.js";let s=f();function f(){return new v(50)}function x(){s=f()}async function B(r,i){var o,t;if((o=r.resource)!=null&&o.href)return _(r.resource.href).then(e=>[e.width,e.height]);if((t=r.resource)!=null&&t.primitive)return i!=null?[i,i]:[256,256];throw new n("symbol3d:invalid-symbol-layer","symbol layers of type Icon must have either an href or a primitive resource")}function _(r){return y(r,{responseType:"image"}).then(i=>i.data)}async function T(r,i=null){var t;if(!r.isPrimitive){const e=r.resource.href;if(!e)throw new n("symbol:invalid-resource","The symbol does not have a valid resource");const a=s.get(e);if(a!==void 0)return a;const{fetch:h}=await p(()=>import("./index-2c565904.js").then(d=>d.wE),["assets/index-2c565904.js","assets/index-abd0b88c.css"]),m=await h(e,{disableTextures:!0}),u=c(m.referenceBoundingBox,l());return s.put(e,u),u}if(!((t=r.resource)!=null&&t.primitive))throw new n("symbol:invalid-resource","The symbol does not have a valid resource");const o=b(w(r.resource.primitive));if(i!=null)for(let e=0;e<o.length;e++)o[e]*=i;return c(o,l())}export{x as clearBoundingBoxCache,B as computeIconLayerResourceSize,T as computeObjectLayerResourceSize};