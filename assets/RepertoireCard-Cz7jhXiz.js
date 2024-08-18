import{ssrElement as C,mergeProps as M,ssr as o,ssrHydrationKey as u,escape as e,createComponent as m}from"solid-js/web";import{createSignal as f,onMount as E,For as $,createEffect as j}from"solid-js";import{u as _,c as S}from"./Context-P41Yh7CH.js";import{Chess as w}from"chess.js";import{j as T}from"./UKTBL2JL-DdZr5mcc.js";var G='<path d="M21.1679 8C19.6247 4.46819 16.1006 2 11.9999 2C6.81459 2 2.55104 5.94668 2.04932 11" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>',I='<path d="M17 8H21.4C21.7314 8 22 7.73137 22 7.4V3" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>',A='<path d="M2.88146 16C4.42458 19.5318 7.94874 22 12.0494 22C17.2347 22 21.4983 18.0533 22 13" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>',B='<path d="M7.04932 16H2.64932C2.31795 16 2.04932 16.2686 2.04932 16.6V21" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>',H='<g id="draggable" transform="translate(5,4)"><circle cx="1" cy="1" r="1.48" fill="currentcolor"></circle><circle cx="1" cy="6.5" r="1.48" fill="currentcolor"></circle><circle cx="1" cy="12" r="1.48" fill="currentcolor"></circle><circle cx="6.3" cy="1" r="1.48" fill="currentcolor"></circle><circle cx="6.3" cy="6.5" r="1.48" fill="currentcolor"></circle><circle cx="6.3" cy="12" r="1.48" fill="currentcolor"></circle></g>';function te(n){return C("svg",M({width:"24px",height:"24px","stroke-width":"1.5",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",color:"currentcolor"},n),()=>[o(G),o(I),o(A),o(B)],!0)}function L(n){return C("svg",M({width:"17px",height:"20px",viewBox:"0 0 17 20",xmlns:"http://www.w3.org/2000/svg"},n,{color:"currentcolor"}),()=>o(H),!0)}var N=["<div",' class="text-nowrap">',"</div>"],V=["<div",' class="mr-1 text-nowrap">',"</div>"],q=["<div",' class="hover:bg-accent-200 bg-accent-50 dark:bg-accent-900 [&amp;:not(:last-child)]:border-b border-accent-300 dark:border-accent-800 py-2 px-2 flex gap-4"><div class="w-[32px] grow-0 shrink-0 font-semibold text-right">','</div><div class="flex flex-shrink justify-start gap-1 overflow-hidden">',"</div></div>"],z=["<div",' class="border border-accent-200 dark:border-accent-700 bg-accent-100 dark:bg-accent-900 rounded"><div class="card-header text-accent-600 bg-accent-900 flex justify-between dark:text-accent-50 items-center"><!--$-->','<!--/--><div class="mr-2 ">Engine</div><div class="font-normal ">','</div><div class="text-xs uppercase ml-2 grow dark:text-accent-500 text-accent-700 text-right mr-2">','</div><div class="dark:text-zinc-100 text-accent-700 text-right"><span class=""></span><span class=""> <!--$-->','<!--/--></span></div></div><div class="text-accent-700 bg-accent-100 dark:text-accent-300">',"</div></div>"];const D=n=>{const p=_(),[s,x]=f({...S});E(()=>{p.engine.subscribe_main(a=>{x(a)})});const b=a=>{const l=a.score;let v="   ";l!==0&&(v=l>0?"+":"-");const k=(r,t)=>{let c="";return t%2==0?(c=`${Math.floor(t/2)+1}.`,o(N,u(),`${e(c)}${e(r)}`)):o(V,u(),`${e(r)}`)},y=`${v}${Math.abs(l)}`;return o(q,u(),e(y),e(m($,{get each(){return a.san},children:(r,t)=>k(r,t())})))};return o(z,u(),e(m(L,{class:"w-4 text-accent-600 mr-1"})),e(s().mode),s().cached?"cached":"",e(s().depth),e(m($,{get each(){return s().lines},children:(a,l)=>b(a)})))},re=D;var F=["<tr",' class="lvl-1 hoverable"><td class="font-medium"><!--$-->','<!--/--><span class="px-1">',"</span></td><td>",'</td><td class="bg-pink relative w-full h-full "><div class="flex *:text-center overflow-hidden *:h-4 *:leading-4 items-center rounded font-normal dark:font-medium border border-zinc-400/60 dark:border-0 "><div class="dark:bg-accent-300 dark:text-accent-800 bg-accent-50 text-accent-600" style="','">','</div><div class="dark:bg-accent-500 dark:text-accent-800 bg-accent-300 text-accent-700" style="','">','</div><div class="dark:bg-accent-900 dark:text-accent-600 bg-accent-500 text-accent-50" style="','">',"</div></div></td></tr>"],J=["<div",' class="bg-accent-100 text-accent-800 dark:bg-accent-800 dark:text-accent-100 border border-accent-200 dark:border-accent-700 rounded"><div class="bg-accent-200 card-header flex items-center"><!--$-->','<!--/--><div>Explorer</div></div><table class="sk-table"><thead><tr class="*:font-normal"><th>move</th><th>games</th><th>result</th></tr></thead><tbody>',"</tbody></table></div>"];const K=n=>{f("player");const p=_();let s=!1;const[x,b]=f([]),[a,l]=f(null);let v=null;j(async()=>{const r=n.fen,t=n.playerColor,c=new w;c.load(r);const i=c.turn()==="w"?"white":"black";if(v?.moves){const d=new w;for(const h of v.moves){const g=h.notation.notation;if(d.fen()===r){l(g);break}d.move(g)}}await k(r,t,i)}),E(async()=>{await p.openingGraph.load_wait(),s=!0,v=JSON.parse(localStorage.getItem("lastgame"));const r=n.fen,t=n.playerColor,c=new w;c.load(r);const i=new w;for(const h of v.moves){const g=h.notation.notation;if(i.fen()===r){l(g);break}i.move(g)}const d=c.turn()==="w"?"white":"black";await k(r,t,d)});const k=async(r,t,c)=>{s||(await p.openingGraph.load_wait(),s=!0),p.openingGraph.getFen(r,t,c).then(i=>{b(i)})},y=r=>{const t=r[1],c=t.result.black+t.result.white+t.result.draw,i=Math.ceil(t.result.white/c*100),d=Math.ceil(t.result.black/c*100),h=Math.ceil(t.result.draw/c*100),g=i>5?`${i}%`:"",P=h>5?`${h}%`:"",R=d>5?`${d}%`:"";return o(F,u(),e(t.uci),t.uci===a()?"*":"",e(t.count),`width:${e(i,!0)}%`,e(g),`width:${e(h,!0)}%`,e(P),`width:${e(d,!0)}%`,e(R))};return o(J,u(),e(m(L,{class:" mr-1"})),e(m($,{get each(){return x()},children:(r,t)=>y(r)})))},ce=K;var O=["<div",' class="bg-accent-100 rounded overflow-hidden dark:bg-accent-800 dark:border-accent-700 border text-accent-800 dark:text-accent-100"><div class="bg-accent-200 py-1 px-2 dark:bg-accent-700 font-medium">Repertoire</div><div class="p-2"><!--$-->',"<!--/--><!--$-->","<!--/--></div></div>"],Q=["<div",' class="font-semibold p-2 dark:bg-accent-700 bg-accent-200 my-2 rounded hoverable">',"</div>"];const U=n=>{const p=_(),[s,x]=f([]);j(async()=>{const a=n.fen;if(a){const l=await p.repertoire.getLine(a);x(l?.response??[])}});const b=()=>{console.log("line"),n.requestLine&&n.requestLine()};return o(O,u(),e(m(T,{onClick:()=>b(),class:"button",children:"Add Line"})),e(m($,{get each(){return s()},children:(a,l)=>o(Q,u(),e(a))})))},ne=U;export{L as D,re as E,te as R,ne as a,ce as b};
