import{B as m,o as i,n as _,q as r,k as o,w as u,F as h,y as E,A as c,D as q,x as a}from"./index-Bv9JDdsZ.js";import{_ as C}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as l}from"./VBtn-BbFvIthX.js";import{V as d}from"./VIcon-DCZxdGLj.js";import{V as f}from"./VChip-BvxfoC24.js";import"./VBtnToggle-CaDEBIll.js";import"./variant-BN8LjZ0a.js";import"./index-D90Wg3_q.js";import"./index-DspfAZ2O.js";import"./VAvatar-B6FQSQpx.js";import"./VImg-fOTYweeb.js";const v={data(){return{requests:[]}},mounted(){this.requestList()},methods:{statusWord(e){switch(e){case"PROCESSING":return"в процессе";case"APPROVED":return"предварительно одобрено";case"REJECTED":return"отклонено";case"FAILED":return"ошибка запроса";case"ISSUED":return"одобрена";default:return"Неизвестный статус"}},statusFill(e){switch(e){case"PROCESSING":return"#03A9F4";case"APPROVED":return"#FFC107";case"REJECTED":return"#C62828";case"FAILED":return"#C62828";case"ISSUED":return"#4CAF50";default:return"#212121"}},getToCurrentRequest(e,s){s==="ISSUED"||s==="REJECTED"?this.$router.push(`/request/issued/${e}`):this.$router.push(`/request/${e}`)},async requestList(){const e={current_page:1,per_page:10,sort_by:"created_at",sort_direction:"desc"};try{const s=await m.get("client-scoring-list",{params:e});console.log("Res",s.data.data.data),this.requests=s.data.data.scoring.data}catch(s){console.error(s),alert("Что-то пошло не так")}}}},g={class:"section__request"},D={class:"section__request__action"},F={class:"section__request__row"},S={class:"section__request__item__content"},R={class:"section__request__item__content__date"},V={class:"section__request__item__content__number"},k={class:"section__request__item__content__name"};function y(e,s,I,x,p,n){return i(),_("div",g,[r("div",D,[o(l,{onClick:s[0]||(s[0]=t=>e.$router.push("/start")),class:"mt-4",color:"#FFED00"},{default:u(()=>[c(" Создать заявку ")]),_:1})]),r("div",F,[(i(!0),_(h,null,E(p.requests,t=>(i(),_("div",{key:t.id,class:"section__request__item",style:q(`border-color:${n.statusFill(t.status)}`)},[r("div",S,[r("div",R,[r("span",null,[o(d,{icon:"mdi-list-box"}),c(" "+a(t.id),1)]),r("span",null,[o(d,{icon:"mdi-clock-outline"}),c(" "+a(t.created_at),1)])]),r("div",V,a(t.phone),1),r("div",k,a(t.iin),1),o(f,{color:n.statusFill(t.status),variant:"elevated"},{default:u(()=>[c(a(n.statusWord(t.status)),1)]),_:2},1032,["color"])]),o(l,{color:"grey-darken-4",icon:"mdi-chevron-right",variant:"text",onClick:A=>n.getToCurrentRequest(t.id,t.status)},null,8,["onClick"])],4))),128))])])}const G=C(v,[["render",y]]);export{G as default};
