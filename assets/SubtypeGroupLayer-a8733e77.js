import{ay as i,az as s,dD as $,cu as R,aB as L,bB as K,jO as W,jP as Y,ck as V,dx as N,aC as ee,aI as S,eR as te,ae as re,g_ as ie,jQ as x,ai as b,fX as se,jR as U,cH as P,co as M,bv as Q,jS as ne,h1 as ae,h2 as oe,h3 as le,ey as ue,hq as pe,hp as de,g4 as ye,g5 as ce,h7 as H,jT as he,jU as be,jV as fe,g6 as B,jW as ge,jX as me,jY as ve,fp as we,jZ as Fe,j_ as Se,es as $e,eD as je,eu as Ie,et as Oe,du as Ee,dv as Te,dw as Ce,eF as _e,eE as Le,aL as _,aZ as xe,a_ as Pe,dA as ke,j$ as Ae,k0 as De,aT as Ge,eq as qe,k1 as Re,k2 as Ve,k3 as Ne,k4 as Ue,f9 as Me,aQ as Qe,k5 as He,k6 as Be,eJ as Je,k7 as Ze,k8 as ze,k9 as Xe,ka as Ke,kb as We,kc as Ye,eK as et,g$ as tt,kd as rt,ex as it,eG as k,ke as st,bR as nt}from"./index-b2b09e10.js";let g=class extends K{constructor(){super(...arguments),this.code=null,this.defaultValues={},this.domains=null,this.name=null}readDomains(e){if(!e)return null;const t={};for(const r of Object.keys(e))t[r]=W(e[r]);return t}writeDomains(e,t){var n;if(!e)return;const r={};for(const a of Object.keys(e))e[a]&&(r[a]=(n=e[a])==null?void 0:n.toJSON());t.domains=r}};i([s({type:Number,json:{write:!0}})],g.prototype,"code",void 0),i([s({type:Object,json:{write:!0}})],g.prototype,"defaultValues",void 0),i([s({json:{write:!0}})],g.prototype,"domains",void 0),i([$("domains")],g.prototype,"readDomains",null),i([R("domains")],g.prototype,"writeDomains",null),i([s({type:String,json:{write:!0}})],g.prototype,"name",void 0),g=i([L("esri.layers.support.Subtype")],g);const at=g,ot=["charts","editingEnabled","formTemplate","labelsVisible","labelingInfo","legendEnabled","minScale","maxScale","opacity","popupEnabled","popupTemplate","renderer","subtypeCode","templates","title","visible"],J={key:"type",base:he,errorContext:"renderer",typeMap:{simple:x,"unique-value":be,"class-breaks":fe}},A=B(),D=Y({types:J});let lt=0;function I(e){const t=e.json.write;return typeof t=="object"?t.ignoreOrigin=!0:e.json.write={ignoreOrigin:!0},e}function ut(e){return new x({symbol:pt(e)})}function pt(e){switch(e){case"point":case"multipoint":return ve.clone();case"polyline":return me.clone();case"polygon":case"multipatch":return ge.clone();default:return null}}function dt(e,t){return!!t&&(e==null?void 0:e.type)==="unique-value"&&typeof e.field=="string"&&e.field.toLowerCase()===t.toLowerCase()&&!e.field2&&!e.field3&&!e.valueExpression}function Z(e,t){var r;return e==null?null:(r=t.subtypes)==null?void 0:r.find(n=>n.code===e)}function yt(e,t){let r=null;switch(t.geometryType){case"esriGeometryPoint":case"esriGeometryMultipoint":r="point";break;case"esriGeometryPolyline":r="line";break;case"esriGeometryPolygon":case"esriGeometryMultiPatch":r="polygon";break;default:t.type,r=null}const n={},a=Z(e,t);if(a!=null){const{defaultValues:l}=a;for(const u in l)n[u]=l[u]}return n[t.subtypeField]=e,new H({name:"New Feature",drawingTool:r,prototype:{attributes:n}})}const z="esri.layers.support.SubtypeSublayer";let o=class extends V(N(ee(we))){constructor(e){super(e),this.charts=null,this.editingEnabled=!0,this.fieldOverrides=null,this.fieldsIndex=null,this.formTemplate=null,this.id=`${Date.now().toString(16)}-subtype-sublayer-${lt++}`,this.type="subtype-sublayer",this.labelsVisible=!0,this.labelingInfo=null,this.layerType="ArcGISFeatureLayer",this.legendEnabled=!0,this.listMode="show",this.minScale=0,this.maxScale=0,this.opacity=1,this.parent=null,this.popupEnabled=!0,this.popupTemplate=null,this.subtypeCode=null,this.templates=null,this.title=null,this.visible=!0}get capabilities(){var e;return(e=this.parent)==null?void 0:e.capabilities}get effectiveCapabilities(){var e;return(e=this.parent)==null?void 0:e.effectiveCapabilities}get effectiveEditingEnabled(){const{parent:e}=this;return e?e.effectiveEditingEnabled&&this.editingEnabled:this.editingEnabled}get elevationInfo(){var e;return(e=this.parent)==null?void 0:e.elevationInfo}writeFieldOverrides(e,t,r){const{fields:n,parent:a}=this;let l;if(n){l=[];let u=0;n.forEach(({name:y,alias:c,editable:m,visible:v})=>{var O;if(!v)return;const d=(O=a==null?void 0:a.fields)==null?void 0:O.find(j=>j.name===y);if(!d)return;const f={name:y};let F=!1;c!==d.alias&&(f.alias=c,F=!0),m!==d.editable&&(f.editable=m,F=!0),l.push(f),F&&u++}),u===0&&l.length===n.length&&(l=null)}else l=S(e);l!=null&&l.length&&te(r,l,t)}get fields(){const{parent:e,fieldOverrides:t,subtypeCode:r}=this,n=e==null?void 0:e.fields;if(!e||!(n!=null&&n.length))return null;const{subtypes:a,subtypeField:l}=e,u=a==null?void 0:a.find(v=>v.code===r),y=u==null?void 0:u.defaultValues,c=u==null?void 0:u.domains,m=[];for(const v of n){const d=v.clone(),{name:f}=d,F=t==null?void 0:t.find(E=>E.name===f);if(d.visible=!t||!!F,F){const{alias:E,editable:X}=F;E&&(d.alias=E),X===!1&&(d.editable=!1)}const O=(y==null?void 0:y[f])??null;d.defaultValue=f===l?r:O;const j=(c==null?void 0:c[f])??null;d.domain=f===l?null:j?j.type==="inherited"?d.domain:j.clone():null,m.push(d)}return m}get floorInfo(){var e;return(e=this.parent)==null?void 0:e.floorInfo}get geometryType(){var e;return(e=this.parent)==null?void 0:e.geometryType}get effectiveScaleRange(){const{minScale:e,maxScale:t}=this;return{minScale:e,maxScale:t}}get objectIdField(){var e;return this.parent||re.getLogger(z).error(w("objectIdField")),(e=this.parent)==null?void 0:e.objectIdField}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(e){ie(e,this.fieldsIndex),this._override("renderer",e)}get renderer(){if(this._isOverridden("renderer"))return this._get("renderer");const{parent:e}=this;return e&&!e.isTable&&e.geometryType!=="mesh"?ut(e.geometryType):null}readRendererFromService(e,t,r){var y,c,m;if(t.type==="Table")return null;const n=(y=t.drawingInfo)==null?void 0:y.renderer,a=D(n,t,r);let l;const{subtypeCode:u}=this;if(u!=null&&dt(a,t.subtypeField)){const v=(c=a.uniqueValueInfos)==null?void 0:c.find(({value:d})=>(d=typeof d=="number"?String(d):d)===String(u));v&&(l=new x({symbol:v.symbol}))}else(a==null?void 0:a.type)!=="simple"||(m=a.visualVariables)!=null&&m.length||(l=a);return l}readRenderer(e,t,r){var l,u,y;const n=(u=(l=t==null?void 0:t.layerDefinition)==null?void 0:l.drawingInfo)==null?void 0:u.renderer;return n?((y=n.visualVariables)==null?void 0:y.some(c=>c.type!=="rotationInfo"))?void 0:D(n,t,r)||void 0:void 0}get spatialReference(){var e;return(e=this.parent)==null?void 0:e.spatialReference}readTemplatesFromService(e,t){return[yt(this.subtypeCode,t)]}readTitleFromService(e,t){const r=Z(this.subtypeCode,t);return r!=null?r.name:null}get url(){var e;return(e=this.parent)==null?void 0:e.url}get userHasUpdateItemPrivileges(){var e;return!!((e=this.parent)!=null&&e.userHasUpdateItemPrivileges)}async addAttachment(e,t){const{parent:r}=this;if(!r)throw w("addAttachment");if(e.getAttribute(r.subtypeField)!==this.subtypeCode)throw new b("subtype-sublayer:addAttachment","The feature provided does not belong to this SubtypeSublayer");return r.addAttachment(e,t)}async updateAttachment(e,t,r){const{parent:n}=this;if(!n)throw w("updateAttachment");if(e.getAttribute(n.subtypeField)!==this.subtypeCode)throw new b("subtype-sublayer:updateAttachment","The feature provided does not belong to this SubtypeSublayer");return n.updateAttachment(e,t,r)}async deleteAttachments(e,t){const{parent:r}=this;if(!r)throw w("deleteAttachments");if(e.getAttribute(r.subtypeField)!==this.subtypeCode)throw new b("subtype-sublayer:deleteAttachments","The feature provided does not belong to this SubtypeSublayer");return r.deleteAttachments(e,t)}async applyEdits(e,t){if(!this.parent)throw w("applyEdits");return this.parent.applyEdits(e,t)}createPopupTemplate(e){let t=this;const{parent:r,fields:n,title:a}=this;if(r){const{displayField:l,editFieldsInfo:u,objectIdField:y}=r;t={displayField:l,editFieldsInfo:u,fields:n,objectIdField:y,title:a}}return se(t,e)}createQuery(){if(!this.parent)throw w("createQuery");const e=U(this.parent),t=`${this.parent.subtypeField}=${this.subtypeCode}`;return e.where=P(t,this.parent.definitionExpression),e}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e){return this._getLayerDomain(e)}hasUserOverrides(){return ot.some(e=>this.originIdOf(e)===M.USER)}async queryAttachments(e,t){const r=await this.load();if(!r.parent)throw w("queryAttachments");const n=e.clone();return n.where=G(n.where,r.parent.subtypeField,r.subtypeCode),r.parent.queryAttachments(e,t)}async queryFeatures(e,t){const r=await this.load();if(!r.parent)throw w("queryFeatures");const n=Q.from(e)??r.createQuery();return e!=null&&(n.where=G(n.where,r.parent.subtypeField,r.subtypeCode)),r.parent.queryFeatures(n,t)}_getLayerDomain(e){const t=this.fieldsIndex.get(e);return t?t.domain:null}};i([s({readOnly:!0,json:{read:!1}})],o.prototype,"capabilities",null),i([s({readOnly:!0,json:{read:!1}})],o.prototype,"effectiveCapabilities",null),i([s({json:{write:{ignoreOrigin:!0}}})],o.prototype,"charts",void 0),i([s({type:Boolean,nonNullable:!0,json:{name:"enableEditing",write:{ignoreOrigin:!0}}})],o.prototype,"editingEnabled",void 0),i([s({type:Boolean,readOnly:!0})],o.prototype,"effectiveEditingEnabled",null),i([s({readOnly:!0,json:{read:!1}})],o.prototype,"elevationInfo",null),i([s({readOnly:!0,json:{name:"layerDefinition.fieldOverrides",origins:{service:{read:!1}},write:{ignoreOrigin:!0,allowNull:!0}}})],o.prototype,"fieldOverrides",void 0),i([R("fieldOverrides")],o.prototype,"writeFieldOverrides",null),i([s({...A.fields,readOnly:!0,json:{read:!1}})],o.prototype,"fields",null),i([s(A.fieldsIndex)],o.prototype,"fieldsIndex",void 0),i([s({readOnly:!0,json:{read:!1}})],o.prototype,"floorInfo",null),i([s({type:ne,json:{name:"formInfo",write:{ignoreOrigin:!0}}})],o.prototype,"formTemplate",void 0),i([s({type:String,readOnly:!0,json:{origins:{service:{read:!1}},write:{ignoreOrigin:!0}}})],o.prototype,"id",void 0),i([s({readOnly:!0,json:{read:!1}})],o.prototype,"geometryType",null),i([s({readOnly:!0,json:{read:!1}})],o.prototype,"type",void 0),i([s(I(S(ae)))],o.prototype,"labelsVisible",void 0),i([s({type:[oe],json:{name:"layerDefinition.drawingInfo.labelingInfo",origins:{service:{read:!1}},read:{reader:le},write:{ignoreOrigin:!0}}})],o.prototype,"labelingInfo",void 0),i([s({type:["ArcGISFeatureLayer"],readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],o.prototype,"layerType",void 0),i([s(I(S(ue)))],o.prototype,"legendEnabled",void 0),i([s({type:["show","hide"]})],o.prototype,"listMode",void 0),i([s((()=>{const e=S(pe);return e.json.origins.service.read=!1,I(e)})())],o.prototype,"minScale",void 0),i([s((()=>{const e=S(de);return e.json.origins.service.read=!1,I(e)})())],o.prototype,"maxScale",void 0),i([s({readOnly:!0})],o.prototype,"effectiveScaleRange",null),i([s({readOnly:!0,json:{read:!1}})],o.prototype,"objectIdField",null),i([s({type:Number,range:{min:0,max:1},nonNullable:!0,json:{write:{ignoreOrigin:!0}}})],o.prototype,"opacity",void 0),i([s()],o.prototype,"parent",void 0),i([s(I(S(ye)))],o.prototype,"popupEnabled",void 0),i([s({type:ce,json:{name:"popupInfo",write:{ignoreOrigin:!0}}})],o.prototype,"popupTemplate",void 0),i([s({readOnly:!0})],o.prototype,"defaultPopupTemplate",null),i([s({types:J,json:{write:{target:"layerDefinition.drawingInfo.renderer",ignoreOrigin:!0}}})],o.prototype,"renderer",null),i([$("service","renderer",["drawingInfo.renderer","subtypeField","type"])],o.prototype,"readRendererFromService",null),i([$("renderer",["layerDefinition.drawingInfo.renderer"])],o.prototype,"readRenderer",null),i([s({readOnly:!0,json:{read:!1}})],o.prototype,"spatialReference",null),i([s({type:Number,json:{origins:{service:{read:!1}},write:{ignoreOrigin:!0}}})],o.prototype,"subtypeCode",void 0),i([s({type:[H],json:{name:"layerDefinition.templates",write:{ignoreOrigin:!0}}})],o.prototype,"templates",void 0),i([$("service","templates",["geometryType","subtypeField","subtypes","type"])],o.prototype,"readTemplatesFromService",null),i([s({type:String,json:{write:{ignoreOrigin:!0}}})],o.prototype,"title",void 0),i([$("service","title",["subtypes"])],o.prototype,"readTitleFromService",null),i([s({readOnly:!0,json:{read:!1}})],o.prototype,"url",null),i([s({readOnly:!0})],o.prototype,"userHasUpdateItemPrivileges",null),i([s({type:Boolean,nonNullable:!0,json:{name:"visibility",write:{ignoreOrigin:!0}}})],o.prototype,"visible",void 0),o=i([L(z)],o);const G=(e,t,r)=>{const n=new RegExp(`${t}\\s*=\\s*\\d+`),a=`${t}=${r}`,l=e??"";return n.test(l)?l.replace(n,a):P(a,l)},w=e=>new b(`This sublayer must have a parent SubtypeGroupLayer in order to use ${e}`),T=o,h="SubtypeGroupLayer",ct="esri.layers.SubtypeGroupLayer";function q(e,t){return new b("layer:unsupported",`Layer (${e.title}, ${e.id}) of type '${e.declaredClass}' ${t}`,{layer:e})}const C=B();let p=class extends Fe(Se($e(je(Ie(Oe(Ee(Te(Ce(N(_e(Le(V(nt))))))))))))){constructor(...e){super(...e),this._sublayersCollectionChanged=!1,this._sublayerLookup=new Map,this.fields=null,this.fieldsIndex=null,this.outFields=null,this.subtypes=null,this.sublayers=new(_.ofType(T)),this.timeInfo=null,this.title="Layer",this.type="subtype-group",this.addHandles(xe(()=>this.sublayers,(t,r)=>this._handleSublayersChange(t,r),Pe))}destroy(){var e;(e=this.source)==null||e.destroy()}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}load(e){const t=e!=null?e.signal:null,r=this.loadFromPortal({supportedTypes:["Feature Service"]},e).catch(ke).then(async()=>{if(!this.url)throw new b("subtype-grouplayer:missing-url-or-source","SubtypeGroupLayer must be created with either a url or a portal item");if(this.layerId==null)throw new b("subtype-grouplayer:missing-layerid","layerId is required for a SubtypeGroupLayer created with url");return this._initLayerProperties(await this.createGraphicsSource(t))}).then(()=>this._setUserPrivileges(this.serviceItemId,e)).then(()=>Ae(this,e));return this.addResolvingPromise(r),Promise.resolve(this)}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("gdbVersion"),this.commitProperty("historicMoment"),this.commitProperty("returnZ"),this.commitProperty("capabilities"),this.commitProperty("returnM"),(this._get("createQueryVersion")??0)+1}get editingEnabled(){return this.loaded&&this.capabilities!=null&&this.capabilities.operations.supportsEditing&&this.userHasEditingPrivileges}get effectiveEditingEnabled(){return De(this)}get parsedUrl(){const e=Ge(this.url);return e!=null&&this.layerId!=null&&(e.path=qe(e.path,this.layerId.toString())),e}set source(e){this._get("source")!==e&&this._set("source",e)}readTitleFromService(e,{name:t}){return this.url?Re(this.url,t):t}async addAttachment(e,t){return Ve(this,e,t,h)}async updateAttachment(e,t,r){return Ne(this,e,t,r,h)}async applyEdits(e,t){return Ue(this,e,t)}on(e,t){return super.on(e,t)}async createGraphicsSource(e){const{default:t}=await Me(Qe(()=>import("./FeatureLayerSource-096be71f.js"),["assets/FeatureLayerSource-096be71f.js","assets/index-b2b09e10.js","assets/index-11b7aa61.css","assets/MeshGeoreferencedRelativeVertexSpace-f17e45f2.js","assets/External-f8dbb20e.js","assets/editingSupport-3707dc99.js","assets/normalizeUtils-8c6098d1.js","assets/normalizeUtilsCommon-d7459985.js","assets/clientSideDefaults-c3b885df.js","assets/QueryEngineCapabilities-42e44ded.js","assets/QueryTask-c9a6c883.js","assets/executeForIds-ae80c6ed.js","assets/query-8241ba87.js","assets/pbfQueryUtils-b0098b42.js","assets/pbf-bfecb5f6.js","assets/executeQueryJSON-9e957b6e.js","assets/executeQueryPBF-bd30c006.js"]),e);return new t({layer:this}).load({signal:e})}createQuery(){const e=U(this),t=this.sublayers.map(r=>r.subtypeCode);return e.where=P(`${this.subtypeField} IN (${t.join(",")})`,this.definitionExpression),e}async deleteAttachments(e,t){return He(this,e,t,h)}async fetchRecomputedExtents(e){return Be(this,e,h)}findSublayerForFeature(e){const t=this.fieldsIndex.get(this.subtypeField),r=e.attributes[t.name];return this.findSublayerForSubtypeCode(r)}findSublayerForSubtypeCode(e){return this._sublayerLookup.get(e)}getFieldDomain(e,t){return this._getLayerDomain(e)}getField(e){return this.fieldsIndex.get(e)}loadAll(){return Je(this,e=>{e(this.sublayers)})}async queryAttachments(e,t){return Ze(this,e,t,h)}async queryFeatures(e,t){const r=await this.load(),n=Q.from(e)??r.createQuery(),a=n.outFields??[];a.includes(this.subtypeField)||(a.push(this.subtypeField),n.outFields=a);const l=await r.source.queryFeatures(n,t);if(l!=null&&l.features)for(const u of l.features)u.layer=u.sourceLayer=this.findSublayerForFeature(u);return l}async queryObjectIds(e,t){return ze(this,e,t,h)}async queryFeatureCount(e,t){return Xe(this,e,t,h)}async queryExtent(e,t){return Ke(this,e,t,h)}async queryRelatedFeatures(e,t){return We(this,e,t,h)}async queryRelatedFeaturesCount(e,t){return Ye(this,e,t,h)}write(e,t){var l;const{origin:r,layerContainerType:n,messages:a}=t;if(this.isTable){if(r==="web-scene"||r==="web-map"&&n!=="tables")return a==null||a.push(q(this,"using a table source cannot be written to web scenes and web maps")),null}else if(this.loaded&&r==="web-map"&&n==="tables")return a==null||a.push(q(this,"using a non-table source cannot be written to tables in web maps")),null;return(l=this.sublayers)!=null&&l.length?super.write(e,t):(a==null||a.push(new b("web-document-write:invalid-property",`Layer (${this.title}, ${this.id}) of type '${this.declaredClass}' has invalid value for 'sublayers' property. 'sublayers' collection should contain at least one sublayer`,{layer:this})),null)}serviceSupportsSpatialReference(e){return!!this.loaded&&et(this,e)}_getLayerDomain(e){const t=this.fieldsIndex.get(e);return t?t.domain:null}async _initLayerProperties(e){var r;this._set("source",e);const{sourceJSON:t}=e;if(t&&(this.sourceJSON=t,this.read(t,{origin:"service",url:this.parsedUrl})),this.isTable)throw new b("subtype-grouplayer:unsupported-source","SubtypeGroupLayer cannot be created using a layer with table source");if(!((r=this.subtypes)!=null&&r.length))throw new b("subtype-grouplayer:missing-subtypes","SubtypeGroupLayer must be created using a layer with subtypes");this._verifyFields(),tt(this.timeInfo,this.fieldsIndex)}async hasDataChanged(){return rt(this)}_verifyFields(){var t,r;const e=((t=this.parsedUrl)==null?void 0:t.path)??"undefined";this.objectIdField||console.log("SubtypeGroupLayer: 'objectIdField' property is not defined (url: "+e+")"),this.isTable||e.search(/\/FeatureServer\//i)!==-1||(r=this.fields)!=null&&r.some(n=>n.type==="geometry")||console.log("SubtypeGroupLayer: unable to find field of type 'geometry' in the layer 'fields' list. If you are using a map service layer, features will not have geometry (url: "+e+")")}_handleSublayersChange(e,t){t&&(t.forEach(r=>{r.parent=null}),this.handles.remove("sublayers-owner"),this._sublayerLookup.clear()),e&&(e.forEach(r=>{r.parent=this,this._sublayerLookup.set(r.subtypeCode,r)}),this._sublayersCollectionChanged=!1,this.handles.add([e.on("after-add",({item:r})=>{r.parent=this,this._sublayerLookup.set(r.subtypeCode,r)}),e.on("after-remove",({item:r})=>{r.parent=null,this._sublayerLookup.delete(r.subtypeCode)}),e.on("after-changes",()=>{this._sublayersCollectionChanged=!0})],"sublayers-owner"))}};i([s({readOnly:!0})],p.prototype,"createQueryVersion",null),i([s({readOnly:!0})],p.prototype,"editingEnabled",null),i([s({readOnly:!0})],p.prototype,"effectiveEditingEnabled",null),i([s({...C.fields,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}})],p.prototype,"fields",void 0),i([s(C.fieldsIndex)],p.prototype,"fieldsIndex",void 0),i([s(it)],p.prototype,"id",void 0),i([s({type:["show","hide","hide-children"]})],p.prototype,"listMode",void 0),i([s({value:"SubtypeGroupLayer",type:["SubtypeGroupLayer"]})],p.prototype,"operationalLayerType",void 0),i([s(C.outFields)],p.prototype,"outFields",void 0),i([s({readOnly:!0})],p.prototype,"parsedUrl",null),i([s()],p.prototype,"source",null),i([s({type:[at],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],p.prototype,"subtypes",void 0),i([s({type:_.ofType(T),json:{origins:{service:{read:{source:"subtypes",reader:(e,t,r)=>{const n=e.map(({code:a})=>{const l=new T({subtypeCode:a});return l.read(t,r),l});return new(_.ofType(T))(n)}}}},name:"layers",write:{overridePolicy(e,t,r){const n=this.originOf("sublayers"),a=M.PORTAL_ITEM;let l=!0;if(k(n)===a&&k(r.origin)>a){const u=e.some(y=>y.hasUserOverrides());l=this._sublayersCollectionChanged||u}return{enabled:l,ignoreOrigin:!0}}}}})],p.prototype,"sublayers",void 0),i([s({type:st})],p.prototype,"timeInfo",void 0),i([s({json:{origins:{"portal-item":{write:{ignoreOrigin:!0,writerEnsuresNonNull:!0}}}}})],p.prototype,"title",void 0),i([$("service","title",["name"])],p.prototype,"readTitleFromService",null),i([s({json:{read:!1}})],p.prototype,"type",void 0),p=i([L(ct)],p);const bt=p;export{bt as default};