import{ay as r,az as i,aB as o,ai as s}from"./index-b6b7583b.js";import{_ as m}from"./FeatureLayerViewBase3D-09116b8c.js";import"./FeatureLikeLayerView3D-20d5565d.js";import"./dehydratedFeatureComparison-9d0281aa.js";import"./queryForSymbologySnapping-1a38fcae.js";import"./elevationInfoUtils-0e06fabd.js";import"./hash-6f442295.js";import"./Graphics3DObjectStates-a2cccd14.js";import"./optimizedFeatureQueryEngineAdapter-8aa3d8d6.js";import"./centroid-8e8cfa47.js";import"./PooledRBush-409d3e9b.js";import"./quickselect-24a842b2.js";import"./floorFilterUtils-080a7cd2.js";import"./QueryEngine-9f39ea19.js";import"./normalizeUtils-6714e2ab.js";import"./normalizeUtilsCommon-f8fddc7f.js";import"./WhereClause-d63b96ab.js";import"./executionError-c92d3b85.js";import"./json-48e3ea08.js";import"./QueryEngineCapabilities-42e44ded.js";import"./utils-1f422742.js";import"./generateRendererUtils-c4b486d9.js";import"./FeatureStore-a99237ef.js";import"./BoundsStore-972bc7f3.js";import"./projectExtentUtils-6664beca.js";import"./LayerView3D-74e1cf78.js";import"./query-a0d003fe.js";import"./pbfQueryUtils-7a2f0e7a.js";import"./pbf-5cc40739.js";import"./EventedSet-1ca12803.js";import"./LayerView-e8aa5ea9.js";import"./RefreshableLayerView-e28b3c65.js";const l=p=>{let e=class extends p{get availableFields(){return this.layer.fieldsIndex.fields.map(a=>a.name)}};return r([i()],e.prototype,"layer",void 0),r([i({readOnly:!0})],e.prototype,"availableFields",null),e=r([o("esri.views.layers.OGCFeatureLayerView")],e),e};let t=class extends l(m){constructor(){super(...arguments),this.type="ogc-feature-3d"}initialize(){this.layer.serviceSupportsSpatialReference(this.view.spatialReference)||this.addResolvingPromise(Promise.reject(new s("layerview:spatial-reference-incompatible","The spatial references supported by this OGC layer are incompatible with the spatial reference of the view",{layer:this.layer})))}};r([i()],t.prototype,"layer",void 0),t=r([o("esri.views.3d.layers.OGCFeatureLayerView3D")],t);const E=t;export{E as default};
