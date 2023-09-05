import{aI as K,l7 as $,cY as Q,ay as c,aB as U,az as p,ae as M,lh as Y,aE as H,li as J,l8 as W,la as X,bM as Z,df as ee,dg as te,aV as ne,cg as T,dA as C,aQ as re,lj as R,dd as se,de as ie,b4 as oe}from"./index-b6b7583b.js";import{n as A}from"./FeatureLikeLayerView3D-20d5565d.js";import{a as le,n as ae,u as ue}from"./DefinitionExpressionSceneLayerView-93fc7339.js";import{d as de}from"./LayerView-e8aa5ea9.js";const ce={setAttribute(){},setGeometry(e){},rollback(){},commit(){}};var E;function Ee(e,n){const t=n.attributes[e.objectIdField],r=e.sessions.get(t);if(r)return r;const s=K(n.attributes),o=new Set;if(t==null)return ce;const a=e.i3sOverrides.createInteractiveEditSession(t),i=new Map,y=(m,b)=>{const f=i.get(m);if(f==null){const u=b.indexOf(t);return i.set(m,u),u}return f};let l=E.EDITING;const g={setAttribute(m,b){if(l!==E.EDITING)return;const f=e.fieldsIndex.get(m);if(!f)return;const u=e.attributeStorageInfo.findIndex(F=>F.name===f.name);if(u<0)return;a.setAttribute(u,b);const d=e.attributeStorageInfo[u];let h=!1;o.add(m),e.forEachNode((F,_)=>{const v=y(F,_);if(v===-1)return;const N=e.getAttributeData(F.index);if(N){const O=N[d.name];O&&(O[v]=b,e.setAttributeData(F.index,N,n),h=!0)}}),h&&e.clearMemCache()},setGeometry(m){l===E.EDITING&&a.setGeometry(m)},rollback(){if(l===E.EDITING){for(const m of o)this.setAttribute(m,s[m]);a.rollback(),l=E.ROLLED_BACK,e.sessions.delete(t)}},commit(){l===E.EDITING&&(a.commit(),l=E.COMMITTED,e.sessions.delete(t))}};return e.sessions.set(t,g),g}function xe(e,n){var f;const t=e.fieldsIndex,r=e.objectIdField,s=e.globalIdField;if(s==null)return;const o=new Map,a=G(n.addedFeatures),i=n.edits.addFeatures,y=L(n.updatedFeatures),l=n.edits.updateFeatures,g=me(t,r,s,(f=n.edits)==null?void 0:f.deleteFeatures),m=L(n.deletedFeatures,g),b=n.edits.deleteFeatures;if(i!=null&&i.length>0)for(const u of i){const d=A(t,u.attributes,s),h=a.get(d);u.geometry!=null&&u.geometry.type==="mesh"&&h!=null&&o.set(h,u.geometry)}if(l!=null&&l.length>0)for(const u of l){const d=A(t,u.attributes,r);u.geometry!=null&&u.geometry.type==="mesh"&&y.has(d)&&o.set(d,u.geometry)}if(b!=null&&b.length>0)for(const u of b){let d=null;d="attributes"in u?A(t,u.attributes,r):u.objectId,d!=null&&m.has(d)&&o.set(d,null)}for(const[u,d]of o)e.i3sOverrides.updateGeometry(u,d)}function Ae(e,n){var b;const t=pe(e,n),r=fe(e,n);if(t.size===0&&r.size===0)return;const s=new Map;for(let f=0;f<e.attributeStorageInfo.length;f++)s.set(e.attributeStorageInfo[f].name,f);let o=!1;t.forEach((f,u)=>{const d=e.getAttributeData(u);let h=!1;f.forEach((F,_)=>{const v=d!=null?d[_]:null,N=s.get(_);for(const{featureIndex:O,value:D,featureId:B}of F)v&&(v[O]=D,h=!0,o=!0),e.i3sOverrides.updateAttributeValue(B,N,D)}),h&&e.setAttributeData(u,d,null)}),o&&e.clearMemCache();const{fieldsIndex:a,i3sOverrides:i,objectIdField:y,globalIdField:l}=e,g=(b=i.layer.associatedLayer)==null?void 0:b.infoFor3D,m=new Set(g?[...Object.values(g.assetMapFieldRoles),...Object.values(g.transformFieldRoles)]:[]);for(const[f,u]of r){i.featureAdded(f);const{attributes:d}=u;for(const h in d){if(h!==y&&h!==l&&m.has(h))continue;const F=a.normalizeFieldName(h),_=F!=null?s.get(F):null;if(_==null)continue;const v=d[h];i.updateAttributeValue(f,_,v)}}}function fe(e,{edits:n,addedFeatures:t}){const r=new Map,s=n.addAssetFeatures,{fieldsIndex:o,globalIdField:a}=e;if(!s||s.length===0||a==null)return r;const i=G(t);for(const y of s){const l=A(o,y.attributes,a),g=i.get(l);y.geometry!=null&&y.geometry.type==="mesh"&&g!=null&&r.set(g,y)}return r}function pe(e,n){const t=n.edits.updateFeatures;if(!t||t.length===0)return new q;const r=L(n.updatedFeatures),s=new q,o=new Map;for(let l=0;l<e.attributeStorageInfo.length;l++)o.set(e.attributeStorageInfo[l].name,l);const a=e.fieldsIndex,i=e.objectIdField,y=t.filter(l=>{const g=A(a,l.attributes,i);return r.has(g)});return e.forEachNode((l,g)=>{const m=new Set(g);for(const b of y){const f=A(a,b.attributes,i);if(!m.has(f))continue;const u=g.indexOf(f);for(const d in b.attributes){const h=e.fieldsIndex.normalizeFieldName(d),F=ye(s,l.index,h),_=b.attributes[d];F.push({featureIndex:u,featureId:f,value:_})}}}),s}function ye(e,n,t){const r=ge(e,n),s=t!=null&&r.get(t);if(s)return s;const o=new Array;return r.set(t,o),o}function ge(e,n){const t=e.get(n);if(t)return t;const r=new he;return e.set(n,r),r}function me(e,n,t,r){const s=new Map;if(!r)return s;for(const o of r){let a=null,i=null;"attributes"in o?(a=A(e,o.attributes,n),i=A(e,o.attributes,t)):(a=o.objectId,i=o.globalId),i!=null&&a!=null&&s.set(i,a)}return s}function G(e){const n=new Map;if(!e)return n;for(const t of e)t.globalId!=null&&t.objectId!=null&&t.error==null&&n.set(t.globalId,t.objectId);return n}function L(e,n=null){const t=new Set;if(!e)return t;for(const r of e)if(r.error==null){if(r.objectId!=null&&r.objectId!==-1)t.add(r.objectId);else if(r.globalId!=null&&n!=null){const s=n.get(r.globalId);s!=null&&t.add(s)}}return t}(function(e){e[e.EDITING=0]="EDITING",e[e.ROLLED_BACK=1]="ROLLED_BACK",e[e.COMMITTED=2]="COMMITTED"})(E||(E={}));const he=Map,q=Map;function ve(){return{requiredFields:{type:[String],readOnly:!0},availableFields:{type:[String],readOnly:!0,get:function(){const{layer:e,layer:{fieldsIndex:n},requiredFields:t}=this;return e.outFields?$(n,[...Q(n,e.outFields),...t]):$(n,t)}}}}const V=e=>{let n=class extends e{constructor(){super(...arguments),this._numUpdating=0,this._asyncUpdateState=new Map}get updating(){return this._numUpdating>0}autoUpdateAsync(t,r){return be(s=>this._updateAsync(t,s),r)}async _updateAsync(t,r){if(!this._startAsyncUpdate(t)){try{const s=await r();this._set(t,s)}catch{M.getLogger(this).warn(`Async update of "${String(t)}" failed. Async update functions should not throw exceptions.`)}this._endAsyncUpdate(t)&&this._updateAsync(t,r)}}_startAsyncUpdate(t){const r=this._asyncUpdateState.get(t)??w.None;return r&w.Updating?(this._asyncUpdateState.set(t,r|w.Invalidated),!0):(++this._numUpdating,this._asyncUpdateState.set(t,r|w.Updating),!1)}_endAsyncUpdate(t){--this._numUpdating;const r=(this._asyncUpdateState.get(t)??w.None)&~w.Updating;return r&w.Invalidated?(this._asyncUpdateState.set(t,r&~w.Invalidated),!0):(this._asyncUpdateState.set(t,r),!1)}};return c([p({readOnly:!0})],n.prototype,"updating",null),c([p()],n.prototype,"_numUpdating",void 0),n=c([U("esri.core.AsyncUpdate")],n),n};var w;function be(e,n){const t=()=>{o&&!a&&e(r)},r=()=>{if(!o||a)return n();o.clear(),a=!0;const i=J(o,n);return a=!1,i},s=()=>{o&&(o.destroy(),o=null)};let o=new Y(t),a=!1;return e(r),{remove:s}}(function(e){e[e.None=0]="None",e[e.Updating=1]="Updating",e[e.Invalidated=2]="Invalidated"})(w||(w={}));let P=class extends V(H){};P=c([U("esri.core.AsyncUpdate")],P);const k="esri.views.3d.layers.support.SceneLayerViewRequiredFields";let x=class extends V(Z){get layer(){return this.layerView.layer}get requiredFields(){const{layerView:{layer:{fieldsIndex:e},definitionExpressionFields:n},rendererFields:t,labelingFields:r,viewFilterFields:s}=this;return $(e,[...n??[],...t??[],...r??[],...s??[]])}constructor(e){super(e)}initialize(){this.handles.add([this.autoUpdateAsync("rendererFields",async()=>{const{fieldsIndex:e,renderer:n}=this.layer;return n?j(t=>n.collectRequiredFields(t,e)):null}),this.autoUpdateAsync("labelingFields",async()=>{const{layer:e}=this;return e.labelsVisible?j(n=>W(n,e)):null}),this.autoUpdateAsync("viewFilterFields",()=>{const{layer:e,filter:n}=this.layerView;return j(t=>X(t,e,n))})])}};async function j(e){const n=new Set;try{return await e(n),Array.from(n).sort()}catch(t){return M.getLogger(k).error(t),null}}c([p()],x.prototype,"layerView",void 0),c([p()],x.prototype,"layer",null),c([p()],x.prototype,"requiredFields",null),c([p()],x.prototype,"rendererFields",void 0),c([p()],x.prototype,"labelingFields",void 0),c([p()],x.prototype,"viewFilterFields",void 0),x=c([U(k)],x);const z="esri.views.layers.SceneLayerView",S=M.getLogger(z);let I=class extends de{constructor(){super(...arguments),this.layer=null,this.filter=null,this._geometryEngine=null,this._projectionEngineLoaded=!1,this._abortController=new AbortController}get availableFields(){return[]}get maximumNumberOfFeatures(){return 0}set maximumNumberOfFeatures(e){throw new Error("Not implemented")}get maximumNumberOfFeaturesExceeded(){return!1}get layerFilter(){return le(this._layerFilter)}get _layerFilter(){const e=this.layer.filter;if(e==null||e.geometries.length<1)return null;const n=this._geometryEngine;if(n==null||!this._projectionEngineLoaded&&this._filterNeedsProjectionEngine)return ae;const t=e.geometries.at(0).spatialReference,r=e.geometries.toArray().map(i=>{try{i=n.simplify(i)}catch{return S.warnOncePerTick("Failed to simplify scene filter mask polygon. Polygon will be ignored."),null}if(i==null)return null;if(i.spatialReference.equals(t))return i;try{return ee(i,t)}catch{return S.warnOncePerTick("Failed to project scene filter mask polygon. Polygon will be ignored."),null}}).filter(te).sort((i,y)=>i.extent.xmin-y.extent.xmin),s=new Set,o=new Array,a=new Array;for(let i of r){const y=i.extent.xmin;if(o.length=0,s.forEach(l=>{if(y>=l.extent.xmax)return a.push(l),void s.delete(l);i.extent.ymin<=l.extent.ymax&&i.extent.ymax>=l.extent.ymin&&n.intersects(i,l)&&o.push(l)}),o.length>0){o.push(i);try{i=n.union(o)}catch{S.warnOncePerTick("Failed to unify filter mask polygons. Polygon will be ignored.");continue}o.pop(),o.forEach(l=>s.delete(l))}s.add(i)}return s.forEach(i=>a.push(i)),a.length>0?{spatialRelationship:e.spatialRelationship,geometries:a}:null}get _filterNeedsProjectionEngine(){const e=this.layer.filter;if(e==null||e.geometries.length<=1)return!1;const n=e.geometries.at(0).spatialReference;return e.geometries.some(({spatialReference:t})=>!t.equals(n)&&!ne(t,n))}get layerFilterUpdating(){return ue(this._layerFilter)}initialize(){const{signal:e}=this._abortController;T(()=>{var n,t,r;return this.destroyed||!this._geometryEngine&&((r=(t=(n=this.layer)==null?void 0:n.filter)==null?void 0:t.geometries)==null?void 0:r.length)},e).then(async()=>{C(e),this._geometryEngine=await re(()=>import("./geometryEngine-e862eaff.js"),["assets/geometryEngine-e862eaff.js","assets/geometryEngineBase-43aba308.js","assets/index-b6b7583b.js","assets/index-abd0b88c.css","assets/hydrated-5812bb06.js"])}).catch(R),this._projectionEngineLoaded=se(),T(()=>this.destroyed||!this._projectionEngineLoaded&&this._filterNeedsProjectionEngine,e).then(async()=>{C(e),await ie(),this._projectionEngineLoaded=!0}).catch(R)}destroy(){this._abortController=oe(this._abortController)}highlight(e){throw new Error("Not implemented")}queryFeatures(e,n){throw new Error("Not implemented")}queryObjectIds(e,n){throw new Error("Not implemented")}queryFeatureCount(e,n){throw new Error("Not implemented")}createQuery(){throw new Error("Not implemented")}queryExtent(e,n){throw new Error("Not implemented")}};c([p()],I.prototype,"layer",void 0),c([p()],I.prototype,"availableFields",null),c([p()],I.prototype,"maximumNumberOfFeatures",null),c([p({readOnly:!0})],I.prototype,"maximumNumberOfFeaturesExceeded",null),c([p()],I.prototype,"filter",void 0),c([p({readOnly:!0})],I.prototype,"layerFilter",null),c([p({readOnly:!0})],I.prototype,"_layerFilter",null),c([p()],I.prototype,"_geometryEngine",void 0),c([p()],I.prototype,"_projectionEngineLoaded",void 0),c([p()],I.prototype,"_filterNeedsProjectionEngine",null),c([p()],I.prototype,"layerFilterUpdating",null),I=c([U(z)],I);const Oe=I;export{ve as i,Oe as j,Ae as l,x as p,Ee as r,xe as s};
