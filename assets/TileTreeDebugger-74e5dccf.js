import{ay as n,aE as $,bG as M,aN as f,bH as P,bI as x,bJ as L,bK as O,az as p,aB as A,bL as z}from"./index-b6b7583b.js";const j=[[0,179,255],[117,62,128],[0,104,255],[215,189,166],[32,0,193],[98,162,206],[102,112,129],[52,125,0],[142,118,246],[138,83,0],[92,122,255],[122,55,83],[0,142,255],[81,40,179],[0,200,244],[13,24,127],[0,170,147],[19,58,241],[22,44,35]];let a=class extends ${constructor(s){super(s),this.updating=!1,this.enablePolygons=!0,this.enableLabels=!0,this._polygons=new Map,this._labels=new Map,this._enabled=!0}initialize(){this._symbols=j.map(s=>new M({color:[s[0],s[1],s[2],.6],outline:{color:"black",width:1}})),this.update()}destroy(){this._enabled=!1,this.clear()}get enabled(){return this._enabled}set enabled(s){this._enabled!==s&&(this._enabled=s,this.update())}update(){if(!this._enabled)return void this.clear();const s=e=>{if(e.label!=null)return e.label;let l=e.lij.toString();return e.loadPriority!=null&&(l+=` (${e.loadPriority})`),l},h=this.getTiles(),y=new Array,g=new Set((this._labels.size,this._labels.keys()));h.forEach((e,l)=>{const t=e.lij.toString();g.delete(t);const S=e.lij[0],d=e.geometry;if(this.enablePolygons&&!this._polygons.has(t)){const i=new f({geometry:d,symbol:this._symbols[S%this._symbols.length]});this._polygons.set(t,i),y.push(i)}if(this.enableLabels){const i=s(e),u=l/(h.length-1),c=z(0,200,u),_=z(20,6,u)/.75,m=e.loadPriority!=null&&e.loadPriority>=h.length,w=new P([c,m?0:c,m?0:c]),v=this.view.type==="3d"?()=>new x({verticalOffset:{screenLength:40/.75},callout:{type:"line",color:"white",border:{color:"black"}},symbolLayers:[new L({text:i,halo:{color:"white",size:1/.75},material:{color:w},size:_})]}):()=>new O({text:i,haloColor:"white",haloSize:1/.75,color:w,size:_}),r=this._labels.get(t);if(r){const o=v();r.symbol!=null&&JSON.stringify(o)===JSON.stringify(r.symbol)||(r.symbol=o)}else{const o=new f({geometry:d.extent.center,symbol:v()});this._labels.set(t,o),y.push(o)}}});const b=new Array;g.forEach(e=>{const l=this._polygons.get(e);l!=null&&(b.push(l),this._polygons.delete(e));const t=this._labels.get(e);t!=null&&(b.push(t),this._labels.delete(e))}),this.view.graphics.removeMany(b),this.view.graphics.addMany(y)}clear(){this.view.graphics.removeMany(Array.from(this._polygons.values())),this.view.graphics.removeMany(Array.from(this._labels.values())),this._polygons.clear(),this._labels.clear()}};n([p({constructOnly:!0})],a.prototype,"view",void 0),n([p({readOnly:!0})],a.prototype,"updating",void 0),n([p()],a.prototype,"enabled",null),a=n([A("esri.views.support.TileTreeDebugger")],a);export{a as y};
