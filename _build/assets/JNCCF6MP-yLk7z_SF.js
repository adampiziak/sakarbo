import{a as c,p as w,e as $,k as D,f as L,q as S}from"./web-DuEVvOp5.js";import{a as x}from"./UKTBL2JL-CnBKWN1M.js";var R=/((?:--)?(?:\w+-?)+)\s*:\s*([^;]*)/g;function g(t){const e={};let r;for(;r=R.exec(t);)e[r[1]]=r[2];return e}function z(t,e){if(typeof t=="string"){if(typeof e=="string")return`${t};${e}`;t=g(t)}else typeof e=="string"&&(e=g(e));return{...t,...e}}let f=new Map,p=!1;try{p=new Intl.NumberFormat("de-DE",{signDisplay:"exceptZero"}).resolvedOptions().signDisplay==="exceptZero"}catch{}let u=!1;try{u=new Intl.NumberFormat("de-DE",{style:"unit",unit:"degree"}).resolvedOptions().style==="unit"}catch{}const b={degree:{narrow:{default:"°","ja-JP":" 度","zh-TW":"度","sl-SI":" °"}}};class F{format(e){let r="";if(!p&&this.options.signDisplay!=null?r=E(this.numberFormatter,this.options.signDisplay,e):r=this.numberFormatter.format(e),this.options.style==="unit"&&!u){var n;let{unit:a,unitDisplay:i="short",locale:o}=this.resolvedOptions();if(!a)return r;let s=(n=b[a])===null||n===void 0?void 0:n[i];r+=s[o]||s.default}return r}formatToParts(e){return this.numberFormatter.formatToParts(e)}formatRange(e,r){if(typeof this.numberFormatter.formatRange=="function")return this.numberFormatter.formatRange(e,r);if(r<e)throw new RangeError("End date must be >= start date");return`${this.format(e)} – ${this.format(r)}`}formatRangeToParts(e,r){if(typeof this.numberFormatter.formatRangeToParts=="function")return this.numberFormatter.formatRangeToParts(e,r);if(r<e)throw new RangeError("End date must be >= start date");let n=this.numberFormatter.formatToParts(e),a=this.numberFormatter.formatToParts(r);return[...n.map(i=>({...i,source:"startRange"})),{type:"literal",value:" – ",source:"shared"},...a.map(i=>({...i,source:"endRange"}))]}resolvedOptions(){let e=this.numberFormatter.resolvedOptions();return!p&&this.options.signDisplay!=null&&(e={...e,signDisplay:this.options.signDisplay}),!u&&this.options.style==="unit"&&(e={...e,style:"unit",unit:this.options.unit,unitDisplay:this.options.unitDisplay}),e}constructor(e,r={}){this.numberFormatter=C(e,r),this.options=r}}function C(t,e={}){let{numberingSystem:r}=e;if(r&&t.includes("-nu-")&&(t.includes("-u-")||(t+="-u-"),t+=`-nu-${r}`),e.style==="unit"&&!u){var n;let{unit:o,unitDisplay:s="short"}=e;if(!o)throw new Error('unit option must be provided with style: "unit"');if(!(!((n=b[o])===null||n===void 0)&&n[s]))throw new Error(`Unsupported unit ${o} with unitDisplay = ${s}`);e={...e,style:"decimal"}}let a=t+(e?Object.entries(e).sort((o,s)=>o[0]<s[0]?-1:1).join():"");if(f.has(a))return f.get(a);let i=new Intl.NumberFormat(t,e);return f.set(a,i),i}function E(t,e,r){if(e==="auto")return t.format(r);if(e==="never")return t.format(Math.abs(r));{let n=!1;if(e==="always"?n=r>0||Object.is(r,0):e==="exceptZero"&&(Object.is(r,-0)||Object.is(r,0)?r=Math.abs(r):n=r>0),n){let a=t.format(-r),i=t.format(r),o=a.replace(i,"").replace(/\u200e|\u061C/,"");return[...o].length!==1&&console.warn("@react-aria/i18n polyfill for NumberFormat signDisplay: Unsupported case"),a.replace(i,"!!!").replace(o,"+").replace("!!!",i)}else return t.format(r)}}var O=new Set(["Avst","Arab","Armi","Syrc","Samr","Mand","Thaa","Mend","Nkoo","Adlm","Rohg","Hebr"]),P=new Set(["ae","ar","arc","bcc","bqi","ckb","dv","fa","glk","he","ku","mzn","nqo","pnb","ps","sd","ug","ur","yi"]);function T(t){if(Intl.Locale){const r=new Intl.Locale(t).maximize().script??"";return O.has(r)}const e=t.split("-")[0];return P.has(e)}function j(t){return T(t)?"rtl":"ltr"}function y(){let t=typeof navigator<"u"&&(navigator.language||navigator.userLanguage)||"en-US";try{Intl.DateTimeFormat.supportedLocalesOf([t])}catch{t="en-US"}return{locale:t,direction:j(t)}}var m=y(),l=new Set;function h(){m=y();for(const t of l)t(m)}function I(){const[t,e]=$(m),r=c(()=>t());return D(()=>{l.size===0&&window.addEventListener("languagechange",h),l.add(e),L(()=>{l.delete(e),l.size===0&&window.removeEventListener("languagechange",h)})}),{locale:()=>r().locale,direction:()=>r().direction}}var M=S();function v(){const t=I();return w(M)||t}var d=new Map;function N(t){const{locale:e}=v(),r=c(()=>e()+(t?Object.entries(t).sort((n,a)=>n[0]<a[0]?-1:1).join():""));return c(()=>{const n=r();let a;return d.has(n)&&(a=d.get(n)),a||(a=new Intl.Collator(e(),t),d.set(n,a)),a})}function q(t){const{locale:e}=v();return c(()=>new F(e(),x(t)))}function Z(t){return e=>(t(e),()=>t(void 0))}export{Z as a,N as b,z as c,q as d,v as u};
