import{p as W,m as O,g as D,e as y,j as T,k as r,Q,R as X,P as k,S as A,c as ie,W as re,al as se,N as oe,K as $,t as ue,U as ce,l as de,F as fe,_ as ve,cs as me,cy as he}from"./index-Bv9JDdsZ.js";import{m as ge,d as be,M as ye,c as xe}from"./index-DspfAZ2O.js";import{b as Ce,c as pe,u as we,d as Pe,e as Re,f as _e}from"./VInput-od7ewK1K.js";import{u as Fe,a as Ve}from"./VIcon-DCZxdGLj.js";import{h as Ie,a as Se,L as Be}from"./index-D90Wg3_q.js";import{c as $e,f as Le,V as We}from"./variant-BN8LjZ0a.js";class L{constructor(l){let{x:a,y:i,width:t,height:n}=l;this.x=a,this.y=i,this.width=t,this.height=n}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function Ye(e,l){return{x:{before:Math.max(0,l.left-e.left),after:Math.max(0,e.right-l.right)},y:{before:Math.max(0,l.top-e.top),after:Math.max(0,e.bottom-l.bottom)}}}function Ge(e){return Array.isArray(e)?new L({x:e[0],y:e[1],width:0,height:0}):e.getBoundingClientRect()}function Oe(e){const l=e.getBoundingClientRect(),a=getComputedStyle(e),i=a.transform;if(i){let t,n,s,c,o;if(i.startsWith("matrix3d("))t=i.slice(9,-1).split(/, /),n=+t[0],s=+t[5],c=+t[12],o=+t[13];else if(i.startsWith("matrix("))t=i.slice(7,-1).split(/, /),n=+t[0],s=+t[3],c=+t[4],o=+t[5];else return new L(l);const u=a.transformOrigin,d=l.x-c-(1-n)*parseFloat(u),f=l.y-o-(1-s)*parseFloat(u.slice(u.indexOf(" ")+1)),b=n?l.width/n:e.offsetWidth+1,g=s?l.height/s:e.offsetHeight+1;return new L({x:d,y:f,width:b,height:g})}else return new L(l)}function De(e,l,a){if(typeof e.animate>"u")return{finished:Promise.resolve()};let i;try{i=e.animate(l,a)}catch{return{finished:Promise.resolve()}}return typeof i.finished>"u"&&(i.finished=new Promise(t=>{i.onfinish=()=>{t(i)}})),i}const Te="cubic-bezier(0.4, 0, 0.2, 1)",Je="cubic-bezier(0.0, 0, 0.2, 1)",Ze="cubic-bezier(0.4, 0, 1, 1)",E=Symbol("Forwarded refs");function M(e,l){let a=e;for(;a;){const i=Reflect.getOwnPropertyDescriptor(a,l);if(i)return i;a=Object.getPrototypeOf(a)}}function ke(e){for(var l=arguments.length,a=new Array(l>1?l-1:0),i=1;i<l;i++)a[i-1]=arguments[i];return e[E]=a,new Proxy(e,{get(t,n){if(Reflect.has(t,n))return Reflect.get(t,n);if(!(typeof n=="symbol"||n.startsWith("$")||n.startsWith("__"))){for(const s of a)if(s.value&&Reflect.has(s.value,n)){const c=Reflect.get(s.value,n);return typeof c=="function"?c.bind(s.value):c}}},has(t,n){if(Reflect.has(t,n))return!0;if(typeof n=="symbol"||n.startsWith("$")||n.startsWith("__"))return!1;for(const s of a)if(s.value&&Reflect.has(s.value,n))return!0;return!1},set(t,n,s){if(Reflect.has(t,n))return Reflect.set(t,n,s);if(typeof n=="symbol"||n.startsWith("$")||n.startsWith("__"))return!1;for(const c of a)if(c.value&&Reflect.has(c.value,n))return Reflect.set(c.value,n,s);return!1},getOwnPropertyDescriptor(t,n){var c;const s=Reflect.getOwnPropertyDescriptor(t,n);if(s)return s;if(!(typeof n=="symbol"||n.startsWith("$")||n.startsWith("__"))){for(const o of a){if(!o.value)continue;const u=M(o.value,n)??("_"in o.value?M((c=o.value._)==null?void 0:c.setupState,n):void 0);if(u)return u}for(const o of a){const u=o.value&&o.value[E];if(!u)continue;const d=u.slice();for(;d.length;){const f=d.shift(),b=M(f.value,n);if(b)return b;const g=f.value&&f.value[E];g&&d.push(...g)}}}}})}const Ae=W({active:Boolean,disabled:Boolean,max:[Number,String],value:{type:[Number,String],default:0},...O(),...ge({transition:{component:be}})},"VCounter"),et=D()({name:"VCounter",functional:!0,props:Ae(),setup(e,l){let{slots:a}=l;const i=y(()=>e.max?`${e.value} / ${e.max}`:String(e.value));return T(()=>r(ye,{transition:e.transition},{default:()=>[Q(r("div",{class:["v-counter",{"text-error":e.max&&!e.disabled&&parseFloat(e.value)>parseFloat(e.max)},e.class],style:e.style},[a.default?a.default({counter:i.value,max:e.max,value:e.value}):i.value]),[[X,e.active]])]})),{}}}),Ee=W({floating:Boolean,...O()},"VFieldLabel"),B=D()({name:"VFieldLabel",props:Ee(),setup(e,l){let{slots:a}=l;return T(()=>r(Ce,{class:["v-field-label",{"v-field-label--floating":e.floating},e.class],style:e.style,"aria-hidden":e.floating||void 0},a)),{}}}),Me=["underlined","outlined","filled","solo","solo-inverted","solo-filled","plain"],je=W({appendInnerIcon:k,bgColor:String,clearable:Boolean,clearIcon:{type:k,default:"$clear"},active:Boolean,centerAffix:{type:Boolean,default:void 0},color:String,baseColor:String,dirty:Boolean,disabled:{type:Boolean,default:null},error:Boolean,flat:Boolean,label:String,persistentClear:Boolean,prependInnerIcon:k,reverse:Boolean,singleLine:Boolean,variant:{type:String,default:"filled",validator:e=>Me.includes(e)},"onClick:clear":A(),"onClick:appendInner":A(),"onClick:prependInner":A(),...O(),...Ie(),...$e(),...ie()},"VField"),Ke=D()({name:"VField",inheritAttrs:!1,props:{id:String,...pe(),...je()},emits:{"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,l){let{attrs:a,emit:i,slots:t}=l;const{themeClasses:n}=re(e),{loaderClasses:s}=Se(e),{focusClasses:c,isFocused:o,focus:u,blur:d}=we(e),{InputIcon:f}=Pe(e),{roundedClasses:b}=Le(e),{rtlClasses:g}=se(),R=y(()=>e.dirty||e.active),_=y(()=>!e.singleLine&&!!(e.label||t.label)),Y=oe(),x=y(()=>e.id||`input-${Y}`),G=y(()=>`${x.value}-messages`),j=$(),F=$(),K=$(),N=y(()=>["plain","underlined"].includes(e.variant)),{backgroundColorClasses:J,backgroundColorStyles:Z}=Fe(ue(e,"bgColor")),{textColorClasses:U,textColorStyles:z}=Ve(y(()=>e.error||e.disabled?void 0:R.value&&o.value?e.color:e.baseColor));ce(R,v=>{if(_.value){const m=j.value.$el,C=F.value.$el;requestAnimationFrame(()=>{const p=Oe(m),h=C.getBoundingClientRect(),V=h.x-p.x,I=h.y-p.y-(p.height/2-h.height/2),P=h.width/.75,S=Math.abs(P-p.width)>1?{maxWidth:de(P)}:void 0,te=getComputedStyle(m),H=getComputedStyle(C),ne=parseFloat(te.transitionDuration)*1e3||150,ae=parseFloat(H.getPropertyValue("--v-field-label-scale")),le=H.getPropertyValue("color");m.style.visibility="visible",C.style.visibility="hidden",De(m,{transform:`translate(${V}px, ${I}px) scale(${ae})`,color:le,...S},{duration:ne,easing:Te,direction:v?"normal":"reverse"}).finished.then(()=>{m.style.removeProperty("visibility"),C.style.removeProperty("visibility")})})}},{flush:"post"});const w=y(()=>({isActive:R,isFocused:o,controlRef:K,blur:d,focus:u}));function ee(v){v.target!==document.activeElement&&v.preventDefault()}function q(v){var m;v.key!=="Enter"&&v.key!==" "||(v.preventDefault(),v.stopPropagation(),(m=e["onClick:clear"])==null||m.call(e,new MouseEvent("click")))}return T(()=>{var V,I,P;const v=e.variant==="outlined",m=!!(t["prepend-inner"]||e.prependInnerIcon),C=!!(e.clearable||t.clear),p=!!(t["append-inner"]||e.appendInnerIcon||C),h=()=>t.label?t.label({...w.value,label:e.label,props:{for:x.value}}):e.label;return r("div",ve({class:["v-field",{"v-field--active":R.value,"v-field--appended":p,"v-field--center-affix":e.centerAffix??!N.value,"v-field--disabled":e.disabled,"v-field--dirty":e.dirty,"v-field--error":e.error,"v-field--flat":e.flat,"v-field--has-background":!!e.bgColor,"v-field--persistent-clear":e.persistentClear,"v-field--prepended":m,"v-field--reverse":e.reverse,"v-field--single-line":e.singleLine,"v-field--no-label":!h(),[`v-field--variant-${e.variant}`]:!0},n.value,J.value,c.value,s.value,b.value,g.value,e.class],style:[Z.value,e.style],onClick:ee},a),[r("div",{class:"v-field__overlay"},null),r(Be,{name:"v-field",active:!!e.loading,color:e.error?"error":typeof e.loading=="string"?e.loading:e.color},{default:t.loader}),m&&r("div",{key:"prepend",class:"v-field__prepend-inner"},[e.prependInnerIcon&&r(f,{key:"prepend-icon",name:"prependInner"},null),(V=t["prepend-inner"])==null?void 0:V.call(t,w.value)]),r("div",{class:"v-field__field","data-no-activator":""},[["filled","solo","solo-inverted","solo-filled"].includes(e.variant)&&_.value&&r(B,{key:"floating-label",ref:F,class:[U.value],floating:!0,for:x.value,style:z.value},{default:()=>[h()]}),r(B,{ref:j,for:x.value},{default:()=>[h()]}),(I=t.default)==null?void 0:I.call(t,{...w.value,props:{id:x.value,class:"v-field__input","aria-describedby":G.value},focus:u,blur:d})]),C&&r(xe,{key:"clear"},{default:()=>[Q(r("div",{class:"v-field__clearable",onMousedown:S=>{S.preventDefault(),S.stopPropagation()}},[r(We,{defaults:{VIcon:{icon:e.clearIcon}}},{default:()=>[t.clear?t.clear({...w.value,props:{onKeydown:q,onFocus:u,onBlur:d,onClick:e["onClick:clear"]}}):r(f,{name:"clear",onKeydown:q,onFocus:u,onBlur:d},null)]})]),[[X,e.dirty]])]}),p&&r("div",{key:"append",class:"v-field__append-inner"},[(P=t["append-inner"])==null?void 0:P.call(t,w.value),e.appendInnerIcon&&r(f,{key:"append-icon",name:"appendInner"},null)]),r("div",{class:["v-field__outline",U.value],style:z.value},[v&&r(fe,null,[r("div",{class:"v-field__outline__start"},null),_.value&&r("div",{class:"v-field__outline__notch"},[r(B,{ref:F,floating:!0,for:x.value},{default:()=>[h()]})]),r("div",{class:"v-field__outline__end"},null)]),N.value&&_.value&&r(B,{ref:F,floating:!0,for:x.value},{default:()=>[h()]})])])}),{controlRef:K}}});function tt(e){const l=Object.keys(Ke.props).filter(a=>!me(a)&&a!=="class"&&a!=="style");return he(e,l)}const Ne=W({...O(),...Re()},"VForm"),nt=D()({name:"VForm",props:Ne(),emits:{"update:modelValue":e=>!0,submit:e=>!0},setup(e,l){let{slots:a,emit:i}=l;const t=_e(e),n=$();function s(o){o.preventDefault(),t.reset()}function c(o){const u=o,d=t.validate();u.then=d.then.bind(d),u.catch=d.catch.bind(d),u.finally=d.finally.bind(d),i("submit",u),u.defaultPrevented||d.then(f=>{var g;let{valid:b}=f;b&&((g=n.value)==null||g.submit())}),u.preventDefault()}return T(()=>{var o;return r("form",{ref:n,class:["v-form",e.class],style:e.style,novalidate:!0,onReset:s,onSubmit:c},[(o=a.default)==null?void 0:o.call(a,t)])}),ke(t,n)}});export{L as B,nt as V,tt as a,Ke as b,et as c,De as d,Je as e,ke as f,Ze as g,Ge as h,Ye as i,je as m,Oe as n,Te as s};
