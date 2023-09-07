import{bn as p,cF as l,dR as o,dV as d,dW as g,dS as _,ai as u,b3 as f,bO as w,ae as E}from"./index-2c565904.js";import{m as F}from"./FeatureStore-537f3c54.js";import{g as q,e as S,f as x}from"./QueryEngine-da71cdca.js";import{T,I as b}from"./geojson-26d797f8.js";import{d as I}from"./sourceUtils-ae486fb1.js";import{H as j}from"./wfsUtils-a009be23.js";import"./BoundsStore-a17a4409.js";import"./PooledRBush-36b642c7.js";import"./quickselect-7a8d44a3.js";import"./optimizedFeatureQueryEngineAdapter-1a25df40.js";import"./centroid-8e8cfa47.js";import"./normalizeUtils-5b5b1ce1.js";import"./normalizeUtilsCommon-8b4d80f4.js";import"./WhereClause-dfedc29e.js";import"./executionError-c92d3b85.js";import"./json-48e3ea08.js";import"./QueryEngineCapabilities-42e44ded.js";import"./utils-001b0a81.js";import"./generateRendererUtils-7029d08e.js";import"./xmlUtils-444cb4c0.js";class J{constructor(){this._queryEngine=null,this._customParameters=null,this._snapshotFeatures=async e=>{const{objectIdField:t}=this._queryEngine,s=await j(this._getFeatureUrl??"",this._featureType.typeName,this._getFeatureOutputFormat,{customParameters:this._customParameters,dateFields:this._queryEngine.fieldsIndex.dateFields.map(r=>r.name),signal:e});await T(s),p(e);const a=b(s,{geometryType:this._queryEngine.geometryType,hasZ:!1,objectIdField:t});if(!l(this._queryEngine.spatialReference,o))for(const r of a)r.geometry!=null&&(r.geometry=d(q(g(r.geometry,this._queryEngine.geometryType,!1,!1),o,this._queryEngine.spatialReference)));let n=1;for(const r of a){const i={};I(this._fieldsIndex,i,r.attributes,!0),r.attributes=i,r.attributes[t]==null&&(r.objectId=r.attributes[t]=n++)}return a}}destroy(){var e;(e=this._queryEngine)==null||e.destroy(),this._queryEngine=null}async load(e,t){const{getFeatureUrl:s,getFeatureOutputFormat:a,spatialReference:n,fields:r,geometryType:i,featureType:h,objectIdField:y,customParameters:m}=e;this._featureType=h,this._customParameters=m,this._getFeatureUrl=s,this._getFeatureOutputFormat=a,this._fieldsIndex=new _(r),await this._checkProjection(n),p(t),this._queryEngine=new S({fields:r,geometryType:i,hasM:!1,hasZ:!1,objectIdField:y,spatialReference:n,timeInfo:null,featureStore:new F({geometryType:i,hasM:!1,hasZ:!1})});const c=await this._snapshotFeatures(t.signal);return this._queryEngine.featureStore.addMany(c),{extent:(await this._queryEngine.fetchRecomputedExtents()).fullExtent}}async applyEdits(){throw new u("wfs-source:editing-not-supported","applyEdits() is not supported on WFSLayer")}async queryFeatures(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e,t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(e){var t;return this._customParameters=e,(t=this._snapshotTask)==null||t.abort(),this._snapshotTask=f(this._snapshotFeatures),this._snapshotTask.promise.then(s=>{this._queryEngine.featureStore.clear(),s&&this._queryEngine.featureStore.addMany(s)},s=>{this._queryEngine.featureStore.clear(),w(s)||E.getLogger("esri.layers.WFSLayer").error(new u("wfs-layer:getfeature-error","An error occurred during the GetFeature request",{error:s}))}),await this._waitSnapshotComplete(),{extent:(await this._queryEngine.fetchRecomputedExtents()).fullExtent}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _checkProjection(e){try{await x(o,e)}catch{throw new u("unsupported-projection","Projection not supported",{spatialReference:e})}}}export{J as default};