import{d6 as f,d7 as m,aw as h,d8 as a,ax as _,ae as b,bv as d,d9 as F,da as v,aN as I,db as u,ay as l,az as n,b1 as w,dc as E,aB as O}from"./index-b6b7583b.js";import{s as x,D as S}from"./I3SOverrides-26ded218.js";import{f as j}from"./WhereClause-d63b96ab.js";import{o as C}from"./floorFilterUtils-080a7cd2.js";import{x as H,c as Q,E as q}from"./I3SMeshView3D-5b3ec614.js";import{n as V}from"./LayerView3D-74e1cf78.js";import{p as D,r as A,s as R,l as L,i as $,j as G}from"./SceneLayerView-1ae96891.js";import{L as p,d as U,l as P,o as M}from"./I3SQueryFeatureStore-da336893.js";import{n as y}from"./I3SNode-8a751847.js";import{t as N}from"./DefinitionExpressionSceneLayerView-93fc7339.js";import{i as z}from"./PopupSceneLayerView-7bc1be26.js";import"./meshFeatureSet-5dbc16f5.js";import"./MeshGeoreferencedRelativeVertexSpace-f0f9ba44.js";import"./MeshLocalVertexSpace-63a2f14c.js";import"./georeference-38922ba9.js";import"./External-9aabde69.js";import"./FeatureLayerView3D-2df96d14.js";import"./FeatureLayerViewBase3D-09116b8c.js";import"./FeatureLikeLayerView3D-20d5565d.js";import"./dehydratedFeatureComparison-9d0281aa.js";import"./queryForSymbologySnapping-1a38fcae.js";import"./elevationInfoUtils-0e06fabd.js";import"./hash-6f442295.js";import"./Graphics3DObjectStates-a2cccd14.js";import"./optimizedFeatureQueryEngineAdapter-8aa3d8d6.js";import"./centroid-8e8cfa47.js";import"./PooledRBush-409d3e9b.js";import"./quickselect-24a842b2.js";import"./QueryEngine-9f39ea19.js";import"./normalizeUtils-6714e2ab.js";import"./normalizeUtilsCommon-f8fddc7f.js";import"./json-48e3ea08.js";import"./QueryEngineCapabilities-42e44ded.js";import"./utils-1f422742.js";import"./generateRendererUtils-c4b486d9.js";import"./FeatureStore-a99237ef.js";import"./BoundsStore-972bc7f3.js";import"./projectExtentUtils-6664beca.js";import"./query-a0d003fe.js";import"./pbfQueryUtils-7a2f0e7a.js";import"./pbf-5cc40739.js";import"./EventedSet-1ca12803.js";import"./LayerView-e8aa5ea9.js";import"./RefreshableLayerView-e28b3c65.js";import"./executionError-c92d3b85.js";import"./SceneModification-2ecee45e.js";import"./SceneLayerWorker-a59a98fe.js";const c=$();let s=class extends H(N(z(V(G)))){constructor(){super(...arguments),this.type="scene-layer-3d",this._setVisibilityHiddenObjectIds=new x,this.progressiveLoadFactor=1,this._elevationContext="scene",this._isIntegratedMesh=!1,this._supportsLabeling=!0,this._interactiveEditingSessions=new Map,this._queryEngine=null}get i3slayer(){return this.layer}tryRecycleWith(e,t){return e.url===this.layer.url&&this.i3sOverrides.isEmpty?e.load(t).then(()=>{var r;f(this.layer,e,this.i3sOverrides),this.layer=e,this.i3sOverrides.destroy();const i=(r=this.view.resourceController)==null?void 0:r.memoryController;this.i3sOverrides=new S({view:this.view,layer:e,memoryController:i}),this.resetHighlights()}):null}get layerPopupEnabledAndHasTemplate(){var e;return this.layer.popupEnabled&&m(this.layer,(e=this.view.popup)==null?void 0:e.defaultPopupTemplateEnabled)}get filter(){return this._get("filter")}set filter(e){this._set("filter",p.checkSupport(e)?e:null)}get viewFilter(){const e=this.filter,t=this.layerFilter;if(e==null&&t==null)return null;const i=this._get("viewFilter");return i==null?new p({layerFilter:t,viewFilter:e,layerFieldsIndex:this.layer.fieldsIndex,loadAsyncModule:r=>this._loadAsyncModule(r),addSqlFilter:(r,o)=>this.addSqlFilter(r,o,this.logError)}):(i.viewFilter=e,i.layerFilter=t,i)}get requiredFields(){var e;return((e=this._fieldsHelper)==null?void 0:e.requiredFields)??[]}get _floorFilterClause(){const e=C(this);return e!=null?j.create(e,this.layer.fieldsIndex):null}get _excludeObjectIdsSorted(){const e=this.layer.excludeObjectIds.toArray();return e.length?e.sort((t,i)=>t-i):null}get _setVisibilityHiddenObjectIdsSorted(){return this._setVisibilityHiddenObjectIds.size?Array.from(this._setVisibilityHiddenObjectIds).sort((e,t)=>e-t):null}get _objectQualitySettings(){var e,t,i;return(i=(t=(e=this.view)==null?void 0:e.qualitySettings)==null?void 0:t.sceneService)==null?void 0:i.object}get lodFactor(){var e;return((e=this._objectQualitySettings)==null?void 0:e.lodFactor)??1}get lodCrossfadeinDuration(){return this._objectQualitySettings.lodCrossfadeinDuration??0}get lodCrossfadeoutDuration(){return this._objectQualitySettings.lodCrossfadeoutDuration??0}get lodCrossfadeUncoveredDuration(){return this._objectQualitySettings.lodCrossfadeUncoveredDuration??0}get updatingProgressValue(){var e;return((e=this._controller)==null?void 0:e.updatingProgress)??0}initialize(){this._fieldsHelper=new D({layerView:this}),this.updatingHandles.add(()=>this.layer.rangeInfos,t=>this._rangeInfosChanged(t),h),this.updatingHandles.add(()=>this.layer.renderer,t=>this.updatingHandles.addPromise(this._rendererChange(t)),h);const e=()=>this._filterChange();this.updatingHandles.add(()=>this.parsedDefinitionExpression,e),this.updatingHandles.add(()=>this.filter,e),this.updatingHandles.add(()=>this._floorFilterClause,e),this.updatingHandles.add(()=>this._excludeObjectIdsSorted,e),this.updatingHandles.add(()=>this._setVisibilityHiddenObjectIdsSorted,e),this.updatingHandles.add(()=>this.viewFilter!=null?this.viewFilter.sortedObjectIds:null,e),this.updatingHandles.add(()=>this.viewFilter!=null?this.viewFilter.parsedWhereClause:null,e),this.updatingHandles.add(()=>[this.viewFilter!=null?this.viewFilter.parsedGeometry:null,this.filter!=null?this.filter.spatialRelationship:null,this.layer.filter!=null?this.layer.filter.spatialRelationship:null],()=>this._geometryFilterChange()),a()&&this.i3sOverrides.is3DOFL&&this.updatingHandles.add(()=>this.i3sOverrides.sortedGeometryChangedObjectIds,e),this.handles.add(this.layer.on("apply-edits",t=>this.updatingHandles.addPromise(t.result))),this.handles.add(this.layer.on("edits",t=>this._handleEdits(t)))}destroy(){this._fieldsHelper=_(this._fieldsHelper)}_rangeInfosChanged(e){e!=null&&e.length>0&&b.getLogger(this).warn("Unsupported property: rangeInfos are currently only serialized to and from web scenes but do not affect rendering.")}createQuery(){const e={outFields:["*"],returnGeometry:!1,outSpatialReference:this.view.spatialReference};return this.filter!=null?this.filter.createQuery(e):new d(e)}queryExtent(e,t){return this._ensureQueryEngine().executeQueryForExtent(this._ensureQuery(e),t==null?void 0:t.signal)}queryFeatureCount(e,t){return this._ensureQueryEngine().executeQueryForCount(this._ensureQuery(e),t==null?void 0:t.signal)}queryFeatures(e,t){return this._ensureQueryEngine().executeQuery(this._ensureQuery(e),t==null?void 0:t.signal).then(i=>{if(!(i!=null&&i.features))return i;const r=this.layer;for(const o of i.features)o.layer=r,o.sourceLayer=r;return i})}queryObjectIds(e,t){return this._ensureQueryEngine().executeQueryForIds(this._ensureQuery(e),t==null?void 0:t.signal)}_ensureQueryEngine(){return this._queryEngine||(this._queryEngine=this._createQueryEngine()),this._queryEngine}_createQueryEngine(){const e=Q(this.view.spatialReference,this.view.renderSpatialReference,this._collection);return new U({layerView:this,priority:F.FEATURE_QUERY_ENGINE,spatialIndex:new P({featureAdapter:new M({objectIdField:this.layer.objectIdField,attributeStorageInfo:this.layer.attributeStorageInfo??[],getFeatureExtent:e}),forAllFeatures:(t,i)=>this._forAllFeatures((r,o,g)=>t({id:r,index:o,meta:g}),i,q.QUERYABLE),getFeatureExtent:e,sourceSpatialReference:v(this.layer),viewSpatialReference:this.view.spatialReference})})}highlight(e){const t=this._highlights;if(e instanceof d){const{set:i,handle:r}=t.acquireSet();return this.queryObjectIds(e).then(o=>t.setFeatureIds(i,o)),r}return super.highlight(e)}createInteractiveEditSession(e){return A(this._attributeEditingContext,e)}_createLayerGraphic(e){const t=new I(null,null,e);return t.layer=this.layer,t.sourceLayer=this.layer,t}getFilters(){const e=super.getFilters();a()&&this.i3sOverrides.is3DOFL&&this.i3sOverrides.sortedGeometryChangedObjectIds.length>0&&e.push((r,o)=>{o.node.index>=0&&u(this.i3sOverrides.sortedGeometryChangedObjectIds,!1,r)});const t=this._setVisibilityHiddenObjectIdsSorted;t!=null&&e.push(r=>u(t,!1,r));const i=this._excludeObjectIdsSorted;return i!=null&&e.push(r=>u(i,!1,r)),this._floorFilterClause&&this.addSqlFilter(e,this._floorFilterClause,this.logError),this.addSqlFilter(e,this.parsedDefinitionExpression,this.logError),this.viewFilter!=null&&this.viewFilter.addFilters(e,this.view,this._controller.crsIndex,this._collection),e}setVisibility(e,t){t?this._setVisibilityHiddenObjectIds.delete(e):this._setVisibilityHiddenObjectIds.add(e)}isUpdating(){return super.isUpdating()||this.layerFilterUpdating||this.viewFilter!=null&&this.viewFilter.updating||this.i3sOverrides!=null&&this.i3sOverrides.updating}_ensureQuery(e){return this._addDefinitionExpressionToQuery(e==null?this.createQuery():d.from(e))}get _attributeEditingContext(){return{sessions:this._interactiveEditingSessions,fieldsIndex:this.layer.fieldsIndex,objectIdField:this._getObjectIdField(),globalIdField:this._getGlobalIdField(),forEachNode:e=>this._forAllNodes(t=>t!=null?e(t.node,t.featureIds):null),attributeStorageInfo:this.i3slayer.attributeStorageInfo??[],i3sOverrides:this.i3sOverrides,getAttributeData:e=>this.getAttributeData(e),setAttributeData:(e,t)=>this.setAttributeData(e,t),clearMemCache:()=>this.clearMemCache()}}_handleEdits(e){a()&&R(this._attributeEditingContext,e),L(this._attributeEditingContext,e)}get hasGeometryFilter(){const e=this.viewFilter;return e!=null&&e.parsedGeometry!=null}computeNodeFiltering(e){const t=this.viewFilter;return t==null||!this.view.spatialReference||t.isMBSGeometryVisible(e,this.view.spatialReference,this._controller.crsIndex)?y.Unmodified:y.Culled}};l([n()],s.prototype,"i3slayer",null),l([n(w)],s.prototype,"updatingProgress",void 0),l([n({type:E})],s.prototype,"filter",null),l([n({readOnly:!0})],s.prototype,"viewFilter",null),l([n(c.requiredFields)],s.prototype,"requiredFields",null),l([n(c.availableFields)],s.prototype,"availableFields",void 0),l([n()],s.prototype,"_fieldsHelper",void 0),l([n()],s.prototype,"_floorFilterClause",null),l([n()],s.prototype,"_excludeObjectIdsSorted",null),l([n()],s.prototype,"_setVisibilityHiddenObjectIds",void 0),l([n()],s.prototype,"_setVisibilityHiddenObjectIdsSorted",null),l([n()],s.prototype,"_objectQualitySettings",null),l([n()],s.prototype,"lodFactor",null),l([n()],s.prototype,"updatingProgressValue",null),s=l([O("esri.views.3d.layers.SceneLayerView3D")],s);const $e=s;export{$e as default};