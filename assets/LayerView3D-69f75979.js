import{ay as t,az as l,aB as r,cf as c,b7 as h,cg as d,bn as p,ch as u}from"./index-2c565904.js";const g=o=>{let s=class extends o{constructor(){super(...arguments),this.slicePlaneEnabled=!1,this.supportsHeightUnitConversion=!1}postscript(e){super.postscript(e),c(this.layer)&&this.addResolvingPromise(this._validateHeightModelInfo())}async _validateHeightModelInfo(){const e=new AbortController,a=e.signal;this.handles.add(h(()=>e.abort())),await d(()=>{var n;return(n=this.view.defaultsFromMap)==null?void 0:n.heightModelInfoReady},a),p(a);const i=u(this.layer,this.view.heightModelInfo,this.supportsHeightUnitConversion);if(i)throw i}canResume(){const e=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return super.canResume()&&(!e||!e.minScale||!e.maxScale||e.minScale>=e.maxScale)}getSuspendInfo(){const e=super.getSuspendInfo(),a=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return a&&a.minScale&&a.maxScale&&a.minScale<a.maxScale&&(e.outsideScaleRange=!0),e}};return t([l()],s.prototype,"view",void 0),t([l()],s.prototype,"slicePlaneEnabled",void 0),s=t([r("esri.views.3d.layers.LayerView3D")],s),s};export{g as n};