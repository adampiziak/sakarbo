import{createComponent as r,mergeProps as f,ssr as d,ssrHydrationKey as g,escape as a}from"solid-js/web";import{_ as v,B as C,k as S,e as b,j as u}from"./UKTBL2JL-DdZr5mcc.js";import{b as I}from"./FN6EICGO-B5blqTXL.js";import{a as n}from"./R5675YMU-BpRjiKpz.js";import{splitProps as $,children as k,createSignal as p,For as _}from"solid-js";import{D as y}from"./RepertoireCard-Cz7jhXiz.js";function B(e={}){const[l,s]=I({value:()=>n(e.isSelected),defaultValue:()=>!!n(e.defaultIsSelected),onChange:t=>e.onSelectedChange?.(t)});return{isSelected:l,setIsSelected:t=>{!n(e.isReadOnly)&&!n(e.isDisabled)&&s(t)},toggle:()=>{!n(e.isReadOnly)&&!n(e.isDisabled)&&s(!l())}}}var x={};v(x,{Root:()=>m,ToggleButton:()=>h});function m(e){const[l,s]=$(e,["children","pressed","defaultPressed","onChange","onClick"]),o=B({isSelected:()=>l.pressed,defaultIsSelected:()=>l.defaultPressed,onSelectedChange:t=>l.onChange?.(t),isDisabled:()=>s.disabled});return r(C,f({get"aria-pressed"(){return o.isSelected()},get"data-pressed"(){return o.isSelected()?"":void 0},onClick:t=>{b(t,l.onClick),o.toggle()}},s,{get children(){return r(R,{get state(){return{pressed:o.isSelected}},get children(){return l.children}})}}))}function R(e){return k(()=>{const s=e.children;return S(s)?s(e.state):s})()}var h=m,D=["<div",' class="card lvl-1"><div class="card-header flex items-center"><!--$-->','<!--/--><div class="">Settings</div></div><!--$-->',"<!--/--><!--$-->","<!--/--><!--$-->",'<!--/--><div class="flex gap-2 m-4">',"</div></div>"],O=["<div","><!--$-->","<!--/--><!--$-->","<!--/--></div>"];const T=e=>{const[l,s]=p("white"),o=t=>{t&&(s(t),e.setOrientation&&e.setOrientation(t))},i=()=>{const t=JSON.parse(localStorage.getItem("lastgame")),c=localStorage.getItem("username");console.log(t),t?.tags.White===c?o("white"):o("black")};return d(D,g(),a(r(y,{class:"text-zinc-300/50 mr-1"})),a(r(u,{class:"py-2 px-3 rounded hoverable lvl-2 m-2",onClick:()=>e.restart(),children:"restart"})),a(r(u,{class:"py-2 px-3 rounded hoverable lvl-2 m-2",onClick:i,children:"Load last game color"})),a(r(h,{class:"p-2 lvl-2 rounded border font-medium",onChange:()=>o(l()==="white"?"black":"white"),children:t=>l()})),a(r(_,{get each(){return e.history()},children:(t,c)=>d(O,g(),c()%2==0?`${a(c())/2+1}.`:"",a(t))})))},j=T;export{j as G,B as c};
