import{bu as i,eo as p}from"./index-6118a8e3.js";import{m as a}from"./queryTopFeatures-c00a96d4.js";import"./normalizeUtils-7df4c9fc.js";import"./normalizeUtilsCommon-0748fc46.js";import"./query-7506d2f3.js";import"./pbfQueryUtils-354cc546.js";import"./pbf-fb9b6537.js";async function b(o,t,r){const m=i(o);return(await a(m,p.from(t),{...r})).data.count}export{b as executeForTopCount};