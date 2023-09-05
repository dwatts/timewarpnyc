import{dX as Z,eH as C,cH as X,ay as l,az as y,lK as K,fg as W,c5 as J,bD as Y,eI as ee,aB as V,bB as Q,jM as te,aN as _,dD as re,cu as se,hj as ie,bu as ne,lL as oe,lM as ae,bo as le,aE as ue,af as pe,b8 as ye,ai as A,aL as ce,dg as M,b7 as he,eC as L,aQ as fe,jr as de,cn as me,bs as ge,lN as be,cZ as we,ld as ve,am as xe,ge as $e,cX as Se}from"./index-b6b7583b.js";import{n as G}from"./floorFilterUtils-080a7cd2.js";import{b as Fe}from"./normalizeUtils-6714e2ab.js";import{n as je}from"./sublayerUtils-81169ed4.js";function R(t,e){return e?"xoffset"in e&&e.xoffset?Math.max(t,Math.abs(e.xoffset)):"yoffset"in e&&e.yoffset?Math.max(t,Math.abs(e.yoffset||0)):t:t}function Ee(t){let e=0,s=0;for(let i=0;i<t.length;i++){const r=t[i].size;typeof r=="number"&&(e+=r,s++)}return e/s}function T(t,e){return typeof t=="number"?t:t&&t.stops&&t.stops.length?Ee(t.stops):e}function Oe(t,e){if(!e)return t;const s=e.filter(o=>o.type==="size").map(o=>{const{maxSize:a,minSize:c}=o;return(T(a,t)+T(c,t))/2});let i=0;const r=s.length;if(r===0)return t;for(let o=0;o<r;o++)i+=s[o];const n=Math.floor(i/r);return Math.max(n,t)}function U(t){var r;const e=t&&t.renderer,s=(t&&t.event&&t.event.pointerType)==="touch"?9:6;if(!e)return s;const i="visualVariables"in e?Oe(s,e.visualVariables):s;if(e.type==="simple")return R(i,e.symbol);if(e.type==="unique-value"){let n=i;return(r=e.uniqueValueInfos)==null||r.forEach(o=>{n=R(n,o.symbol)}),n}if(e.type==="class-breaks"){let n=i;return e.classBreakInfos.forEach(o=>{n=R(n,o.symbol)}),n}return e.type==="dot-density"||e.type,i}const H=t=>t.spatialReference.wkid||JSON.stringify(t.spatialReference);function Ne(t,e){const{dpi:s,gdbVersion:i,geometry:r,geometryPrecision:n,height:o,layerOption:a,mapExtent:c,maxAllowableOffset:u,returnFieldName:p,returnGeometry:f,returnUnformattedValues:h,returnZ:F,spatialReference:x,timeExtent:$,tolerance:m,width:j}=t.toJSON(),{dynamicLayers:b,layerDefs:w,layerIds:v}=Re(t),N=e&&e.geometry!=null?e.geometry:null,g={geometryPrecision:n,maxAllowableOffset:u,returnFieldName:p,returnGeometry:f,returnUnformattedValues:h,returnZ:F,tolerance:m},E=N&&N.toJSON()||r;if(g.imageDisplay=`${j},${o},${s}`,i&&(g.gdbVersion=i),E&&(delete E.spatialReference,g.geometry=JSON.stringify(E),g.geometryType=Z(E)),x?g.sr=x.wkid||JSON.stringify(x):E&&E.spatialReference?g.sr=H(E):c&&c.spatialReference&&(g.sr=H(c)),g.time=$?[$.start,$.end].join(","):null,c){const{xmin:k,ymin:B,xmax:q,ymax:D}=c;g.mapExtent=`${k},${B},${q},${D}`}return w&&(g.layerDefs=w),b&&!w&&(g.dynamicLayers=b),g.layers=a==="popup"?"visible":a,v&&!b&&(g.layers+=`:${v.join(",")}`),g}function Re(t){var x,$;const{mapExtent:e,floors:s,width:i,sublayers:r,layerIds:n,layerOption:o,gdbVersion:a}=t,c=($=(x=r==null?void 0:r.find(m=>m.layer!=null))==null?void 0:x.layer)==null?void 0:$.serviceSublayers,u=o==="popup",p={},f=C({extent:e,width:i,spatialReference:e==null?void 0:e.spatialReference}),h=[],F=m=>{const j=f===0,b=m.minScale===0||f<=m.minScale,w=m.maxScale===0||f>=m.maxScale;if(m.visible&&(j||b&&w))if(m.sublayers)m.sublayers.forEach(F);else{if((n==null?void 0:n.includes(m.id))===!1||u&&(!m.popupTemplate||!m.popupEnabled))return;h.unshift(m)}};if(r==null||r.forEach(F),r&&!h.length)p.layerIds=[];else{const m=je(h,c,a),j=h.map(b=>{const w=G(s,b);return b.toExportImageJSON(w)});if(m)p.dynamicLayers=JSON.stringify(j);else{if(r){let w=h.map(({id:v})=>v);n&&(w=w.filter(v=>n.includes(v))),p.layerIds=w}else n!=null&&n.length&&(p.layerIds=n);const b=Ie(s,h);if(b!=null&&b.length){const w={};for(const v of b)v.definitionExpression&&(w[v.id]=v.definitionExpression);Object.keys(w).length&&(p.layerDefs=JSON.stringify(w))}}}return p}function Ie(t,e){const s=!!(t!=null&&t.length),i=e.filter(r=>r.definitionExpression!=null||s&&r.floorInfo!=null);return i.length?i.map(r=>{const n=G(t,r),o=X(n,r.definitionExpression);return{id:r.id,definitionExpression:o??void 0}}):null}var P;let d=P=class extends Q{static from(t){return te(P,t)}constructor(t){super(t),this.dpi=96,this.floors=null,this.gdbVersion=null,this.geometry=null,this.geometryPrecision=null,this.height=400,this.layerIds=null,this.layerOption="top",this.mapExtent=null,this.maxAllowableOffset=null,this.returnFieldName=!0,this.returnGeometry=!1,this.returnM=!1,this.returnUnformattedValues=!0,this.returnZ=!1,this.spatialReference=null,this.sublayers=null,this.timeExtent=null,this.tolerance=null,this.width=400}};l([y({type:Number,json:{write:!0}})],d.prototype,"dpi",void 0),l([y()],d.prototype,"floors",void 0),l([y({type:String,json:{write:!0}})],d.prototype,"gdbVersion",void 0),l([y({types:K,json:{read:W,write:!0}})],d.prototype,"geometry",void 0),l([y({type:Number,json:{write:!0}})],d.prototype,"geometryPrecision",void 0),l([y({type:Number,json:{write:!0}})],d.prototype,"height",void 0),l([y({type:[Number],json:{write:!0}})],d.prototype,"layerIds",void 0),l([y({type:["top","visible","all","popup"],json:{write:!0}})],d.prototype,"layerOption",void 0),l([y({type:J,json:{write:!0}})],d.prototype,"mapExtent",void 0),l([y({type:Number,json:{write:!0}})],d.prototype,"maxAllowableOffset",void 0),l([y({type:Boolean,json:{write:!0}})],d.prototype,"returnFieldName",void 0),l([y({type:Boolean,json:{write:!0}})],d.prototype,"returnGeometry",void 0),l([y({type:Boolean,json:{write:!0}})],d.prototype,"returnM",void 0),l([y({type:Boolean,json:{write:!0}})],d.prototype,"returnUnformattedValues",void 0),l([y({type:Boolean,json:{write:!0}})],d.prototype,"returnZ",void 0),l([y({type:Y,json:{write:!0}})],d.prototype,"spatialReference",void 0),l([y()],d.prototype,"sublayers",void 0),l([y({type:ee,json:{write:!0}})],d.prototype,"timeExtent",void 0),l([y({type:Number,json:{write:!0}})],d.prototype,"tolerance",void 0),l([y({type:Number,json:{write:!0}})],d.prototype,"width",void 0),d=P=l([V("esri.rest.support.IdentifyParameters")],d);const z=d;let S=class extends Q{constructor(t){super(t),this.displayFieldName=null,this.feature=null,this.layerId=null,this.layerName=null}readFeature(t,e){return _.fromJSON({attributes:{...e.attributes},geometry:{...e.geometry}})}writeFeature(t,e){if(!t)return;const{attributes:s,geometry:i}=t;s&&(e.attributes={...s}),i!=null&&(e.geometry=i.toJSON(),e.geometryType=ie.toJSON(i.type))}};l([y({type:String,json:{write:!0}})],S.prototype,"displayFieldName",void 0),l([y({type:_})],S.prototype,"feature",void 0),l([re("feature",["attributes","geometry"])],S.prototype,"readFeature",null),l([se("feature")],S.prototype,"writeFeature",null),l([y({type:Number,json:{write:!0}})],S.prototype,"layerId",void 0),l([y({type:String,json:{write:!0}})],S.prototype,"layerName",void 0),S=l([V("esri.rest.support.IdentifyResult")],S);const Pe=S;async function Ve(t,e,s){const i=(e=Ge(e)).geometry?[e.geometry]:[],r=ne(t);return r.path+="/identify",Fe(i).then(n=>{const o=Ne(e,{geometry:n&&n[0]}),a=oe({...r.query,f:"json",...o}),c=ae(a,s);return le(r.path,c).then(_e).then(u=>Ae(u,e.sublayers))})}function _e(t){const e=t.data;return e.results=e.results||[],e.exceededTransferLimit=!!e.exceededTransferLimit,e.results=e.results.map(s=>Pe.fromJSON(s)),e}function Ge(t){return t=z.from(t)}function Ae(t,e){if(!(e!=null&&e.length))return t;const s=new Map;function i(r){s.set(r.id,r),r.sublayers&&r.sublayers.forEach(i)}e.forEach(i);for(const r of t.results)r.feature.sourceLayer=s.get(r.layerId);return t}let I=null;function ke(t,e){return e.type==="tile"||e.type==="map-image"}let O=class extends ue{constructor(t){super(t),this._featuresResolutions=new WeakMap,this.highlightGraphics=null,this.highlightGraphicUpdated=null,this.updateHighlightedFeatures=pe(async e=>{this.destroyed||this.updatingHandles.addPromise(this._updateHighlightedFeaturesGeometries(e).catch(()=>{}))})}initialize(){const t=e=>{this.updatingHandles.addPromise(this._updateHighlightedFeaturesSymbols(e).catch(()=>{})),this.updateHighlightedFeatures(this._highlightGeometriesResolution)};this.addHandles([ye(()=>this.highlightGraphics,"change",e=>t(e.added),{onListenerAdd:e=>t(e)})])}async fetchPopupFeatures(t,e){var o,a;const{layerView:{layer:s,view:{scale:i}}}=this;if(!t)throw new A("fetchPopupFeatures:invalid-area","Nothing to fetch without area",{layer:s});const r=Me(s.sublayers,i,e);if(!r.length)return[];const n=await Te(s,r);if(!((((a=(o=s.capabilities)==null?void 0:o.operations)==null?void 0:a.supportsIdentify)??!0)&&s.version>=10.5)&&!n)throw new A("fetchPopupFeatures:not-supported","query operation is disabled for this service",{layer:s});return n?this._fetchPopupFeaturesUsingQueries(t,r,e):this._fetchPopupFeaturesUsingIdentify(t,r,e)}clearHighlights(){var t;(t=this.highlightGraphics)==null||t.removeAll()}highlight(t){const e=this.highlightGraphics;if(!e)return{remove(){}};let s=null;if(t instanceof _?s=[t]:ce.isCollection(t)&&t.length>0?s=t.toArray():Array.isArray(t)&&t.length>0&&(s=t),s=s==null?void 0:s.filter(M),!s||!s.length)return he();for(const i of s){const r=i.sourceLayer;r!=null&&"geometryType"in r&&r.geometryType==="point"&&(i.visible=!1)}return e.addMany(s),{remove:()=>{e.removeMany(s??[])}}}async _updateHighlightedFeaturesSymbols(t){const{layerView:{view:e},highlightGraphics:s,highlightGraphicUpdated:i}=this;if(s&&i)for(const r of t){const n=r.sourceLayer&&"renderer"in r.sourceLayer&&r.sourceLayer.renderer;r.sourceLayer&&"geometryType"in r.sourceLayer&&r.sourceLayer.geometryType==="point"&&n&&"getSymbolAsync"in n&&n.getSymbolAsync(r).then(async o=>{var u;o||(o=new L);let a=null;const c="visualVariables"in n?(u=n.visualVariables)==null?void 0:u.find(p=>p.type==="size"):void 0;c&&(I||(I=(await fe(()=>import("./index-b6b7583b.js").then(p=>p.wy),["assets/index-b6b7583b.js","assets/index-abd0b88c.css"])).getSize),a=I(c,r,{view:e.type,scale:e.scale,shape:o.type==="simple-marker"?o.style:null})),a||(a="width"in o&&"height"in o&&o.width!=null&&o.height!=null?Math.max(o.width,o.height):"size"in o?o.size:16),s.includes(r)&&(r.symbol=new L({style:"square",size:a,xoffset:"xoffset"in o?o.xoffset:0,yoffset:"yoffset"in o?o.yoffset:0}),i(r,"symbol"),r.visible=!0)})}}async _updateHighlightedFeaturesGeometries(t){const{layerView:{layer:e,view:s},highlightGraphics:i,highlightGraphicUpdated:r}=this;if(this._highlightGeometriesResolution=t,!r||!(i!=null&&i.length)||!e.capabilities.operations.supportsQuery)return;const n=this._getTargetResolution(t),o=new Map;for(const u of i)if(!this._featuresResolutions.has(u)||this._featuresResolutions.get(u)>n){const p=u.sourceLayer;de(o,p,()=>new Map).set(u.getObjectId(),u)}const a=Array.from(o,([u,p])=>{const f=u.createQuery();return f.objectIds=[...p.keys()],f.outFields=[u.objectIdField],f.returnGeometry=!0,f.maxAllowableOffset=n,f.outSpatialReference=s.spatialReference,u.queryFeatures(f)}),c=await Promise.all(a);if(!this.destroyed)for(const{features:u}of c)for(const p of u){const f=p.sourceLayer,h=o.get(f).get(p.getObjectId());h&&i.includes(h)&&(h.geometry=p.geometry,r(h,"geometry"),this._featuresResolutions.set(h,n))}}_getTargetResolution(t){const e=t*me(this.layerView.view.spatialReference),s=e/16;return s<=10?0:t/e*s}async _fetchPopupFeaturesUsingIdentify(t,e,s){const i=await this._createIdentifyParameters(t,e,s);if(i==null)return[];const{results:r}=await Ve(this.layerView.layer.parsedUrl,i);return r.map(n=>n.feature)}async _createIdentifyParameters(t,e,s){const{floors:i,layer:r,timeExtent:n,view:{spatialReference:o,scale:a}}=this.layerView,c=s!=null?s.event:null;if(!e.length)return null;await Promise.all(e.map(({sublayer:x})=>x.load().catch(()=>{})));const u=Math.min(ge("mapservice-popup-identify-max-tolerance"),r.allSublayers.reduce((x,$)=>$.renderer?U({renderer:$.renderer,event:c}):x,2)),p=this.createFetchPopupFeaturesQueryGeometry(t,u),f=be(a,o),h=Math.round(p.width/f),F=new J({xmin:p.center.x-f*h,ymin:p.center.y-f*h,xmax:p.center.x+f*h,ymax:p.center.y+f*h,spatialReference:p.spatialReference});return new z({floors:i,gdbVersion:"gdbVersion"in r?r.gdbVersion:void 0,geometry:t,height:h,layerOption:"popup",mapExtent:F,returnGeometry:!0,spatialReference:o,sublayers:r.sublayers,timeExtent:n,tolerance:u,width:h})}async _fetchPopupFeaturesUsingQueries(t,e,s){const{layerView:{floors:i,timeExtent:r}}=this,n=s!=null?s.event:null,o=e.map(async({sublayer:a,popupTemplate:c})=>{var v;if(await a.load().catch(()=>{}),a.capabilities&&!a.capabilities.operations.supportsQuery)return[];const u=a.createQuery(),p=U({renderer:a.renderer,event:n}),f=this.createFetchPopupFeaturesQueryGeometry(t,p),h=new Set,[F]=await Promise.all([we(a,c),(v=a.renderer)==null?void 0:v.collectRequiredFields(h,a.fieldsIndex)]);ve(h,a.fieldsIndex,F);const x=Array.from(h).sort();if(u.geometry=f,u.outFields=x,u.timeExtent=r,i){const N=i.clone(),g=G(N,a);g!=null&&(u.where=u.where?`(${u.where}) AND (${g})`:g)}const $=this._getTargetResolution(f.width/p),m=await Le(c),j=a.geometryType==="point"||m&&m.arcadeUtils.hasGeometryOperations(c);j||(u.maxAllowableOffset=$);let{features:b}=await a.queryFeatures(u);const w=j?0:$;b=await Ue(a,b);for(const N of b)this._featuresResolutions.set(N,w);return b});return(await xe(o)).reverse().reduce((a,c)=>c.value?[...a,...c.value]:a,[]).filter(M)}};function Me(t,e,s){const i=[],r=n=>{const o=n.minScale===0||e<=n.minScale,a=n.maxScale===0||e>=n.maxScale;if(n.visible&&o&&a){if(n.sublayers)n.sublayers.forEach(r);else if(n.popupEnabled){const c=Se(n,{...s,defaultPopupTemplateEnabled:!1});c!=null&&i.unshift({sublayer:n,popupTemplate:c})}}};return((t==null?void 0:t.toArray())??[]).reverse().map(r),i}function Le(t){var e;return(e=t.expressionInfos)!=null&&e.length||Array.isArray(t.content)&&t.content.some(s=>s.type==="expression")?$e():Promise.resolve()}async function Te(t,e){var s,i;if((i=(s=t.capabilities)==null?void 0:s.operations)!=null&&i.supportsQuery)return!0;try{return await Promise.any(e.map(({sublayer:r})=>r.load().then(()=>r.capabilities.operations.supportsQuery)))}catch{return!1}}async function Ue(t,e){const s=t.renderer;return s&&"defaultSymbol"in s&&!s.defaultSymbol&&(e=s.valueExpression?await Promise.all(e.map(i=>s.getSymbolAsync(i).then(r=>r?i:null))).then(i=>i.filter(r=>r!=null)):e.filter(i=>s.getSymbol(i)!=null)),e}l([y({constructOnly:!0})],O.prototype,"createFetchPopupFeaturesQueryGeometry",void 0),l([y({constructOnly:!0})],O.prototype,"layerView",void 0),l([y({constructOnly:!0})],O.prototype,"highlightGraphics",void 0),l([y({constructOnly:!0})],O.prototype,"highlightGraphicUpdated",void 0),l([y({constructOnly:!0})],O.prototype,"updatingHandles",void 0),O=l([V("esri.views.layers.support.MapService")],O);export{ke as S,O as U};
