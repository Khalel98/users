import{_ as n}from"./index-BOuR8vT-.js";import{b as d,c as u,V as a}from"./VSheet-CRQFzZBv.js";import{V as m}from"./VBtn-DJHBtDOp.js";import{A as f,B as c,i as o,C as r,J as i,D as p}from"./index-B1G3lqf4.js";import"./index-CETBrpnB.js";import"./VInput-B0tqLO9v.js";const V={data:()=>({iin:"980109400369",password:"1231234"}),methods:{async login(){try{await this.$store.dispatch("login",{iin:this.iin,password:this.password}),this.$router.push("/main")}catch(t){console.error(t),alert("Данные введены неверно")}},async validate(){const{valid:t}=await this.$refs.form.validate();t&&this.login()},reset(){this.$refs.form.reset()},resetValidation(){this.$refs.form.resetValidation()}}},h={class:"section__auth"},_={class:"d-flex flex-column"};function w(t,s,$,v,k,l){return f(),c("div",h,[o(d,{class:"mx-auto",width:"300"},{default:r(()=>[o(u,{ref:"form"},{default:r(()=>[o(a,{modelValue:t.iin,"onUpdate:modelValue":s[0]||(s[0]=e=>t.iin=e),variant:"outlined",counter:12,rules:[e=>!!e||"Введите ИИН",e=>e&&e.length<=12||"ИИН содержит только 12 цифр"],label:"ИИН",required:""},null,8,["modelValue","rules"]),o(a,{modelValue:t.password,"onUpdate:modelValue":s[1]||(s[1]=e=>t.password=e),variant:"outlined",counter:12,rules:[e=>!!e||"Введите пароль"],label:"Пароль",required:""},null,8,["modelValue","rules"]),i("div",_,[o(m,{class:"mt-4",color:"grey-darken-4",block:"",onClick:l.validate},{default:r(()=>[p(" Войти ")]),_:1},8,["onClick"])])]),_:1},512),i("div",{class:"section__auth__link",onClick:s[2]||(s[2]=e=>t.$router.push("/reset-profile"))}," Забыли пароль? ")]),_:1})])}const N=n(V,[["render",w]]);export{N as default};
