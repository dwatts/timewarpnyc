import{c6 as u,c7 as b,c8 as m,c9 as f,ca as s,cb as l,cc as g,cd as B,ce as p}from"./index-6118a8e3.js";function x(c,t,n){return c.units[t][n]}function a(c,t,n,i=2,r="abbr"){return`${b(t,{minimumFractionDigits:i,maximumFractionDigits:i,signDisplay:t>0?"never":"exceptZero"})} ${x(c,n,r)}`}function h(c,t,n,i=2,r="abbr"){const o=f(t,n);return a(c,s(t,n,o),o,i,r)}function D(c,t,n,i=2,r="abbr"){const o=l(t,n);return a(c,s(t,n,o),o,i,r)}function E(c,t,n,i=2,r="abbr"){const o=g(t,n);return a(c,s(t,n,o),o,i,r)}function F(c,t,n,i=2,r="abbr"){const o=B(t,n);return a(c,s(t,n,o),o,i,r)}const e=["B","kB","MB","GB","TB"];function M(c,t){let n=t===0?0:Math.floor(Math.log(t)/Math.log(u.KILOBYTES));n=p(n,0,e.length-1);const i=b(t/u.KILOBYTES**n,{maximumFractionDigits:2});return m(c.units.bytes[e[n]],{fileSize:i})}export{a as b,F as d,h as p,M as v,D as x,E as y};