import{ssr as m,ssrHydrationKey as c}from"solid-js/web";import d from"3d-force-graph";import{createSignal as l,onMount as i,createEffect as r}from"solid-js";import{u as g}from"./Context-P41Yh7CH.js";import"@mliebelt/pgn-parser";import"chess.js";import"ts-fsrs";var p=["<div",' class="grow">hola</div>'];function w(a){let n;const s=g(),[h,f]=l(null),e=d();return i(()=>{s.themeManager.onChange((t,o)=>{f(t)}),e(n)}),r(()=>{const[t,o]=a.size;t===0||o===0||(e.width(t),e.height(o))}),r(()=>{console.log("NEW DATYA");const t=a.data;e.graphData(t)}),r(()=>{h()&&a.data}),i(()=>{setTimeout(()=>{e.graphData().nodes.forEach(t=>{t.fx=t.x,t.fy=t.y,t.fz=t.z})},2e3),e.enableNodeDrag(!1)}),m(p,c())}export{w as default};
