import{bt as e,bu as f,bv as i}from"./index-b2b09e10.js";import{m}from"./query-8241ba87.js";async function d(a,t,r){const n=await u(a,t,r);return e.fromJSON(n)}async function u(a,t,r){const n=f(a),s={...r},o=i.from(t),{data:c}=await m(n,o,o.sourceSpatialReference,s);return c}export{u as a,d as s};