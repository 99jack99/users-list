import{_ as i,u as _,r as p,o as u,c as g,a as e,w as n,v as r,b as d,d as m,p as v,e as w}from"./index-8c01a63b.js";const l=t=>(v("data-v-cc4065ac"),t=t(),w(),t),h={class:"login"},f=l(()=>e("h1",null,"Ya tienes cuenta? Unete a nosotros!",-1)),x={class:"login__card"},S=l(()=>e("label",{for:""},"User",-1)),b=l(()=>e("label",{for:""},"Password",-1)),y={class:"login__error"},I={__name:"login",setup(t){const c=_(),s=p({email:"",password:""});return(U,o)=>(u(),g("div",h,[f,e("div",x,[S,n(e("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=a=>s.email=a),placeholder:"email"},null,512),[[r,s.email]]),b,n(e("input",{type:"password","onUpdate:modelValue":o[1]||(o[1]=a=>s.password=a),placeholder:"password"},null,512),[[r,s.password]]),e("button",{class:"login__card__login-btn",onClick:o[2]||(o[2]=a=>d(c).login(s.email,s.password))}," Acceder ")]),n(e("div",y," Las credenciales son incorrectas! ",512),[[m,d(c).login_msg==!0]])]))}},B=i(I,[["__scopeId","data-v-cc4065ac"]]);export{B as default};