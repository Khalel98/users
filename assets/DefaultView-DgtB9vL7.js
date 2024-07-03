import{V as p,a as B,b as w,_ as S}from"./VLayout-Dj5BwZig.js";import{m as P,a as $,b as x,c as N,u as I,d as T,e as D,f as R,g as z,_ as E,V as u}from"./index-BGq3NTOk.js";import{p as L,m as q,a as A,b as G,c as M,g as j,u as F,t as l,d as U,e as i,f as H,h as J,i as K,j as O,k as e,l as Q,r as W,o as X,n as Y,w as o,q as n,s as Z,V as tt,v as s}from"./index-DwtaCfGO.js";import{V as et}from"./VCard-RJQHm45Z.js";import{m as ot,u as at,V as st,a as d}from"./VBtn-CkxTN2t3.js";import"./VToolbar-CEKJk34t.js";import"./index-BO8FKK4Q.js";import"./VImg-CUm-mLzW.js";/* empty css              */import"./createSimpleFunctional-CwlLRIoL.js";import"./VAvatar-BXh4o6ar.js";const lt=L({baseColor:String,bgColor:String,color:String,grow:Boolean,mode:{type:String,validator:t=>!t||["horizontal","shift"].includes(t)},height:{type:[Number,String],default:56},active:{type:Boolean,default:!0},...P(),...q(),...$(),...x(),...N(),...A({name:"bottom-navigation"}),...G({tag:"header"}),...ot({selectedClass:"v-btn--selected"}),...M()},"VBottomNavigation"),it=j()({name:"VBottomNavigation",props:lt(),emits:{"update:active":t=>!0,"update:modelValue":t=>!0},setup(t,a){let{slots:m}=a;const{themeClasses:_}=F(),{borderClasses:h}=I(t),{backgroundColorClasses:c,backgroundColorStyles:v}=T(l(t,"bgColor")),{densityClasses:r}=D(t),{elevationClasses:y}=R(t),{roundedClasses:C}=z(t),{ssrBootStyles:b}=U(),g=i(()=>Number(t.height)-(t.density==="comfortable"?8:0)-(t.density==="compact"?16:0)),f=H(t,"active",t.active),{layoutItemStyles:V,layoutIsReady:k}=J({id:t.name,order:i(()=>parseInt(t.order,10)),position:i(()=>"bottom"),layoutSize:i(()=>f.value?g.value:0),elementSize:g,active:f,absolute:l(t,"absolute")});return at(t,st),K({VBtn:{baseColor:l(t,"baseColor"),color:l(t,"color"),density:l(t,"density"),stacked:i(()=>t.mode!=="horizontal"),variant:"text"}},{scoped:!0}),O(()=>e(t.tag,{class:["v-bottom-navigation",{"v-bottom-navigation--active":f.value,"v-bottom-navigation--grow":t.grow,"v-bottom-navigation--shift":t.mode==="shift"},_.value,c.value,h.value,r.value,y.value,C.value,t.class],style:[v.value,V.value,{height:Q(g.value)},b.value,t.style]},{default:()=>[m.default&&e("div",{class:"v-bottom-navigation__content"},[m.default()])]})),k}}),nt={data:()=>({active:!0}),methods:{async logout(){try{await this.$store.dispatch("logout")}catch(t){console.error(t),alert("Данные введены неверно")}}}},rt={style:{margin:"0 auto","max-width":"600px"}},ut={class:"section__logo"},dt=n("div",{class:"section__logo__img"},[n("img",{src:S,alt:""}),n("span",null,"In Credit")],-1),mt={class:"section__logo__route"};function ct(t,a,m,_,h,c){const v=W("router-view");return X(),Y("div",rt,[e(et,{"max-width":"600",style:{height:"calc(100vh - 56px)","overflow-y":"scroll"}},{default:o(()=>[e(p,null,{default:o(()=>[e(B,null,{default:o(()=>[n("div",ut,[dt,n("div",mt,Z(this.$route.meta.title),1)])]),_:1}),e(tt,null,{default:o(()=>[e(w,null,{default:o(()=>[e(v)]),_:1})]),_:1})]),_:1}),e(it,{"max-width":"600",active:t.active,color:"indigo"},{default:o(()=>[e(d,{onClick:a[0]||(a[0]=r=>t.$router.push("/main"))},{default:o(()=>[e(u,null,{default:o(()=>[s("mdi-home-variant")]),_:1}),s(" Главная ")]),_:1}),e(d,{onClick:a[1]||(a[1]=r=>t.$router.push("/request"))},{default:o(()=>[e(u,null,{default:o(()=>[s("mdi-list-box")]),_:1}),s(" Заявки ")]),_:1}),e(d,{onClick:a[2]||(a[2]=r=>t.$router.push("/profile"))},{default:o(()=>[e(u,null,{default:o(()=>[s("mdi mdi-account")]),_:1}),s(" Кабинет ")]),_:1}),e(d,{onClick:c.logout},{default:o(()=>[e(u,null,{default:o(()=>[s("mdi mdi-logout")]),_:1}),s(" Выйти ")]),_:1},8,["onClick"])]),_:1},8,["active"])]),_:1})])}const Bt=E(nt,[["render",ct]]);export{Bt as default};
