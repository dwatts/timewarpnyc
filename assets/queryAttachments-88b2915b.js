import{em as h,en as f,bo as p}from"./index-50ec4ba6.js";import{t as d}from"./query-5acb5eb9.js";import{l}from"./AttachmentInfo-787059ea.js";import"./normalizeUtils-0bb66644.js";import"./normalizeUtilsCommon-8ae207e8.js";import"./pbfQueryUtils-205746d5.js";import"./pbf-49c18352.js";function y(n){const t=n.toJSON();return t.attachmentTypes&&(t.attachmentTypes=t.attachmentTypes.join(",")),t.keywords&&(t.keywords=t.keywords.join(",")),t.globalIds&&(t.globalIds=t.globalIds.join(",")),t.objectIds&&(t.objectIds=t.objectIds.join(",")),t.size&&(t.size=t.size.join(",")),t}function g(n,t){const e={};for(const a of t){const{parentObjectId:o,parentGlobalId:s,attachmentInfos:c}=a;for(const r of c){const{id:i}=r,u=h(f(`${n.path}/${o}/attachments/${i}`)),m=l.fromJSON(r);m.set({url:u,parentObjectId:o,parentGlobalId:s}),e[o]?e[o].push(m):e[o]=[m]}}return e}function k(n,t,e){let a={query:d({...n.query,f:"json",...y(t)})};return e&&(a={...e,...a,query:{...e.query,...a.query}}),p(n.path+"/queryAttachments",a).then(o=>o.data.attachmentGroups)}async function w(n,t,e){const{objectIds:a}=t,o=[];for(const s of a)o.push(p(n.path+"/"+s+"/attachments",e));return Promise.all(o).then(s=>a.map((c,r)=>({parentObjectId:c,attachmentInfos:s[r].data.attachmentInfos})))}export{k as executeAttachmentQuery,w as fetchAttachments,g as processAttachmentQueryResult};