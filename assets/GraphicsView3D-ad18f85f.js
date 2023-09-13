import{aC as i,ax as p,ay as s,az as t,aD as a,aB as c,aE as h}from"./index-d5672885.js";import{x as n}from"./GraphicsProcessor-f589f32b.js";import"./Graphics3DObjectStates-cf6ed7e5.js";import"./optimizedFeatureQueryEngineAdapter-5de3c035.js";import"./centroid-8e8cfa47.js";import"./PooledRBush-2f868978.js";import"./quickselect-b99c3a20.js";let e=class extends i(h){constructor(r){super(r),this.processor=null,this.slicePlaneEnabled=!1,this.layer=new l}initialize(){this._set("processor",new n({owner:this}))}destroy(){this._set("processor",p(this.processor))}get graphics(){var r;return(r=this.view)==null?void 0:r.graphics}get loadedGraphics(){return this.graphics}get updating(){var r;return!!((r=this.processor)!=null&&r.updating)}get symbolUpdateType(){return this.processor.graphicsCore.symbolUpdateType}getHit(r){return this.processor.getHit(r)}whenGraphicBounds(r,o){return this.processor.whenGraphicBounds(r,o)}graphicChanged(r){this.processor.graphicsCore.graphicUpdateHandler(r)}get updatePolicy(){return this.processor.graphicsCore.effectiveUpdatePolicy}async queryGraphics(){return this.loadedGraphics}async fetchPopupFeatures(r,o){return(o==null?void 0:o.clientGraphics)??[]}highlight(r){return this.processor.highlight(r)}maskOccludee(r){return this.processor.maskOccludee(r)}};s([t({readOnly:!0})],e.prototype,"graphics",null),s([t()],e.prototype,"loadedGraphics",null),s([t({readOnly:!0})],e.prototype,"updating",null),s([t({constructOnly:!0})],e.prototype,"view",void 0),s([t()],e.prototype,"processor",void 0),s([t({type:Boolean})],e.prototype,"slicePlaneEnabled",void 0),s([t()],e.prototype,"layer",void 0),e=s([c("esri.views.3d.layers.GraphicsView3D")],e);class l extends a{constructor(){super(),this.type="graphics-view-3d-dummy",this.id=this.uid}}const G=e;export{G as default};