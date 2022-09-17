import{C as g,x as f,E as z,G as I,D as _,H as b,I as te,J as oe,L as j,M as Y,N as V,q as ue,O as ae,y as H,P as W,Q as se}from"./vue-libs.84c45047.js";function Ye(){}const Ve=Object.assign,J=typeof window!="undefined";function P(e,n){const t=n.split(".");let o=e;return t.forEach(u=>{var a;o=(a=o[u])!=null?a:""}),o}function He(e,n,t){return n.reduce((o,u)=>((!t||e[u]!==void 0)&&(o[u]=e[u]),o),{})}const We=(e,n)=>JSON.stringify(e)===JSON.stringify(n);var p=typeof window!="undefined";function v(e){return p?requestAnimationFrame(e):-1}function ie(e){p&&cancelAnimationFrame(e)}function Je(e){v(()=>v(e))}var re=e=>e===window,M=(e,n)=>({top:0,left:0,right:e,bottom:n,width:e,height:n}),ce=e=>{const n=g(e);if(re(n)){const t=n.innerWidth,o=n.innerHeight;return M(t,o)}return(n==null?void 0:n.getBoundingClientRect)?n.getBoundingClientRect():M(0,0)};function Ze(e=!1){const n=f(e);return[n,(o=!n.value)=>{n.value=o}]}function qe(e){const n=z(e,null);if(n){const t=W(),{link:o,unlink:u,internalChildren:a}=n;o(t),I(()=>u(t));const s=_(()=>a.indexOf(t));return{parent:n,index:s}}return{parent:null,index:f(-1)}}function de(e){const n=[],t=o=>{Array.isArray(o)&&o.forEach(u=>{var a;se(u)&&(n.push(u),((a=u.component)==null?void 0:a.subTree)&&(n.push(u.component.subTree),t(u.component.subTree.children)),u.children&&t(u.children))})};return t(e),n}function le(e,n,t){const o=de(e.subTree.children);t.sort((a,s)=>o.indexOf(a.vnode)-o.indexOf(s.vnode));const u=t.map(a=>a.proxy);n.sort((a,s)=>{const r=u.indexOf(a),i=u.indexOf(s);return r-i})}function Ke(e){const n=b([]),t=b([]),o=W();return{children:n,linkChildren:a=>{te(e,Object.assign({link:i=>{i.proxy&&(t.push(i),n.push(i.proxy),le(o,n,t))},unlink:i=>{const c=t.indexOf(i);n.splice(c,1),t.splice(c,1)},children:n,internalChildren:t},a))}}}var D=1e3,B=60*D,A=60*B,$=24*A;function fe(e){const n=Math.floor(e/$),t=Math.floor(e%$/A),o=Math.floor(e%A/B),u=Math.floor(e%B/D),a=Math.floor(e%D);return{total:e,days:n,hours:t,minutes:o,seconds:u,milliseconds:a}}function pe(e,n){return Math.floor(e/1e3)===Math.floor(n/1e3)}function Ge(e){let n,t,o,u;const a=f(e.time),s=_(()=>fe(a.value)),r=()=>{o=!1,ie(n)},i=()=>Math.max(t-Date.now(),0),c=l=>{var O,N;a.value=l,(O=e.onChange)==null||O.call(e,s.value),l===0&&(r(),(N=e.onFinish)==null||N.call(e))},d=()=>{n=v(()=>{o&&(c(i()),a.value>0&&d())})},T=()=>{n=v(()=>{if(o){const l=i();(!pe(l,a.value)||l===0)&&c(l),a.value>0&&T()}})},x=()=>{!p||(e.millisecond?d():T())},ee=()=>{o||(t=Date.now()+a.value,o=!0,x())},ne=(l=e.time)=>{r(),a.value=l};return oe(r),j(()=>{u&&(o=!0,u=!1,x())}),Y(()=>{o&&(r(),u=!0)}),{start:ee,pause:r,reset:ne,current:s}}function me(e){let n;V(()=>{e(),ue(()=>{n=!0})}),j(()=>{n&&e()})}function ge(e,n,t={}){if(!p)return;const{target:o=window,passive:u=!1,capture:a=!1}=t;let s;const r=c=>{const d=g(c);d&&!s&&(d.addEventListener(e,n,{capture:a,passive:u}),s=!0)},i=c=>{const d=g(c);d&&s&&(d.removeEventListener(e,n,a),s=!1)};I(()=>i(o)),Y(()=>i(o)),me(()=>r(o)),ae(o)&&H(o,(c,d)=>{i(d),r(c)})}function Qe(e,n,t={}){if(!p)return;const{eventName:o="click"}=t;ge(o,a=>{const s=g(e);s&&!s.contains(a.target)&&n(a)},{target:document})}var E,C;function Ee(){if(!E&&(E=f(0),C=f(0),p)){const e=()=>{E.value=window.innerWidth,C.value=window.innerHeight};e(),window.addEventListener("resize",e,{passive:!0}),window.addEventListener("orientationchange",e,{passive:!0})}return{width:E,height:C}}var he=/scroll|auto/i,Z=p?window:void 0;function ve(e){return e.tagName!=="HTML"&&e.tagName!=="BODY"&&e.nodeType===1}function Ce(e,n=Z){let t=e;for(;t&&t!==n&&ve(t);){const{overflowY:o}=window.getComputedStyle(t);if(he.test(o))return t;t=t.parentNode}return n}function Xe(e,n=Z){const t=f();return V(()=>{e.value&&(t.value=Ce(e.value,n))}),t}var h;function en(){if(!h&&(h=f("visible"),p)){const e=()=>{h.value=document.hidden?"hidden":"visible"};e(),window.addEventListener("visibilitychange",e)}return h}var we=Symbol("van-field");function nn(e){const n=z(we,null);n&&!n.customValue.value&&(n.customValue.value=e,H(e,()=>{n.resetValidation(),n.validateWithTrigger("onChange")}))}const S=e=>e!=null,y=e=>typeof e=="function",q=e=>e!==null&&typeof e=="object",tn=e=>q(e)&&y(e.then)&&y(e.catch),on=e=>Object.prototype.toString.call(e)==="[object Date]"&&!Number.isNaN(e.getTime());function un(e){return e=e.replace(/[^-|\d]/g,""),/^((\+86)|(86))?(1)\d{10}$/.test(e)||/^0[0-9-]{10,13}$/.test(e)}const be=e=>typeof e=="number"||/^\d+(\.\d+)?$/.test(e),De=()=>J?/ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()):!1;function Be(e){const n="scrollTop"in e?e.scrollTop:e.pageYOffset;return Math.max(n,0)}function R(e,n){"scrollTop"in e?e.scrollTop=n:e.scrollTo(e.scrollX,n)}function K(){return window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0}function Ae(e){R(window,e),R(document.body,e)}function an(e,n){if(e===window)return 0;const t=n?Be(n):K();return ce(e).top+t}const ye=De();function sn(){ye&&Ae(K())}const Fe=e=>e.stopPropagation();function rn(e,n){(typeof e.cancelable!="boolean"||e.cancelable)&&e.preventDefault(),n&&Fe(e)}function cn(e){const n=g(e);if(!n)return!1;const t=window.getComputedStyle(n),o=t.display==="none",u=n.offsetParent===null&&t.position!=="fixed";return o||u}const{width:Se,height:Te}=Ee();function xe(e){if(S(e))return be(e)?`${e}px`:String(e)}function dn(e){if(S(e)){const n=xe(e);return{width:n,height:n}}}function ln(e){const n={};return e!==void 0&&(n.zIndex=+e),n}let w;function Oe(){if(!w){const e=document.documentElement,n=e.style.fontSize||window.getComputedStyle(e).fontSize;w=parseFloat(n)}return w}function Ne(e){return e=e.replace(/rem/g,""),+e*Oe()}function Pe(e){return e=e.replace(/vw/g,""),+e*Se.value/100}function Me(e){return e=e.replace(/vh/g,""),+e*Te.value/100}function fn(e){if(typeof e=="number")return e;if(J){if(e.includes("rem"))return Ne(e);if(e.includes("vw"))return Pe(e);if(e.includes("vh"))return Me(e)}return parseFloat(e)}const $e=/-(\w)/g,G=e=>e.replace($e,(n,t)=>t.toUpperCase()),pn=e=>e.replace(/([A-Z])/g,"-$1").toLowerCase().replace(/^-/,"");function mn(e,n=2){let t=e+"";for(;t.length<n;)t="0"+t;return t}const gn=(e,n,t)=>Math.min(Math.max(e,n),t);function L(e,n,t){const o=e.indexOf(n);return o===-1?e:n==="-"&&o!==0?e.slice(0,o):e.slice(0,o+1)+e.slice(o).replace(t,"")}function En(e,n=!0,t=!0){n?e=L(e,".",/\./g):e=e.split(".")[0],t?e=L(e,"-",/-/g):e=e.replace(/-/,"");const o=n?/[^-0-9.]/g:/[^-0-9]/g;return e.replace(o,"")}function hn(e,n){return Math.round((e+n)*1e10)/1e10}const{hasOwnProperty:Re}=Object.prototype;function Le(e,n,t){const o=n[t];!S(o)||(!Re.call(e,t)||!q(o)?e[t]=o:e[t]=Q(Object(e[t]),o))}function Q(e,n){return Object.keys(n).forEach(t=>{Le(e,n,t)}),e}var Ue={name:"\u59D3\u540D",tel:"\u7535\u8BDD",save:"\u4FDD\u5B58",confirm:"\u786E\u8BA4",cancel:"\u53D6\u6D88",delete:"\u5220\u9664",loading:"\u52A0\u8F7D\u4E2D...",noCoupon:"\u6682\u65E0\u4F18\u60E0\u5238",nameEmpty:"\u8BF7\u586B\u5199\u59D3\u540D",addContact:"\u6DFB\u52A0\u8054\u7CFB\u4EBA",telInvalid:"\u8BF7\u586B\u5199\u6B63\u786E\u7684\u7535\u8BDD",vanCalendar:{end:"\u7ED3\u675F",start:"\u5F00\u59CB",title:"\u65E5\u671F\u9009\u62E9",weekdays:["\u65E5","\u4E00","\u4E8C","\u4E09","\u56DB","\u4E94","\u516D"],monthTitle:(e,n)=>`${e}\u5E74${n}\u6708`,rangePrompt:e=>`\u6700\u591A\u9009\u62E9 ${e} \u5929`},vanCascader:{select:"\u8BF7\u9009\u62E9"},vanPagination:{prev:"\u4E0A\u4E00\u9875",next:"\u4E0B\u4E00\u9875"},vanPullRefresh:{pulling:"\u4E0B\u62C9\u5373\u53EF\u5237\u65B0...",loosing:"\u91CA\u653E\u5373\u53EF\u5237\u65B0..."},vanSubmitBar:{label:"\u5408\u8BA1:"},vanCoupon:{unlimited:"\u65E0\u95E8\u69DB",discount:e=>`${e}\u6298`,condition:e=>`\u6EE1${e}\u5143\u53EF\u7528`},vanCouponCell:{title:"\u4F18\u60E0\u5238",count:e=>`${e}\u5F20\u53EF\u7528`},vanCouponList:{exchange:"\u5151\u6362",close:"\u4E0D\u4F7F\u7528",enable:"\u53EF\u7528",disabled:"\u4E0D\u53EF\u7528",placeholder:"\u8F93\u5165\u4F18\u60E0\u7801"},vanAddressEdit:{area:"\u5730\u533A",areaEmpty:"\u8BF7\u9009\u62E9\u5730\u533A",addressEmpty:"\u8BF7\u586B\u5199\u8BE6\u7EC6\u5730\u5740",addressDetail:"\u8BE6\u7EC6\u5730\u5740",defaultAddress:"\u8BBE\u4E3A\u9ED8\u8BA4\u6536\u8D27\u5730\u5740"},vanAddressList:{add:"\u65B0\u589E\u5730\u5740"}};const U=f("zh-CN"),k=b({"zh-CN":Ue}),m={messages(){return k[U.value]},use(e,n){U.value=e,this.add({[e]:n})},add(e={}){Q(k,e)}};function X(e){const n=G(e)+".";return(t,...o)=>{const u=m.messages(),a=P(u,n+t)||P(u,t);return y(a)?a(...o):a}}function F(e,n){return n?typeof n=="string"?` ${e}--${n}`:Array.isArray(n)?n.reduce((t,o)=>t+F(e,o),""):Object.keys(n).reduce((t,o)=>t+(n[o]?F(e,o):""),""):""}function ke(e){return(n,t)=>(n&&typeof n!="string"&&(t=n,n=""),n=n?`${e}__${n}`:e,`${n}${F(n,t)}`)}function vn(e){const n=`van-${e}`;return[n,ke(n),X(n)]}var ze={name:"Name",tel:"Phone",save:"Save",confirm:"Confirm",cancel:"Cancel",delete:"Delete",loading:"Loading...",noCoupon:"No coupons",nameEmpty:"Please fill in the name",addContact:"Add contact",telInvalid:"Malformed phone number",vanCalendar:{end:"End",start:"Start",title:"Calendar",weekdays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],monthTitle:(e,n)=>`${e}/${n}`,rangePrompt:e=>`Choose no more than ${e} days`},vanCascader:{select:"Select"},vanPagination:{prev:"Previous",next:"Next"},vanPullRefresh:{pulling:"Pull to refresh...",loosing:"Loose to refresh..."},vanSubmitBar:{label:"Total:"},vanCoupon:{unlimited:"Unlimited",discount:e=>`${e*10}% off`,condition:e=>`At least ${e}`},vanCouponCell:{title:"Coupon",count:e=>`You have ${e} coupons`},vanCouponList:{exchange:"Exchange",close:"Close",enable:"Available",disabled:"Unavailable",placeholder:"Coupon code"},vanAddressEdit:{area:"Area",areaEmpty:"Please select a receiving area",addressEmpty:"Address can not be empty",addressDetail:"Address",defaultAddress:"Set as the default address"},vanAddressList:{add:"Add new address"}};function Ie(){m.add({"en-US":ze}),window.vueRouter&&window.vueRouter.afterEach(e=>{const{lang:n}=e.meta||{};n&&m.use(n)}),m.add({"zh-CN":{add:"\u589E\u52A0",red:"\u7EA2\u8272",tab:"\u6807\u7B7E",tag:"\u6807\u7B7E",desc:"\u63CF\u8FF0\u4FE1\u606F",back:"\u8FD4\u56DE",title:"\u6807\u9898",status:"\u72B6\u6001",button:"\u6309\u94AE",option:"\u9009\u9879",search:"\u641C\u7D22",orange:"\u6A59\u8272",yellow:"\u9EC4\u8272",purple:"\u7D2B\u8272",custom:"\u81EA\u5B9A\u4E49",content:"\u5185\u5BB9",username:"\u7528\u6237\u540D",password:"\u5BC6\u7801",decrease:"\u51CF\u5C11",disabled:"\u7981\u7528\u72B6\u6001",uneditable:"\u4E0D\u53EF\u7F16\u8F91",basicUsage:"\u57FA\u7840\u7528\u6CD5",advancedUsage:"\u9AD8\u7EA7\u7528\u6CD5",loadingStatus:"\u52A0\u8F7D\u72B6\u6001"},"en-US":{add:"Add",red:"Red",tab:"Tab",tag:"Tag",desc:"Description",back:"Back",title:"Title",status:"Status",button:"Button",option:"Option",search:"Search",orange:"Orange",yellow:"Yellow",purple:"Purple",custom:"Custom",content:"Content",username:"Username",password:"Password",decrease:"Decrease",disabled:"Disabled",uneditable:"Uneditable",basicUsage:"Basic Usage",advancedUsage:"Advanced Usage",loadingStatus:"Loading"}})}Ie();let _e=0;function Cn(e){const n=`demo-i18n-${_e++}`;if(e){const t={},o=G(n);Object.keys(e).forEach(u=>{t[u]={[o]:e[u]}}),m.add(t)}return X(n)}export{sn as A,nn as B,we as C,gn as D,fn as E,We as F,Ze as G,ce as H,R as I,on as J,v as K,Be as L,mn as M,Xe as N,Se as O,cn as P,an as Q,Te as R,en as S,Je as T,ie as U,Fe as V,hn as W,Ge as X,Qe as Y,p as Z,Cn as a,Ke as b,vn as c,J as d,Ve as e,q as f,G as g,xe as h,S as i,be as j,pn as k,rn as l,Ce as m,ge as n,me as o,He as p,dn as q,tn as r,Ye as s,ln as t,qe as u,un as v,y as w,K as x,Ae as y,En as z};
