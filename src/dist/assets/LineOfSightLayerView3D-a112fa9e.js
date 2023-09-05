import{aZ as h,b2 as w,ai as r,b3 as d,ax as V,b4 as _,b5 as c,aQ as u,ay as e,az as n,aB as p}from"./index-b6b7583b.js";import{n as A}from"./LayerView3D-74e1cf78.js";import{d as f}from"./LayerView-e8aa5ea9.js";const o="analysis-view-handles";let i=class extends A(f){constructor(s){super(s),this.type="line-of-sight-3d",this._analysisModule=null}initialize(){this.handles.add(h(()=>this.layer.analysis,s=>{this._destroyAnalysisView(),s!=null&&this._createAnalysisView(s)},w),o)}destroy(){this.handles.remove(o),this._destroyAnalysisView()}async whenAnalysisView(){if(this.analysisView!=null)return this.analysisView;if(this._createAnalysisViewTask!=null)return this._createAnalysisViewTask.promise;throw new r("layerview:no-analysisview-for-analysis","The analysis has not been set on the LineOfSightLayer of this layer view")}isUpdating(){return this._createAnalysisViewTask!=null||this.analysisView!=null&&this.analysisView.updating}_createAnalysisView(s){const t=d(async a=>(this.analysisView=await this._createAnalysisViewPromise(s,a),this._createAnalysisViewTask===t&&(this._createAnalysisViewTask=null),this.analysisView));this._createAnalysisViewTask=t}_destroyAnalysisView(){this.analysisView=V(this.analysisView),this._createAnalysisViewTask=_(this._createAnalysisViewTask)}async _createAnalysisViewPromise(s,t){let a=this._analysisModule;if(a==null){const y=await this._loadAnalysisModule();this._analysisModule=y,a=y}const l=new a.default({analysis:s,view:this.view,parent:this});if(await l.when(),c(t))throw l.destroy(),new r("layerview:no-analysisview-for-analysis","The analysis has not been added to the LineOfSightLayer of this layer view",{analysis:s});return l}_loadAnalysisModule(){return u(()=>import("./LineOfSightAnalysisView3D-2ff4c929.js"),["assets/LineOfSightAnalysisView3D-2ff4c929.js","assets/index-b6b7583b.js","assets/index-abd0b88c.css","assets/LineVisualElement-d09e3430.js","assets/LineOfSightAnalysisTarget-d65a5361.js","assets/elevationInfoUtils-0e06fabd.js","assets/analysisViewUtils-7a700b21.js","assets/ImageMaterial-384333e5.js","assets/PointVisualElement-5e2a5f36.js","assets/VisualElementResources-74f43321.js"])}};e([n()],i.prototype,"type",void 0),e([n()],i.prototype,"layer",void 0),e([n()],i.prototype,"analysisView",void 0),e([n()],i.prototype,"_createAnalysisViewTask",void 0),i=e([p("esri.views.3d.layers.LineOfSightLayerView3D")],i);const k=i;export{k as default};