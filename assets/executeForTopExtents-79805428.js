import{bu as e,eo as p,c5 as n}from"./index-d5672885.js";import{p as i}from"./queryTopFeatures-273fba47.js";import"./normalizeUtils-b4522cf6.js";import"./normalizeUtilsCommon-6f0260d6.js";import"./query-26f36548.js";import"./pbfQueryUtils-c0eff6b3.js";import"./pbf-bb2245b5.js";async function $(o,r,a){const m=e(o),t=await i(m,p.from(r),{...a});return{count:t.data.count,extent:n.fromJSON(t.data.extent)}}export{$ as executeForTopExtents};