import{cT as k,cU as C,cV as A,cW as I}from"./index-b6b7583b.js";import{a as V,b as x,d as O}from"./PointCloudUniqueValueRenderer-58552d23.js";function U(n,o,d,u){const{rendererJSON:i,isRGBRenderer:p}=n;let t=null,s=null;if(o&&p)t=o;else if(o&&(i==null?void 0:i.type)==="pointCloudUniqueValueRenderer"){s=V.fromJSON(i);const e=s.colorUniqueValueInfos;t=new Uint8Array(3*u);const a=m(s.fieldTransformType);for(let r=0;r<u;r++){const c=(a?a(o[r]):o[r])+"";for(let l=0;l<e.length;l++)if(e[l].values.includes(c)){t[3*r]=e[l].color.r,t[3*r+1]=e[l].color.g,t[3*r+2]=e[l].color.b;break}}}else if(o&&(i==null?void 0:i.type)==="pointCloudStretchRenderer"){s=x.fromJSON(i);const e=s.stops;t=new Uint8Array(3*u);const a=m(s.fieldTransformType);for(let r=0;r<u;r++){const c=a?a(o[r]):o[r],l=e.length-1;if(c<e[0].value)t[3*r]=e[0].color.r,t[3*r+1]=e[0].color.g,t[3*r+2]=e[0].color.b;else if(c>=e[l].value)t[3*r]=e[l].color.r,t[3*r+1]=e[l].color.g,t[3*r+2]=e[l].color.b;else for(let f=1;f<e.length;f++)if(c<e[f].value){const b=(c-e[f-1].value)/(e[f].value-e[f-1].value);t[3*r]=e[f].color.r*b+e[f-1].color.r*(1-b),t[3*r+1]=e[f].color.g*b+e[f-1].color.g*(1-b),t[3*r+2]=e[f].color.b*b+e[f-1].color.b*(1-b);break}}}else if(o&&(i==null?void 0:i.type)==="pointCloudClassBreaksRenderer"){s=O.fromJSON(i);const e=s.colorClassBreakInfos;t=new Uint8Array(3*u);const a=m(s.fieldTransformType);for(let r=0;r<u;r++){const c=a?a(o[r]):o[r];for(let l=0;l<e.length;l++)if(c>=e[l].minValue&&c<=e[l].maxValue){t[3*r]=e[l].color.r,t[3*r+1]=e[l].color.g,t[3*r+2]=e[l].color.b;break}}}else t=new Uint8Array(3*u).fill(255);if(d&&s&&s.colorModulation){const e=s.colorModulation.minValue,a=s.colorModulation.maxValue,r=.3;for(let c=0;c<u;c++){const l=d[c],f=l>=a?1:l<=e?r:r+(1-r)*(l-e)/(a-e);t[3*c]=f*t[3*c],t[3*c+1]=f*t[3*c+1],t[3*c+2]=f*t[3*c+2]}}return t}function B(n,o){if(n.encoding==null||n.encoding===""){const d=k(o,n);if(d.vertexAttributes.position==null)return;const u=C(o,d.vertexAttributes.position),i=d.header.fields,p=[i.offsetX,i.offsetY,i.offsetZ],t=[i.scaleX,i.scaleY,i.scaleZ],s=u.length/3,e=new Float64Array(3*s);for(let a=0;a<s;a++)e[3*a]=u[3*a]*t[0]+p[0],e[3*a+1]=u[3*a+1]*t[1]+p[1],e[3*a+2]=u[3*a+2]*t[2]+p[2];return e}if(n.encoding==="lepcc-xyz")return A(o).result}function M(n,o,d){return n!=null&&n.attributeInfo.useElevation?o?R(o,d):null:n!=null&&n.attributeInfo.storageInfo?I(n.attributeInfo.storageInfo,n.buffer,d):null}function R(n,o){const d=new Float64Array(o);for(let u=0;u<o;u++)d[u]=n[3*u+2];return d}function F(n,o,d,u,i){const p=n.length/3;let t=0;for(let s=0;s<p;s++){let e=!0;for(let a=0;a<u.length&&e;a++){const{filterJSON:r}=u[a],c=i[a].values[s];switch(r.type){case"pointCloudValueFilter":{const l=r.mode==="exclude";r.values.includes(c)===l&&(e=!1);break}case"pointCloudBitfieldFilter":{const l=v(r.requiredSetBits),f=v(r.requiredClearBits);(c&l)===l&&!(c&f)||(e=!1);break}case"pointCloudReturnFilter":{const l=15&c,f=c>>>4&15,b=f>1,w=l===1,y=l===f;let h=!1;for(const g of r.includedReturns)if(g==="last"&&y||g==="firstOfMany"&&w&&b||g==="lastOfMany"&&y&&b||g==="single"&&!b){h=!0;break}h||(e=!1);break}}}e&&(d[t]=s,n[3*t]=n[3*s],n[3*t+1]=n[3*s+1],n[3*t+2]=n[3*s+2],o[3*t]=o[3*s],o[3*t+1]=o[3*s+1],o[3*t+2]=o[3*s+2],t++)}return t}function m(n){switch(n){default:case null:case"none":return o=>o;case"low-four-bit":return o=>15&o;case"high-four-bit":return o=>(240&o)>>4;case"absolute-value":return o=>Math.abs(o);case"modulo-ten":return o=>o%10}}function v(n){let o=0;for(const d of n||[])o|=1<<d;return o}export{R as a,M as c,F as f,U as i,B as u};
