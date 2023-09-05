import{aE as b,aZ as c,aw as h,b8 as E,bn as s,ay as r,az as a,aB as F,f9 as V}from"./index-b6b7583b.js";import{m as C}from"./elevationInfoUtils-0e06fabd.js";import{E as D,b as $}from"./DimensionAnalysisView3D-5e300777.js";import{i as A,o as I}from"./queryEngineUtils-6598f123.js";import{i as m,r as R,n as v}from"./symbologySnappingCandidates-47cac91b.js";import"./LineVisualElement-d09e3430.js";import"./LengthDimension-75ac9975.js";import"./Segment-fed3ef32.js";import"./unitFormatUtils-61cf212b.js";import"./analysisViewUtils-7a700b21.js";import"./ImageMaterial-384333e5.js";import"./Factory-04c2fe41.js";import"./RightAngleQuadVisualElement-69096604.js";import"./VisualElementResources-74f43321.js";import"./PointVisualElement-5e2a5f36.js";import"./EditGeometryOperations-db7a7418.js";import"./dehydratedFeatureComparison-9d0281aa.js";import"./VertexSnappingCandidate-9af0d137.js";let o=class extends b{get availability(){return 1}get updating(){return this.layerSource.updating}get _snappingElevationAligner(){const{view:e}=this,{layer:t}=this.layerSource,i=e!=null&&e.type==="3d";if(!i||t.type==="subtype-group")return m();const n=async(p,l)=>(await V(e.whenLayerView(t),l)).elevationAlignPointsInFeatures(p,l);return m(i,{elevationInfo:t.elevationInfo,alignPointsInFeatures:n,spatialReference:e.spatialReference})}get _snappingElevationFilter(){const{view:e}=this,t=e!=null&&e.type==="3d"&&this.layerSource.layer.type!=="subtype-group";return R(t)}get _symbologySnappingFetcher(){const{view:e}=this,{layer:t}=this.layerSource;return e!=null&&e.type==="3d"&&t.type!=="subtype-group"?v(this._symbologySnappingSupported,async(i,n)=>{const p=await e.whenLayerView(t);return s(n),p.queryForSymbologySnapping({candidates:i,spatialReference:e.spatialReference},n)}):v()}get _symbologySnappingSupported(){return this._layerView3D!=null&&this._layerView3D.symbologySnappingSupported}initialize(){const{view:e}=this,{layer:t}=this.layerSource;e!=null&&e.type==="3d"&&t.type!=="subtype-group"&&(e.whenLayerView(t).then(i=>this._layerView3D=i),this.addHandles([e.elevationProvider.on("elevation-change",({context:i})=>{const{elevationInfo:n}=t;C(i,n)&&this._snappingElevationAligner.notifyElevationSourceChange()}),c(()=>t.elevationInfo,()=>this._snappingElevationAligner.notifyElevationSourceChange(),h),c(()=>{var i;return this._layerView3D!=null?(i=this._layerView3D.processor)==null?void 0:i.renderer:null},()=>this._symbologySnappingFetcher.notifySymbologyChange(),h),E(()=>{var i;return(i=this._layerView3D)==null?void 0:i.layer},["edits","apply-edits","graphic-update"],()=>this._symbologySnappingFetcher.notifySymbologyChange())]))}constructor(e){super(e),this.view=null,this._layerView3D=null}refresh(){}async fetchCandidates(e,t){var u;const{layer:i}=this.layerSource,n=i.source;if(!(n!=null&&n.querySnapping))return[];const p=D(i),l=$(e,((u=this.view)==null?void 0:u.type)??"2d",p),d=await n.querySnapping(l,{signal:t});s(t);const y=await this._snappingElevationAligner.alignCandidates(d.candidates,t);s(t);const g=await this._symbologySnappingFetcher.fetch(y,t);s(t);const S=g.length===0?y:[...y,...g],w=this._snappingElevationFilter.filter(l,S),_=this._getGroundElevation;return w.map(f=>A(f,_))}get _getGroundElevation(){return I(this.view)}};r([a({constructOnly:!0})],o.prototype,"layerSource",void 0),r([a({constructOnly:!0})],o.prototype,"view",void 0),r([a()],o.prototype,"_snappingElevationAligner",null),r([a()],o.prototype,"_snappingElevationFilter",null),r([a()],o.prototype,"_symbologySnappingFetcher",null),r([a()],o.prototype,"_layerView3D",void 0),r([a()],o.prototype,"_symbologySnappingSupported",null),r([a()],o.prototype,"_getGroundElevation",null),o=r([F("esri.views.interactive.snapping.featureSources.FeatureCollectionSnappingSource")],o);export{o as FeatureCollectionSnappingSource};
