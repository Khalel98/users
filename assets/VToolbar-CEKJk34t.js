import{p as x,m as y,b as T,g as V,j as k,k as a,c as H,t as I,X as E,ao as D,K as w,e as h,i as j,l as o}from"./index-DwtaCfGO.js";import{V as F}from"./index-BO8FKK4Q.js";import{m as K,b as U,c as X,d as $,u as q,f as z,g as A,h as u}from"./index-BGq3NTOk.js";import{V as G}from"./VImg-CUm-mLzW.js";const J=x({text:String,...y(),...T()},"VToolbarTitle"),L=V()({name:"VToolbarTitle",props:J(),setup(e,n){let{slots:t}=n;return k(()=>{const s=!!(t.default||t.text||e.text);return a(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var l;return[s&&a("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(l=t.default)==null?void 0:l.call(t)])]}})}),{}}}),M=[null,"prominent","default","comfortable","compact"],O=x({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>M.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...K(),...y(),...U(),...X(),...T({tag:"header"}),...H()},"VToolbar"),p=V()({name:"VToolbar",props:O(),setup(e,n){var c;let{slots:t}=n;const{backgroundColorClasses:s,backgroundColorStyles:l}=$(I(e,"color")),{borderClasses:_}=q(e),{elevationClasses:C}=z(e),{roundedClasses:B}=A(e),{themeClasses:P}=E(e),{rtlClasses:S}=D(),i=w(!!(e.extended||(c=t.extension)!=null&&c.call(t))),r=h(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),d=h(()=>i.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return j({VBtn:{variant:"text"}}),k(()=>{var g;const N=!!(e.title||t.title),R=!!(t.image||e.image),m=(g=t.extension)==null?void 0:g.call(t);return i.value=!!(e.extended||m),a(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},s.value,_.value,C.value,B.value,P.value,S.value,e.class],style:[l.value,e.style]},{default:()=>[R&&a("div",{key:"image",class:"v-toolbar__image"},[t.image?a(u,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):a(G,{key:"image-img",cover:!0,src:e.image},null)]),a(u,{defaults:{VTabs:{height:o(r.value)}}},{default:()=>{var v,b,f;return[a("div",{class:"v-toolbar__content",style:{height:o(r.value)}},[t.prepend&&a("div",{class:"v-toolbar__prepend"},[(v=t.prepend)==null?void 0:v.call(t)]),N&&a(L,{key:"title",text:e.title},{text:t.title}),(b=t.default)==null?void 0:b.call(t),t.append&&a("div",{class:"v-toolbar__append"},[(f=t.append)==null?void 0:f.call(t)])])]}}),a(u,{defaults:{VTabs:{height:o(d.value)}}},{default:()=>[a(F,null,{default:()=>[i.value&&a("div",{class:"v-toolbar__extension",style:{height:o(d.value)}},[m])]})]})]})}),{contentHeight:r,extensionHeight:d}}});export{p as V,L as a,O as m};
