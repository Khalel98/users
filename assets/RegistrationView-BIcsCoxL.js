import{B as m,o as p,n as u,k as a,w as l,q as i,A as d,s as f,v as h}from"./index-zXi0GE6K.js";import{_ as V}from"./VIcon-BFFshrVN.js";import{V as c}from"./VSheet-oR89kC0R.js";import{V as w}from"./VDialog-BlZur9n5.js";import{V as g}from"./VForm-CvWlOaw8.js";import{V as r}from"./VTextField-DiYk0onP.js";import{V as n}from"./VBtn-Do2fdho1.js";import{V as y}from"./VCard-CIXMblFW.js";import{V as k}from"./VOtpInput-CFgk5whp.js";import"./index-Ba0vIHqe.js";import"./index-CylBxW8X.js";import"./VInput-Cm7jZMlg.js";import"./VBtnToggle-BebYRqin.js";import"./createSimpleFunctional-CXgL15b0.js";import"./VAvatar-B-E85OOo.js";const v={data:()=>({iin:"",phone:"",code:"",dialog:!1,loading:!1,recovery:!1,password:"",password_confirm:"",show1:!1,show2:!1}),methods:{async registration(){try{await this.$store.dispatch("registration",{iin:this.iin,phone:this.phone,password:this.password,password_confirm:this.password_confirm,code:this.code}),this.$router.push("/main")}catch(e){console.error(e),alert("Данные введены неверно")}},async smsValidate(){this.loading=!0;try{const e=await m.post("client-sms-validate",{code:this.code,phone:this.phone});console.log("Res",e.data),e.data.success?this.registration():alert(e.data.message)}catch(e){console.error(e),alert("Что-то пошло не так")}finally{this.loading=!1,this.dialog=!1}},async smsSend(){try{const e=await m.post("client-sms-send",{iin:this.iin,phone:this.phone});console.log("Res",e.data),this.dialog=!0,alert(e.data.data)}catch(e){console.error(e),alert("Что-то пошло не так")}},async validate(){const{valid:e}=await this.$refs.form.validate();e&&this.smsSend()},reset(){this.$refs.form.reset()},resetValidation(){this.$refs.form.resetValidation()}}},C={class:"section__auth"},$={class:"d-flex flex-column"},b={class:"section__auth__modal"};function B(e,s,U,q,N,t){return p(),u("div",C,[a(c,{class:"mx-auto",width:"300"},{default:l(()=>[a(g,{ref:"form"},{default:l(()=>[a(r,{modelValue:e.iin,"onUpdate:modelValue":s[0]||(s[0]=o=>e.iin=o),variant:"outlined",counter:12,rules:[o=>!!o||"Введите ИИН",o=>o&&o.length<=12||"ИИН содержит только 12 цифр"],label:"ИИН",required:""},null,8,["modelValue","rules"]),a(r,{modelValue:e.phone,"onUpdate:modelValue":s[1]||(s[1]=o=>e.phone=o),variant:"outlined",counter:12,rules:[o=>!!o||"Введите телефон"],label:"Телефон",required:""},null,8,["modelValue","rules"]),a(r,{"append-icon":e.show1?"mdi-eye":"mdi-eye-off",type:e.show1?"text":"password",modelValue:e.password,"onUpdate:modelValue":s[2]||(s[2]=o=>e.password=o),variant:"outlined",rules:[o=>!!o||"Введите пароль"],label:"Введите новый пароль",required:"","onClick:append":s[3]||(s[3]=o=>e.show1=!e.show1)},null,8,["append-icon","type","modelValue","rules"]),a(r,{"append-icon":e.show2?"mdi-eye":"mdi-eye-off",type:e.show2?"text":"password",modelValue:e.password_confirm,"onUpdate:modelValue":s[4]||(s[4]=o=>e.password_confirm=o),variant:"outlined",rules:[o=>!!o||"Введите пароль",o=>o===e.password||"Пароли не совпадают"],label:"Повторный ввод",required:"","onClick:append":s[5]||(s[5]=o=>e.show2=!e.show2)},null,8,["append-icon","type","modelValue","rules"]),i("div",$,[a(n,{class:"mt-4",color:"grey-darken-4",block:"",onClick:t.validate},{default:l(()=>[d(" Зарегистрироваться ")]),_:1},8,["onClick"]),e.recovery?(p(),f(n,{key:0,class:"mt-4",color:"grey-darken-4",block:"",onClick:t.validate},{default:l(()=>[d(" Подтвердить ")]),_:1},8,["onClick"])):h("",!0),i("div",{class:"section__auth__link",onClick:s[6]||(s[6]=o=>e.$router.push("/login"))}," Логин ")])]),_:1},512)]),_:1}),a(w,{modelValue:e.dialog,"onUpdate:modelValue":s[8]||(s[8]=o=>e.dialog=o),width:"auto"},{default:l(()=>[a(y,null,{default:l(()=>[i("div",b,[a(k,{modelValue:e.code,"onUpdate:modelValue":s[7]||(s[7]=o=>e.code=o),loading:e.loading,length:"4",variant:"underlined"},null,8,["modelValue","loading"]),a(n,{disabled:e.code.length<4,class:"mt-4",color:"grey-darken-4",block:"",onClick:t.registration},{default:l(()=>[d(" Подтвердить ")]),_:1},8,["disabled","onClick"])])]),_:1})]),_:1},8,["modelValue"])])}const L=V(v,[["render",B]]);export{L as default};
