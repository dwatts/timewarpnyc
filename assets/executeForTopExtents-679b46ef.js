import{bu as e,eo as p,c5 as n}from"./index-c3c7edcd.js";import{p as i}from"./queryTopFeatures-fa5d012f.js";import"./normalizeUtils-f103063e.js";import"./normalizeUtilsCommon-80917649.js";import"./query-224c74ca.js";import"./pbfQueryUtils-160ffbaf.js";import"./pbf-e1df6a05.js";async function $(o,r,a){const m=e(o),t=await i(m,p.from(r),{...a});return{count:t.data.count,extent:n.fromJSON(t.data.extent)}}export{$ as executeForTopExtents};