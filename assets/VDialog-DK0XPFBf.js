import{cs as Re,ct as Ve,g as de,k as F,_ as M,aK as ce,p as q,K as H,ae as $,af as me,U as T,ab as I,cu as Je,e as O,a5 as ne,l as D,ac as be,aa as ge,bb as De,cv as et,M as ye,E as Ne,cw as xe,aj as tt,G as X,a9 as nt,ag as ot,bL as He,H as at,bM as rt,I as it,m as st,T as lt,c as ct,f as Ie,W as ut,al as ft,t as vt,X as dt,L as mt,j as _e,aH as gt,Q as yt,R as ht,Z as wt,F as Et,a6 as bt}from"./index-Bv9JDdsZ.js";import{d as K,e as xt,s as ue,g as St,h as We,n as $e,B as ae,i as Se,f as pt}from"./VForm-mkPLCqon.js";import{p as pe,f as re,b as ie,c as Pe,g as Oe,d as Pt,e as Ot}from"./index-D90Wg3_q.js";import{u as kt}from"./VIcon-DCZxdGLj.js";import{m as At,M as Ct}from"./index-DspfAZ2O.js";import{V as Lt}from"./variant-BN8LjZ0a.js";const Q=new WeakMap;function Tt(e,n){Object.keys(n).forEach(t=>{if(Re(t)){const o=Ve(t),a=Q.get(e);if(n[t]==null)a==null||a.forEach(i=>{const[r,s]=i;r===o&&(e.removeEventListener(o,s),a.delete(i))});else if(!a||![...a].some(i=>i[0]===o&&i[1]===n[t])){e.addEventListener(o,n[t]);const i=a||new Set;i.add([o,n[t]]),Q.has(e)||Q.set(e,i)}}else n[t]==null?e.removeAttribute(t):e.setAttribute(t,n[t])})}function Bt(e,n){Object.keys(n).forEach(t=>{if(Re(t)){const o=Ve(t),a=Q.get(e);a==null||a.forEach(i=>{const[r,s]=i;r===o&&(e.removeEventListener(o,s),a.delete(i))})}else e.removeAttribute(t)})}function qe(e){if(typeof e.getRootNode!="function"){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}const n=e.getRootNode();return n!==document&&n.getRootNode({composed:!0})!==document?null:n}function Ft(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;for(;e;){if(n?Mt(e):he(e))return e;e=e.parentElement}return document.scrollingElement}function ee(e,n){const t=[];if(n&&e&&!n.contains(e))return t;for(;e&&(he(e)&&t.push(e),e!==n);)e=e.parentElement;return t}function he(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const n=window.getComputedStyle(e);return n.overflowY==="scroll"||n.overflowY==="auto"&&e.scrollHeight>e.clientHeight}function Mt(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const n=window.getComputedStyle(e);return["scroll","auto"].includes(n.overflowY)}function Rt(e){for(;e;){if(window.getComputedStyle(e).position==="fixed")return!0;e=e.offsetParent}return!1}const Vt=q({target:[Object,Array]},"v-dialog-transition"),Dt=de()({name:"VDialogTransition",props:Vt(),setup(e,n){let{slots:t}=n;const o={onBeforeEnter(a){a.style.pointerEvents="none",a.style.visibility="hidden"},async onEnter(a,i){var y;await new Promise(d=>requestAnimationFrame(d)),await new Promise(d=>requestAnimationFrame(d)),a.style.visibility="";const{x:r,y:s,sx:v,sy:f,speed:c}=Ae(e.target,a),g=K(a,[{transform:`translate(${r}px, ${s}px) scale(${v}, ${f})`,opacity:0},{}],{duration:225*c,easing:xt});(y=ke(a))==null||y.forEach(d=>{K(d,[{opacity:0},{opacity:0,offset:.33},{}],{duration:225*2*c,easing:ue})}),g.finished.then(()=>i())},onAfterEnter(a){a.style.removeProperty("pointer-events")},onBeforeLeave(a){a.style.pointerEvents="none"},async onLeave(a,i){var y;await new Promise(d=>requestAnimationFrame(d));const{x:r,y:s,sx:v,sy:f,speed:c}=Ae(e.target,a);K(a,[{},{transform:`translate(${r}px, ${s}px) scale(${v}, ${f})`,opacity:0}],{duration:125*c,easing:St}).finished.then(()=>i()),(y=ke(a))==null||y.forEach(d=>{K(d,[{},{opacity:0,offset:.2},{opacity:0}],{duration:125*2*c,easing:ue})})},onAfterLeave(a){a.style.removeProperty("pointer-events")}};return()=>e.target?F(ce,M({name:"dialog-transition"},o,{css:!1}),t):F(ce,{name:"dialog-transition"},t)}});function ke(e){var t;const n=(t=e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list"))==null?void 0:t.children;return n&&[...n]}function Ae(e,n){const t=We(e),o=$e(n),[a,i]=getComputedStyle(n).transformOrigin.split(" ").map(A=>parseFloat(A)),[r,s]=getComputedStyle(n).getPropertyValue("--v-overlay-anchor-origin").split(" ");let v=t.left+t.width/2;r==="left"||s==="left"?v-=t.width/2:(r==="right"||s==="right")&&(v+=t.width/2);let f=t.top+t.height/2;r==="top"||s==="top"?f-=t.height/2:(r==="bottom"||s==="bottom")&&(f+=t.height/2);const c=t.width/o.width,g=t.height/o.height,y=Math.max(1,c,g),d=c/y||0,m=g/y||0,u=o.width*o.height/(window.innerWidth*window.innerHeight),w=u>.12?Math.min(1.5,(u-.12)*10+1):1;return{x:v-(a+o.left),y:f-(i+o.top),sx:d,sy:m,speed:w}}function se(e,n){return{x:e.x+n.x,y:e.y+n.y}}function Nt(e,n){return{x:e.x-n.x,y:e.y-n.y}}function Ce(e,n){if(e.side==="top"||e.side==="bottom"){const{side:t,align:o}=e,a=o==="left"?0:o==="center"?n.width/2:o==="right"?n.width:o,i=t==="top"?0:t==="bottom"?n.height:t;return se({x:a,y:i},n)}else if(e.side==="left"||e.side==="right"){const{side:t,align:o}=e,a=t==="left"?0:t==="right"?n.width:t,i=o==="top"?0:o==="center"?n.height/2:o==="bottom"?n.height:o;return se({x:a,y:i},n)}return se({x:n.width/2,y:n.height/2},n)}const je={static:_t,connected:$t},Ht=q({locationStrategy:{type:[String,Function],default:"static",validator:e=>typeof e=="function"||e in je},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]},"VOverlay-location-strategies");function It(e,n){const t=H({}),o=H();$&&me(()=>!!(n.isActive.value&&e.locationStrategy),i=>{var r,s;T(()=>e.locationStrategy,i),I(()=>{window.removeEventListener("resize",a),o.value=void 0}),window.addEventListener("resize",a,{passive:!0}),typeof e.locationStrategy=="function"?o.value=(r=e.locationStrategy(n,e,t))==null?void 0:r.updateLocation:o.value=(s=je[e.locationStrategy](n,e,t))==null?void 0:s.updateLocation});function a(i){var r;(r=o.value)==null||r.call(o,i)}return{contentStyles:t,updateLocation:o}}function _t(){}function Wt(e,n){n?e.style.removeProperty("left"):e.style.removeProperty("right");const t=$e(e);return n?t.x+=parseFloat(e.style.right||0):t.x-=parseFloat(e.style.left||0),t.y-=parseFloat(e.style.top||0),t}function $t(e,n,t){(Array.isArray(e.target.value)||Rt(e.target.value))&&Object.assign(t.value,{position:"fixed",top:0,[e.isRtl.value?"right":"left"]:0});const{preferredAnchor:a,preferredOrigin:i}=Je(()=>{const m=pe(n.location,e.isRtl.value),u=n.origin==="overlap"?m:n.origin==="auto"?re(m):pe(n.origin,e.isRtl.value);return m.side===u.side&&m.align===ie(u).align?{preferredAnchor:Pe(m),preferredOrigin:Pe(u)}:{preferredAnchor:m,preferredOrigin:u}}),[r,s,v,f]=["minWidth","minHeight","maxWidth","maxHeight"].map(m=>O(()=>{const u=parseFloat(n[m]);return isNaN(u)?1/0:u})),c=O(()=>{if(Array.isArray(n.offset))return n.offset;if(typeof n.offset=="string"){const m=n.offset.split(" ").map(parseFloat);return m.length<2&&m.push(0),m}return typeof n.offset=="number"?[n.offset,0]:[0,0]});let g=!1;const y=new ResizeObserver(()=>{g&&d()});T([e.target,e.contentEl],(m,u)=>{let[w,A]=m,[x,S]=u;x&&!Array.isArray(x)&&y.unobserve(x),w&&!Array.isArray(w)&&y.observe(w),S&&y.unobserve(S),A&&y.observe(A)},{immediate:!0}),I(()=>{y.disconnect()});function d(){if(g=!1,requestAnimationFrame(()=>g=!0),!e.target.value||!e.contentEl.value)return;const m=We(e.target.value),u=Wt(e.contentEl.value,e.isRtl.value),w=ee(e.contentEl.value),A=12;w.length||(w.push(document.documentElement),e.contentEl.value.style.top&&e.contentEl.value.style.left||(u.x-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),u.y-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)));const x=w.reduce((P,p)=>{const h=p.getBoundingClientRect(),E=new ae({x:p===document.documentElement?0:h.x,y:p===document.documentElement?0:h.y,width:p.clientWidth,height:p.clientHeight});return P?new ae({x:Math.max(P.left,E.left),y:Math.max(P.top,E.top),width:Math.min(P.right,E.right)-Math.max(P.left,E.left),height:Math.min(P.bottom,E.bottom)-Math.max(P.top,E.top)}):E},void 0);x.x+=A,x.y+=A,x.width-=A*2,x.height-=A*2;let S={anchor:a.value,origin:i.value};function _(P){const p=new ae(u),h=Ce(P.anchor,m),E=Ce(P.origin,p);let{x:k,y:V}=Nt(h,E);switch(P.anchor.side){case"top":V-=c.value[0];break;case"bottom":V+=c.value[0];break;case"left":k-=c.value[0];break;case"right":k+=c.value[0];break}switch(P.anchor.align){case"top":V-=c.value[1];break;case"bottom":V+=c.value[1];break;case"left":k-=c.value[1];break;case"right":k+=c.value[1];break}return p.x+=k,p.y+=V,p.width=Math.min(p.width,v.value),p.height=Math.min(p.height,f.value),{overflows:Se(p,x),x:k,y:V}}let R=0,C=0;const l={x:0,y:0},B={x:!1,y:!1};let U=-1;for(;!(U++>10);){const{x:P,y:p,overflows:h}=_(S);R+=P,C+=p,u.x+=P,u.y+=p;{const E=Oe(S.anchor),k=h.x.before||h.x.after,V=h.y.before||h.y.after;let j=!1;if(["x","y"].forEach(L=>{if(L==="x"&&k&&!B.x||L==="y"&&V&&!B.y){const W={anchor:{...S.anchor},origin:{...S.origin}},z=L==="x"?E==="y"?ie:re:E==="y"?re:ie;W.anchor=z(W.anchor),W.origin=z(W.origin);const{overflows:Y}=_(W);(Y[L].before<=h[L].before&&Y[L].after<=h[L].after||Y[L].before+Y[L].after<(h[L].before+h[L].after)/2)&&(S=W,j=B[L]=!0)}}),j)continue}h.x.before&&(R+=h.x.before,u.x+=h.x.before),h.x.after&&(R-=h.x.after,u.x-=h.x.after),h.y.before&&(C+=h.y.before,u.y+=h.y.before),h.y.after&&(C-=h.y.after,u.y-=h.y.after);{const E=Se(u,x);l.x=x.width-E.x.before-E.x.after,l.y=x.height-E.y.before-E.y.after,R+=E.x.before,u.x+=E.x.before,C+=E.y.before,u.y+=E.y.before}break}const oe=Oe(S.anchor);return Object.assign(t.value,{"--v-overlay-anchor-origin":`${S.anchor.side} ${S.anchor.align}`,transformOrigin:`${S.origin.side} ${S.origin.align}`,top:D(le(C)),left:e.isRtl.value?void 0:D(le(R)),right:e.isRtl.value?D(le(-R)):void 0,minWidth:D(oe==="y"?Math.min(r.value,m.width):r.value),maxWidth:D(Le(be(l.x,r.value===1/0?0:r.value,v.value))),maxHeight:D(Le(be(l.y,s.value===1/0?0:s.value,f.value)))}),{available:l,contentBox:u}}return T(()=>[a.value,i.value,n.offset,n.minWidth,n.minHeight,n.maxWidth,n.maxHeight],()=>d()),ne(()=>{const m=d();if(!m)return;const{available:u,contentBox:w}=m;w.height>u.y&&requestAnimationFrame(()=>{d(),requestAnimationFrame(()=>{d()})})}),{updateLocation:d}}function le(e){return Math.round(e*devicePixelRatio)/devicePixelRatio}function Le(e){return Math.ceil(e*devicePixelRatio)/devicePixelRatio}let fe=!0;const te=[];function qt(e){!fe||te.length?(te.push(e),ve()):(fe=!1,e(),ve())}let Te=-1;function ve(){cancelAnimationFrame(Te),Te=requestAnimationFrame(()=>{const e=te.shift();e&&e(),te.length?ve():fe=!0})}const J={none:null,close:Yt,block:Xt,reposition:Ut},jt=q({scrollStrategy:{type:[String,Function],default:"block",validator:e=>typeof e=="function"||e in J}},"VOverlay-scroll-strategies");function zt(e,n){if(!$)return;let t;ge(async()=>{t==null||t.stop(),n.isActive.value&&e.scrollStrategy&&(t=De(),await new Promise(o=>setTimeout(o)),t.active&&t.run(()=>{var o;typeof e.scrollStrategy=="function"?e.scrollStrategy(n,e,t):(o=J[e.scrollStrategy])==null||o.call(J,n,e,t)}))}),I(()=>{t==null||t.stop()})}function Yt(e){function n(t){e.isActive.value=!1}ze(e.targetEl.value??e.contentEl.value,n)}function Xt(e,n){var r;const t=(r=e.root.value)==null?void 0:r.offsetParent,o=[...new Set([...ee(e.targetEl.value,n.contained?t:void 0),...ee(e.contentEl.value,n.contained?t:void 0)])].filter(s=>!s.classList.contains("v-overlay-scroll-blocked")),a=window.innerWidth-document.documentElement.offsetWidth,i=(s=>he(s)&&s)(t||document.documentElement);i&&e.root.value.classList.add("v-overlay--scroll-blocked"),o.forEach((s,v)=>{s.style.setProperty("--v-body-scroll-x",D(-s.scrollLeft)),s.style.setProperty("--v-body-scroll-y",D(-s.scrollTop)),s!==document.documentElement&&s.style.setProperty("--v-scrollbar-offset",D(a)),s.classList.add("v-overlay-scroll-blocked")}),I(()=>{o.forEach((s,v)=>{const f=parseFloat(s.style.getPropertyValue("--v-body-scroll-x")),c=parseFloat(s.style.getPropertyValue("--v-body-scroll-y")),g=s.style.scrollBehavior;s.style.scrollBehavior="auto",s.style.removeProperty("--v-body-scroll-x"),s.style.removeProperty("--v-body-scroll-y"),s.style.removeProperty("--v-scrollbar-offset"),s.classList.remove("v-overlay-scroll-blocked"),s.scrollLeft=-f,s.scrollTop=-c,s.style.scrollBehavior=g}),i&&e.root.value.classList.remove("v-overlay--scroll-blocked")})}function Ut(e,n,t){let o=!1,a=-1,i=-1;function r(s){qt(()=>{var c,g;const v=performance.now();(g=(c=e.updateLocation).value)==null||g.call(c,s),o=(performance.now()-v)/(1e3/60)>2})}i=(typeof requestIdleCallback>"u"?s=>s():requestIdleCallback)(()=>{t.run(()=>{ze(e.targetEl.value??e.contentEl.value,s=>{o?(cancelAnimationFrame(a),a=requestAnimationFrame(()=>{a=requestAnimationFrame(()=>{r(s)})})):r(s)})})}),I(()=>{typeof cancelIdleCallback<"u"&&cancelIdleCallback(i),cancelAnimationFrame(a)})}function ze(e,n){const t=[document,...ee(e)];t.forEach(o=>{o.addEventListener("scroll",n,{passive:!0})}),I(()=>{t.forEach(o=>{o.removeEventListener("scroll",n)})})}const Gt=Symbol.for("vuetify:v-menu"),Kt=q({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function Zt(e,n){let t=()=>{};function o(r){t==null||t();const s=Number(r?e.openDelay:e.closeDelay);return new Promise(v=>{t=et(s,()=>{n==null||n(r),v(r)})})}function a(){return o(!0)}function i(){return o(!1)}return{clearDelay:t,runOpenDelay:a,runCloseDelay:i}}const Qt=q({target:[String,Object],activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,...Kt()},"VOverlay-activator");function Jt(e,n){let{isActive:t,isTop:o}=n;const a=ye("useActivator"),i=H();let r=!1,s=!1,v=!0;const f=O(()=>e.openOnFocus||e.openOnFocus==null&&e.openOnHover),c=O(()=>e.openOnClick||e.openOnClick==null&&!e.openOnHover&&!f.value),{runOpenDelay:g,runCloseDelay:y}=Zt(e,l=>{l===(e.openOnHover&&r||f.value&&s)&&!(e.openOnHover&&t.value&&!o.value)&&(t.value!==l&&(v=!0),t.value=l)}),d=H(),m={onClick:l=>{l.stopPropagation(),i.value=l.currentTarget||l.target,t.value||(d.value=[l.clientX,l.clientY]),t.value=!t.value},onMouseenter:l=>{var B;(B=l.sourceCapabilities)!=null&&B.firesTouchEvents||(r=!0,i.value=l.currentTarget||l.target,g())},onMouseleave:l=>{r=!1,y()},onFocus:l=>{tt(l.target,":focus-visible")!==!1&&(s=!0,l.stopPropagation(),i.value=l.currentTarget||l.target,g())},onBlur:l=>{s=!1,l.stopPropagation(),y()}},u=O(()=>{const l={};return c.value&&(l.onClick=m.onClick),e.openOnHover&&(l.onMouseenter=m.onMouseenter,l.onMouseleave=m.onMouseleave),f.value&&(l.onFocus=m.onFocus,l.onBlur=m.onBlur),l}),w=O(()=>{const l={};if(e.openOnHover&&(l.onMouseenter=()=>{r=!0,g()},l.onMouseleave=()=>{r=!1,y()}),f.value&&(l.onFocusin=()=>{s=!0,g()},l.onFocusout=()=>{s=!1,y()}),e.closeOnContentClick){const B=Ne(Gt,null);l.onClick=()=>{t.value=!1,B==null||B.closeParents()}}return l}),A=O(()=>{const l={};return e.openOnHover&&(l.onMouseenter=()=>{v&&(r=!0,v=!1,g())},l.onMouseleave=()=>{r=!1,y()}),l});T(o,l=>{l&&(e.openOnHover&&!r&&(!f.value||!s)||f.value&&!s&&(!e.openOnHover||!r))&&(t.value=!1)}),T(t,l=>{l||setTimeout(()=>{d.value=void 0})},{flush:"post"});const x=xe();ge(()=>{x.value&&ne(()=>{i.value=x.el})});const S=xe(),_=O(()=>e.target==="cursor"&&d.value?d.value:S.value?S.el:Ye(e.target,a)||i.value),R=O(()=>Array.isArray(_.value)?void 0:_.value);let C;return T(()=>!!e.activator,l=>{l&&$?(C=De(),C.run(()=>{en(e,a,{activatorEl:i,activatorEvents:u})})):C&&C.stop()},{flush:"post",immediate:!0}),I(()=>{C==null||C.stop()}),{activatorEl:i,activatorRef:x,target:_,targetEl:R,targetRef:S,activatorEvents:u,contentEvents:w,scrimEvents:A}}function en(e,n,t){let{activatorEl:o,activatorEvents:a}=t;T(()=>e.activator,(v,f)=>{if(f&&v!==f){const c=s(f);c&&r(c)}v&&ne(()=>i())},{immediate:!0}),T(()=>e.activatorProps,()=>{i()}),I(()=>{r()});function i(){let v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:s(),f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;v&&Tt(v,M(a.value,f))}function r(){let v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:s(),f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;v&&Bt(v,M(a.value,f))}function s(){let v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activator;const f=Ye(v,n);return o.value=(f==null?void 0:f.nodeType)===Node.ELEMENT_NODE?f:void 0,o.value}}function Ye(e,n){var o,a;if(!e)return;let t;if(e==="parent"){let i=(a=(o=n==null?void 0:n.proxy)==null?void 0:o.$el)==null?void 0:a.parentNode;for(;i!=null&&i.hasAttribute("data-no-activator");)i=i.parentNode;t=i}else typeof e=="string"?t=document.querySelector(e):"$el"in e?t=e.$el:t=e;return t}function tn(){if(!$)return X(!1);const{ssr:e}=nt();if(e){const n=X(!1);return ot(()=>{n.value=!0}),n}else return X(!0)}const nn=q({eager:Boolean},"lazy");function on(e,n){const t=X(!1),o=O(()=>t.value||e.eager||n.value);T(n,()=>t.value=!0);function a(){e.eager||(t.value=!1)}return{isBooted:t,hasContent:o,onAfterLeave:a}}function Xe(){const n=ye("useScopeId").vnode.scopeId;return{scopeId:n?{[n]:""}:void 0}}const Be=Symbol.for("vuetify:stack"),G=He([]);function an(e,n,t){const o=ye("useStack"),a=!t,i=Ne(Be,void 0),r=He({activeChildren:new Set});at(Be,r);const s=X(+n.value);me(e,()=>{var g;const c=(g=G.at(-1))==null?void 0:g[1];s.value=c?c+10:+n.value,a&&G.push([o.uid,s.value]),i==null||i.activeChildren.add(o.uid),I(()=>{if(a){const y=it(G).findIndex(d=>d[0]===o.uid);G.splice(y,1)}i==null||i.activeChildren.delete(o.uid)})});const v=X(!0);a&&ge(()=>{var g;const c=((g=G.at(-1))==null?void 0:g[0])===o.uid;setTimeout(()=>v.value=c)});const f=O(()=>!r.activeChildren.size);return{globalTop:rt(v),localTop:f,stackStyles:O(()=>({zIndex:s.value}))}}function rn(e){return{teleportTarget:O(()=>{const t=e.value;if(t===!0||!$)return;const o=t===!1?document.body:typeof t=="string"?document.querySelector(t):t;if(o==null)return;let a=o.querySelector(":scope > .v-overlay-container");return a||(a=document.createElement("div"),a.className="v-overlay-container",o.appendChild(a)),a})}}function sn(){return!0}function Ue(e,n,t){if(!e||Ge(e,t)===!1)return!1;const o=qe(n);if(typeof ShadowRoot<"u"&&o instanceof ShadowRoot&&o.host===e.target)return!1;const a=(typeof t.value=="object"&&t.value.include||(()=>[]))();return a.push(n),!a.some(i=>i==null?void 0:i.contains(e.target))}function Ge(e,n){return(typeof n.value=="object"&&n.value.closeConditional||sn)(e)}function ln(e,n,t){const o=typeof t.value=="function"?t.value:t.value.handler;n._clickOutside.lastMousedownWasOutside&&Ue(e,n,t)&&setTimeout(()=>{Ge(e,t)&&o&&o(e)},0)}function Fe(e,n){const t=qe(e);n(document),typeof ShadowRoot<"u"&&t instanceof ShadowRoot&&n(t)}const cn={mounted(e,n){const t=a=>ln(a,e,n),o=a=>{e._clickOutside.lastMousedownWasOutside=Ue(a,e,n)};Fe(e,a=>{a.addEventListener("click",t,!0),a.addEventListener("mousedown",o,!0)}),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!1}),e._clickOutside[n.instance.$.uid]={onClick:t,onMousedown:o}},unmounted(e,n){e._clickOutside&&(Fe(e,t=>{var i;if(!t||!((i=e._clickOutside)!=null&&i[n.instance.$.uid]))return;const{onClick:o,onMousedown:a}=e._clickOutside[n.instance.$.uid];t.removeEventListener("click",o,!0),t.removeEventListener("mousedown",a,!0)}),delete e._clickOutside[n.instance.$.uid])}};function un(e){const{modelValue:n,color:t,...o}=e;return F(ce,{name:"fade-transition",appear:!0},{default:()=>[e.modelValue&&F("div",M({class:["v-overlay__scrim",e.color.backgroundColorClasses.value],style:e.color.backgroundColorStyles.value},o),null)]})}const Ke=q({absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,opacity:[Number,String],noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[Boolean,String],default:!0},zIndex:{type:[Number,String],default:2e3},...Qt(),...st(),...lt(),...nn(),...Ht(),...jt(),...ct(),...At()},"VOverlay"),Me=de()({name:"VOverlay",directives:{ClickOutside:cn},inheritAttrs:!1,props:{_disableGlobalStack:Boolean,...Ke()},emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,afterEnter:()=>!0,afterLeave:()=>!0},setup(e,n){let{slots:t,attrs:o,emit:a}=n;const i=Ie(e,"modelValue"),r=O({get:()=>i.value,set:b=>{b&&e.disabled||(i.value=b)}}),{themeClasses:s}=ut(e),{rtlClasses:v,isRtl:f}=ft(),{hasContent:c,onAfterLeave:g}=on(e,r),y=kt(O(()=>typeof e.scrim=="string"?e.scrim:null)),{globalTop:d,localTop:m,stackStyles:u}=an(r,vt(e,"zIndex"),e._disableGlobalStack),{activatorEl:w,activatorRef:A,target:x,targetEl:S,targetRef:_,activatorEvents:R,contentEvents:C,scrimEvents:l}=Jt(e,{isActive:r,isTop:m}),B=O(()=>{var b;return(b=w==null?void 0:w.value)==null?void 0:b.getRootNode()}),{teleportTarget:U}=rn(O(()=>e.attach||e.contained||B.value instanceof ShadowRoot?B.value:!1)),{dimensionStyles:oe}=dt(e),P=tn(),{scopeId:p}=Xe();T(()=>e.disabled,b=>{b&&(r.value=!1)});const h=H(),E=H(),k=H(),{contentStyles:V,updateLocation:j}=It(e,{isRtl:f,contentEl:k,target:x,isActive:r});zt(e,{root:h,contentEl:k,targetEl:S,isActive:r,updateLocation:j});function L(b){a("click:outside",b),e.persistent?Z():r.value=!1}function W(b){return r.value&&d.value&&(!e.scrim||b.target===E.value)}$&&T(r,b=>{b?window.addEventListener("keydown",z):window.removeEventListener("keydown",z)},{immediate:!0}),mt(()=>{$&&window.removeEventListener("keydown",z)});function z(b){var N,Ee;b.key==="Escape"&&d.value&&(e.persistent?Z():(r.value=!1,(N=k.value)!=null&&N.contains(document.activeElement)&&((Ee=w.value)==null||Ee.focus())))}const Y=Pt();me(()=>e.closeOnBack,()=>{Ot(Y,b=>{d.value&&r.value?(b(!1),e.persistent?Z():r.value=!1):b()})});const we=H();T(()=>r.value&&(e.absolute||e.contained)&&U.value==null,b=>{if(b){const N=Ft(h.value);N&&N!==document.scrollingElement&&(we.value=N.scrollTop)}});function Z(){e.noClickAnimation||k.value&&K(k.value,[{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:ue})}function Ze(){a("afterEnter")}function Qe(){g(),a("afterLeave")}return _e(()=>{var b;return F(Et,null,[(b=t.activator)==null?void 0:b.call(t,{isActive:r.value,targetRef:_,props:M({ref:A},R.value,e.activatorProps)}),P.value&&c.value&&F(gt,{disabled:!U.value,to:U.value},{default:()=>[F("div",M({class:["v-overlay",{"v-overlay--absolute":e.absolute||e.contained,"v-overlay--active":r.value,"v-overlay--contained":e.contained},s.value,v.value,e.class],style:[u.value,{"--v-overlay-opacity":e.opacity,top:D(we.value)},e.style],ref:h},p,o),[F(un,M({color:y,modelValue:r.value&&!!e.scrim,ref:E},l.value),null),F(Ct,{appear:!0,persisted:!0,transition:e.transition,target:x.value,onAfterEnter:Ze,onAfterLeave:Qe},{default:()=>{var N;return[yt(F("div",M({ref:k,class:["v-overlay__content",e.contentClass],style:[oe.value,V.value]},C.value,e.contentProps),[(N=t.default)==null?void 0:N.call(t,{isActive:r})]),[[ht,r.value],[wt("click-outside"),{handler:L,closeConditional:W,include:()=>[w.value]}]])]}})])]})])}),{activatorEl:w,scrimEl:E,target:x,animateClick:Z,contentEl:k,globalTop:d,localTop:m,updateLocation:j}}}),fn=q({fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...Ke({origin:"center center",scrollStrategy:"block",transition:{component:Dt},zIndex:2400})},"VDialog"),wn=de()({name:"VDialog",props:fn(),emits:{"update:modelValue":e=>!0,afterLeave:()=>!0},setup(e,n){let{emit:t,slots:o}=n;const a=Ie(e,"modelValue"),{scopeId:i}=Xe(),r=H();function s(c){var d,m;const g=c.relatedTarget,y=c.target;if(g!==y&&((d=r.value)!=null&&d.contentEl)&&((m=r.value)!=null&&m.globalTop)&&![document,r.value.contentEl].includes(y)&&!r.value.contentEl.contains(y)){const u=bt(r.value.contentEl);if(!u.length)return;const w=u[0],A=u[u.length-1];g===w?A.focus():w.focus()}}$&&T(()=>a.value&&e.retainFocus,c=>{c?document.addEventListener("focusin",s):document.removeEventListener("focusin",s)},{immediate:!0});function v(){var c;(c=r.value)!=null&&c.contentEl&&!r.value.contentEl.contains(document.activeElement)&&r.value.contentEl.focus({preventScroll:!0})}function f(){t("afterLeave")}return T(a,async c=>{var g;c||(await ne(),(g=r.value.activatorEl)==null||g.focus({preventScroll:!0}))}),_e(()=>{const c=Me.filterProps(e),g=M({"aria-haspopup":"dialog","aria-expanded":String(a.value)},e.activatorProps),y=M({tabindex:-1},e.contentProps);return F(Me,M({ref:r,class:["v-dialog",{"v-dialog--fullscreen":e.fullscreen,"v-dialog--scrollable":e.scrollable},e.class],style:e.style},c,{modelValue:a.value,"onUpdate:modelValue":d=>a.value=d,"aria-modal":"true",activatorProps:g,contentProps:y,role:"dialog",onAfterEnter:v,onAfterLeave:f},i),{activator:o.activator,default:function(){for(var d=arguments.length,m=new Array(d),u=0;u<d;u++)m[u]=arguments[u];return F(Lt,{root:"VDialog"},{default:()=>{var w;return[(w=o.default)==null?void 0:w.call(o,...m)]}})}})}),pt({},r)}});export{wn as V,Dt as a,Gt as b,Me as c,nn as d,on as e,Ft as g,Ke as m,Xe as u};
