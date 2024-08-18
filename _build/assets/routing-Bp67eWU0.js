import{N as z,a as y,g as se,p as D,u as N,q as T,e as O,z as ae,o as K,O as oe,x as ce,Q as ie,b as ue,T as le}from"./web-DuEVvOp5.js";function fe(){let e=new Set;function t(r){return e.add(r),()=>e.delete(r)}let n=!1;function s(r,a){if(n)return!(n=!1);const o={to:r,options:a,defaultPrevented:!1,preventDefault:()=>o.defaultPrevented=!0};for(const i of e)i.listener({...o,from:i.location,retry:l=>{l&&(n=!0),i.navigate(r,{...a,resolve:!1})}});return!o.defaultPrevented}return{subscribe:t,confirm:s}}let q;function H(){(!window.history.state||window.history.state._depth==null)&&window.history.replaceState({...window.history.state,_depth:window.history.length-1},""),q=window.history.state._depth}H();function Be(e){return{...e,_depth:window.history.state&&window.history.state._depth}}function Fe(e,t){let n=!1;return()=>{const s=q;H();const r=s==null?null:q-s;if(n){n=!1;return}r&&t(r)?(n=!0,window.history.go(-r)):e()}}const he=/^(?:[a-z0-9]+:)?\/\//i,de=/^\/+|(\/)\/+$/g,pe="http://sr";function b(e,t=!1){const n=e.replace(de,"$1");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function j(e,t,n){if(he.test(t))return;const s=b(e),r=n&&b(n);let a="";return!r||t.startsWith("/")?a=s:r.toLowerCase().indexOf(s.toLowerCase())!==0?a=s+r:a=r,(a||"/")+b(t,!a)}function me(e,t){if(e==null)throw new Error(t);return e}function ge(e,t){return b(e).replace(/\/*(\*.*)?$/g,"")+b(t)}function Q(e){const t={};return e.searchParams.forEach((n,s)=>{t[s]=n}),t}function ye(e,t,n){const[s,r]=e.split("/*",2),a=s.split("/").filter(Boolean),o=a.length;return i=>{const l=i.split("/").filter(Boolean),f=l.length-o;if(f<0||f>0&&r===void 0&&!t)return null;const h={path:o?"":"/",params:{}},m=p=>n===void 0?void 0:n[p];for(let p=0;p<o;p++){const d=a[p],v=l[p],w=d[0]===":",E=w?d.slice(1):d;if(w&&$(v,m(E)))h.params[E]=v;else if(w||!$(v,d))return null;h.path+=`/${v}`}if(r){const p=f?l.slice(-f).join("/"):"";if($(p,m(r)))h.params[r]=p;else return null}return h}}function $(e,t){const n=s=>s.localeCompare(e,void 0,{sensitivity:"base"})===0;return t===void 0?!0:typeof t=="string"?n(t):typeof t=="function"?t(e):Array.isArray(t)?t.some(n):t instanceof RegExp?t.test(e):!1}function ve(e){const[t,n]=e.pattern.split("/*",2),s=t.split("/").filter(Boolean);return s.reduce((r,a)=>r+(a.startsWith(":")?2:3),s.length-(n===void 0?0:1))}function X(e){const t=new Map,n=se();return new Proxy({},{get(s,r){return t.has(r)||z(n,()=>t.set(r,y(()=>e()[r]))),t.get(r)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}function we(e,t){const n=new URLSearchParams(e);Object.entries(t).forEach(([r,a])=>{a==null||a===""?n.delete(r):n.set(r,String(a))});const s=n.toString();return s?`?${s}`:""}function G(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),s=e.slice(t.index+t[0].length);const r=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(s);)r.push(n+=t[1]),s=s.slice(t[0].length);return G(s).reduce((a,o)=>[...a,...r.map(i=>i+o)],[])}const Re=100,Pe=T(),J=T(),S=()=>me(D(Pe),"<A> and 'use' router primitives can be only used inside a Route."),xe=()=>D(J)||S().base,_e=e=>{const t=xe();return y(()=>t.resolvePath(e()))},$e=e=>{const t=S();return y(()=>{const n=e();return n!==void 0?t.renderPath(n):n})},be=()=>S().navigatorFactory(),Se=()=>S().location,Ie=()=>S().params,qe=()=>{const e=Se(),t=be(),n=(s,r)=>{const a=N(()=>e.pathname+we(e.search,s)+e.hash);t(a,{scroll:!1,resolve:!1,...r})};return[e.query,n]};function Ee(e,t=""){const{component:n,load:s,children:r,info:a}=e,o=!r||Array.isArray(r)&&!r.length,i={key:e,component:n,load:s,info:a};return V(e.path).reduce((l,f)=>{for(const h of G(f)){const m=ge(t,h);let p=o?m:m.split("/*",1)[0];p=p.split("/").map(d=>d.startsWith(":")||d.startsWith("*")?d:encodeURIComponent(d)).join("/"),l.push({...i,originalPath:f,pattern:p,matcher:ye(p,!o,e.matchFilters)})}return l},[])}function Ce(e,t=0){return{routes:e,score:ve(e[e.length-1])*1e4-t,matcher(n){const s=[];for(let r=e.length-1;r>=0;r--){const a=e[r],o=a.matcher(n);if(!o)return null;s.unshift({...o,route:a})}return s}}}function V(e){return Array.isArray(e)?e:[e]}function Ae(e,t="",n=[],s=[]){const r=V(e);for(let a=0,o=r.length;a<o;a++){const i=r[a];if(i&&typeof i=="object"){i.hasOwnProperty("path")||(i.path="");const l=Ee(i,t);for(const f of l){n.push(f);const h=Array.isArray(i.children)&&i.children.length===0;if(i.children&&!h)Ae(i.children,f.pattern,n,s);else{const m=Ce([...n],s.length);s.push(m)}n.pop()}}}return n.length?s:s.sort((a,o)=>o.score-a.score)}function I(e,t){for(let n=0,s=e.length;n<s;n++){const r=e[n].matcher(t);if(r)return r}return[]}function Le(e,t){const n=new URL(pe),s=y(l=>{const f=e();try{return new URL(f,n)}catch{return console.error(`Invalid path ${f}`),l}},n,{equals:(l,f)=>l.href===f.href}),r=y(()=>s().pathname),a=y(()=>s().search,!0),o=y(()=>s().hash),i=()=>"";return{get pathname(){return r()},get search(){return a()},get hash(){return o()},get state(){return t()},get key(){return i()},query:X(K(a,()=>Q(s())))}}let P;function De(){return P}function Me(e){}function Ue(e,t,n,s={}){const{signal:[r,a],utils:o={}}=e,i=o.parsePath||(c=>c),l=o.renderPath||(c=>c),f=o.beforeLeave||fe(),h=j("",s.base||"");if(h===void 0)throw new Error(`${h} is not a valid base path`);h&&!r().value&&a({value:h,replace:!0,scroll:!1});const[m,p]=O(!1);let d;const v=(c,u)=>{u.value===w()&&u.state===C()||(d===void 0&&p(!0),P=c,d=u,oe(()=>{d===u&&(E(d.value),Y(d.state),le(),M[1]([]))}).finally(()=>{d===u&&ce(()=>{P=void 0,c==="navigate"&&ne(d),p(!1),d=void 0})}))},[w,E]=O(r().value),[C,Y]=O(r().state),B=Le(w,C),A=[],M=O([]),U=y(()=>typeof s.transformUrl=="function"?I(t(),s.transformUrl(B.pathname)):I(t(),B.pathname)),Z=X(()=>{const c=U(),u={};for(let g=0;g<c.length;g++)Object.assign(u,c[g].params);return u}),k={pattern:h,path:()=>h,outlet:()=>null,resolvePath(c){return j(h,c)}};return ae(K(r,c=>v("native",c),{defer:!0})),{base:k,location:B,params:Z,isRouting:m,renderPath:l,parsePath:i,navigatorFactory:te,matches:U,beforeLeave:f,preloadRoute:re,singleFlight:s.singleFlight===void 0?!0:s.singleFlight,submissions:M};function ee(c,u,g){N(()=>{if(typeof u=="number"){u&&(o.go?o.go(u):console.warn("Router integration does not support relative routing"));return}const{replace:F,resolve:_,scroll:x,state:L}={replace:!1,resolve:!0,scroll:!0,...g},R=_?c.resolvePath(u):j("",u);if(R===void 0)throw new Error(`Path '${u}' is not a routable path`);if(A.length>=Re)throw new Error("Too many redirects");const W=w();(R!==W||L!==C())&&(ie||f.confirm(R,g)&&(A.push({value:W,replace:F,scroll:x,state:C()}),v("navigate",{value:R,state:L})))})}function te(c){return c=c||D(J)||k,(u,g)=>ee(c,u,g)}function ne(c){const u=A[0];u&&(a({...c,replace:u.replace,scroll:u.scroll}),A.length=0)}function re(c,u={}){const g=I(t(),c.pathname),F=P;P="preload";for(let _ in g){const{route:x,params:L}=g[_];x.component&&x.component.preload&&x.component.preload();const{load:R}=x;u.preloadData&&R&&z(n(),()=>R({params:L,location:{pathname:c.pathname,search:c.search,hash:c.hash,query:Q(c),state:null,key:""},intent:"preload"}))}P=F}}function ke(e,t,n,s){const{base:r,location:a,params:o}=e,{pattern:i,component:l,load:f}=s().route,h=y(()=>s().path);l&&l.preload&&l.preload();const m=f?f({params:o,location:a,intent:P||"initial"}):void 0;return{parent:t,pattern:i,path:h,outlet:()=>l?ue(l,{params:o,location:a,data:m,get children(){return n()}}):n(),resolvePath(d){return j(r.path(),d,h())}}}export{Pe as R,Ue as a,ke as b,Ae as c,J as d,H as e,fe as f,De as g,Ie as h,be as i,_e as j,Be as k,$e as l,pe as m,Fe as n,Se as o,b as p,Me as s,qe as u};
