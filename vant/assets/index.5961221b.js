import{c as b,M as w,n as y,L as R,l as _}from"./use-translate.0ff6f26f.js";import{c as f,n as $,w as A}from"./with-install.8a446ba3.js";import{u as M}from"./use-touch.ffb74f5c.js";import{L as N}from"./index.7464c8e4.js";import{z as B,C as v,H as C,x as I,e as l,q as U}from"./vue-libs.a65f1bfc.js";const[Y,r,q]=b("pull-refresh"),x=50,z=["pulling","loosing","success"],F={disabled:Boolean,modelValue:Boolean,headHeight:f(x),successText:String,pullingText:String,loosingText:String,loadingText:String,pullDistance:$,successDuration:f(500),animationDuration:f(300)},G=B({name:Y,props:F,emits:["change","refresh","update:modelValue"],setup(a,{emit:h,slots:n}){let u;const g=v(),m=v(),H=w(g),e=C({status:"normal",distance:0,duration:0}),i=M(),P=()=>{if(a.headHeight!==x)return{height:`${a.headHeight}px`}},d=()=>e.status!=="loading"&&e.status!=="success"&&!a.disabled,V=t=>{const s=+(a.pullDistance||a.headHeight);return t>s&&(t<s*2?t=s+(t-s)/2:t=s*1.5+(t-s*2)/4),Math.round(t)},o=(t,s)=>{const c=+(a.pullDistance||a.headHeight);e.distance=t,s?e.status="loading":t===0?e.status="normal":t<c?e.status="pulling":e.status="loosing",h("change",{status:e.status,distance:t})},T=()=>{const{status:t}=e;return t==="normal"?"":a[`${t}Text`]||q(t)},k=()=>{const{status:t,distance:s}=e;if(n[t])return n[t]({distance:s});const c=[];return z.includes(t)&&c.push(l("div",{class:r("text")},[T()])),t==="loading"&&c.push(l(N,{class:r("loading")},{default:T})),c},p=()=>{e.status="success",setTimeout(()=>{o(0)},+a.successDuration)},S=t=>{u=R(H.value)===0,u&&(e.duration=0,i.start(t))},E=t=>{d()&&S(t)},L=t=>{if(d()){u||S(t);const{deltaY:s}=i;i.move(t),u&&s.value>=0&&i.isVertical()&&(_(t),o(V(s.value)))}},D=()=>{u&&i.deltaY.value&&d()&&(e.duration=+a.animationDuration,e.status==="loosing"?(o(+a.headHeight,!0),h("update:modelValue",!0),U(()=>h("refresh"))):o(0))};return I(()=>a.modelValue,t=>{e.duration=+a.animationDuration,t?o(+a.headHeight,!0):n.success||a.successText?p():o(0,!1)}),y("touchmove",L,{target:m}),()=>{var s;const t={transitionDuration:`${e.duration}ms`,transform:e.distance?`translate3d(0,${e.distance}px, 0)`:""};return l("div",{ref:g,class:r()},[l("div",{ref:m,class:r("track"),style:t,onTouchstartPassive:E,onTouchend:D,onTouchcancel:D},[l("div",{class:r("head"),style:P()},[k()]),(s=n.default)==null?void 0:s.call(n)])])}}}),X=A(G),W=X;export{W as V};
