import{isServer as w}from"solid-js/web";import{createContext as $,createMemo as c,useContext as S,createSignal as D,onMount as L,onCleanup as R}from"solid-js";import{a as x}from"./R5675YMU-BpRjiKpz.js";var F=/((?:--)?(?:\w+-?)+)\s*:\s*([^;]*)/g;function g(t){const e={};let r;for(;r=F.exec(t);)e[r[1]]=r[2];return e}function U(t,e){if(typeof t=="string"){if(typeof e=="string")return`${t};${e}`;t=g(t)}else typeof e=="string"&&(e=g(e));return{...t,...e}}let f=new Map,m=!1;try{m=new Intl.NumberFormat("de-DE",{signDisplay:"exceptZero"}).resolvedOptions().signDisplay==="exceptZero"}catch{}let u=!1;try{u=new Intl.NumberFormat("de-DE",{style:"unit",unit:"degree"}).resolvedOptions().style==="unit"}catch{}const b={degree:{narrow:{default:"°","ja-JP":" 度","zh-TW":"度","sl-SI":" °"}}};class C{format(e){let r="";if(!m&&this.options.signDisplay!=null?r=O(this.numberFormatter,this.options.signDisplay,e):r=this.numberFormatter.format(e),this.options.style==="unit"&&!u){var n;let{unit:a,unitDisplay:i="short",locale:o}=this.resolvedOptions();if(!a)return r;let s=(n=b[a])===null||n===void 0?void 0:n[i];r+=s[o]||s.default}return r}formatToParts(e){return this.numberFormatter.formatToParts(e)}formatRange(e,r){if(typeof this.numberFormatter.formatRange=="function")return this.numberFormatter.formatRange(e,r);if(r<e)throw new RangeError("End date must be >= start date");return`${this.format(e)} – ${this.format(r)}`}formatRangeToParts(e,r){if(typeof this.numberFormatter.formatRangeToParts=="function")return this.numberFormatter.formatRangeToParts(e,r);if(r<e)throw new RangeError("End date must be >= start date");let n=this.numberFormatter.formatToParts(e),a=this.numberFormatter.formatToParts(r);return[...n.map(i=>({...i,source:"startRange"})),{type:"literal",value:" – ",source:"shared"},...a.map(i=>({...i,source:"endRange"}))]}resolvedOptions(){let e=this.numberFormatter.resolvedOptions();return!m&&this.options.signDisplay!=null&&(e={...e,signDisplay:this.options.signDisplay}),!u&&this.options.style==="unit"&&(e={...e,style:"unit",unit:this.options.unit,unitDisplay:this.options.unitDisplay}),e}constructor(e,r={}){this.numberFormatter=E(e,r),this.options=r}}function E(t,e={}){let{numberingSystem:r}=e;if(r&&t.includes("-nu-")&&(t.includes("-u-")||(t+="-u-"),t+=`-nu-${r}`),e.style==="unit"&&!u){var n;let{unit:o,unitDisplay:s="short"}=e;if(!o)throw new Error('unit option must be provided with style: "unit"');if(!(!((n=b[o])===null||n===void 0)&&n[s]))throw new Error(`Unsupported unit ${o} with unitDisplay = ${s}`);e={...e,style:"decimal"}}let a=t+(e?Object.entries(e).sort((o,s)=>o[0]<s[0]?-1:1).join():"");if(f.has(a))return f.get(a);let i=new Intl.NumberFormat(t,e);return f.set(a,i),i}function O(t,e,r){if(e==="auto")return t.format(r);if(e==="never")return t.format(Math.abs(r));{let n=!1;if(e==="always"?n=r>0||Object.is(r,0):e==="exceptZero"&&(Object.is(r,-0)||Object.is(r,0)?r=Math.abs(r):n=r>0),n){let a=t.format(-r),i=t.format(r),o=a.replace(i,"").replace(/\u200e|\u061C/,"");return[...o].length!==1&&console.warn("@react-aria/i18n polyfill for NumberFormat signDisplay: Unsupported case"),a.replace(i,"!!!").replace(o,"+").replace("!!!",i)}else return t.format(r)}}var P=new Set(["Avst","Arab","Armi","Syrc","Samr","Mand","Thaa","Mend","Nkoo","Adlm","Rohg","Hebr"]),T=new Set(["ae","ar","arc","bcc","bqi","ckb","dv","fa","glk","he","ku","mzn","nqo","pnb","ps","sd","ug","ur","yi"]);function j(t){if(Intl.Locale){const r=new Intl.Locale(t).maximize().script??"";return P.has(r)}const e=t.split("-")[0];return T.has(e)}function I(t){return j(t)?"rtl":"ltr"}function y(){let t=typeof navigator<"u"&&(navigator.language||navigator.userLanguage)||"en-US";try{Intl.DateTimeFormat.supportedLocalesOf([t])}catch{t="en-US"}return{locale:t,direction:I(t)}}var p=y(),l=new Set;function h(){p=y();for(const t of l)t(p)}function M(){const t={locale:"en-US",direction:"ltr"},[e,r]=D(p),n=c(()=>w?t:e());return L(()=>{l.size===0&&window.addEventListener("languagechange",h),l.add(r),R(()=>{l.delete(r),l.size===0&&window.removeEventListener("languagechange",h)})}),{locale:()=>n().locale,direction:()=>n().direction}}var A=$();function v(){const t=M();return S(A)||t}var d=new Map;function Z(t){const{locale:e}=v(),r=c(()=>e()+(t?Object.entries(t).sort((n,a)=>n[0]<a[0]?-1:1).join():""));return c(()=>{const n=r();let a;return d.has(n)&&(a=d.get(n)),a||(a=new Intl.Collator(e(),t),d.set(n,a)),a})}function q(t){const{locale:e}=v();return c(()=>new C(e(),x(t)))}function K(t){return e=>(t(e),()=>t(void 0))}export{K as a,Z as b,U as c,q as d,v as u};
