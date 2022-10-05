import{c as P,b as I,e as $,u as j,Q as q,p as T,K as H,a as K}from"./use-translate.d2900b8c.js";import{t as k,w as R,n as M}from"./with-install.19a35764.js";import{b as Q}from"./constant.80c6de18.js";import{u as L}from"./use-expose.c942d5f8.js";import{z as D,e as l,C as x,D as w,u as Y,A as G,q as J,j as W,v as X,r as Z,o as ee,a as te,w as a,B as e,h as i,t as s,d as le,F as ae}from"./vue-libs.b44bc779.js";import{c as O,C as ue}from"./index.490ce1c3.js";import{u as oe}from"./use-lazy-render.f712e85e.js";import{a as ne}from"./index.b70c9b40.js";import{V as N}from"./index.8e37fe56.js";import"./use-route.82f2be69.js";import"./index.4e4daaac.js";const[U,ie]=P("collapse"),z=Symbol(U),se={border:k,accordion:Boolean,modelValue:{type:[String,Number,Array],default:""}},de=D({name:U,props:se,emits:["change","update:modelValue"],setup(f,{emit:t,slots:r}){const{linkChildren:C,children:g}=I(z),_=o=>{t("change",o),t("update:modelValue",o)},E=(o,n)=>{const{accordion:u,modelValue:v}=f;_(u?o===v?"":o:n?v.concat(o):v.filter(d=>d!==o))},p=(o={})=>{if(f.accordion)return;typeof o=="boolean"&&(o={expanded:o});const{expanded:n,skipDisabled:u}=o,d=g.filter(A=>A.disabled&&u?A.expanded.value:n!=null?n:!A.expanded.value).map(A=>A.itemName.value);_(d)},b=o=>{const{accordion:n,modelValue:u}=f;return n?u===o:u.includes(o)};return L({toggleAll:p}),C({toggle:E,isExpanded:b}),()=>{var o;return l("div",{class:[ie(),{[Q]:f.border}]},[(o=r.default)==null?void 0:o.call(r)])}}}),re=R(de),B=re,[ce,F]=P("collapse-item"),me=["icon","title","value","label","right-icon"],fe=$({},O,{name:M,isLink:k,disabled:Boolean,readonly:Boolean,lazyRender:k}),pe=D({name:ce,props:fe,setup(f,{slots:t}){const r=x(),C=x(),{parent:g,index:_}=j(z);if(!g)return;const E=w(()=>{var c;return(c=f.name)!=null?c:_.value}),p=w(()=>g.isExpanded(E.value)),b=x(p.value),o=oe(()=>b.value||!f.lazyRender),n=()=>{p.value?r.value&&(r.value.style.height=""):b.value=!1};Y(p,(c,y)=>{if(y===null)return;c&&(b.value=!0),(c?J:H)(()=>{if(!C.value||!r.value)return;const{offsetHeight:V}=C.value;if(V){const S=`${V}px`;r.value.style.height=c?"0":S,q(()=>{r.value&&(r.value.style.height=c?S:"0")})}else n()})});const u=(c=!p.value)=>{g.toggle(E.value,c)},v=()=>{!f.disabled&&!f.readonly&&u()},d=()=>{const{border:c,disabled:y,readonly:h}=f,V=T(f,Object.keys(O));return h&&(V.isLink=!1),(y||h)&&(V.clickable=!1),l(ue,G({role:"button",class:F("title",{disabled:y,expanded:p.value,borderless:!c}),"aria-expanded":String(p.value),onClick:v},V),T(t,me))},A=o(()=>{var c;return W(l("div",{ref:r,class:F("wrapper"),onTransitionend:n},[l("div",{ref:C,class:F("content")},[(c=t.default)==null?void 0:c.call(t)])]),[[X,b.value]])});return L({toggle:u,expanded:p,itemName:E}),()=>l("div",{class:[F({border:_.value&&f.border})]},[d(),A()])}}),ve=R(pe),m=ve,_e={class:"demo-collapse-buttons"},ke=D({__name:"index",setup(f){const t=K({"zh-CN":{text1:"\u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C\u3002",text2:"\u6280\u672F\u65E0\u975E\u5C31\u662F\u90A3\u4E9B\u5F00\u53D1\u5B83\u7684\u4EBA\u7684\u5171\u540C\u7075\u9B42\u3002",text3:"\u5728\u4EE3\u7801\u9605\u8BFB\u8FC7\u7A0B\u4E2D\u4EBA\u4EEC\u8BF4\u810F\u8BDD\u7684\u9891\u7387\u662F\u8861\u91CF\u4EE3\u7801\u8D28\u91CF\u7684\u552F\u4E00\u6807\u51C6\u3002",accordion:"\u624B\u98CE\u7434",titleSlot:"\u81EA\u5B9A\u4E49\u6807\u9898\u5185\u5BB9",toggleAll:"\u5168\u90E8\u5C55\u5F00\u4E0E\u5168\u90E8\u5207\u6362",openAll:"\u5168\u90E8\u5C55\u5F00",inverse:"\u5168\u90E8\u5207\u6362"},"en-US":{text1:"Content 1",text2:"Content 2",text3:"Content 3",accordion:"Accordion",titleSlot:"Custom title",toggleAll:"Toggle All",openAll:"Open All",inverse:"Toggle All"}}),r=x([0]),C=x(0),g=x([]),_=x([]),E=x(["1"]),p=x(),b=()=>{var n,u;(u=(n=p.value)==null?void 0:n.toggleAll)==null||u.call(n,!0)},o=()=>{var n,u;(u=(n=p.value)==null?void 0:n.toggleAll)==null||u.call(n)};return(n,u)=>{const v=Z("demo-block");return ee(),te(ae,null,[l(v,{title:e(t)("basicUsage")},{default:a(()=>[l(e(B),{modelValue:r.value,"onUpdate:modelValue":u[0]||(u[0]=d=>r.value=d)},{default:a(()=>[l(e(m),{title:e(t)("title")+1},{default:a(()=>[i(s(e(t)("text1")),1)]),_:1},8,["title"]),l(e(m),{title:e(t)("title")+2},{default:a(()=>[i(s(e(t)("text2")),1)]),_:1},8,["title"]),l(e(m),{title:e(t)("title")+3},{default:a(()=>[i(s(e(t)("text3")),1)]),_:1},8,["title"])]),_:1},8,["modelValue"])]),_:1},8,["title"]),l(v,{title:e(t)("accordion")},{default:a(()=>[l(e(B),{modelValue:C.value,"onUpdate:modelValue":u[1]||(u[1]=d=>C.value=d),accordion:""},{default:a(()=>[l(e(m),{title:e(t)("title")+1},{default:a(()=>[i(s(e(t)("text1")),1)]),_:1},8,["title"]),l(e(m),{title:e(t)("title")+2},{default:a(()=>[i(s(e(t)("text2")),1)]),_:1},8,["title"]),l(e(m),{title:e(t)("title")+3},{default:a(()=>[i(s(e(t)("text3")),1)]),_:1},8,["title"])]),_:1},8,["modelValue"])]),_:1},8,["title"]),l(v,{title:e(t)("disabled")},{default:a(()=>[l(e(B),{modelValue:g.value,"onUpdate:modelValue":u[2]||(u[2]=d=>g.value=d)},{default:a(()=>[l(e(m),{title:e(t)("title")+1},{default:a(()=>[i(s(e(t)("text1")),1)]),_:1},8,["title"]),l(e(m),{title:e(t)("title")+2,disabled:""},{default:a(()=>[i(s(e(t)("text2")),1)]),_:1},8,["title"]),l(e(m),{title:e(t)("title")+3,disabled:""},{default:a(()=>[i(s(e(t)("text3")),1)]),_:1},8,["title"])]),_:1},8,["modelValue"])]),_:1},8,["title"]),l(v,{title:e(t)("titleSlot")},{default:a(()=>[l(e(B),{modelValue:_.value,"onUpdate:modelValue":u[3]||(u[3]=d=>_.value=d)},{default:a(()=>[l(e(m),null,{title:a(()=>[i(s(e(t)("title")+1),1),l(e(ne),{name:"question-o"})]),default:a(()=>[i(" "+s(e(t)("text1")),1)]),_:1}),l(e(m),{title:e(t)("title")+2,value:e(t)("content"),icon:"shop-o"},{default:a(()=>[i(s(e(t)("text2")),1)]),_:1},8,["title","value"])]),_:1},8,["modelValue"])]),_:1},8,["title"]),l(v,{title:e(t)("toggleAll")},{default:a(()=>[l(e(B),{modelValue:E.value,"onUpdate:modelValue":u[4]||(u[4]=d=>E.value=d),ref_key:"collapse",ref:p},{default:a(()=>[l(e(m),{title:e(t)("title")+1,name:"1"},{default:a(()=>[i(s(e(t)("text1")),1)]),_:1},8,["title"]),l(e(m),{title:e(t)("title")+2,name:"2"},{default:a(()=>[i(s(e(t)("text2")),1)]),_:1},8,["title"]),l(e(m),{title:e(t)("title")+3,name:"3"},{default:a(()=>[i(s(e(t)("text3")),1)]),_:1},8,["title"])]),_:1},8,["modelValue"]),le("div",_e,[l(e(N),{type:"primary",onClick:b},{default:a(()=>[i(s(e(t)("openAll")),1)]),_:1}),l(e(N),{type:"primary",onClick:o},{default:a(()=>[i(s(e(t)("inverse")),1)]),_:1})])]),_:1},8,["title"])],64)}}});export{ke as default};
