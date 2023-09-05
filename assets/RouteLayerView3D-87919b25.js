import{aw as u,aW as c,ax as m,d5 as y,aL as d,aZ as h,aX as g,ay as i,az as o,aB as f}from"./index-b6b7583b.js";import{m as b,c as v,C as I,T as O,j as w,S as _,O as S}from"./Stop-985af04f.js";import{n as V}from"./LayerView3D-74e1cf78.js";import{x as G}from"./GraphicsProcessor-594cab32.js";import{l as C}from"./projectExtentUtils-6664beca.js";import{r as P}from"./EventedSet-1ca12803.js";import{d as R}from"./LayerView-e8aa5ea9.js";import"./Graphics3DObjectStates-a2cccd14.js";import"./optimizedFeatureQueryEngineAdapter-8aa3d8d6.js";import"./centroid-8e8cfa47.js";import"./PooledRBush-409d3e9b.js";import"./quickselect-24a842b2.js";function E(e){return e instanceof b||e instanceof v||e instanceof I||e instanceof O||e instanceof w||e instanceof _||e instanceof S}let r=class extends V(R){constructor(){super(...arguments),this.type="route-3d",this.loadedGraphics=new P,this._byObjectID=new Map,this.slicePlaneEnabled=!1,this.fullExtentInLocalViewSpatialReference=null}initialize(){this._set("processor",new G({owner:this,scaleVisibilityEnabled:!0,frustumVisibilityEnabled:!0})),this.addResolvingPromise(this.processor.initializePromise),this.updatingHandles.addOnCollectionChange(()=>this._routeItems,e=>this._routeItemsChanged(e),u),this.addResolvingPromise(C(this).then(e=>this.fullExtentInLocalViewSpatialReference=e)),this.handles.add(c(()=>{var e,t;return(t=(e=this.view)==null?void 0:e.basemapTerrain)==null?void 0:t.ready},()=>()=>this.notifyChange("updating"),{once:!0}))}destroy(){var e;this.handles.removeAll(),this.updatingHandles.removeAll(),this._set("processor",m(this.processor)),(e=this._get("_routeItems"))==null||e.destroy()}get _routeItems(){return new y({getCollections:()=>[this.layer.pointBarriers,this.layer.polygonBarriers,this.layer.polylineBarriers,this.layer.stops,this.layer.directionLines,this.layer.directionPoints,this.layer.routeInfo!=null?new d([this.layer.routeInfo]):null]})}_routeItemsChanged(e){if(e.removed.length){this.loadedGraphics.removeMany(e.removed.map(t=>{const s=this._byObjectID.get(t);return this._byObjectID.delete(t),s}));for(const t of e.removed)this.handles.remove(t)}if(e.added.length){this.loadedGraphics.addMany(e.added.map(t=>{const s=t.toGraphic();return this._byObjectID.set(t,s),s}));for(const t of e.added)this.handles.add([h(()=>t.geometry,(s,a)=>{this._updateGraphic(t,"geometry",s,a)}),h(()=>t.symbol,(s,a)=>{this._updateGraphic(t,"symbol",s,a)})],t)}}get legendEnabled(){var e;return this.canResume()&&!((e=this.processor)!=null&&e.frustumVisibilitySuspended)}getSuspendInfo(){var t,s;const e=super.getSuspendInfo();return e.outsideScaleRange=((t=this.processor)==null?void 0:t.scaleVisibilitySuspended)??!1,e.outsideOfView=((s=this.processor)==null?void 0:s.frustumVisibilitySuspended)??!1,e}async fetchPopupFeatures(e,t){return(t==null?void 0:t.clientGraphics)??[]}getHit(e){return this.processor.getHit(e)}whenGraphicBounds(e,t){return this.processor.whenGraphicBounds(e,t)}computeAttachmentOrigin(e,t){var s;return(s=this.processor)==null?void 0:s.computeAttachmentOrigin(e,t)}getSymbolLayerSize(e,t){return this.processor.getSymbolLayerSize(e,t)}async queryGraphics(){return new d(this.loadedGraphics.toArray())}maskOccludee(e){return this.processor.maskOccludee(e)}highlight(e){return E(e)&&(e=this._byObjectID.get(e)),this.processor.highlight(e)}get updatePolicy(){var e;return((e=this.processor)==null?void 0:e.graphicsCore.effectiveUpdatePolicy)||g.SYNC}canResume(){var e;return super.canResume()&&!((e=this.processor)!=null&&e.scaleVisibilitySuspended)}isUpdating(){var e,t,s;return!(!((e=this.processor)!=null&&e.updating)&&((s=(t=this.view)==null?void 0:t.basemapTerrain)!=null&&s.ready))}get performanceInfo(){var e,t;return{displayedNumberOfFeatures:this.loadedGraphics.length,maximumNumberOfFeatures:-1,totalNumberOfFeatures:-1,nodes:0,core:null,updating:this.updating,elevationUpdating:((e=this.processor)==null?void 0:e.elevationAlignment.updating)??!1,visibilityFrustum:!((t=this.processor)!=null&&t.frustumVisibilitySuspended)}}_updateGraphic(e,t,s,a){var p;const l=this._byObjectID.get(e);l[t]=s,n.graphic=l,n.property=t,n.oldValue=a,n.newValue=s,(p=this.processor)==null||p.graphicsCore.graphicUpdateHandler(n)}};i([o()],r.prototype,"_routeItems",null),i([o()],r.prototype,"loadedGraphics",void 0),i([o({readOnly:!0})],r.prototype,"legendEnabled",null),i([o()],r.prototype,"layer",void 0),i([o({readOnly:!0})],r.prototype,"processor",void 0),i([o({type:Boolean})],r.prototype,"slicePlaneEnabled",void 0),r=i([f("esri.views.3d.layers.RouteLayerView3D")],r);const n={graphic:null,property:null,oldValue:null,newValue:null},M=r;export{M as default};
