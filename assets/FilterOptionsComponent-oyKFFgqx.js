import{isServer as Ze,ssr as W,ssrHydrationKey as j,ssrStyle as et,ssrAttribute as _,escape as F,ssrElement as tt,mergeProps as y,createComponent as i,Portal as ot}from"solid-js/web";import{u as se,r as nt,c as rt,f as we,a as st,i as Ie,F as De,j as Ce,g as lt,s as it,b as at,P as Fe,D as ct,k as ut,l as dt,m as gt,t as pt,n as ft,d as bt,e as ht,o as mt,p as yt,L as vt,q as St,S as xt}from"./QJIB6BDF-CXbqz117.js";import{v as wt,_ as Me,m as M,l as It,n as Dt,P as V,c as C,e as K,f as le,b as ie,B as Ct,k as Oe}from"./UKTBL2JL-DdZr5mcc.js";import{createMemo as w,onCleanup as U,$TRACK as Ft,untrack as Mt,createRoot as me,createSignal as x,splitProps as I,createEffect as E,on as Pe,Show as z,For as ye,createContext as ae,createUniqueId as ce,Switch as Ot,Match as ve,useContext as ue,children as Pt}from"solid-js";import{a as N,c as kt,b as Lt}from"./JNCCF6MP-BxSTj5fb.js";import{a as h}from"./R5675YMU-BpRjiKpz.js";var re=Symbol("fallback");function Se(r){for(const t of r)t.dispose()}function Kt(r,t,e,o={}){if(Ze){const s=r();let l=[];if(s&&s.length)for(let u=0,b=s.length;u<b;u++)l.push(e(()=>s[u],()=>u));else o.fallback&&(l=[o.fallback()]);return()=>l}const n=new Map;return U(()=>Se(n.values())),()=>{const s=r()||[];return s[Ft],Mt(()=>{if(!s.length)return Se(n.values()),n.clear(),o.fallback?[me(f=>(n.set(re,{dispose:f}),o.fallback()))]:[];const l=new Array(s.length),u=n.get(re);if(!n.size||u){u?.dispose(),n.delete(re);for(let d=0;d<s.length;d++){const f=s[d],S=t(f,d);a(l,f,d,S)}return l}const b=new Set(n.keys());for(let d=0;d<s.length;d++){const f=s[d],S=t(f,d);b.delete(S);const g=n.get(S);g?(l[d]=g.mapped,g.setIndex?.(d),g.setItem(()=>f)):a(l,f,d,S)}for(const d of b)n.get(d)?.dispose(),n.delete(d);return l})};function a(s,l,u,b){me(d=>{const[f,S]=x(l),g={setItem:S,dispose:d};if(e.length>1){const[A,D]=x(u);g.setIndex=D,g.mapped=e(f,A)}else g.mapped=e(f);n.set(b,g),s[u]=g.mapped})}}function Vt(r){const{by:t}=r;return w(Kt(()=>r.each,typeof t=="function"?t:e=>e[t],r.children,"fallback"in r?{fallback:()=>r.fallback}:void 0))}var Tt=["<option","",">","</option>"],Et="<option></option>",Rt=["<div",' style="','" aria-hidden="true"><input type="text"',' style="','"',"",">","</div>"];function At(r){const[t,e]=I(r,["ref","onChange","collection","selectionManager","isOpen","isMultiple","isVirtualized","focusTrigger"]),o=se(),[n,a]=x(!1),s=l=>{const u=t.collection.getItem(l);return i(z,{get when(){return u?.type==="item"},get children(){return W(Tt,j()+_("value",F(l,!0),!1),_("selected",t.selectionManager.isSelected(l),!0),F(u?.textValue))}})};return E(Pe(()=>t.selectionManager.selectedKeys(),(l,u)=>{u&&nt(l,u)||a(!0)},{defer:!0})),W(Rt,j(),et(wt),_("tabindex",t.selectionManager.isFocused()||t.isOpen?-1:0,!1),"font-size:16px",_("required",o.isRequired(),!0),_("disabled",o.isDisabled(),!0)+_("readonly",F(o.isReadOnly(),!0),!1),tt("select",y({tabIndex:-1,get multiple(){return t.isMultiple},get name(){return o.name()},get required(){return o.isRequired()},get disabled(){return o.isDisabled()},get size(){return t.collection.getSize()},get value(){return t.selectionManager.firstSelectedKey()??""}},e),()=>[W(Et),"<!--$-->",F(i(z,{get when(){return t.isVirtualized},get fallback(){return i(ye,{get each(){return[...t.collection.getKeys()]},children:s})},get children(){return i(ye,{get each(){return[...t.selectionManager.selectedKeys()]},children:s})}})),"<!--/-->"],!1))}var xe=new WeakMap;function Bt(r){let t=xe.get(r);if(t!=null)return t;t=0;for(const e of r)e.type==="item"&&t++;return xe.set(r,t),t}var zt={};Me(zt,{Item:()=>J,ItemDescription:()=>Q,ItemIndicator:()=>X,ItemLabel:()=>Y,Listbox:()=>Ut,Root:()=>ge,Section:()=>Z});var ke=ae();function _t(){const r=ue(ke);if(r===void 0)throw new Error("[kobalte]: `useListboxContext` must be used within a `Listbox` component");return r}var Le=ae();function de(){const r=ue(Le);if(r===void 0)throw new Error("[kobalte]: `useListboxItemContext` must be used within a `Listbox.Item` component");return r}function J(r){let t;const e=_t(),o=`${e.generateId("item")}-${ce()}`,n=M({id:o},r),[a,s]=I(n,["ref","item","aria-label","aria-labelledby","aria-describedby","onPointerMove","onPointerDown","onPointerUp","onClick","onKeyDown","onMouseDown","onFocus"]),[l,u]=x(),[b,d]=x(),f=()=>e.listState().selectionManager(),S=()=>f().focusedKey()===a.item.key,g=rt({key:()=>a.item.key,selectionManager:f,shouldSelectOnPressUp:e.shouldSelectOnPressUp,allowsDifferentPressOrigin:()=>e.shouldSelectOnPressUp()&&e.shouldFocusOnHover(),shouldUseVirtualFocus:e.shouldUseVirtualFocus,disabled:()=>a.item.disabled},()=>t),A=()=>{if(f().selectionMode()!=="none")return g.isSelected()},D=w(()=>!(It()&&Dt())),$=()=>D()?a["aria-label"]:void 0,H=()=>D()?l():void 0,p=()=>D()?b():void 0,O=()=>{if(!e.isVirtualized())return;const k=e.listState().collection().getItem(a.item.key)?.index;return k!=null?k+1:void 0},P=()=>{if(e.isVirtualized())return Bt(e.listState().collection())},ee=k=>{K(k,a.onPointerMove),k.pointerType==="mouse"&&!g.isDisabled()&&e.shouldFocusOnHover()&&(le(k.currentTarget),f().setFocused(!0),f().setFocusedKey(a.item.key))},G=w(()=>({"data-disabled":g.isDisabled()?"":void 0,"data-selected":g.isSelected()?"":void 0,"data-highlighted":S()?"":void 0})),T={isSelected:g.isSelected,dataset:G,generateId:ie(()=>s.id),registerLabelId:N(u),registerDescriptionId:N(d)};return i(Le.Provider,{value:T,get children(){return i(V,y({as:"li",role:"option",get tabIndex(){return g.tabIndex()},get"aria-disabled"(){return g.isDisabled()},get"aria-selected"(){return A()},get"aria-label"(){return $()},get"aria-labelledby"(){return H()},get"aria-describedby"(){return p()},get"aria-posinset"(){return O()},get"aria-setsize"(){return P()},get"data-key"(){return g.dataKey()},get onPointerDown(){return C([a.onPointerDown,g.onPointerDown])},get onPointerUp(){return C([a.onPointerUp,g.onPointerUp])},get onClick(){return C([a.onClick,g.onClick])},get onKeyDown(){return C([a.onKeyDown,g.onKeyDown])},get onMouseDown(){return C([a.onMouseDown,g.onMouseDown])},get onFocus(){return C([a.onFocus,g.onFocus])},onPointerMove:ee},G,s))}})}function Q(r){const t=de(),e=M({id:t.generateId("description")},r);return E(()=>U(t.registerDescriptionId(e.id))),i(V,y({as:"div"},()=>t.dataset(),e))}function X(r){const t=de(),e=M({id:t.generateId("indicator")},r),[o,n]=I(e,["forceMount"]);return i(z,{get when(){return o.forceMount||t.isSelected()},get children(){return i(V,y({as:"div","aria-hidden":"true"},()=>t.dataset(),n))}})}function Y(r){const t=de(),e=M({id:t.generateId("label")},r);return E(()=>U(t.registerLabelId(e.id))),i(V,y({as:"div"},()=>t.dataset(),e))}function ge(r){let t;const e=`listbox-${ce()}`,o=M({id:e,selectionMode:"single",virtualized:!1},r),[n,a]=I(o,["ref","children","renderItem","renderSection","value","defaultValue","onChange","options","optionValue","optionTextValue","optionDisabled","optionGroupChildren","state","keyboardDelegate","autoFocus","selectionMode","shouldFocusWrap","shouldUseVirtualFocus","shouldSelectOnPressUp","shouldFocusOnHover","allowDuplicateSelectionEvents","disallowEmptySelection","selectionBehavior","selectOnFocus","disallowTypeAhead","allowsTabNavigation","virtualized","scrollToItem","scrollRef","onKeyDown","onMouseDown","onFocusIn","onFocusOut"]),s=w(()=>n.state?n.state:we({selectedKeys:()=>n.value,defaultSelectedKeys:()=>n.defaultValue,onSelectionChange:n.onChange,allowDuplicateSelectionEvents:()=>h(n.allowDuplicateSelectionEvents),disallowEmptySelection:()=>h(n.disallowEmptySelection),selectionBehavior:()=>h(n.selectionBehavior),selectionMode:()=>h(n.selectionMode),dataSource:()=>n.options??[],getKey:()=>n.optionValue,getTextValue:()=>n.optionTextValue,getDisabled:()=>n.optionDisabled,getSectionChildren:()=>n.optionGroupChildren})),l=st({selectionManager:()=>s().selectionManager(),collection:()=>s().collection(),autoFocus:()=>h(n.autoFocus),shouldFocusWrap:()=>h(n.shouldFocusWrap),keyboardDelegate:()=>n.keyboardDelegate,disallowEmptySelection:()=>h(n.disallowEmptySelection),selectOnFocus:()=>h(n.selectOnFocus),disallowTypeAhead:()=>h(n.disallowTypeAhead),shouldUseVirtualFocus:()=>h(n.shouldUseVirtualFocus),allowsTabNavigation:()=>h(n.allowsTabNavigation),isVirtualized:()=>n.virtualized,scrollToKey:()=>n.scrollToItem},()=>t,()=>n.scrollRef?.()),u={listState:s,generateId:ie(()=>a.id),shouldUseVirtualFocus:()=>o.shouldUseVirtualFocus,shouldSelectOnPressUp:()=>o.shouldSelectOnPressUp,shouldFocusOnHover:()=>o.shouldFocusOnHover,isVirtualized:()=>n.virtualized};return i(ke.Provider,{value:u,get children(){return i(V,y({as:"ul",role:"listbox",get tabIndex(){return l.tabIndex()},get"aria-multiselectable"(){return s().selectionManager().selectionMode()==="multiple"?!0:void 0},get onKeyDown(){return C([n.onKeyDown,l.onKeyDown])},get onMouseDown(){return C([n.onMouseDown,l.onMouseDown])},get onFocusIn(){return C([n.onFocusIn,l.onFocusIn])},get onFocusOut(){return C([n.onFocusOut,l.onFocusOut])}},a,{get children(){return i(z,{get when(){return!n.virtualized},get fallback(){return n.children?.(s().collection)},get children(){return i(Vt,{get each(){return[...s().collection()]},by:"key",children:b=>i(Ot,{get children(){return[i(ve,{get when(){return b().type==="section"},get children(){return n.renderSection?.(b())}}),i(ve,{get when(){return b().type==="item"},get children(){return n.renderItem?.(b())}})]}})})}})}}))}})}function Z(r){return i(V,y({as:"li",role:"presentation"},r))}var Ut=Object.assign(ge,{Item:J,ItemDescription:Q,ItemIndicator:X,ItemLabel:Y,Section:Z}),$t={};Me($t,{Arrow:()=>Ie,Content:()=>Ve,Description:()=>De,ErrorMessage:()=>Ce,HiddenSelect:()=>Te,Icon:()=>Ee,Item:()=>J,ItemDescription:()=>Q,ItemIndicator:()=>X,ItemLabel:()=>Y,Label:()=>Re,Listbox:()=>Ae,Portal:()=>Be,Root:()=>ze,Section:()=>Z,Select:()=>L,Trigger:()=>_e,Value:()=>Ue});var Ke=ae();function R(){const r=ue(Ke);if(r===void 0)throw new Error("[kobalte]: `useSelectContext` must be used within a `Select` component");return r}function Ve(r){let t;const e=R(),[o,n]=I(r,["ref","style","onCloseAutoFocus","onFocusOutside"]),a=l=>{e.close()},s=l=>{o.onFocusOutside?.(l),e.isOpen()&&e.isModal()&&l.preventDefault()};return lt({isDisabled:()=>!(e.isOpen()&&e.isModal()),targets:()=>[]}),it({element:()=>null,enabled:()=>e.contentPresent()&&e.preventScroll()}),at({trapFocus:()=>e.isOpen()&&e.isModal(),onMountAutoFocus:l=>{l.preventDefault()},onUnmountAutoFocus:l=>{o.onCloseAutoFocus?.(l),l.defaultPrevented||(le(e.triggerRef()),l.preventDefault())}},()=>t),i(z,{get when(){return e.contentPresent()},get children(){return i(Fe.Positioner,{get children(){return i(ct,y({get disableOutsidePointerEvents(){return e.isModal()&&e.isOpen()},get excludedElements(){return[e.triggerRef]},get style(){return kt({"--kb-select-content-transform-origin":"var(--kb-popper-content-transform-origin)",position:"relative"},o.style)},onEscapeKeyDown:a,onFocusOutside:s,get onDismiss(){return e.close}},()=>e.dataset(),n))}})}})}function Te(r){const t=R();return i(At,y({get collection(){return t.listState().collection()},get selectionManager(){return t.listState().selectionManager()},get isOpen(){return t.isOpen()},get isMultiple(){return t.isMultiple()},get isVirtualized(){return t.isVirtualized()},focusTrigger:()=>t.triggerRef()?.focus()},r))}function Ee(r){const t=R(),e=M({children:"▼"},r);return i(V,y({as:"span","aria-hidden":"true"},()=>t.dataset(),e))}function Re(r){const t=R(),[e,o]=I(r,["onClick"]);return i(ut,y({as:"span",onClick:a=>{K(a,e.onClick),t.isDisabled()||t.triggerRef()?.focus()}},o))}function Ae(r){const t=R(),e=M({id:t.generateId("listbox")},r),[o,n]=I(e,["ref","id","onKeyDown"]);return E(()=>U(t.registerListboxId(o.id))),i(ge,y({get id(){return o.id},get state(){return t.listState()},get virtualized(){return t.isVirtualized()},get autoFocus(){return t.autoFocus()},shouldSelectOnPressUp:!0,shouldFocusOnHover:!0,get shouldFocusWrap(){return t.shouldFocusWrap()},get disallowTypeAhead(){return t.disallowTypeAhead()},get"aria-labelledby"(){return t.listboxAriaLabelledBy()},get renderItem(){return t.renderItem},get renderSection(){return t.renderSection},onKeyDown:s=>{K(s,o.onKeyDown),s.key==="Escape"&&s.preventDefault()}},n))}function Be(r){const t=R();return i(z,{get when(){return t.contentPresent()},get children(){return i(ot,r)}})}function Ht(r){const t=`select-${ce()}`,e=M({id:t,selectionMode:"single",disallowEmptySelection:!1,closeOnSelection:r.selectionMode==="single",allowDuplicateSelectionEvents:!0,gutter:8,sameWidth:!0,modal:!1},r),[o,n,a,s]=I(e,["itemComponent","sectionComponent","open","defaultOpen","onOpenChange","value","defaultValue","onChange","placeholder","options","optionValue","optionTextValue","optionDisabled","optionGroupChildren","keyboardDelegate","allowDuplicateSelectionEvents","disallowEmptySelection","closeOnSelection","disallowTypeAhead","shouldFocusWrap","selectionBehavior","selectionMode","virtualized","modal","preventScroll","forceMount"],["getAnchorRect","placement","gutter","shift","flip","slide","overlap","sameWidth","fitViewport","hideWhenDetached","detachedPadding","arrowPadding","overflowPadding"],ft),[l,u]=x(),[b,d]=x(),[f,S]=x(),[g,A]=x(),[D,$]=x(),[H,p]=x(),[O,P]=x(),[ee,G]=x(!0),T=c=>{const m=o.optionValue;return m==null?String(c):String(Oe(m)?m(c):c[m])},k=w(()=>{const c=o.optionGroupChildren;return c==null?o.options:o.options.flatMap(m=>m[c]??m)}),$e=w(()=>k().map(c=>T(c))),pe=c=>[...c].map(m=>k().find(ne=>T(ne)===m)).filter(m=>m!=null),B=bt({open:()=>o.open,defaultOpen:()=>o.defaultOpen,onOpenChange:c=>o.onOpenChange?.(c)}),v=we({selectedKeys:()=>o.value!=null?o.value.map(T):o.value,defaultSelectedKeys:()=>o.defaultValue!=null?o.defaultValue.map(T):o.defaultValue,onSelectionChange:c=>{o.onChange?.(pe(c)),o.closeOnSelection&&te()},allowDuplicateSelectionEvents:()=>h(o.allowDuplicateSelectionEvents),disallowEmptySelection:()=>h(o.disallowEmptySelection),selectionBehavior:()=>h(o.selectionBehavior),selectionMode:()=>o.selectionMode,dataSource:()=>o.options??[],getKey:()=>o.optionValue,getTextValue:()=>o.optionTextValue,getDisabled:()=>o.optionDisabled,getSectionChildren:()=>o.optionGroupChildren}),He=w(()=>pe(v.selectionManager().selectedKeys())),We=c=>{v.selectionManager().toggleSelection(T(c))},{present:Ne}=ht({show:()=>o.forceMount||B.isOpen(),element:()=>D()??null}),Ge=()=>{const c=H();c&&le(c)},fe=c=>{if(o.options.length<=0)return;G(c),B.open();let m=v.selectionManager().firstSelectedKey();m==null&&(c==="first"?m=v.collection().getFirstKey():c==="last"&&(m=v.collection().getLastKey())),Ge(),v.selectionManager().setFocused(!0),v.selectionManager().setFocusedKey(m)},te=()=>{B.close(),v.selectionManager().setFocused(!1),v.selectionManager().setFocusedKey(void 0)},qe=c=>{B.isOpen()?te():fe(c)},{formControlContext:oe}=mt(a);yt(g,()=>{const c=o.defaultValue?[...o.defaultValue].map(T):new xt;v.selectionManager().setSelectedKeys(c)});const je=Lt({usage:"search",sensitivity:"base"}),Je=w(()=>{const c=h(o.keyboardDelegate);return c||new vt(v.collection,void 0,je)}),Qe=c=>o.itemComponent?.({item:c}),Xe=c=>o.sectionComponent?.({section:c});E(Pe([$e],([c])=>{const ne=[...v.selectionManager().selectedKeys()].filter(Ye=>c.includes(Ye));v.selectionManager().setSelectedKeys(ne)},{defer:!0}));const be=w(()=>({"data-expanded":B.isOpen()?"":void 0,"data-closed":B.isOpen()?void 0:""})),he={dataset:be,isOpen:B.isOpen,isDisabled:()=>oe.isDisabled()??!1,isMultiple:()=>h(o.selectionMode)==="multiple",isVirtualized:()=>o.virtualized??!1,isModal:()=>o.modal??!1,preventScroll:()=>o.preventScroll??he.isModal(),disallowTypeAhead:()=>o.disallowTypeAhead??!1,shouldFocusWrap:()=>o.shouldFocusWrap??!1,selectedOptions:He,contentPresent:Ne,autoFocus:ee,triggerRef:g,listState:()=>v,keyboardDelegate:Je,triggerId:l,valueId:b,listboxId:f,listboxAriaLabelledBy:O,setListboxAriaLabelledBy:P,setTriggerRef:A,setContentRef:$,setListboxRef:p,open:fe,close:te,toggle:qe,placeholder:()=>o.placeholder,renderItem:Qe,renderSection:Xe,removeOptionFromSelection:We,generateId:ie(()=>h(a.id)),registerTriggerId:N(u),registerValueId:N(d),registerListboxId:N(S)};return i(St.Provider,{value:oe,get children(){return i(Ke.Provider,{value:he,get children(){return i(Fe,y({anchorRef:g,contentRef:D},n,{get children(){return i(V,y({as:"div",role:"group",get id(){return h(a.id)}},()=>oe.dataset(),be,s))}}))}})}})}function ze(r){const[t,e]=I(r,["value","defaultValue","onChange","multiple"]),o=w(()=>t.value!=null?t.multiple?t.value:[t.value]:t.value),n=w(()=>t.defaultValue!=null?t.multiple?t.defaultValue:[t.defaultValue]:t.defaultValue);return i(Ht,y({get value(){return o()},get defaultValue(){return n()},onChange:s=>{t.multiple?t.onChange?.(s):t.onChange?.(s[0]??null)},get selectionMode(){return t.multiple?"multiple":"single"}},e))}function _e(r){const t=se(),e=R(),o=M({id:e.generateId("trigger")},r),[n,a,s]=I(o,["ref","disabled","onPointerDown","onClick","onKeyDown","onFocus","onBlur"],dt),l=()=>e.listState().selectionManager(),u=()=>e.keyboardDelegate(),b=()=>n.disabled||e.isDisabled(),{fieldProps:d}=gt(a),{typeSelectHandlers:f}=pt({keyboardDelegate:u,selectionManager:l,onTypeSelect:p=>l().select(p)}),S=()=>[e.listboxAriaLabelledBy(),e.valueId()].filter(Boolean).join(" ")||void 0,g=p=>{K(p,n.onPointerDown),p.currentTarget.dataset.pointerType=p.pointerType,!b()&&p.pointerType!=="touch"&&p.button===0&&(p.preventDefault(),e.toggle(!0))},A=p=>{K(p,n.onClick),!b()&&p.currentTarget.dataset.pointerType==="touch"&&e.toggle(!0)},D=p=>{if(K(p,n.onKeyDown),!b())switch(K(p,f.onKeyDown),p.key){case"Enter":case" ":case"ArrowDown":p.stopPropagation(),p.preventDefault(),e.toggle("first");break;case"ArrowUp":p.stopPropagation(),p.preventDefault(),e.toggle("last");break;case"ArrowLeft":{if(p.preventDefault(),e.isMultiple())return;const O=l().firstSelectedKey(),P=O!=null?u().getKeyAbove?.(O):u().getFirstKey?.();P!=null&&l().select(P);break}case"ArrowRight":{if(p.preventDefault(),e.isMultiple())return;const O=l().firstSelectedKey(),P=O!=null?u().getKeyBelow?.(O):u().getFirstKey?.();P!=null&&l().select(P);break}}},$=p=>{K(p,n.onFocus),!l().isFocused()&&l().setFocused(!0)},H=p=>{K(p,n.onBlur),!e.isOpen()&&l().setFocused(!1)};return E(()=>U(e.registerTriggerId(d.id()))),E(()=>{e.setListboxAriaLabelledBy([d.ariaLabelledBy(),d.ariaLabel()&&!d.ariaLabelledBy()?d.id():null].filter(Boolean).join(" ")||void 0)}),i(Ct,y({get id(){return d.id()},get disabled(){return b()},"aria-haspopup":"listbox",get"aria-expanded"(){return e.isOpen()},get"aria-controls"(){return e.isOpen()?e.listboxId():void 0},get"aria-label"(){return d.ariaLabel()},get"aria-labelledby"(){return S()},get"aria-describedby"(){return d.ariaDescribedBy()},onPointerDown:g,onClick:A,onKeyDown:D,onFocus:$,onBlur:H},()=>e.dataset(),()=>t.dataset(),s))}function Ue(r){const t=se(),e=R(),o=M({id:e.generateId("value")},r),[n,a]=I(o,["id","children"]),s=()=>e.listState().selectionManager(),l=()=>{const u=s().selectedKeys();return u.size===1&&u.has("")?!0:s().isEmpty()};return E(()=>U(e.registerValueId(n.id))),i(V,y({as:"span",get id(){return n.id},get"data-placeholder-shown"(){return l()?"":void 0}},()=>t.dataset(),a,{get children(){return i(z,{get when(){return!l()},get fallback(){return e.placeholder()},get children(){return i(Wt,{state:{selectedOption:()=>e.selectedOptions()[0],selectedOptions:()=>e.selectedOptions(),remove:u=>e.removeOptionFromSelection(u),clear:()=>s().clearSelection()},get children(){return n.children}})}})}}))}function Wt(r){return Pt(()=>{const e=r.children;return Oe(e)?e(r.state):e})()}var L=Object.assign(ze,{Arrow:Ie,Content:Ve,Description:De,ErrorMessage:Ce,HiddenSelect:Te,Icon:Ee,Item:J,ItemDescription:Q,ItemIndicator:X,ItemLabel:Y,Label:Re,Listbox:Ae,Portal:Be,Section:Z,Trigger:_e,Value:Ue}),Nt=["<div",' class="flex flex-col"><div class="pb-0.5 ml-1 opacity-60 text-sm font-medium">',"</div><!--$-->","<!--/--></div>"];const q=r=>{const t=e=>{e&&r.on_update(e)};return W(Nt,j(),F(r.label),F(i(L,{get options(){return r.options},get value(){return r.value},onChange:e=>t(e),placeholder:"selection option",itemComponent:e=>i(L.Item,{get item(){return e.item},class:"dark:text-accent-50 text-accent-900 dark:bg-accent-800 bg-accent-200 hover:cursor-pointer dark:hover:bg-accent-700 hover:bg-accent-300 px-2 py-1",get children(){return i(L.ItemLabel,{get children(){return e.item.rawValue}})}}),get children(){return[i(L.Trigger,{class:"px-2 py-1 bg-accent-200 dark:bg-accent-700 hoverable w-full rounded  text-left text-nowrap grow",get children(){return i(L.Value,{children:e=>e.selectedOption()})}}),i(L.Portal,{get children(){return i(L.Content,{get children(){return i(L.Listbox,{class:"bg-accent-200 dark:bg-accent-700  rounded shadow border"})}})}})]}})))};var Gt=["<div",' class="px-8 py-2 w-fit flex gap-2 flex-col mt-4 text-accent-950 dark:text-accent-50"><!--$-->',"<!--/--><!--$-->","<!--/--><!--$-->","<!--/--><!--$-->","<!--/--></div>"];const qt=r=>{const[t,e]=r.options,o=a=>{e(s=>({...s,color:a}))},n=a=>{e(s=>({...s,repertoire:a}))};return W(Gt,j(),F(i(q,{label:"view",options:["list","graph"],get value(){return t().view},on_update:a=>e(s=>({...s,view:a}))})),F(i(q,{label:"color",options:["both","white","black"],get value(){return t().color},on_update:a=>o(a)})),F(i(q,{label:"repertoire",options:["no filter","exclude repertoire","repertoire only"],get value(){return t().repertoire},on_update:a=>n(a)})),F(i(q,{label:"sort by",options:["games","winrate","elo delta"],get value(){return t().sortby},on_update:a=>e(s=>({...s,sortby:a}))})))},eo=qt;export{eo as F};
