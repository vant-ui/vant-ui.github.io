import{c as L,e as S,i}from"./use-translate.fec5be1c.js";import{n as o,t as V,u,w as I}from"./with-install.6c9f4f06.js";import{r as y,u as B}from"./use-route.13c8c682.js";import{I as m}from"./index.a07b08cc.js";import{z as D,e as t}from"./vue-libs.7ad34eae.js";const[z,a]=L("cell"),q={icon:String,size:String,title:o,value:o,label:o,center:Boolean,isLink:Boolean,border:V,required:Boolean,iconPrefix:String,valueClass:u,labelClass:u,titleClass:u,titleStyle:null,arrowDirection:String,clickable:{type:Boolean,default:null}},N=S({},q,y),R=D({name:z,props:N,setup(e,{slots:n}){const h=B(),C=()=>{if(n.label||i(e.label))return t("div",{class:[a("label"),e.labelClass]},[n.label?n.label():e.label])},v=()=>{if(n.title||i(e.title))return t("div",{class:[a("title"),e.titleClass],style:e.titleStyle},[n.title?n.title():t("span",null,[e.title]),C()])},w=()=>{const l=n.value||n.default;if(l||i(e.value)){const r=n.title||i(e.title);return t("div",{class:[a("value",{alone:!r}),e.valueClass]},[l?l():t("span",null,[e.value])])}},P=()=>{if(n.icon)return n.icon();if(e.icon)return t(m,{name:e.icon,class:a("left-icon"),classPrefix:e.iconPrefix},null)},g=()=>{if(n["right-icon"])return n["right-icon"]();if(e.isLink){const l=e.arrowDirection?`arrow-${e.arrowDirection}`:"arrow";return t(m,{name:l,class:a("right-icon")},null)}};return()=>{var f,b;const{size:l,center:s,border:r,isLink:k,required:x}=e,c=(f=e.clickable)!=null?f:k,d={center:s,required:x,clickable:c,borderless:!r};return l&&(d[l]=!!l),t("div",{class:a(d),role:c?"button":void 0,tabindex:c?0:void 0,onClick:h},[P(),v(),w(),g(),(b=n.extra)==null?void 0:b.call(n)])}}}),T=I(R),F=T;export{T as C,F as V,q as c};
