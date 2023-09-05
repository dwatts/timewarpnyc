import{aQ as w,ap as h,ai as O,aR as T,aS as L,aT as P,aU as b}from"./index-b6b7583b.js";import{t as d,r as g}from"./fetchService-b3c45e2d.js";import{a as C}from"./lazyLayerLoader-b2be6554.js";const F={FeatureLayer:!0,SceneLayer:!0};async function k(r){var t;const l=(t=r.properties)==null?void 0:t.customParameters,e=await U(r.url,l),a={...r.properties,url:r.url};if(!e.sublayerIds)return e.layerOrTableId!=null&&(a.layerId=e.layerOrTableId,a.sourceJSON=e.sourceJSON),new e.Constructor(a);const s=new(await w(()=>import("./GroupLayer-821509a3.js"),["assets/GroupLayer-821509a3.js","assets/index-b6b7583b.js","assets/index-abd0b88c.css","assets/lazyLayerLoader-b2be6554.js"])).default({title:e.parsedUrl.title});return N(s,e,a),s}function S(r,l){return r?r.find(e=>e.id===l):null}function N(r,l,e){function a(s,t){const u={...e,layerId:s,sublayerTitleMode:"service-name"};return t!=null&&(u.sourceJSON=t),new l.Constructor(u)}l.sublayerIds.forEach(s=>{const t=a(s,S(l.sublayerInfos,s));r.add(t)}),l.tableIds.forEach(s=>{const t=a(s,S(l.tableInfos,s));r.tables.add(t)})}async function U(r,l){var m,p,f,I;let e=h(r);if(e==null&&(e=await J(r,l)),e==null)throw new O("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:r});const{serverType:a,sublayer:s}=e;let t;const u={FeatureServer:"FeatureLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer"};switch(a){case"MapServer":s!=null?t="FeatureLayer":t=await x(r,l)?"TileLayer":"MapImageLayer";break;case"ImageServer":{const n=await d(r,{customParameters:l}),{tileInfo:c,cacheType:y}=n;t=c?((m=c==null?void 0:c.format)==null?void 0:m.toUpperCase())!=="LERC"||y&&y.toLowerCase()!=="elevation"?"ImageryTileLayer":"ElevationLayer":"ImageryLayer";break}case"SceneServer":{const n=await d(e.url.path,{customParameters:l});if(t="SceneLayer",n){const c=n==null?void 0:n.layers;if((n==null?void 0:n.layerType)==="Voxel")t="VoxelLayer";else if(c!=null&&c.length){const y=(p=c[0])==null?void 0:p.layerType;y!=null&&b[y]!=null&&(t=b[y])}}break}default:t=u[a]}const o=a==="FeatureServer",i={parsedUrl:e,Constructor:null,layerOrTableId:o?s:void 0,sublayerIds:null,tableIds:null};if(F[t]&&s==null){const n=await V(r,a,l);o&&(i.sublayerInfos=n.layerInfos,i.tableInfos=n.tableInfos),n.layerIds.length+n.tableIds.length!==1?(i.sublayerIds=n.layerIds,i.tableIds=n.tableIds):o&&(i.layerOrTableId=n.layerIds[0]??n.tableIds[0],i.sourceJSON=((f=n.layerInfos)==null?void 0:f[0])??((I=n.tableInfos)==null?void 0:I[0]))}return i.Constructor=await _(t),i}async function J(r,l){var o;const e=await d(r,{customParameters:l});let a=null,s=null;const t=e.type;if(t==="Feature Layer"||t==="Table"?(a="FeatureServer",s=e.id??null):t==="indexedVector"?a="VectorTileServer":e.hasOwnProperty("mapName")?a="MapServer":e.hasOwnProperty("bandCount")&&e.hasOwnProperty("pixelSizeX")?a="ImageServer":e.hasOwnProperty("maxRecordCount")&&e.hasOwnProperty("allowGeometryUpdates")?a="FeatureServer":e.hasOwnProperty("streamUrls")?a="StreamServer":v(e)?(a="SceneServer",s=e.id):e.hasOwnProperty("layers")&&v((o=e.layers)==null?void 0:o[0])&&(a="SceneServer"),!a)return null;const u=s!=null?T(r):null;return{title:u!=null&&e.name||L(r),serverType:a,sublayer:s,url:{path:u!=null?u.serviceUrl:P(r).path}}}function v(r){return r!=null&&r.hasOwnProperty("store")&&r.hasOwnProperty("id")&&typeof r.id=="number"}async function V(r,l,e){let a,s=!1;if(l==="FeatureServer"){const o=await g(r,{customParameters:e});s=!!o.layersJSON,a=o.layersJSON||o.serviceJSON}else a=await d(r,{customParameters:e});const t=a==null?void 0:a.layers,u=a==null?void 0:a.tables;return{layerIds:(t==null?void 0:t.map(o=>o.id).reverse())||[],tableIds:(u==null?void 0:u.map(o=>o.id).reverse())||[],layerInfos:s?t:[],tableInfos:s?u:[]}}async function _(r){return(0,C[r])()}async function x(r,l){return(await d(r,{customParameters:l})).tileInfo}export{k as fromUrl};
