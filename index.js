(()=>{"use strict";var t={635:(t,n,o)=>{var e=o(962);function r(){(0,e.k)()}Object.assign(window,{main:r})},962:(t,n,o)=>{o.d(n,{k:()=>c});var e=o(994),r=o(558),u=o(621);function c(){const t=(0,e.Y)();let n;for(;(n=(0,r.p)(t)).length>0;)(0,u.M)(t,n);console.log("I don't know what to do!")}},981:(t,n,o)=>{o.d(n,{r:()=>u,v:()=>r});var e=o(16);function r(t){return c(t.row,t.completedRows,"EqualRow",void 0,t.coordinates[1])}function u(t){return c(t.column,t.completedColumns,"EqualColumn",t.coordinates[0],void 0)}function c(t,n,o,r,u){if(0===n.length)return[];let c=-1,i=-1;for(let n=0;n<t.length;n++)if(0===t[n])if(-1===c)c=n;else{if(-1!==i)return[];i=n}if(-1===c||-1===i)return[];let l=[];for(l of n){let n=[...t];if(n[c]=l[c],n[i]=l[i],n.join("")===l.join(""))return[{coordinates:[r??c,u??c],count:(0,e.u)(l[c]),createdBy:o},{coordinates:[r??i,u??i],count:(0,e.u)(l[i]),createdBy:o}]}return[]}},35:(t,n,o)=>{function e(t){return u(t.row,"Row",void 0,t.coordinates[1])}function r(t){return u(t.column,"Column",t.coordinates[0],void 0)}function u(t,n,o,e){const r=c(t);if(!r)return[];const u=[];for(let c=0;c<t.length;c++){const i=undefined;0===t[c]&&u.push({coordinates:[o??c,e??c],count:r,createdBy:n})}return u}function c(t){let n=0,o=0;for(let e of t)1===e?n++:2===e&&o++;return n===t.length/2?2:o===t.length/2&&1}o.d(n,{OM:()=>r,Uj:()=>e})},18:(t,n,o)=>{o.d(n,{_:()=>r});var e=o(16);function r(t){const n=t.plus,o=t.coordinates,e=u(n.leftBy,n.rightBy[0])||u(n.rightBy,n.leftBy[0])||u(n.upBy,n.downBy[0])||u(n.downBy,n.upBy[0]);return e?[{coordinates:o,count:e,createdBy:"Plus"}]:[]}function u(t,n){return!(![t[1],n].includes(t[0])||0===t[0])&&(0,e.u)(t[0])}},558:(t,n,o)=>{o.d(n,{p:()=>s});var e=o(474),r=o(12),u=o(18),c=o(35),i=o(981);const l=[u._,c.Uj,c.OM,i.v,i.r];function s(t){let n=t.length;const o=[],u=[];for(let[c,i]of(0,r.T)(n)){if(0!==t[i][c]||u.includes(c+" "+i))continue;const n=(0,e.X)(t,[c,i]);let r=!1;for(let t of l){for(let e of t(n))u.includes(e.coordinates.join(" "))||(o.push(e),u.push(e.coordinates.join(" ")),r=!0);if(r)break}}return o}},474:(t,n,o)=>{o.d(n,{X:()=>r});var e=o(645);function r(t,n){const[o,r]=n,c=(0,e.L)(t);return{coordinates:n,plus:u(t,n),row:t[r],column:c[o],completedRows:i(t),completedColumns:i(c)}}function u(t,n){const[o,e]=n;return{leftBy:[c(t,o-1,e),c(t,o-2,e)],rightBy:[c(t,o+1,e),c(t,o+2,e)],upBy:[c(t,o,e-1),c(t,o,e-2)],downBy:[c(t,o,e+1),c(t,o,e+2)]}}function c(t,n,o){return n<0||o<0||n>=t.length||o>=t.length?0:t[o][n]}function i(t){const n=[];t:for(let o of t){for(let t of o)if(0===t)continue t;n.push(o)}return n}},16:(t,n,o)=>{function e(t){return 3^t}o.d(n,{u:()=>e})},12:(t,n,o)=>{function*e(t){for(let n=0;n<t;n++)for(let o=0;o<t;o++)yield[o,n]}o.d(n,{T:()=>e})},621:(t,n,o)=>{o.d(n,{M:()=>r});var e=o(718);function r(t,n){for(let o of n){const[n,r]=o.coordinates,u=o.count;for(let t=0;t<u;t++)(0,e.V)([n,r]);t[r][n]=u}}},249:()=>{},645:(t,n,o)=>{function e(t){return t[0].map(((n,o)=>t.map((t=>t[o]))))}o.d(n,{L:()=>e})},718:(t,n,o)=>{function e(t){const n=r(...t),o=new MouseEvent("mousedown",{bubbles:!0});n.dispatchEvent(o)}function r(t,n){return document.querySelector(`td[data-x="${t}"][data-y="${n}"]`)}o.d(n,{V:()=>e})},994:(t,n,o)=>{function e(){let t=[];const n=document.getElementById("grid");if(!n)return t;const o=n.getElementsByTagName("tr");for(let n of o){const o=n.getElementsByClassName("tile");t.push([]);for(let n of o){let o=0;n.classList.contains("tile-1")?o=1:n.classList.contains("tile-2")&&(o=2),t.at(-1).push(o)}}return t}o.d(n,{Y:()=>e})}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var u=n[e]={exports:{}};return t[e](u,u.exports,o),u.exports}o.d=(t,n)=>{for(var e in n)o.o(n,e)&&!o.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})},o.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),o(635),o(962),o(718),o(994),o(981),o(35),o(18),o(558),o(474),o(16),o(12),o(621),o(249);var e=o(645)})();