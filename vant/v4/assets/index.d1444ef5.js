import{c as F,h as L,a as C}from"./use-translate.d5447508.js";import{t as M,m as U,n as E,c as P,w as G}from"./with-install.cb9a7594.js";import{B as D,e as A}from"./constant.80c6de18.js";import{A as y,e as t,x as i,y as R,r as S,o as x,a as N,w as g,C as u,F as $}from"./vue-libs.84c45047.js";import{N as T}from"./index.5c2b6ecf.js";import"./use-touch.c1d7ebd1.js";import"./index.57f45cfb.js";const[O,h]=F("password-input"),V={info:String,mask:M,value:U(""),gutter:E,length:P(6),focused:Boolean,errorInfo:String};var z=y({name:O,props:V,emits:["focus"],setup(f,{emit:a}){const B=e=>{e.stopPropagation(),a("focus",e)},s=()=>{const e=[],{mask:v,value:d,length:w,gutter:c,focused:k}=f;for(let r=0;r<w;r++){const I=d[r],b=r!==0&&!c,_=k&&r===d.length;let l;r!==0&&c&&(l={marginLeft:L(c)}),e.push(t("li",{class:[{[A]:b},h("item",{focus:_})],style:l},[v?t("i",{style:{visibility:I?"visible":"hidden"}},null):I,_&&t("div",{class:h("cursor")},null)]))}return e};return()=>{const e=f.errorInfo||f.info;return t("div",{class:h()},[t("ul",{class:[h("security"),{[D]:!f.gutter}],onTouchstart:B},[s()]),e&&t("div",{class:h(f.errorInfo?"error-info":"info")},[e])])}}});const p=G(z);const W=y({setup(f){const a=C({"zh-CN":{info:"\u5BC6\u7801\u4E3A 6 \u4F4D\u6570\u5B57",showInfo:"\u63D0\u793A\u4FE1\u606F",addGutter:"\u683C\u5B50\u95F4\u8DDD",errorInfo:"\u5BC6\u7801\u9519\u8BEF",removeMask:"\u660E\u6587\u5C55\u793A",customLength:"\u81EA\u5B9A\u4E49\u957F\u5EA6"},"en-US":{info:"Some tips",showInfo:"Show Info",addGutter:"Add Gutter",errorInfo:"Password Mistake",removeMask:"Remove Mask",customLength:"Custom Length"}}),s=i({showInfo:"123",addGutter:"123",basicUsage:"123",removeMask:"123",customLength:"123"}),e=i("basicUsage"),v=i(""),d=i(),w=i(),c=i(),k=i(),r=i(),I={showInfo:d,addGutter:w,basicUsage:c,removeMask:k,customLength:r},b=l=>{if(!e.value)return;const o=e.value==="customLength"?4:6,n=(s.value[e.value]+l).slice(0,o);s.value[e.value]=n,e.value==="showInfo"&&n.length===6&&n!=="123456"&&(v.value=a("errorInfo"))},_=()=>{!e.value||(s.value[e.value]=s.value[e.value].slice(0,s.value[e.value].length-1),e.value==="showInfo"&&(v.value=""))};return R(e,l=>{if(l){const o=I[l].value;if(o){const{top:n}=o.$el.getBoundingClientRect();window.scrollTo(0,window.pageYOffset+n)}}}),(l,o)=>{const n=S("demo-block");return x(),N($,null,[t(n,{ref_key:"basicUsage",ref:c,title:u(a)("basicUsage")},{default:g(()=>[t(u(p),{value:s.value.basicUsage,focused:e.value==="basicUsage",onFocus:o[0]||(o[0]=m=>e.value="basicUsage")},null,8,["value","focused"])]),_:1},8,["title"]),t(n,{ref_key:"customLength",ref:r,title:u(a)("customLength")},{default:g(()=>[t(u(p),{value:s.value.customLength,length:4,focused:e.value==="customLength",onFocus:o[1]||(o[1]=m=>e.value="customLength")},null,8,["value","focused"])]),_:1},8,["title"]),t(n,{ref_key:"addGutter",ref:w,title:u(a)("addGutter")},{default:g(()=>[t(u(p),{value:s.value.addGutter,gutter:10,focused:e.value==="addGutter",onFocus:o[2]||(o[2]=m=>e.value="addGutter")},null,8,["value","focused"])]),_:1},8,["title"]),t(n,{ref_key:"removeMask",ref:k,title:u(a)("removeMask")},{default:g(()=>[t(u(p),{mask:!1,value:s.value.removeMask,focused:e.value==="removeMask",onFocus:o[3]||(o[3]=m=>e.value="removeMask")},null,8,["value","focused"])]),_:1},8,["title"]),t(n,{ref_key:"showInfo",ref:d,title:u(a)("showInfo")},{default:g(()=>[t(u(p),{info:u(a)("info"),value:s.value.showInfo,"error-info":v.value,focused:e.value==="showInfo",onFocus:o[4]||(o[4]=m=>e.value="showInfo")},null,8,["info","value","error-info","focused"])]),_:1},8,["title"]),t(u(T),{show:!!e.value,onBlur:o[5]||(o[5]=m=>e.value=null),onInput:b,onDelete:_},null,8,["show"])],64)}}});export{W as default};
