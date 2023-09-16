import{bu as y,bv as _,c5 as T,ay as a,az as c,fD as D,aB as A,aE as w,aT as Q,bs as P,bt as j,f9 as d,aQ as n,aO as f,aP as h,ai as q}from"./index-c3c7edcd.js";import{n as L,s as z}from"./executeForIds-88690355.js";import{S as J}from"./query-224c74ca.js";import{a as N}from"./executeQueryJSON-18089c91.js";import{n as $}from"./executeQueryPBF-dee8bbbf.js";async function C(e,t,r){const o=y(e);return J(o,_.from(t),{...r}).then(s=>({count:s.data.count,extent:T.fromJSON(s.data.extent)}))}let i=class extends w{constructor(e){super(e),this.dynamicDataSource=null,this.fieldsIndex=null,this.gdbVersion=null,this.infoFor3D=null,this.pbfSupported=!1,this.queryAttachmentsSupported=!1,this.sourceSpatialReference=null,this.url=null}get parsedUrl(){return Q(this.url)}async execute(e,t){const r=await this.executeJSON(e,t);return this.featureSetFromJSON(e,r,t)}async executeJSON(e,t){var u;const r=this._normalizeQuery(e),o=((u=e.outStatistics)==null?void 0:u[0])!=null,s=P("featurelayer-pbf-statistics"),l=!o||s;let p;if(this.pbfSupported&&l)try{p=await $(this.url,r,t)}catch(m){if(m.name!=="query:parsing-pbf")throw m;this.pbfSupported=!1}return this.pbfSupported&&l||(p=await N(this.url,r,t)),this._normalizeFields(p.fields),p}async featureSetFromJSON(e,t,r){if(!this._queryIs3DObjectFormat(e)||this.infoFor3D==null||!t.features)return j.fromJSON(t);const{meshFeatureSetFromJSON:o}=await d(n(()=>import("./meshFeatureSet-5c822609.js"),["assets/meshFeatureSet-5c822609.js","assets/index-c3c7edcd.js","assets/index-5c3a769d.css","assets/MeshGeoreferencedRelativeVertexSpace-2c9fa179.js","assets/MeshLocalVertexSpace-5bdbdb99.js","assets/georeference-1390bb8e.js","assets/External-1f3bd91f.js"]),r);return o(e,this.infoFor3D,t)}executeForCount(e,t){return L(this.url,this._normalizeQuery(e),t)}executeForExtent(e,t){return C(this.url,this._normalizeQuery(e),t)}executeForIds(e,t){return z(this.url,this._normalizeQuery(e),t)}async executeRelationshipQuery(e,t){const[{default:r},{executeRelationshipQuery:o}]=await d(Promise.all([n(()=>import("./index-c3c7edcd.js").then(s=>s.wA),["assets/index-c3c7edcd.js","assets/index-5c3a769d.css"]),n(()=>import("./executeRelationshipQuery-ddf83466.js"),["assets/executeRelationshipQuery-ddf83466.js","assets/index-c3c7edcd.js","assets/index-5c3a769d.css","assets/query-224c74ca.js","assets/normalizeUtils-f103063e.js","assets/normalizeUtilsCommon-80917649.js","assets/pbfQueryUtils-160ffbaf.js","assets/pbf-e1df6a05.js"])]),t);return e=r.from(e),(this.gdbVersion||this.dynamicDataSource)&&((e=e.clone()).gdbVersion=e.gdbVersion||this.gdbVersion,e.dynamicDataSource=e.dynamicDataSource||this.dynamicDataSource),o(this.url,e,t)}async executeRelationshipQueryForCount(e,t){const[{default:r},{executeRelationshipQueryForCount:o}]=await d(Promise.all([n(()=>import("./index-c3c7edcd.js").then(s=>s.wA),["assets/index-c3c7edcd.js","assets/index-5c3a769d.css"]),n(()=>import("./executeRelationshipQuery-ddf83466.js"),["assets/executeRelationshipQuery-ddf83466.js","assets/index-c3c7edcd.js","assets/index-5c3a769d.css","assets/query-224c74ca.js","assets/normalizeUtils-f103063e.js","assets/normalizeUtilsCommon-80917649.js","assets/pbfQueryUtils-160ffbaf.js","assets/pbf-e1df6a05.js"])]),t);return e=r.from(e),(this.gdbVersion||this.dynamicDataSource)&&((e=e.clone()).gdbVersion=e.gdbVersion||this.gdbVersion,e.dynamicDataSource=e.dynamicDataSource||this.dynamicDataSource),o(this.url,e,t)}async executeAttachmentQuery(e,t){const{executeAttachmentQuery:r,fetchAttachments:o,processAttachmentQueryResult:s}=await d(n(()=>import("./queryAttachments-28cfeac5.js"),["assets/queryAttachments-28cfeac5.js","assets/index-c3c7edcd.js","assets/index-5c3a769d.css","assets/query-224c74ca.js","assets/normalizeUtils-f103063e.js","assets/normalizeUtilsCommon-80917649.js","assets/pbfQueryUtils-160ffbaf.js","assets/pbf-e1df6a05.js","assets/AttachmentInfo-12e5e166.js"]),t),l=y(this.url);return s(l,await(this.queryAttachmentsSupported?r(l,e,t):o(l,e,t)))}async executeTopFeaturesQuery(e,t){const{executeTopFeaturesQuery:r}=await d(n(()=>import("./executeTopFeaturesQuery-cc560b61.js"),["assets/executeTopFeaturesQuery-cc560b61.js","assets/index-c3c7edcd.js","assets/index-5c3a769d.css","assets/queryTopFeatures-fa5d012f.js","assets/normalizeUtils-f103063e.js","assets/normalizeUtilsCommon-80917649.js","assets/query-224c74ca.js","assets/pbfQueryUtils-160ffbaf.js","assets/pbf-e1df6a05.js"]),t);return r(this.parsedUrl,e,this.sourceSpatialReference,t)}async executeForTopIds(e,t){const{executeForTopIds:r}=await d(n(()=>import("./executeForTopIds-aa3a0e82.js"),["assets/executeForTopIds-aa3a0e82.js","assets/index-c3c7edcd.js","assets/index-5c3a769d.css","assets/queryTopFeatures-fa5d012f.js","assets/normalizeUtils-f103063e.js","assets/normalizeUtilsCommon-80917649.js","assets/query-224c74ca.js","assets/pbfQueryUtils-160ffbaf.js","assets/pbf-e1df6a05.js"]),t);return r(this.parsedUrl,e,t)}async executeForTopExtents(e,t){const{executeForTopExtents:r}=await d(n(()=>import("./executeForTopExtents-679b46ef.js"),["assets/executeForTopExtents-679b46ef.js","assets/index-c3c7edcd.js","assets/index-5c3a769d.css","assets/queryTopFeatures-fa5d012f.js","assets/normalizeUtils-f103063e.js","assets/normalizeUtilsCommon-80917649.js","assets/query-224c74ca.js","assets/pbfQueryUtils-160ffbaf.js","assets/pbf-e1df6a05.js"]),t);return r(this.parsedUrl,e,t)}async executeForTopCount(e,t){const{executeForTopCount:r}=await d(n(()=>import("./executeForTopCount-79409054.js"),["assets/executeForTopCount-79409054.js","assets/index-c3c7edcd.js","assets/index-5c3a769d.css","assets/queryTopFeatures-fa5d012f.js","assets/normalizeUtils-f103063e.js","assets/normalizeUtilsCommon-80917649.js","assets/query-224c74ca.js","assets/pbfQueryUtils-160ffbaf.js","assets/pbf-e1df6a05.js"]),t);return r(this.parsedUrl,e,t)}_normalizeQuery(e){let t=_.from(e);t.sourceSpatialReference=t.sourceSpatialReference||this.sourceSpatialReference,(this.gdbVersion||this.dynamicDataSource)&&(t=t===e?t.clone():t,t.gdbVersion=e.gdbVersion||this.gdbVersion,t.dynamicDataSource=e.dynamicDataSource?D.from(e.dynamicDataSource):this.dynamicDataSource);const{infoFor3D:r}=this;if(r!=null&&this._queryIs3DObjectFormat(e)){t=t===e?t.clone():t,t.formatOf3DObjects=null;const{supportedFormats:o,queryFormats:s}=r,l=f("model/gltf-binary",o)??h("glb",o),p=f("model/gltf+json",o)??h("gtlf",o);for(const u of s){if(u===l){t.formatOf3DObjects=u;break}u!==p||t.formatOf3DObjects||(t.formatOf3DObjects=u)}if(!t.formatOf3DObjects)throw new q("query:unsupported-3d-query-formats","Could not find any supported 3D object query format. Only supported formats are 3D_glb and 3D_gltf");if(t.outFields==null||!t.outFields.includes("*")){t=t===e?t.clone():t,t.outFields==null&&(t.outFields=[]);const{originX:u,originY:m,originZ:S,translationX:b,translationY:F,translationZ:O,scaleX:x,scaleY:g,scaleZ:E,rotationX:V,rotationY:R,rotationZ:v,rotationDeg:I}=r.transformFieldRoles;t.outFields.push(u,m,S,b,F,O,x,g,E,V,R,v,I)}}return t}_normalizeFields(e){if(this.fieldsIndex!=null&&e!=null)for(const t of e){const r=this.fieldsIndex.get(t.name);r&&Object.assign(t,r.toJSON())}}_queryIs3DObjectFormat(e){return this.infoFor3D!=null&&e.returnGeometry===!0&&e.multipatchOption!=="xyFootprint"&&!e.outStatistics}};a([c({type:D})],i.prototype,"dynamicDataSource",void 0),a([c()],i.prototype,"fieldsIndex",void 0),a([c()],i.prototype,"gdbVersion",void 0),a([c()],i.prototype,"infoFor3D",void 0),a([c({readOnly:!0})],i.prototype,"parsedUrl",null),a([c()],i.prototype,"pbfSupported",void 0),a([c()],i.prototype,"queryAttachmentsSupported",void 0),a([c()],i.prototype,"sourceSpatialReference",void 0),a([c({type:String})],i.prototype,"url",void 0),i=a([A("esri.tasks.QueryTask")],i);const B=i;export{B as x};