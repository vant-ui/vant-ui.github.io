import{c as A,F as D,a as M}from"./use-translate.7b7055b3.js";import{m as y,c as b,a as F,w as I}from"./with-install.a0877b0b.js";import{B as h}from"./constant.e12a51b9.js";import{A as N,D as S,R,e as t,u as _,r as O,o as $,a as j,w as g,C as a,h as q,t as G,F as H}from"./vue-libs.d5ee895a.js";import{I as k}from"./index.bc61928d.js";import"./index.16bdfc10.js";const[J,P,B]=A("pagination"),w=(l,n,u)=>({number:l,text:n,active:u}),K={mode:y("multi"),prevText:String,nextText:String,pageCount:b(0),modelValue:F(0),totalItems:b(0),showPageSize:b(5),itemsPerPage:b(10),forceEllipses:Boolean},L=N({name:J,props:K,emits:["change","update:modelValue"],setup(l,{emit:n,slots:u}){const d=S(()=>{const{pageCount:e,totalItems:o,itemsPerPage:s}=l,m=+e||Math.ceil(+o/+s);return Math.max(1,m)}),V=S(()=>{const e=[],o=d.value,s=+l.showPageSize,{modelValue:m,forceEllipses:z}=l;let f=1,x=o;const C=s<o;C&&(f=Math.max(m-Math.floor(s/2),1),x=f+s-1,x>o&&(x=o,f=x-s+1));for(let c=f;c<=x;c++){const U=w(c,c,c===m);e.push(U)}if(C&&s>0&&z){if(f>1){const c=w(f-1,"...");e.unshift(c)}if(x<o){const c=w(x+1,"...");e.push(c)}}return e}),p=(e,o)=>{e=D(e,1,d.value),l.modelValue!==e&&(n("update:modelValue",e),o&&n("change",e))};R(()=>p(l.modelValue));const E=()=>t("li",{class:P("page-desc")},[u.pageDesc?u.pageDesc():`${l.modelValue}/${d.value}`]),i=()=>{const{mode:e,modelValue:o}=l,s=u["prev-text"],m=o===1;return t("li",{class:[P("item",{disabled:m,border:e==="simple",prev:!0}),h]},[t("button",{type:"button",disabled:m,onClick:()=>p(o-1,!0)},[s?s():l.prevText||B("prev")])])},v=()=>{const{mode:e,modelValue:o}=l,s=u["next-text"],m=o===d.value;return t("li",{class:[P("item",{disabled:m,border:e==="simple",next:!0}),h]},[t("button",{type:"button",disabled:m,onClick:()=>p(o+1,!0)},[s?s():l.nextText||B("next")])])},r=()=>V.value.map(e=>t("li",{class:[P("item",{active:e.active,page:!0}),h]},[t("button",{type:"button","aria-current":e.active||void 0,onClick:()=>p(e.number,!0)},[u.page?u.page(e):e.text])]));return()=>t("nav",{role:"navigation",class:P()},[t("ul",{class:P("items")},[i(),l.mode==="simple"?E():r(),v()])])}}),T=I(L),te=N({__name:"index",setup(l){const n=M({"zh-CN":{title2:"\u7B80\u5355\u6A21\u5F0F",title3:"\u663E\u793A\u7701\u7565\u53F7",title4:"\u81EA\u5B9A\u4E49\u6309\u94AE",prevText:"\u4E0A\u4E00\u9875",nextText:"\u4E0B\u4E00\u9875"},"en-US":{title2:"Simple Mode",title3:"Show ellipses",title4:"Custom Button",prevText:"Prev",nextText:"Next"}}),u=_(1),d=_(1),V=_(1),p=_(1);return(E,i)=>{const v=O("demo-block");return $(),j(H,null,[t(v,{title:a(n)("basicUsage")},{default:g(()=>[t(a(T),{modelValue:u.value,"onUpdate:modelValue":i[0]||(i[0]=r=>u.value=r),"total-items":24,"items-per-page":5,"prev-text":a(n)("prevText"),"next-text":a(n)("nextText")},null,8,["modelValue","prev-text","next-text"])]),_:1},8,["title"]),t(v,{title:a(n)("title2")},{default:g(()=>[t(a(T),{modelValue:d.value,"onUpdate:modelValue":i[1]||(i[1]=r=>d.value=r),"page-count":12,"prev-text":a(n)("prevText"),"next-text":a(n)("nextText"),mode:"simple",size:"small"},null,8,["modelValue","prev-text","next-text"])]),_:1},8,["title"]),t(v,{title:a(n)("title3")},{default:g(()=>[t(a(T),{modelValue:V.value,"onUpdate:modelValue":i[2]||(i[2]=r=>V.value=r),"force-ellipses":"","total-items":125,"show-page-size":3,"prev-text":a(n)("prevText"),"next-text":a(n)("nextText")},null,8,["modelValue","prev-text","next-text"])]),_:1},8,["title"]),t(v,{title:a(n)("title4")},{default:g(()=>[t(a(T),{modelValue:p.value,"onUpdate:modelValue":i[3]||(i[3]=r=>p.value=r),"total-items":125,"show-page-size":5},{"prev-text":g(()=>[t(a(k),{name:"arrow-left"})]),"next-text":g(()=>[t(a(k),{name:"arrow"})]),page:g(({text:r})=>[q(G(r),1)]),_:1},8,["modelValue"])]),_:1},8,["title"])],64)}}});export{te as default};