import{az as p,aA as y,d as f,aB as u,o,a as t,n as r,ar as s,r as d,f as l,k as c,b as h,ai as n,t as i,aC as m,aD as v}from"./index-Dy_ac3OU.js";const S=p({header:{type:String,default:""},footer:{type:String,default:""},bodyStyle:{type:y([String,Object,Array]),default:""},bodyClass:String,shadow:{type:String,values:["always","hover","never"],default:"always"}}),b=f({name:"ElCard"}),C=f({...b,props:S,setup(w){const a=u("card");return(e,$)=>(o(),t("div",{class:r([s(a).b(),s(a).is(`${e.shadow}-shadow`)])},[e.$slots.header||e.header?(o(),t("div",{key:0,class:r(s(a).e("header"))},[d(e.$slots,"header",{},()=>[n(i(e.header),1)])],2)):l("v-if",!0),c("div",{class:r([s(a).e("body"),e.bodyClass]),style:h(e.bodyStyle)},[d(e.$slots,"default")],6),e.$slots.footer||e.footer?(o(),t("div",{key:1,class:r(s(a).e("footer"))},[d(e.$slots,"footer",{},()=>[n(i(e.footer),1)])],2)):l("v-if",!0)],2))}});var g=m(C,[["__file","card.vue"]]);const B=v(g);export{B as E};
