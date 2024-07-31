import{m as j,b as T}from"./VForm-CvWlOaw8.js";import{c as K}from"./VDialog-BlZur9n5.js";import{a as L}from"./VBtn-Do2fdho1.js";import{p as q,T as z,an as M,g as U,X,f as $,ah as E,e as r,K as y,i as G,U as h,a5 as H,j as J,a3 as Q,k as s,F as W,_ as k,a2 as V}from"./index-zXi0GE6K.js";import{c as Y,u as Z}from"./VInput-Cm7jZMlg.js";const ee=q({autofocus:Boolean,divider:String,focusAll:Boolean,label:{type:String,default:"$vuetify.input.otp"},length:{type:[Number,String],default:6},modelValue:{type:[Number,String],default:void 0},placeholder:String,type:{type:String,default:"number"},...z(),...Y(),...M(j({variant:"outlined"}),["baseColor","bgColor","class","color","disabled","error","loading","rounded","style","theme","variant"])},"VOtpInput"),oe=U()({name:"VOtpInput",props:ee(),emits:{finish:t=>!0,"update:focused":t=>!0,"update:modelValue":t=>!0},setup(t,F){let{attrs:x,emit:A,slots:d}=F;const{dimensionStyles:P}=X(t),{isFocused:g,focus:_,blur:D}=Z(t),o=$(t,"modelValue","",e=>e==null?[]:String(e).split(""),e=>e.join("")),{t:w}=E(),f=r(()=>Number(t.length)),C=r(()=>Array(f.value).fill(0)),i=y(-1),m=y(),c=y([]),p=r(()=>c.value[i.value]);function I(){if(b(p.value.value)){p.value.value="";return}const e=o.value.slice(),a=p.value.value;e[i.value]=a;let n=null;i.value>o.value.length?n=o.value.length+1:i.value+1!==f.value&&(n="next"),o.value=e,n&&V(m.value,n)}function S(e){const a=o.value.slice(),n=i.value;let u=null;["ArrowLeft","ArrowRight","Backspace","Delete"].includes(e.key)&&(e.preventDefault(),e.key==="ArrowLeft"?u="prev":e.key==="ArrowRight"?u="next":["Backspace","Delete"].includes(e.key)&&(a[i.value]="",o.value=a,i.value>0&&e.key==="Backspace"?u="prev":requestAnimationFrame(()=>{var l;(l=c.value[n])==null||l.select()})),requestAnimationFrame(()=>{u!=null&&V(m.value,u)}))}function B(e,a){var u,l;a.preventDefault(),a.stopPropagation();const n=((u=a==null?void 0:a.clipboardData)==null?void 0:u.getData("Text"))??"";b(n)||(o.value=n.split(""),(l=c.value)==null||l[e].blur())}function N(){o.value=[]}function O(e,a){_(),i.value=a}function R(){D(),i.value=-1}function b(e){return t.type==="number"&&/[^0-9]/g.test(e)}return G({VField:{color:r(()=>t.color),bgColor:r(()=>t.color),baseColor:r(()=>t.baseColor),disabled:r(()=>t.disabled),error:r(()=>t.error),variant:r(()=>t.variant)}},{scoped:!0}),h(o,e=>{e.length===f.value&&A("finish",e.join(""))},{deep:!0}),h(i,e=>{e<0||H(()=>{var a;(a=c.value[e])==null||a.select()})}),J(()=>{var n;const[e,a]=Q(x);return s("div",k({class:["v-otp-input",{"v-otp-input--divided":!!t.divider},t.class],style:[t.style]},e),[s("div",{ref:m,class:"v-otp-input__content",style:[P.value]},[C.value.map((u,l)=>s(W,null,[t.divider&&l!==0&&s("span",{class:"v-otp-input__divider"},[t.divider]),s(T,{focused:g.value&&t.focusAll||i.value===l,key:l},{...d,loader:void 0,default:()=>s("input",{ref:v=>c.value[l]=v,"aria-label":w(t.label,l+1),autofocus:l===0&&t.autofocus,autocomplete:"one-time-code",class:["v-otp-input__field"],disabled:t.disabled,inputmode:t.type==="number"?"numeric":"text",min:t.type==="number"?0:void 0,maxlength:"1",placeholder:t.placeholder,type:t.type==="number"?"text":t.type,value:o.value[l],onInput:I,onFocus:v=>O(v,l),onBlur:R,onKeydown:S,onPaste:v=>B(l,v)},null)})])),s("input",k({class:"v-otp-input-input",type:"hidden"},a,{value:o.value.join("")}),null),s(K,{contained:!0,"content-class":"v-otp-input__loader","model-value":!!t.loading,persistent:!0},{default:()=>{var u;return[((u=d.loader)==null?void 0:u.call(d))??s(L,{color:typeof t.loading=="boolean"?void 0:t.loading,indeterminate:!0,size:"24",width:"2"},null)]}}),(n=d.default)==null?void 0:n.call(d)])])}),{blur:()=>{var e;(e=c.value)==null||e.some(a=>a.blur())},focus:()=>{var e;(e=c.value)==null||e[0].focus()},reset:N,isFocused:g}}});export{oe as V};
