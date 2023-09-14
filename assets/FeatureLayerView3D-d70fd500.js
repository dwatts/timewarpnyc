import{ay as i,az as p,aB as s,cx as m,aK as l,ai as o,aV as n}from"./index-50ec4ba6.js";import{_ as y}from"./FeatureLayerViewBase3D-f58c046d.js";import"./FeatureLikeLayerView3D-aa9912b1.js";import"./dehydratedFeatureComparison-d210119e.js";import"./queryForSymbologySnapping-b297693a.js";import"./elevationInfoUtils-3b5193fb.js";import"./hash-6f442295.js";import"./Graphics3DObjectStates-d1290f53.js";import"./optimizedFeatureQueryEngineAdapter-3d48a5d6.js";import"./centroid-8e8cfa47.js";import"./PooledRBush-2be19189.js";import"./quickselect-bdac7f40.js";import"./floorFilterUtils-080a7cd2.js";import"./QueryEngine-e008635d.js";import"./normalizeUtils-0bb66644.js";import"./normalizeUtilsCommon-8ae207e8.js";import"./WhereClause-b2ffbae0.js";import"./executionError-c92d3b85.js";import"./json-48e3ea08.js";import"./QueryEngineCapabilities-42e44ded.js";import"./utils-928acc7a.js";import"./generateRendererUtils-43c588e1.js";import"./FeatureStore-4c7ff746.js";import"./BoundsStore-8ea47468.js";import"./projectExtentUtils-4dbbd049.js";import"./LayerView3D-c8abac2e.js";import"./query-5acb5eb9.js";import"./pbfQueryUtils-205746d5.js";import"./pbf-49c18352.js";import"./EventedSet-37300b80.js";import"./LayerView-94db3d0d.js";import"./RefreshableLayerView-c09f75be.js";let t=class extends y{constructor(){super(...arguments),this.type="feature-3d",this.direct3DObjectFeatureLayerDisplayEnabled=m()}initialize(){var a;const{layer:e,view:r}=this;(a=l(e))!=null&&a.operations.supportsQuery||this.addResolvingPromise(Promise.reject(new o("featurelayerview:query-not-supported","layer view requires a layer with query capability",{layer:e}))),e.infoFor3D!=null&&(this.direct3DObjectFeatureLayerDisplayEnabled?this._set("suspendResumeExtentMode","computed"):this.addResolvingPromise(Promise.reject(new o("featurelayerview3d:unsupported-geometry-type",`Unsupported geometry type ${e.geometryType}`)))),e.geometryType!=="mesh"||n(e.spatialReference,r.spatialReference)||this.addResolvingPromise(Promise.reject(new o("layerview:spatial-reference-incompatible","The spatial references of the feature layer is incompatible with the spatial reference of the view")))}get featureSpatialReference(){var e,r;return(r=(e=this.view.featureTiles)==null?void 0:e.tilingScheme)==null?void 0:r.spatialReference}};i([p({constructOnly:!0})],t.prototype,"direct3DObjectFeatureLayerDisplayEnabled",void 0),i([p()],t.prototype,"layer",void 0),t=i([s("esri.views.3d.layers.FeatureLayerView3D")],t);const A=t;export{A as default};