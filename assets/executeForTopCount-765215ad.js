import{bu as i,eo as p}from"./index-b2b09e10.js";import{m as a}from"./queryTopFeatures-3bfda20a.js";import"./normalizeUtils-8c6098d1.js";import"./normalizeUtilsCommon-d7459985.js";import"./query-8241ba87.js";import"./pbfQueryUtils-b0098b42.js";import"./pbf-bfecb5f6.js";async function b(o,t,r){const m=i(o);return(await a(m,p.from(t),{...r})).data.count}export{b as executeForTopCount};