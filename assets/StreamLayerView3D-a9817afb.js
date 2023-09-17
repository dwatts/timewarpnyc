import{ay as s,az as i,aB as d,ck as P,cl as M,aE as k,ax as y,fd as R,aZ as _,aN as U,dc as $,aX as T,ai as x,bv as C}from"./index-ef4eb327.js";import{o as E}from"./StreamFeatureManager-7d01b5f6.js";import{createConnection as G}from"./createConnection-9d418a8d.js";import{r as j}from"./EventedSet-9e9b1f5a.js";import{E as V}from"./FeatureLikeLayerView3D-feed8de5.js";import{n as L}from"./LayerView3D-69d8ba54.js";import{d as N}from"./LayerView-04b4f064.js";import"./query-4ddde5df.js";import"./normalizeUtils-3f5557ff.js";import"./normalizeUtilsCommon-4281dae0.js";import"./pbfQueryUtils-38ef5680.js";import"./pbf-b9a007c2.js";import"./dehydratedFeatureComparison-24006da4.js";import"./queryForSymbologySnapping-2783d49a.js";import"./elevationInfoUtils-06dd022f.js";import"./hash-6f442295.js";import"./Graphics3DObjectStates-9c9e1686.js";import"./optimizedFeatureQueryEngineAdapter-f48b64e9.js";import"./centroid-8e8cfa47.js";import"./PooledRBush-7242cbe8.js";import"./quickselect-74639f31.js";import"./floorFilterUtils-080a7cd2.js";import"./QueryEngine-a92c3ca7.js";import"./WhereClause-96effb94.js";import"./executionError-c92d3b85.js";import"./json-48e3ea08.js";import"./QueryEngineCapabilities-42e44ded.js";import"./utils-4406448e.js";import"./generateRendererUtils-e3bbd19c.js";import"./FeatureStore-dc6ae856.js";import"./BoundsStore-7ef5fedc.js";import"./projectExtentUtils-a104cb00.js";const F=2500;let l=class extends U{getObjectId(){return this.objectId}};s([i({type:Number,json:{read:!0}})],l.prototype,"objectId",void 0),l=s([d("esri.layers.graphics.controllers.StreamGraphic")],l);let z=class{constructor(t){this.onUpdate=t,this._idToGraphic=new Map}destroy(){this._idToGraphic.clear()}add(t){this._idToGraphic.set(t.objectId,t)}get(t){return this._idToGraphic.get(t)}forEach(t){this._idToGraphic.forEach(t)}removeById(t){const r=this._idToGraphic.get(t);return r?(r.sourceLayer=r.layer=null,this._idToGraphic.delete(t),r):null}update(t,r){this.onUpdate(t,r)}get size(){return this._idToGraphic.size}},a=class extends P(M(k)){constructor(){super(...arguments),this.isPaused=!1,this.graphics=new j,this._updateInfo={websocket:0,client:0},this._updateIntervalId=null,this._outSpatialReference=null}initialize(){this.addResolvingPromise(this.layer.when(()=>this._startup()))}destroy(){this.clear()}_clearInterval(){this._updateIntervalId!==null&&(clearInterval(this._updateIntervalId),this._updateIntervalId=null)}clear(){this._clearInterval(),this.connection=y(this.connection),this.store=y(this.store),this.graphics.clear(),this.handles.removeAll()}get updating(){return!this.connection||this.connection.connectionStatus==="connected"}_startup(){const{layer:e,layerView:t}=this,{spatialReference:r,definitionExpression:c,geometryDefinition:h,objectIdField:p,timeInfo:f,purgeOptions:g,maxReconnectionAttempts:v,maxReconnectionInterval:I,customParameters:S}=e,w=e.geometryType?R.toJSON(e.geometryType):null,b=r,u=t.view.spatialReference,O={geometry:h,where:c};this.clear(),this._set("connection",G(e.parsedUrl,b,u,w,O,v,I,S??void 0)),this._outSpatialReference=u.toJSON(),this.store=new z(this._onUpdate.bind(this)),this.featuresManager=new E(this.store,p,f.toJSON(),g);const m="startup-watches";this.handles.remove(m),this.handles.add([e.on("send-message-to-socket",n=>this.connection.sendMessageToSocket(n)),e.on("send-message-to-client",n=>this.connection.sendMessageToClient(n)),this.connection.on("data-received",n=>this._onFeature(n)),this.connection.on("message-received",n=>this._onWebSocketMessage(n)),_(()=>[e.definitionExpression,e.geometryDefinition,e.purgeOptions],()=>this._startup())],m),this.isPaused||this._initUpdateInterval()}_onWebSocketMessage(e){if(this.layerView.emit("message-received",e),"type"in e)switch(e.type){case"delete":if(e.objectIds)for(const t of e.objectIds)this.featuresManager.removeById(t);if(e.trackIds)for(const t of e.trackIds)this.featuresManager.removeByTrackId(t);break;case"clear":this.store.forEach(t=>this.featuresManager.removeById(t.objectId))}}_onFeature(e){this._updateInfo.websocket++,this.layerView.hasEventListener("data-received")&&this.layerView.emit("data-received",{attributes:e.attributes,centroid:e.centroid,geometry:e.geometry});try{e.geometry==null||e.geometry.spatialReference||(e.geometry.spatialReference=this._outSpatialReference);const t=l.fromJSON(e);t.sourceLayer=t.layer=this.layer,this.featuresManager.add(t)}catch{}}_onUpdate(e,t){t!=null&&this.graphics.removeMany(t),e!=null&&(this._updateInfo.client+=e.length,this.graphics.addMany(e))}_initUpdateInterval(){this._clearInterval();const{updateInterval:e}=this.layer;let t=performance.now();this._updateIntervalId=setInterval(()=>{const r=performance.now(),c=r-t;if(c>F){t=r;const h=Math.round(this._updateInfo.client/(c/1e3)),p=Math.round(this._updateInfo.websocket/(c/1e3));this._updateInfo.client=0,this._updateInfo.websocket=0,this.layerView.emit("update-rate",{client:h,websocket:p})}this.featuresManager.checkForUpdates()},e)}pauseStream(){this.isPaused=!0,this._clearInterval()}resumeStream(){this.isPaused=!1,this._initUpdateInterval()}};s([i()],a.prototype,"isPaused",void 0),s([i({constructOnly:!0})],a.prototype,"layer",void 0),s([i({constructOnly:!0})],a.prototype,"layerView",void 0),s([i()],a.prototype,"connection",void 0),s([i({readOnly:!0})],a.prototype,"updating",null),a=s([d("esri.layers.graphics.controllers.StreamController")],a);const B=e=>{let t=class extends e{resume(){this._isUserPaused=!1,this.suspended||this._doResume()}pause(){this._isUserPaused=!0,this.suspended||this._doPause()}constructor(...r){super(...r),this._isUserPaused=!1,this.filter=null}get connectionStatus(){return this._isUserPaused?"paused":this._streamConnectionStatus}_onSuspendedChange(r){r?this._doPause():this._isUserPaused||this._doResume()}};return s([i()],t.prototype,"_isUserPaused",void 0),s([i({readOnly:!0})],t.prototype,"connectionStatus",null),s([i({type:$})],t.prototype,"filter",void 0),t=s([d("esri.layers.mixins.StreamLayerView")],t),t};let o=class extends B(V(L(N))){constructor(){super(...arguments),this.type="stream-3d",this.updatePolicy=T.ASYNC,this.hasZ=!0,this.hasM=!1}initialize(){this.handles.add(_(()=>this.suspended,e=>{this.controller&&this._onSuspendedChange(e)}))}get connectionError(){const e=this.get("controller.connection.errorString");return e?new x("stream-controller",e):null}createQuery(){return new C({outFields:["*"],returnGeometry:!0,outSpatialReference:this.view.spatialReference})}queryLatestObservations(e,t){return this.queryEngine.executeQueryForLatestObservations(this._ensureQuery(e),t==null?void 0:t.signal)}get _streamConnectionStatus(){var e,t;return((t=(e=this.controller)==null?void 0:e.connection)==null?void 0:t.connectionStatus)??"disconnected"}createController(){return new a({layer:this.layer,layerView:this})}beforeSetController(){}_doPause(){var e;(e=this.controller)==null||e.pauseStream()}_doResume(){var e;(e=this.controller)==null||e.resumeStream()}};s([i({readOnly:!0})],o.prototype,"updatePolicy",void 0),s([i({readOnly:!0})],o.prototype,"connectionError",null),s([i()],o.prototype,"controller",void 0),s([i({readOnly:!0})],o.prototype,"hasZ",void 0),s([i({readOnly:!0})],o.prototype,"hasM",void 0),s([i({readOnly:!0})],o.prototype,"_streamConnectionStatus",null),o=s([d("esri.views.3d.layers.StreamLayerView3D")],o);const be=o;export{be as default};