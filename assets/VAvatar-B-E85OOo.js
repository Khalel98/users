import{p as R,m as I,T as Q,g as T,X,j as B,k as t,e as b,t as Z,M as $,G as y,K as J,U as C,by as Y,cx as p,a5 as ee,L as ae,Q as x,Z as te,F as ne,_ as re,l as le,R as se,P as ie,b as oe,c as ue,W as ce}from"./index-zXi0GE6K.js";import{c as M,f as O,a as ve,h as de,j as ge,d as me,V as fe,k as Se}from"./index-Ba0vIHqe.js";import{u as ye,m as _e,b as he,V as Ve}from"./VIcon-BFFshrVN.js";import{m as be,I as ke,M as V}from"./index-CylBxW8X.js";function Pe(e){return{aspectStyles:b(()=>{const u=Number(e.aspectRatio);return u?{paddingBottom:String(1/u*100)+"%"}:void 0})}}const E=R({aspectRatio:[String,Number],contentClass:null,inline:Boolean,...I(),...Q()},"VResponsive"),F=T()({name:"VResponsive",props:E(),setup(e,u){let{slots:i}=u;const{aspectStyles:s}=Pe(e),{dimensionStyles:g}=X(e);return B(()=>{var v;return t("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[g.value,e.style]},[t("div",{class:"v-responsive__sizer",style:s.value},null),(v=i.additional)==null?void 0:v.call(i),i.default&&t("div",{class:["v-responsive__content",e.contentClass]},[i.default()])])}),{}}}),ze=R({alt:String,cover:Boolean,color:String,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...E(),...I(),...M(),...be()},"VImg"),Ce=T()({name:"VImg",directives:{intersect:ke},props:ze(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,u){let{emit:i,slots:s}=u;const{backgroundColorClasses:g,backgroundColorStyles:v}=ye(Z(e,"color")),{roundedClasses:k}=O(e),d=$("VImg"),_=y(""),r=J(),n=y(e.eager?"loading":"idle"),m=y(),h=y(),o=b(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),f=b(()=>o.value.aspect||m.value/h.value||0);C(()=>e.src,()=>{P(n.value!=="idle")}),C(f,(a,l)=>{!a&&l&&r.value&&S(r.value)}),Y(()=>P());function P(a){if(!(e.eager&&a)&&!(p&&!a&&!e.eager)){if(n.value="loading",o.value.lazySrc){const l=new Image;l.src=o.value.lazySrc,S(l,null)}o.value.src&&ee(()=>{var l;i("loadstart",((l=r.value)==null?void 0:l.currentSrc)||o.value.src),setTimeout(()=>{var c;if(!d.isUnmounted)if((c=r.value)!=null&&c.complete){if(r.value.naturalWidth||U(),n.value==="error")return;f.value||S(r.value,null),n.value==="loading"&&w()}else f.value||S(r.value),j()})})}}function w(){var a;d.isUnmounted||(j(),S(r.value),n.value="loaded",i("load",((a=r.value)==null?void 0:a.currentSrc)||o.value.src))}function U(){var a;d.isUnmounted||(n.value="error",i("error",((a=r.value)==null?void 0:a.currentSrc)||o.value.src))}function j(){const a=r.value;a&&(_.value=a.currentSrc||a.src)}let z=-1;ae(()=>{clearTimeout(z)});function S(a){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const c=()=>{if(clearTimeout(z),d.isUnmounted)return;const{naturalHeight:N,naturalWidth:W}=a;N||W?(m.value=W,h.value=N):!a.complete&&n.value==="loading"&&l!=null?z=window.setTimeout(c,l):(a.currentSrc.endsWith(".svg")||a.currentSrc.startsWith("data:image/svg+xml"))&&(m.value=1,h.value=1)};c()}const A=b(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),H=()=>{var c;if(!o.value.src||n.value==="idle")return null;const a=t("img",{class:["v-img__img",A.value],style:{objectPosition:e.position},src:o.value.src,srcset:o.value.srcset,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:r,onLoad:w,onError:U},null),l=(c=s.sources)==null?void 0:c.call(s);return t(V,{transition:e.transition,appear:!0},{default:()=>[x(l?t("picture",{class:"v-img__picture"},[l,a]):a,[[se,n.value==="loaded"]])]})},L=()=>t(V,{transition:e.transition},{default:()=>[o.value.lazySrc&&n.value!=="loaded"&&t("img",{class:["v-img__img","v-img__img--preload",A.value],style:{objectPosition:e.position},src:o.value.lazySrc,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),q=()=>s.placeholder?t(V,{transition:e.transition,appear:!0},{default:()=>[(n.value==="loading"||n.value==="error"&&!s.error)&&t("div",{class:"v-img__placeholder"},[s.placeholder()])]}):null,G=()=>s.error?t(V,{transition:e.transition,appear:!0},{default:()=>[n.value==="error"&&t("div",{class:"v-img__error"},[s.error()])]}):null,K=()=>e.gradient?t("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,D=y(!1);{const a=C(f,l=>{l&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{D.value=!0})}),a())})}return B(()=>{const a=F.filterProps(e);return x(t(F,re({class:["v-img",{"v-img--booting":!D.value},g.value,k.value,e.class],style:[{width:le(e.width==="auto"?m.value:e.width)},v.value,e.style]},a,{aspectRatio:f.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>t(ne,null,[t(H,null,null),t(L,null,null),t(K,null,null),t(q,null,null),t(G,null,null)]),default:s.default}),[[te("intersect"),{handler:P,options:e.options},null,{once:!0}]])}),{currentSrc:_,image:r,state:n,naturalWidth:m,naturalHeight:h}}}),Re=R({start:Boolean,end:Boolean,icon:ie,image:String,text:String,...I(),...ve(),...M(),..._e(),...oe(),...ue(),...de({variant:"flat"})},"VAvatar"),Ue=T()({name:"VAvatar",props:Re(),setup(e,u){let{slots:i}=u;const{themeClasses:s}=ce(e),{colorClasses:g,colorStyles:v,variantClasses:k}=ge(e),{densityClasses:d}=me(e),{roundedClasses:_}=O(e),{sizeClasses:r,sizeStyles:n}=he(e);return B(()=>t(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},s.value,g.value,d.value,_.value,r.value,k.value,e.class],style:[v.value,n.value,e.style]},{default:()=>[i.default?t(fe,{key:"content-defaults",defaults:{VImg:{cover:!0,image:e.image},VIcon:{icon:e.icon}}},{default:()=>[i.default()]}):e.image?t(Ce,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?t(Ve,{key:"icon",icon:e.icon},null):e.text,Se(!1,"v-avatar")]})),{}}});export{Ue as V,Ce as a};
