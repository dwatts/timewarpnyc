import{ay as r,az as i,aB as o,ai as s}from"./index-50ec4ba6.js";import{_ as m}from"./FeatureLayerViewBase3D-f58c046d.js";import"./FeatureLikeLayerView3D-aa9912b1.js";import"./dehydratedFeatureComparison-d210119e.js";import"./queryForSymbologySnapping-b297693a.js";import"./elevationInfoUtils-3b5193fb.js";import"./hash-6f442295.js";import"./Graphics3DObjectStates-d1290f53.js";import"./optimizedFeatureQueryEngineAdapter-3d48a5d6.js";import"./centroid-8e8cfa47.js";import"./PooledRBush-2be19189.js";import"./quickselect-bdac7f40.js";import"./floorFilterUtils-080a7cd2.js";import"./QueryEngine-e008635d.js";import"./normalizeUtils-0bb66644.js";import"./normalizeUtilsCommon-8ae207e8.js";import"./WhereClause-b2ffbae0.js";import"./executionError-c92d3b85.js";import"./json-48e3ea08.js";import"./QueryEngineCapabilities-42e44ded.js";import"./utils-928acc7a.js";import"./generateRendererUtils-43c588e1.js";import"./FeatureStore-4c7ff746.js";import"./BoundsStore-8ea47468.js";import"./projectExtentUtils-4dbbd049.js";import"./LayerView3D-c8abac2e.js";import"./query-5acb5eb9.js";import"./pbfQueryUtils-205746d5.js";import"./pbf-49c18352.js";import"./EventedSet-37300b80.js";import"./LayerView-94db3d0d.js";import"./RefreshableLayerView-c09f75be.js";const l=p=>{let e=class extends p{get availableFields(){return this.layer.fieldsIndex.fields.map(a=>a.name)}};return r([i()],e.prototype,"layer",void 0),r([i({readOnly:!0})],e.prototype,"availableFields",null),e=r([o("esri.views.layers.OGCFeatureLayerView")],e),e};let t=class extends l(m){constructor(){super(...arguments),this.type="ogc-feature-3d"}initialize(){this.layer.serviceSupportsSpatialReference(this.view.spatialReference)||this.addResolvingPromise(Promise.reject(new s("layerview:spatial-reference-incompatible","The spatial references supported by this OGC layer are incompatible with the spatial reference of the view",{layer:this.layer})))}};r([i()],t.prototype,"layer",void 0),t=r([o("esri.views.3d.layers.OGCFeatureLayerView3D")],t);const E=t;export{E as default};