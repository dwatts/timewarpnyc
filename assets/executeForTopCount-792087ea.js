import{bu as i,eo as p}from"./index-ef4eb327.js";import{m as a}from"./queryTopFeatures-d888d555.js";import"./normalizeUtils-3f5557ff.js";import"./normalizeUtilsCommon-4281dae0.js";import"./query-4ddde5df.js";import"./pbfQueryUtils-38ef5680.js";import"./pbf-b9a007c2.js";async function b(o,t,r){const m=i(o);return(await a(m,p.from(t),{...r})).data.count}export{b as executeForTopCount};