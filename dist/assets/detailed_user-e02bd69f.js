import{_ as p,m as h,f as i,n as v,g as m,o as d,c,j as f,k as w,a as e,t as o,b as g,i as k,l as x,p as b,e as y}from"./index-8c01a63b.js";const l=a=>(b("data-v-c5cc9dad"),a=a(),y(),a),S={class:"detailed"},V={class:"detailed__card"},I={key:0},N={class:"detailed__card__row"},A=l(()=>e("p",{class:"detailed__card__row__label"},"Nombre:",-1)),B={class:"detailed__card__row__info"},E={class:"detailed__card__row"},R=l(()=>e("p",{class:"detailed__card__row__label"},"Apellidos:",-1)),C={class:"detailed__card__row__info"},T={class:"detailed__card__row"},j=l(()=>e("p",{class:"detailed__card__row__label"},"Email:",-1)),q={class:"detailed__card__row__info"},D=["src"],L={key:1},M={__name:"detailed_user",setup(a){const r=h().params.id,s=i(),_=i(!1),n=()=>{_.value=!1,k.get(`https://reqres.in/api/users/${r}`).then(t=>{s.value=t.data.data,_.value=!0}).catch(t=>{console.log(t),_.value=!0})};return v(()=>{n()}),(t,$)=>{const u=m("router-link");return d(),c("div",S,[f(u,{to:"/users",class:"detailed-btn"},{default:w(()=>[x("VOLVER ATRAS")]),_:1}),e("div",V,[e("h1",null,o(g(r)),1),_.value?(d(),c("div",I,[e("span",N,[A,e("p",B,o(s.value.first_name),1)]),e("span",E,[R,e("p",C,o(s.value.last_name),1)]),e("span",T,[j,e("p",q,o(s.value.email),1)]),e("img",{src:s.value.avatar,alt:"img"},null,8,D)])):(d(),c("div",L,"cargando.."))])])}}},F=p(M,[["__scopeId","data-v-c5cc9dad"]]);export{F as default};