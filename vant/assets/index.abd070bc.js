import{c as p,b as k,h as g,e as N,u as q}from"./use-translate.adc2ccf9.js";import{t as b,n as f,c as z,w as x}from"./with-install.007edd36.js";import{c as D,d as O}from"./constant.80c6de18.js";import{z as S,e as i,D as P,A as T}from"./vue-libs.a65f1bfc.js";import{r as _,u as E}from"./use-route.985ba6da.js";import{B as $,I as w}from"./index.55cbeda9.js";const[h,j]=p("grid"),A={square:Boolean,center:b,border:b,gutter:f,reverse:Boolean,iconSize:f,direction:String,clickable:Boolean,columnNum:z(4)},B=Symbol(h),K=S({name:h,props:A,setup(e,{slots:t}){const{linkChildren:o}=k(B);return o({props:e}),()=>{var s;return i("div",{style:{paddingLeft:g(e.gutter)},class:[j(),{[D]:e.border&&!e.gutter}]},[(s=t.default)==null?void 0:s.call(t)])}}}),L=x(K),ee=L,[U,l]=p("grid-item"),Y=N({},_,{dot:Boolean,text:String,icon:String,badge:f,iconColor:String,iconPrefix:String,badgeProps:Object}),F=S({name:U,props:Y,setup(e,{slots:t}){const{parent:o,index:s}=q(B),I=E();if(!o)return;const v=P(()=>{const{square:c,gutter:n,columnNum:r}=o.props,d=`${100/+r}%`,a={flexBasis:d};if(c)a.paddingTop=d;else if(n){const u=g(n);a.paddingRight=u,s.value>=r&&(a.marginTop=u)}return a}),y=P(()=>{const{square:c,gutter:n}=o.props;if(c&&n){const r=g(n);return{right:r,bottom:r,height:"auto"}}}),C=()=>{if(t.icon)return i($,T({dot:e.dot,content:e.badge},e.badgeProps),{default:t.icon});if(e.icon)return i(w,{dot:e.dot,name:e.icon,size:o.props.iconSize,badge:e.badge,class:l("icon"),color:e.iconColor,badgeProps:e.badgeProps,classPrefix:e.iconPrefix},null)},G=()=>{if(t.text)return t.text();if(e.text)return i("span",{class:l("text")},[e.text])},R=()=>t.default?t.default():[C(),G()];return()=>{const{center:c,border:n,square:r,gutter:d,reverse:a,direction:u,clickable:m}=o.props,V=[l("content",[u,{center:c,square:r,reverse:a,clickable:m,surround:n&&d}]),{[O]:n}];return i("div",{class:[l({square:r})],style:v.value},[i("div",{role:m?"button":void 0,class:V,style:y.value,tabindex:m?0:void 0,onClick:I},[R()])])}}}),H=x(F),te=H;export{ee as V,te as a};
