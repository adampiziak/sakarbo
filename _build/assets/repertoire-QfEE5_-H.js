import{e as _,n as x,i as c,y as m,j as s,b as l,t as p,k as h,h as w,D as S,r as b,F as k}from"./web-DuEVvOp5.js";import{B as E}from"./BoardImage-Cl8ODxES.js";import{B}from"./BoardView-BhTIAIwV.js";import{g as C,f as y,u as A}from"./Context-D0aeQrfF.js";import"./chess-lriRiorr.js";var R=p('<div class="overflow-auto grow p-8"><!$><!/><!$><!/>');const F=a=>{const[i,u]=_(null);return x(()=>{const e=a.rep;if(!e)return;i()?.set({fen:e.fen,orientation:C(e.fen)});const r=[];for(const t of e.response){const{orig:n,dest:o}=y(e.fen,t);r.push({orig:n,dest:o,brush:"green"})}i()?.set({drawable:{autoShapes:r}})}),(()=>{var e=c(R),r=e.firstChild,[t,n]=m(r.nextSibling),o=t.nextSibling,[f,$]=m(o.nextSibling);return s(e,()=>a.rep?.response,t,n),s(e,l(B,{setApi:u,class:"h-full",rounded:!0}),f,$),e})()};var M=p('<div class=flex><div class="overflow-auto grow"></div><!$><!/>'),N=p("<div class=p-2>"),j=p("<div class=flex>");const V=()=>{const a=A(),[i,u]=_([]),[e,r]=_(null);return h(async()=>{await a.repertoire.load();const t=await a.repertoire.getAll();u(t)}),(()=>{var t=c(M),n=t.firstChild,o=n.nextSibling,[f,$]=m(o.nextSibling);return s(n,l(k,{get each(){return i()},children:(d,z)=>(()=>{var g=c(j);return g.$$click=()=>r(d),s(g,l(S,{get children(){return[l(E,{get fen(){return d.fen},class:"w-24 h-24"}),(()=>{var v=c(N);return s(v,()=>d.fen),v})()]}})),b(),g})()})),s(t,l(F,{get rep(){return e()}}),f,$),t})()};w(["click"]);export{V as default};