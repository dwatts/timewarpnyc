import{bu as e,eo as p,c5 as n}from"./index-b6b7583b.js";import{p as i}from"./queryTopFeatures-6afce187.js";import"./normalizeUtils-6714e2ab.js";import"./normalizeUtilsCommon-f8fddc7f.js";import"./query-a0d003fe.js";import"./pbfQueryUtils-7a2f0e7a.js";import"./pbf-5cc40739.js";async function $(o,r,a){const m=e(o),t=await i(m,p.from(r),{...a});return{count:t.data.count,extent:n.fromJSON(t.data.extent)}}export{$ as executeForTopExtents};