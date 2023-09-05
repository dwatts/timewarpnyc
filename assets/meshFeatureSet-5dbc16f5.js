import{c5 as le,mp as S,ae as m,jh as Z,gC as te,bx as y,f9 as Le,aQ as oe,bn as ce,by as F,n6 as qe,nb as Qe,ai as C,fa as Ke,b5 as et,fC as tt,ay as d,az as x,aB as je,gj as nt,aL as rt,iN as Oe,iM as ue,nc as _e,kt as Y,iU as pe,iV as fe,iW as he,iQ as me,iR as ge,iS as de,f8 as ke,iX as xe,kH as U,kC as q,d3 as ot,nd as ye,d4 as De,ne as st,iz as se,nf as it,iC as at,f7 as lt,iH as Ce,lp as Te,ck as ct,fp as ut,cl as pt,ff as ft,aZ as ht,ng as mt,aA as gt,nh as dt,bt as xt,bD as yt,aN as wt,bz as vt,gT as bt,jr as we}from"./index-b6b7583b.js";import{m as ze}from"./MeshGeoreferencedRelativeVertexSpace-f0f9ba44.js";import{p as ie,m as Q}from"./MeshLocalVertexSpace-63a2f14c.js";import{I as Ie,o as ne,r as re,D as At,O as $t,q as St,N as V}from"./georeference-38922ba9.js";import{o as ve,h as Rt,m as Ft,i as Mt,a as Et}from"./External-9aabde69.js";function Pt({xmin:e,xmax:t,ymin:n,ymax:r,zmin:o,zmax:s},i,l,c){o??(o=0),s??(s=0),be??(be=new Float64Array(24));const a=be;return a[0]=e,a[1]=n,a[2]=o,a[3]=e,a[4]=r,a[5]=o,a[6]=t,a[7]=r,a[8]=o,a[9]=t,a[10]=n,a[11]=o,a[12]=e,a[13]=n,a[14]=s,a[15]=e,a[16]=r,a[17]=s,a[18]=t,a[19]=r,a[20]=s,a[21]=t,a[22]=n,a[23]=s,Ie({positions:a,transform:i,vertexSpace:l,inSpatialReference:c,outSpatialReference:c,outPositions:a,local:!1}),H(a,c)}let be=null;function H(e,t){let n=1/0,r=1/0,o=1/0,s=-1/0,i=-1/0,l=-1/0;const c=e.length;let a=0;for(;a<c;){const u=e[a++],p=e[a++],f=e[a++];n=Math.min(n,u),r=Math.min(r,p),o=Math.min(o,f),s=Math.max(s,u),i=Math.max(i,p),l=Math.max(l,f)}return new le({xmin:n,ymin:r,zmin:o,xmax:s,ymax:i,zmax:l,spatialReference:t})}const W="esri.geometry.support.meshUtils.centerAt";function Lt(e,t,n){if(!e.vertexAttributes||!e.vertexAttributes.position)return;const{vertexSpace:r}=e,o=(n==null?void 0:n.origin)??e.origin;r.isRelative?(ne(r,W,n),jt(e,t,o)):re(e.spatialReference,n)?Ot(e,t,o):_t(e,t,o)}function jt(e,t,n){const{vertexSpace:r}=e;if(!r.isRelative)return;const o=Ue,s=Ne;if(!S(t,s,e.spatialReference))return void m.getLogger(W).error(`Failed to project centerAt location (wkid:${t.spatialReference.wkid}) to mesh spatial reference (wkid:${e.spatialReference.wkid}). Projection may be possible after calling projection.load().`);if(!S(n,o,e.spatialReference)){const c=e.origin;o[0]=c.x,o[1]=c.y,o[2]=c.z,m.getLogger(W).error(`Failed to project specified origin (wkid:${n.spatialReference.wkid}) to mesh spatial reference (wkid:${e.spatialReference.wkid}). Projection may be possible after calling projection.load().`)}const i=Z(Dt,s,o),l=r.origin;r.origin=te(y(),l,i)}function Ot(e,t,n){const r=At(e.vertexAttributes,n,{geographic:!0}),{position:o,normal:s,tangent:i}=$t(r,t,{geographic:!0});e.vertexAttributes.position=o,e.vertexAttributes.normal=s,e.vertexAttributes.tangent=i,e.vertexAttributesChanged()}function _t(e,t,n){const r=Ue,o=Ne;if(S(t,o,e.spatialReference)){if(!S(n,r,e.spatialReference)){const s=e.origin;r[0]=s.x,r[1]=s.y,r[2]=s.z,m.getLogger(W).error(`Failed to project specified origin (wkid:${n.spatialReference.wkid}) to mesh spatial reference (wkid:${e.spatialReference.wkid}). Projection may be possible after calling projection.load().`)}kt(e.vertexAttributes.position,o,r),e.vertexAttributesChanged()}else m.getLogger(W).error(`Failed to project centerAt location (wkid:${t.spatialReference.wkid}) to mesh spatial reference (wkid:${e.spatialReference.wkid}). Projection may be possible after calling projection.load().`)}function kt(e,t,n){if(e)for(let r=0;r<e.length;r+=3)for(let o=0;o<3;o++)e[r+o]+=t[o]-n[o]}const Ne=y(),Ue=y(),Dt=y();async function Ct(e,t,n){const{source:r}=t,{loadGLTFMesh:o}=await Le(oe(()=>import("./loadGLTFMesh-7e1bfdaf.js"),["assets/loadGLTFMesh-7e1bfdaf.js","assets/index-b6b7583b.js","assets/index-abd0b88c.css","assets/georeference-38922ba9.js","assets/MeshGeoreferencedRelativeVertexSpace-f0f9ba44.js","assets/MeshLocalVertexSpace-63a2f14c.js"]),n),s=await zt(r,n);ce(n);const i=o(new F({x:0,y:0,z:0,spatialReference:e.spatialReference}),s.url,{resolveFile:Tt(s),useTransform:!0,signal:n==null?void 0:n.signal});i.then(()=>s.dispose(),()=>s.dispose());const{vertexAttributes:l,components:c}=await i;e.vertexAttributes=l,e.components=c}function Tt(e){const t=qe(e.url);return n=>{const r=Qe(n,t,t),o=r?r.replace(/^ *\.\//,""):null;return(o?e.files.get(o):null)??n}}async function zt(e,t){if(Array.isArray(e)){if(!e.length)throw new C("mesh-load-external:missing-assets","There must be at least one file to load");return e[0]instanceof File?Nt(e):Ut(e,t)}return Ve(e)}async function It(e,t){const{parts:n}=e;if(n.length===1)return new K(n[0].partUrl);const r=await e.toBlob(t);return ce(t),K.fromBlob(r)}function Ve(e){return K.fromBlob(e)}function Nt(e){return Ge(e.map(t=>({name:t.name,mimeType:t.type,source:Ve(t)})))}async function Ut(e,t){const n=await Ke(e.map(async r=>{const o=await It(r);return ce(t),{name:r.assetName,mimeType:r.assetMimeType,source:o}}));if(et(t))throw n.forEach(r=>r.source.dispose()),tt();return Ge(n)}const Vt=/^(model\/gltf\+json)|(model\/gltf-binary)$/,Gt=/\.(gltf|glb)/i;function Ge(e){const t=new Map;let n=null;for(const{name:r,mimeType:o,source:s}of e)(n==null||Vt.test(o)||Gt.test(r))&&(n=s.url),t.set(r,s.url),s.files.forEach((i,l)=>t.set(l,i));if(n==null)throw new C("mesh-load-external:missing-files","Missing files to load external mesh source");return new K(n,()=>e.forEach(({source:r})=>r.dispose()),t)}let K=class Be{constructor(t,n=()=>{},r=new Map){this.url=t,this.dispose=n,this.files=r}static fromBlob(t){const n=URL.createObjectURL(t);return new Be(n,()=>URL.revokeObjectURL(n))}},L=class extends nt{constructor(){super(),this.externalSources=new rt,this._explicitDisplaySource=null}get displaySource(){return this._explicitDisplaySource??this._implicitDisplaySource}set displaySource(t){if(t!=null&&!ve(t))throw new Error("Cannot use this source for display: it is not in a supported format.");this._explicitDisplaySource=t,t&&this.externalSources.every(n=>!Rt(n,t))&&this.externalSources.add(t)}clearSources(){this.displaySource=null,this.externalSources.removeAll()}getExternalSourcesOnService(t){return this.externalSources.items.filter(n=>Ft(n,t))}get _implicitDisplaySource(){return this.externalSources.find(ve)}};d([x()],L.prototype,"externalSources",void 0),d([x()],L.prototype,"displaySource",null),d([x()],L.prototype,"_implicitDisplaySource",null),d([x()],L.prototype,"_explicitDisplaySource",void 0),L=d([je("esri.geometry.support.meshUtils.Metadata")],L);const Bt="esri.geometry.support.meshUtils.offset";function Zt(e,t,n){if(!e.vertexAttributes||!e.vertexAttributes.position)return;const{vertexSpace:r}=e;r.isRelative?(ne(r,Bt,n),Wt(r,t)):re(e.spatialReference,n)?Jt(e,t):Xt(e,t)}function Wt(e,t){const n=e.origin;e.origin=te(y(),n,t)}function Jt(e,t){const n=e.spatialReference,r=e.vertexAttributes.position,o=e.vertexAttributes.normal,s=e.vertexAttributes.tangent,i=new Float64Array(r.length),l=o!=null?new Float32Array(o.length):null,c=s!=null?new Float32Array(s.length):null,a=e.extent.center,u=Ht;Oe(n,[a.x,a.y,a.z],Ae,ue(n)),_e($e,Ae),Y(u,t,$e),pe(r,n,i),o!=null&&l!=null&&fe(o,r,i,n,l),s!=null&&c!=null&&he(s,r,i,n,c),Ze(i,u),me(i,r,n),o!=null&&l!=null&&ge(l,r,i,n,o),s!=null&&c!=null&&de(c,r,i,n,s),e.vertexAttributesChanged()}function Xt(e,t){Ze(e.vertexAttributes.position,t),e.vertexAttributesChanged()}function Ze(e,t){if(e)for(let n=0;n<e.length;n+=3)for(let r=0;r<3;r++)e[n+r]+=t[r]}const Ht=y(),Ae=ke(),$e=xe();function Yt(){const{faceDescriptions:e,faceVertexOffsets:t,uvScales:n}=on,r=4*e.length,o=new Float64Array(3*r),s=new Float32Array(3*r),i=new Float32Array(2*r),l=new Uint32Array(2*e.length*3);let c=0,a=0,u=0,p=0;for(let f=0;f<e.length;f++){const h=e[f],M=c/3;for(const A of t)l[p++]=M+A;const G=h.corners;for(let A=0;A<4;A++){const j=G[A];let v=0;i[u++]=.25*n[A][0]+h.uvOrigin[0],i[u++]=h.uvOrigin[1]-.25*n[A][1];for(let $=0;$<3;$++)h.axis[$]!==0?(o[c++]=.5*h.axis[$],s[a++]=h.axis[$]):(o[c++]=.5*j[v++],s[a++]=0)}}return{position:o,normal:s,uv:i,faces:l}}function qt(e,t){const n=e.components[0],r=n.faces,o=sn[t],s=6*o,i=new Array(6),l=new Array(r.length-6);let c=0,a=0;for(let u=0;u<r.length;u++)u>=s&&u<s+6?i[c++]=r[u]:l[a++]=r[u];if(e.vertexAttributes.uv!=null){const u=new Float32Array(e.vertexAttributes.uv),p=4*o*2,f=[0,1,1,1,1,0,0,0];for(let h=0;h<f.length;h++)u[p+h]=f[h];e.vertexAttributes.uv=u}return e.components=[new U({faces:i,material:n.material}),new U({faces:l})],e}function Qt(e=0){const t=Math.round(8*2**e),n=2*t,r=(t-1)*(n+1)+2*n,o=new Float64Array(3*r),s=new Float32Array(3*r),i=new Float32Array(2*r),l=new Uint32Array(3*((t-1)*n*2));let c=0,a=0,u=0,p=0;for(let f=0;f<=t;f++){const h=f/t*Math.PI+.5*Math.PI,M=Math.cos(h),G=Math.sin(h);g[2]=G;const A=f===0||f===t,j=A?n-1:n;for(let v=0;v<=j;v++){const $=v/j*2*Math.PI;g[0]=-Math.sin($)*M,g[1]=Math.cos($)*M;for(let E=0;E<3;E++)o[c]=.5*g[E],s[c]=g[E],++c;i[a++]=(v+(A?.5:0))/n,i[a++]=f/t,f!==0&&v!==n&&(f!==t&&(l[u++]=p,l[u++]=p+1,l[u++]=p-n),f!==1&&(l[u++]=p,l[u++]=p-n,l[u++]=p-n-1)),p++}}return{position:o,normal:s,uv:i,faces:l}}function Kt(e=0){const n=Math.round(16*2**e),r=(5-1)*(n+1)+2*n,o=new Float64Array(3*r),s=new Float32Array(3*r),i=new Float32Array(2*r),l=new Uint32Array(3*(4*n));let c=0,a=0,u=0,p=0,f=0;for(let h=0;h<=5;h++){const M=h===0||h===5,G=h<=1||h>=5-1,A=h===2||h===4,j=M?n-1:n;for(let v=0;v<=j;v++){const $=v/j*2*Math.PI,E=M?0:.5;g[0]=E*Math.sin($),g[1]=E*-Math.cos($),g[2]=h<=2?.5:-.5;for(let O=0;O<3;O++)o[c++]=g[O],s[a++]=G?O===2?h<=1?1:-1:0:O===2?0:g[O]/E;i[u++]=(v+(M?.5:0))/n,i[u++]=h<=1?1*h/3:h<=3?1*(h-2)/3+1/3:1*(h-4)/3+2/3,A||h===0||v===n||(h!==5&&(l[p++]=f,l[p++]=f+1,l[p++]=f-n),h!==1&&(l[p++]=f,l[p++]=f-n,l[p++]=f-n-1)),f++}}return{position:o,normal:s,uv:i,faces:l}}function en(e,t){const n=typeof t=="number"?t:t!=null?t.width:1,r=typeof t=="number"?t:t!=null?t.height:1;switch(e){case"up":case"down":return{width:n,depth:r};case"north":case"south":return{width:n,height:r};case"east":case"west":return{depth:n,height:r}}}function tn(e){const t=B.facingAxisOrderSwap[e],n=B.position,r=B.normal,o=new Float64Array(n.length),s=new Float32Array(r.length);let i=0;for(let l=0;l<4;l++){const c=i;for(let a=0;a<3;a++){const u=t[a],p=Math.abs(u)-1,f=u>=0?1:-1;o[i]=n[c+p]*f,s[i]=r[c+p]*f,i++}}return{position:o,normal:s,uv:new Float32Array(B.uv),faces:new Uint32Array(B.faces),isPlane:!0}}const _=1,k=2,D=3,B={position:[-.5,-.5,0,.5,-.5,0,.5,.5,0,-.5,.5,0],normal:[0,0,1,0,0,1,0,0,1,0,0,1],uv:[0,1,1,1,1,0,0,0],faces:[0,1,2,0,2,3],facingAxisOrderSwap:{east:[D,_,k],west:[-D,-_,k],north:[-_,D,k],south:[_,-D,k],up:[_,k,D],down:[_,-k,-D]}};function J(e,t,n){e.isPlane||nn(e),rn(e,n==null?void 0:n.size);const{vertexAttributes:r,vertexSpace:o,transform:s}=St(e,t,n);return{vertexAttributes:new q({...r,uv:e.uv}),vertexSpace:o,transform:s,components:[new U({faces:e.faces,material:n&&n.material||null})],spatialReference:t.spatialReference}}function nn(e){for(let t=0;t<e.position.length;t+=3)e.position[t+2]+=.5}function rn(e,t){if(t==null)return;const n=typeof t=="number"?[t,t,t]:[t.width!=null?t.width:1,t.depth!=null?t.depth:1,t.height!=null?t.height:1];P[0]=n[0],P[4]=n[1],P[8]=n[2];for(let r=0;r<e.position.length;r+=3){for(let o=0;o<3;o++)g[o]=e.position[r+o];Y(g,g,P);for(let o=0;o<3;o++)e.position[r+o]=g[o]}if(n[0]!==n[1]||n[1]!==n[2]){P[0]=1/n[0],P[4]=1/n[1],P[8]=1/n[2];for(let r=0;r<e.normal.length;r+=3){for(let o=0;o<3;o++)g[o]=e.normal[r+o];Y(g,g,P),ot(g,g);for(let o=0;o<3;o++)e.normal[r+o]=g[o]}}}const on={faceDescriptions:[{axis:[0,-1,0],uvOrigin:[0,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[1,0,0],uvOrigin:[.25,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,1,0],uvOrigin:[.5,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[-1,0,0],uvOrigin:[.75,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[0,0,1],uvOrigin:[0,.375],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,0,-1],uvOrigin:[0,.875],corners:[[-1,1],[1,1],[1,-1],[-1,-1]]}],uvScales:[[0,0],[1,0],[1,1],[0,1]],faceVertexOffsets:[0,1,2,0,2,3]},sn={south:0,east:1,north:2,west:3,up:4,down:5},g=y(),P=xe(),We="esri.geometry.support.meshUtils.rotate";function an(e,t,n){if(!e.vertexAttributes||!e.vertexAttributes.position||t[3]===0)return;const{spatialReference:r,vertexSpace:o}=e;if(o.isRelative){ne(o,We,n);const s=(n==null?void 0:n.origin)??e.origin;e.transform??(e.transform=new V),ln(e.transform,o,t,s)}else{const s=(n==null?void 0:n.origin)??e.origin;re(r,n)?cn(e,t,s):un(e,t,s)}}function ln(e,t,n,r){const o=t.origin,s=De(T,r.x,r.y,r.z??0),i=Z(T,s,o);e.applyLocalInverse(i,Se),e.rotation=st(e.rotation,n,ye()),e.applyLocalInverse(i,i),Z(i,i,Se),e.translation=te(y(),e.translation,i)}function cn(e,t,n){const r=e.spatialReference,o=ue(r),s=Je;S(n,s,o)||S(e.origin,s,o);const i=e.vertexAttributes.position,l=e.vertexAttributes.normal,c=e.vertexAttributes.tangent,a=new Float64Array(i.length),u=l!=null?new Float32Array(l.length):null,p=c!=null?new Float32Array(c.length):null;Oe(o,s,ee,o),_e(Fe,ee);const f=Re;Y(se(Re),se(t),Fe),f[3]=t[3],pe(i,r,a),l!=null&&u!=null&&fe(l,i,a,r,u),c!=null&&p!=null&&he(c,i,a,r,p),I(a,f,3,s),me(a,i,r),l!=null&&u!=null&&(I(u,f,3),ge(u,i,a,r,l)),c!=null&&p!=null&&(I(p,f,4),de(p,i,a,r,c)),e.vertexAttributesChanged()}function un(e,t,n){const r=Je;if(!S(n,r,e.spatialReference)){const o=e.origin;r[0]=o.x,r[1]=o.y,r[2]=o.z,m.getLogger(We).error(`Failed to project specified origin (wkid:${n.spatialReference.wkid}) to mesh spatial reference (wkid:${e.spatialReference.wkid}). Projection may be possible after calling projection.load().`)}I(e.vertexAttributes.position,t,3,r),I(e.vertexAttributes.normal,t,3),I(e.vertexAttributes.tangent,t,4),e.vertexAttributesChanged()}function I(e,t,n,r=Ce){if(e!=null){it(ee,at(t),se(t));for(let o=0;o<e.length;o+=n){for(let s=0;s<3;s++)T[s]=e[o+s]-r[s];lt(T,T,ee);for(let s=0;s<3;s++)e[o+s]=T[s]+r[s]}}}const T=y(),Se=y(),Re=ye(),ee=ke(),Fe=xe(),Je=y(),Xe="esri.geometry.support.meshUtils.scale";function pn(e,t,n){if(!e.vertexAttributes||!e.vertexAttributes.position)return;const{spatialReference:r,vertexSpace:o}=e;if(o.isRelative){ne(o,Xe,n);const s=(n==null?void 0:n.origin)??e.origin;e.transform??(e.transform=new V),fn(e.transform,o,t,s)}else{const s=re(r,n),i=(n==null?void 0:n.origin)??e.origin;s?hn(e,t,i):mn(e,t,i)}}function fn(e,t,n,r){const o=t.origin,s=De(z,r.x,r.y,r.z),i=Z(z,s,o);e.applyLocalInverse(i,Me);const l=Te(y(),e.scale,n);e.scale=l,e.applyLocalInverse(i,i),Z(i,i,Me),e.translation=te(y(),e.translation,i)}function hn(e,t,n){const r=e.spatialReference,o=ue(r),s=Ye;S(n,s,o)||S(e.origin,s,o);const i=e.vertexAttributes.position,l=e.vertexAttributes.normal,c=e.vertexAttributes.tangent,a=new Float64Array(i.length),u=l!=null?new Float32Array(l.length):null,p=c!=null?new Float32Array(c.length):null;pe(i,r,a),l!=null&&u!=null&&fe(l,i,a,r,u),c!=null&&p!=null&&he(c,i,a,r,p),He(a,t,s),me(a,i,r),l!=null&&u!=null&&ge(u,i,a,r,l),c!=null&&p!=null&&de(p,i,a,r,c),e.vertexAttributesChanged()}function mn(e,t,n){const r=Ye;if(!S(n,r,e.spatialReference)){const o=e.origin;r[0]=o.x,r[1]=o.y,r[2]=o.z,m.getLogger(Xe).error(`Failed to project specified origin (wkid:${n.spatialReference.wkid}) to mesh spatial reference (wkid:${e.spatialReference.wkid}). Projection may be possible after calling projection.load().`)}He(e.vertexAttributes.position,t,r),e.vertexAttributesChanged()}function He(e,t,n=Ce){if(e)for(let r=0;r<e.length;r+=3){for(let o=0;o<3;o++)z[o]=e[r+o]-n[o];Te(z,z,t);for(let o=0;o<3;o++)e[r+o]=z[o]+n[o]}}const z=y(),Me=y(),Ye=y();var b;const R="esri.geometry.Mesh",gn={base:null,key:"type",defaultKeyValue:"georeferenced",typeMap:{georeferenced:ie,"georeferenced-relative":ze,local:Q}};let w=b=class extends ct(ut.LoadableMixin(pt(ft))){constructor(e){super(e),this.components=null,this.vertexSpace=new ie,this.transform=null,this.metadata=new L,this.hasZ=!0,this.hasM=!1,this.vertexAttributes=new q,this.type="mesh"}initialize(){(this.metadata.externalSources.length===0||this.vertexAttributes.position.length)&&(this.loadStatus="loaded"),this.when(()=>{this.handles.add(ht(()=>{var e;return{vertexAttributes:this.vertexAttributes,components:(e=this.components)==null?void 0:e.map(t=>t.clone())}},()=>this._clearSources(),{once:!0,sync:!0}))})}get hasExtent(){var e;return this.loaded?this.vertexAttributes.position.length>0&&(!this.components||this.components.length>0):((e=this.metadata.displaySource)==null?void 0:e.extent)!=null}get _transformedExtent(){const{components:e,spatialReference:t,vertexAttributes:n,vertexSpace:r}=this,o=n.position;if(o.length===0||e&&e.length===0)return new le({xmin:0,ymin:0,zmin:0,xmax:0,ymax:0,zmax:0,spatialReference:t});if(r.type==="local"){const{_untransformedExtent:s,transform:i}=this;return Pt(s,i,r,t)}if(r.type==="georeferenced-relative"){const{transform:s}=this,i=Ie({positions:o,transform:s,vertexSpace:r,inSpatialReference:t,outSpatialReference:t,local:!1});return H(i,t)}return H(o,t)}get _untransformedExtent(){return H(this.vertexAttributes.position,this.spatialReference)}get anchor(){const{vertexSpace:e}=this;if(e.isRelative)return e.getOriginPoint(this.spatialReference);const{center:t,zmin:n}=this._transformedExtent;return new F({x:t.x,y:t.y,z:n,spatialReference:this.spatialReference})}get origin(){const{vertexSpace:e}=this;return e.isRelative?e.getOriginPoint(this.spatialReference):this._transformedExtent.center}get extent(){var e,t;return this.loaded||((t=(e=this.metadata)==null?void 0:e.displaySource)==null?void 0:t.extent)==null?this._transformedExtent:this.metadata.displaySource.extent.clone()}addComponent(e){this.loaded?(this.components||(this.components=[]),this.components.push(U.from(e)),this.notifyChange("components")):m.getLogger(this).error("addComponent()","Mesh must be loaded before applying operations")}removeComponent(e){if(this.loaded){if(this.components){const t=this.components.indexOf(e);if(t!==-1)return this.components.splice(t,1),void this.notifyChange("components")}m.getLogger(this).error("removeComponent()","Provided component is not part of the list of components")}else m.getLogger(this).error("removeComponent()","Mesh must be loaded before applying operations")}rotate(e,t,n,r){return mt(e,t,n,Ee),an(this,Ee,r),this}offset(e,t,n,r){return this.loaded?(X[0]=e,X[1]=t,X[2]=n,Zt(this,X,r),this):(m.getLogger(this).error("offset()","Mesh must be loaded before applying operations"),this)}scale(e,t){return this.loaded?(pn(this,e,t),this):(m.getLogger(this).error("scale()","Mesh must be loaded before applying operations"),this)}centerAt(e,t){return this.loaded?(Lt(this,e,t),this):(m.getLogger(this).error("centerAt()","Mesh must be loaded before applying operations"),this)}load(e){const{metadata:{displaySource:t}}=this;return t&&this.addResolvingPromise(Ct(this,t,e)),Promise.resolve(this)}addExternalSources(e){this.metadata.externalSources.addMany(e)}updateDisplaySource(e){this.metadata.displaySource=e}clone(){return this.cloneWithVertexSpace(this.vertexSpace.clone())}cloneWithVertexSpace(e){var r;let t=null;if(this.components){const o=new Map,s=new Map;t=this.components.map(i=>i.cloneWithDeduplication(o,s))}const n={components:t,spatialReference:this.spatialReference,vertexAttributes:this.vertexAttributes.clone(),vertexSpace:e,transform:((r=this.transform)==null?void 0:r.clone())??null,metadata:this.metadata.clone()};return new b(n)}cloneShallow(){return new b({components:this.components,spatialReference:this.spatialReference,vertexAttributes:this.vertexAttributes,vertexSpace:this.vertexSpace.clone(),transform:this.transform,metadata:this.metadata})}vertexAttributesChanged(){this.notifyChange("vertexAttributes")}async toBinaryGLTF(e){const t=oe(()=>import("./gltfexport-e3c3659e.js"),["assets/gltfexport-e3c3659e.js","assets/index-b6b7583b.js","assets/index-abd0b88c.css","assets/MeshGeoreferencedRelativeVertexSpace-f0f9ba44.js","assets/MeshLocalVertexSpace-63a2f14c.js","assets/georeference-38922ba9.js","assets/imageutils-9cee86f3.js"]),n=this.load(),r=await Promise.all([t,n]),{toBinaryGLTF:o}=r[0];return o(this,e)}get memoryUsage(){let e=0;if(e+=this.vertexAttributes.memoryUsage,this.components!=null)for(const t of this.components)e+=t.memoryUsage;return e}_clearSources(){this.metadata.clearSources()}static createBox(e,t){if(!(e instanceof F))return m.getLogger(R).error(".createBox()","expected location to be a Point instance"),null;const n=new b(J(Yt(),e,t));return t&&t.imageFace&&t.imageFace!=="all"?qt(n,t.imageFace):n}static createSphere(e,t){return e instanceof F?new b(J(Qt(t&&t.densificationFactor||0),e,t)):(m.getLogger(R).error(".createSphere()","expected location to be a Point instance"),null)}static createCylinder(e,t){return e instanceof F?new b(J(Kt(t&&t.densificationFactor||0),e,t)):(m.getLogger(R).error(".createCylinder()","expected location to be a Point instance"),null)}static createPlane(e,t){if(!(e instanceof F))return m.getLogger(R).error(".createPlane()","expected location to be a Point instance"),null;const n=(t==null?void 0:t.facing)??"up",r=en(n,t==null?void 0:t.size);return new b(J(tn(n),e,{...t,size:r}))}static createFromPolygon(e,t){if(!(e instanceof gt))return m.getLogger(R).error(".createFromPolygon()","expected polygon to be a Polygon instance"),null;const n=dt(e);return new b({vertexAttributes:new q({position:n.position}),components:[new U({faces:n.faces,shading:"flat",material:(t==null?void 0:t.material)??null})],spatialReference:e.spatialReference,vertexSpace:new ie})}static async createFromGLTF(e,t,n){if(!(e instanceof F))throw m.getLogger(R).error(".createfromGLTF()","expected location to be a Point instance"),new C("invalid-input","Expected location to be a Point instance");const{loadGLTFMesh:r}=await Le(oe(()=>import("./loadGLTFMesh-7e1bfdaf.js"),["assets/loadGLTFMesh-7e1bfdaf.js","assets/index-b6b7583b.js","assets/index-abd0b88c.css","assets/georeference-38922ba9.js","assets/MeshGeoreferencedRelativeVertexSpace-f0f9ba44.js","assets/MeshLocalVertexSpace-63a2f14c.js"]),n);return new b(await r(e,t,n))}static async createFromFiles(e,t,n){if(!(e instanceof F)){const i="Expected location to be a Point instance";throw m.getLogger(R).error(".createFromFiles()",i),new C("invalid-input",i)}const r=b.createWithExternalSource(e,t),o=n==null?void 0:n.layer;if(!o){const i="A layer is needed to convert the files";throw m.getLogger(R).error(".createFromFiles()",i),new C("invalid-input",i)}const[s]=await o.uploadAssets([r],n);return s}static createWithExternalSource(e,t,n){var f;const r=(n==null?void 0:n.extent)??null,{x:o,y:s,z:i,spatialReference:l}=e,c=((f=n==null?void 0:n.transform)==null?void 0:f.clone())??new V,a=(n==null?void 0:n.vertexSpace)??new Q({origin:[o,s,i??0]}),u={source:t,extent:r},p=new L;return p.externalSources.push(u),new b({metadata:p,transform:c,vertexSpace:a,spatialReference:l})}static createIncomplete(e,t){var a;const{x:n,y:r,z:o,spatialReference:s}=e,i=((a=t==null?void 0:t.transform)==null?void 0:a.clone())??new V,l=(t==null?void 0:t.vertexSpace)??new Q({origin:[n,r,o??0]}),c=new b({transform:i,vertexSpace:l,spatialReference:s});return c.addResolvingPromise(Promise.reject(new C("mesh-incomplete","Mesh resources are not complete"))),c}};d([x({type:[U],json:{write:!0}})],w.prototype,"components",void 0),d([x({nonNullable:!0,types:gn,constructOnly:!0,json:{write:!0}})],w.prototype,"vertexSpace",void 0),d([x({type:V,json:{write:!0}})],w.prototype,"transform",void 0),d([x({constructOnly:!0})],w.prototype,"metadata",void 0),d([x()],w.prototype,"hasExtent",null),d([x()],w.prototype,"_transformedExtent",null),d([x()],w.prototype,"_untransformedExtent",null),d([x()],w.prototype,"anchor",null),d([x()],w.prototype,"origin",null),d([x({readOnly:!0,json:{read:!1}})],w.prototype,"extent",null),d([x({readOnly:!0,json:{read:!1,write:!0,default:!0}})],w.prototype,"hasZ",void 0),d([x({readOnly:!0,json:{read:!1,write:!0,default:!1}})],w.prototype,"hasM",void 0),d([x({type:q,nonNullable:!0,json:{write:!0}})],w.prototype,"vertexAttributes",void 0),w=b=d([je(R)],w);const X=y(),Ee=ye(),Pe=w,ae=()=>m.getLogger("esri.rest.support.meshFeatureSet");function Ln(e,t,n){const r=n.features;n.features=[],delete n.geometryType;const o=xt.fromJSON(n);if(o.geometryType="mesh",!n.assetMaps)return o;const s=vn(t,n.assetMaps),i=e.sourceSpatialReference??yt.WGS84,l=n.globalIdFieldName,{outFields:c}=e,a=c!=null&&c.length>0?dn(c.includes("*")?null:new Set(c)):()=>({});for(const u of r){const p=xn(u,l,i,t,s);p!=null&&o.features.push(new wt({geometry:p,attributes:a(u)}))}return o}function dn(e){return({attributes:t})=>{if(!t)return{};if(!e)return t;for(const n in t)e.has(n)||delete t[n];return t}}function xn(e,t,n,r,o){const s=e.attributes[t],i=o.get(s);if(i==null)return ae().error("mesh-feature-set:asset-not-found","Service returned a feature which was not found in the asset map",e),null;if(!e.geometry)return ae().error("mesh-feature-set:no-geometry","Service returned a feature without geometry",e),null;const{originPoint:l,originVector:c}=yn(e,n,r),a=le.fromJSON(e.geometry);a.spatialReference=n;const u=wn(e.attributes,r),p=i.projectVertices?new ze({origin:c}):new Q({origin:c}),f=bn(i);return f?Pe.createWithExternalSource(l,f,{extent:a,transform:u,vertexSpace:p}):Pe.createIncomplete(l,{extent:a,transform:u,vertexSpace:p})}function yn({attributes:e},t,{transformFieldRoles:n}){const r=e[n.originX],o=e[n.originY],s=e[n.originZ];return{originPoint:new F({x:r,y:o,z:s,spatialReference:t}),originVector:vt(r,o,s)}}function wn(e,{transformFieldRoles:t}){return new V({translation:[e[t.translationX],-e[t.translationZ],e[t.translationY]],rotationAxis:[e[t.rotationX],e[t.rotationZ],e[t.rotationY]],rotationAngle:e[t.rotationDeg],scale:[e[t.scaleX],e[t.scaleY],e[t.scaleZ]]})}var N;function vn(e,t){const n=new Map;for(const r of t){const o=r.parentGlobalId;if(o==null)continue;const s=r.assetName,i=r.assetType,l=r.assetHash,c=r.assetURL,a=r.conversionStatus,u=r.seqNo,p=bt(i,e.supportedFormats);if(!p){ae().error("mesh-feature-set:unknown-format",`Service returned an asset of type ${i}, but it does not list it as a supported type`);continue}const f=we(n,o,()=>({projectVertices:$n(r.flags).projectVertices,files:new Map}));we(f.files,s,()=>({name:s,type:i,mimeType:p,status:An(a),parts:[]})).parts[u]={hash:l,url:c}}return n}function bn(e){const t=Array.from(e.files.values()),n=new Array;for(const r of t){if(r.status!==N.COMPLETED)return null;const o=new Array;for(const s of r.parts){if(!s)return null;o.push(new Mt(s.url,s.hash))}n.push(new Et(r.name,r.mimeType,o))}return n}function An(e){switch(e){case"COMPLETED":case"SUBMITTED":return N.COMPLETED;case"INPROGRESS":return N.PENDING;default:return N.FAILED}}function $n(e){return{projectVertices:e.includes("PROJECT_VERTICES")}}(function(e){e[e.FAILED=0]="FAILED",e[e.PENDING=1]="PENDING",e[e.COMPLETED=2]="COMPLETED"})(N||(N={}));export{vn as assetMapFromAssetMapsJSON,xn as extractMesh,Ln as meshFeatureSetFromJSON};
