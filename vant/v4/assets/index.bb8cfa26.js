import{c as ke,Z as Pe,p as Ae,e as Te,a as Re}from"./use-translate.c56bc05e.js";import{m as ne,b as De,n as Ie,t as G,u as Le,w as je}from"./with-install.2d06a5b3.js";import{f as Me}from"./constant.80c6de18.js";import{I as Fe}from"./index.710c79e5.js";import{P as Be,V as Ne}from"./index.d361c3fa.js";import{A as he,x as H,N as Ve,J as _e,y as qe,e as d,B as We,F as re,q as Ue,r as Xe,o as ce,a as ue,w as y,C as f,h as X,t as Y,d as we,b as Ye}from"./vue-libs.a3cd7f61.js";import{V as $}from"./index.3c8c27cb.js";import{V as $e}from"./index.10bc57c4.js";import{V as He}from"./index.bb004eb4.js";import{V as ze,a as Ge}from"./index.2b9df852.js";import{s as Je}from"./index.c1c7ff47.js";import"./interceptor.7caa5e9a.js";import"./use-expose.2dad0d8e.js";import"./use-touch.196fce0c.js";import"./use-lazy-render.4c81c593.js";import"./on-popup-reopen.a53db14c.js";import"./index.a0b9e7c8.js";import"./use-route.7a9317f3.js";import"./index.1fe53b6c.js";import"./index.d16595ff.js";import"./use-id.5b8801cd.js";import"./Picker.2ed374fc.js";import"./mount-component.2ea251e1.js";function P(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function ge(t){var e=P(t).Element;return t instanceof e||t instanceof Element}function k(t){var e=P(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function ye(t){if(typeof ShadowRoot>"u")return!1;var e=P(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}var _=Math.round;function K(t,e){e===void 0&&(e=!1);var o=t.getBoundingClientRect(),n=1,r=1;if(k(t)&&e){var i=t.offsetHeight,c=t.offsetWidth;c>0&&(n=_(o.width)/c||1),i>0&&(r=_(o.height)/i||1)}return{width:o.width/n,height:o.height/r,top:o.top/r,right:o.right/n,bottom:o.bottom/r,left:o.left/n,x:o.left/n,y:o.top/r}}function be(t){var e=P(t),o=e.pageXOffset,n=e.pageYOffset;return{scrollLeft:o,scrollTop:n}}function Ze(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function Ke(t){return t===P(t)||!k(t)?be(t):Ze(t)}function A(t){return t?(t.nodeName||"").toLowerCase():null}function te(t){return((ge(t)?t.ownerDocument:t.document)||window.document).documentElement}function Qe(t){return K(te(t)).left+be(t).scrollLeft}function T(t){return P(t).getComputedStyle(t)}function ie(t){var e=T(t),o=e.overflow,n=e.overflowX,r=e.overflowY;return/auto|scroll|overlay|hidden/.test(o+r+n)}function et(t){var e=t.getBoundingClientRect(),o=_(e.width)/t.offsetWidth||1,n=_(e.height)/t.offsetHeight||1;return o!==1||n!==1}function tt(t,e,o){o===void 0&&(o=!1);var n=k(e),r=k(e)&&et(e),i=te(e),c=K(t,r),u={scrollLeft:0,scrollTop:0},s={x:0,y:0};return(n||!n&&!o)&&((A(e)!=="body"||ie(i))&&(u=Ke(e)),k(e)?(s=K(e,!0),s.x+=e.clientLeft,s.y+=e.clientTop):i&&(s.x=Qe(i))),{x:c.left+u.scrollLeft-s.x,y:c.top+u.scrollTop-s.y,width:c.width,height:c.height}}function ot(t){var e=K(t),o=t.offsetWidth,n=t.offsetHeight;return Math.abs(e.width-o)<=1&&(o=e.width),Math.abs(e.height-n)<=1&&(n=e.height),{x:t.offsetLeft,y:t.offsetTop,width:o,height:n}}function se(t){return A(t)==="html"?t:t.assignedSlot||t.parentNode||(ye(t)?t.host:null)||te(t)}function Oe(t){return["html","body","#document"].indexOf(A(t))>=0?t.ownerDocument.body:k(t)&&ie(t)?t:Oe(se(t))}function Z(t,e){var o;e===void 0&&(e=[]);var n=Oe(t),r=n===((o=t.ownerDocument)==null?void 0:o.body),i=P(n),c=r?[i].concat(i.visualViewport||[],ie(n)?n:[]):n,u=e.concat(c);return r?u:u.concat(Z(se(c)))}function nt(t){return["table","td","th"].indexOf(A(t))>=0}function le(t){return!k(t)||T(t).position==="fixed"?null:t.offsetParent}function rt(t){var e=navigator.userAgent.toLowerCase().indexOf("firefox")!==-1,o=navigator.userAgent.indexOf("Trident")!==-1;if(o&&k(t)){var n=T(t);if(n.position==="fixed")return null}var r=se(t);for(ye(r)&&(r=r.host);k(r)&&["html","body"].indexOf(A(r))<0;){var i=T(r);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||e&&i.willChange==="filter"||e&&i.filter&&i.filter!=="none")return r;r=r.parentNode}return null}function xe(t){for(var e=P(t),o=le(t);o&&nt(o)&&T(o).position==="static";)o=le(o);return o&&(A(o)==="html"||A(o)==="body"&&T(o).position==="static")?e:o||rt(t)||e}var V="top",Q="bottom",z="right",M="left",Ee="auto",at=[V,Q,z,M],Se="start",ee="end",it=[].concat(at,[Ee]).reduce(function(t,e){return t.concat([e,e+"-"+Se,e+"-"+ee])},[]),st="beforeRead",ct="read",ut="afterRead",lt="beforeMain",ft="main",pt="afterMain",dt="beforeWrite",vt="write",mt="afterWrite",ae=[st,ct,ut,lt,ft,pt,dt,vt,mt];function ht(t){var e=new Map,o=new Set,n=[];t.forEach(function(i){e.set(i.name,i)});function r(i){o.add(i.name);var c=[].concat(i.requires||[],i.requiresIfExists||[]);c.forEach(function(u){if(!o.has(u)){var s=e.get(u);s&&r(s)}}),n.push(i)}return t.forEach(function(i){o.has(i.name)||r(i)}),n}function wt(t){var e=ht(t);return ae.reduce(function(o,n){return o.concat(e.filter(function(r){return r.phase===n}))},[])}function gt(t){var e;return function(){return e||(e=new Promise(function(o){Promise.resolve().then(function(){e=void 0,o(t())})})),e}}function D(t){for(var e=arguments.length,o=new Array(e>1?e-1:0),n=1;n<e;n++)o[n-1]=arguments[n];return[].concat(o).reduce(function(r,i){return r.replace(/%s/,i)},t)}var L='Popper: modifier "%s" provided an invalid %s property, expected %s but got %s',yt='Popper: modifier "%s" requires "%s", but "%s" modifier is not available',fe=["name","enabled","phase","fn","effect","requires","options"];function bt(t){t.forEach(function(e){[].concat(Object.keys(e),fe).filter(function(o,n,r){return r.indexOf(o)===n}).forEach(function(o){switch(o){case"name":typeof e.name!="string"&&console.error(D(L,String(e.name),'"name"','"string"','"'+String(e.name)+'"'));break;case"enabled":typeof e.enabled!="boolean"&&console.error(D(L,e.name,'"enabled"','"boolean"','"'+String(e.enabled)+'"'));break;case"phase":ae.indexOf(e.phase)<0&&console.error(D(L,e.name,'"phase"',"either "+ae.join(", "),'"'+String(e.phase)+'"'));break;case"fn":typeof e.fn!="function"&&console.error(D(L,e.name,'"fn"','"function"','"'+String(e.fn)+'"'));break;case"effect":e.effect!=null&&typeof e.effect!="function"&&console.error(D(L,e.name,'"effect"','"function"','"'+String(e.fn)+'"'));break;case"requires":e.requires!=null&&!Array.isArray(e.requires)&&console.error(D(L,e.name,'"requires"','"array"','"'+String(e.requires)+'"'));break;case"requiresIfExists":Array.isArray(e.requiresIfExists)||console.error(D(L,e.name,'"requiresIfExists"','"array"','"'+String(e.requiresIfExists)+'"'));break;case"options":case"data":break;default:console.error('PopperJS: an invalid property has been provided to the "'+e.name+'" modifier, valid properties are '+fe.map(function(n){return'"'+n+'"'}).join(", ")+'; but "'+o+'" was provided.')}e.requires&&e.requires.forEach(function(n){t.find(function(r){return r.name===n})==null&&console.error(D(yt,String(e.name),n,n))})})})}function Ot(t,e){var o=new Set;return t.filter(function(n){var r=e(n);if(!o.has(r))return o.add(r),!0})}function oe(t){return t.split("-")[0]}function xt(t){var e=t.reduce(function(o,n){var r=o[n.name];return o[n.name]=r?Object.assign({},r,n,{options:Object.assign({},r.options,n.options),data:Object.assign({},r.data,n.data)}):n,o},{});return Object.keys(e).map(function(o){return e[o]})}function Ce(t){return t.split("-")[1]}function Et(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function St(t){var e=t.reference,o=t.element,n=t.placement,r=n?oe(n):null,i=n?Ce(n):null,c=e.x+e.width/2-o.width/2,u=e.y+e.height/2-o.height/2,s;switch(r){case V:s={x:c,y:e.y-o.height};break;case Q:s={x:c,y:e.y+e.height};break;case z:s={x:e.x+e.width,y:u};break;case M:s={x:e.x-o.width,y:u};break;default:s={x:e.x,y:e.y}}var l=r?Et(r):null;if(l!=null){var a=l==="y"?"height":"width";switch(i){case Se:s[l]=s[l]-(e[a]/2-o[a]/2);break;case ee:s[l]=s[l]+(e[a]/2-o[a]/2);break}}return s}var pe="Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.",Ct="Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.",de={placement:"bottom",modifiers:[],strategy:"absolute"};function ve(){for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];return!e.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function kt(t){t===void 0&&(t={});var e=t,o=e.defaultModifiers,n=o===void 0?[]:o,r=e.defaultOptions,i=r===void 0?de:r;return function(u,s,l){l===void 0&&(l=i);var a={placement:"bottom",orderedModifiers:[],options:Object.assign({},de,i),modifiersData:{},elements:{reference:u,popper:s},attributes:{},styles:{}},g=[],v=!1,m={state:a,setOptions:function(p){var O=typeof p=="function"?p(a.options):p;x(),a.options=Object.assign({},i,a.options,O),a.scrollParents={reference:ge(u)?Z(u):u.contextElement?Z(u.contextElement):[],popper:Z(s)};var E=wt(xt([].concat(n,a.options.modifiers)));a.orderedModifiers=E.filter(function(C){return C.enabled});{var S=Ot([].concat(E,a.options.modifiers),function(C){var B=C.name;return B});if(bt(S),oe(a.options.placement)===Ee){var w=a.orderedModifiers.find(function(C){var B=C.name;return B==="flip"});w||console.error(['Popper: "auto" placements require the "flip" modifier be',"present and enabled to work."].join(" "))}var h=T(s),R=h.marginTop,I=h.marginRight,q=h.marginBottom,W=h.marginLeft;[R,I,q,W].some(function(C){return parseFloat(C)})&&console.warn(['Popper: CSS "margin" styles cannot be used to apply padding',"between the popper and its reference element or boundary.","To replicate margin, use the `offset` modifier, as well as","the `padding` option in the `preventOverflow` and `flip`","modifiers."].join(" "))}return F(),m.update()},forceUpdate:function(){if(!v){var p=a.elements,O=p.reference,E=p.popper;if(!ve(O,E)){console.error(pe);return}a.rects={reference:tt(O,xe(E),a.options.strategy==="fixed"),popper:ot(E)},a.reset=!1,a.placement=a.options.placement,a.orderedModifiers.forEach(function(C){return a.modifiersData[C.name]=Object.assign({},C.data)});for(var S=0,w=0;w<a.orderedModifiers.length;w++){if(S+=1,S>100){console.error(Ct);break}if(a.reset===!0){a.reset=!1,w=-1;continue}var h=a.orderedModifiers[w],R=h.fn,I=h.options,q=I===void 0?{}:I,W=h.name;typeof R=="function"&&(a=R({state:a,options:q,name:W,instance:m})||a)}}},update:gt(function(){return new Promise(function(b){m.forceUpdate(),b(a)})}),destroy:function(){x(),v=!0}};if(!ve(u,s))return console.error(pe),m;m.setOptions(l).then(function(b){!v&&l.onFirstUpdate&&l.onFirstUpdate(b)});function F(){a.orderedModifiers.forEach(function(b){var p=b.name,O=b.options,E=O===void 0?{}:O,S=b.effect;if(typeof S=="function"){var w=S({state:a,name:p,instance:m,options:E}),h=function(){};g.push(w||h)}})}function x(){g.forEach(function(b){return b()}),g=[]}return m}}var J={passive:!0};function Pt(t){var e=t.state,o=t.instance,n=t.options,r=n.scroll,i=r===void 0?!0:r,c=n.resize,u=c===void 0?!0:c,s=P(e.elements.popper),l=[].concat(e.scrollParents.reference,e.scrollParents.popper);return i&&l.forEach(function(a){a.addEventListener("scroll",o.update,J)}),u&&s.addEventListener("resize",o.update,J),function(){i&&l.forEach(function(a){a.removeEventListener("scroll",o.update,J)}),u&&s.removeEventListener("resize",o.update,J)}}var At={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Pt,data:{}};function Tt(t){var e=t.state,o=t.name;e.modifiersData[o]=St({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}var Rt={name:"popperOffsets",enabled:!0,phase:"read",fn:Tt,data:{}},Dt={top:"auto",right:"auto",bottom:"auto",left:"auto"};function It(t){var e=t.x,o=t.y,n=window,r=n.devicePixelRatio||1;return{x:_(e*r)/r||0,y:_(o*r)/r||0}}function me(t){var e,o=t.popper,n=t.popperRect,r=t.placement,i=t.variation,c=t.offsets,u=t.position,s=t.gpuAcceleration,l=t.adaptive,a=t.roundOffsets,g=t.isFixed,v=c.x,m=v===void 0?0:v,F=c.y,x=F===void 0?0:F,b=typeof a=="function"?a({x:m,y:x}):{x:m,y:x};m=b.x,x=b.y;var p=c.hasOwnProperty("x"),O=c.hasOwnProperty("y"),E=M,S=V,w=window;if(l){var h=xe(o),R="clientHeight",I="clientWidth";if(h===P(o)&&(h=te(o),T(h).position!=="static"&&u==="absolute"&&(R="scrollHeight",I="scrollWidth")),h=h,r===V||(r===M||r===z)&&i===ee){S=Q;var q=g&&h===w&&w.visualViewport?w.visualViewport.height:h[R];x-=q-n.height,x*=s?1:-1}if(r===M||(r===V||r===Q)&&i===ee){E=z;var W=g&&h===w&&w.visualViewport?w.visualViewport.width:h[I];m-=W-n.width,m*=s?1:-1}}var C=Object.assign({position:u},l&&Dt),B=a===!0?It({x:m,y:x}):{x:m,y:x};if(m=B.x,x=B.y,s){var U;return Object.assign({},C,(U={},U[S]=O?"0":"",U[E]=p?"0":"",U.transform=(w.devicePixelRatio||1)<=1?"translate("+m+"px, "+x+"px)":"translate3d("+m+"px, "+x+"px, 0)",U))}return Object.assign({},C,(e={},e[S]=O?x+"px":"",e[E]=p?m+"px":"",e.transform="",e))}function Lt(t){var e=t.state,o=t.options,n=o.gpuAcceleration,r=n===void 0?!0:n,i=o.adaptive,c=i===void 0?!0:i,u=o.roundOffsets,s=u===void 0?!0:u;{var l=T(e.elements.popper).transitionProperty||"";c&&["transform","top","right","bottom","left"].some(function(g){return l.indexOf(g)>=0})&&console.warn(["Popper: Detected CSS transitions on at least one of the following",'CSS properties: "transform", "top", "right", "bottom", "left".',`

`,'Disable the "computeStyles" modifier\'s `adaptive` option to allow',"for smooth transitions, or remove these properties from the CSS","transition declaration on the popper element if only transitioning","opacity or background-color for example.",`

`,"We recommend using the popper element as a wrapper around an inner","element that can have any CSS property transitioned for animations."].join(" "))}var a={placement:oe(e.placement),variation:Ce(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:r,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,me(Object.assign({},a,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:c,roundOffsets:s})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,me(Object.assign({},a,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:s})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}var jt={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Lt,data:{}};function Mt(t){var e=t.state;Object.keys(e.elements).forEach(function(o){var n=e.styles[o]||{},r=e.attributes[o]||{},i=e.elements[o];!k(i)||!A(i)||(Object.assign(i.style,n),Object.keys(r).forEach(function(c){var u=r[c];u===!1?i.removeAttribute(c):i.setAttribute(c,u===!0?"":u)}))})}function Ft(t){var e=t.state,o={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,o.popper),e.styles=o,e.elements.arrow&&Object.assign(e.elements.arrow.style,o.arrow),function(){Object.keys(e.elements).forEach(function(n){var r=e.elements[n],i=e.attributes[n]||{},c=Object.keys(e.styles.hasOwnProperty(n)?e.styles[n]:o[n]),u=c.reduce(function(s,l){return s[l]="",s},{});!k(r)||!A(r)||(Object.assign(r.style,u),Object.keys(i).forEach(function(s){r.removeAttribute(s)}))})}}var Bt={name:"applyStyles",enabled:!0,phase:"write",fn:Mt,effect:Ft,requires:["computeStyles"]},Nt=[At,Rt,jt,Bt],Vt=kt({defaultModifiers:Nt});function _t(t,e,o){var n=oe(t),r=[M,V].indexOf(n)>=0?-1:1,i=typeof o=="function"?o(Object.assign({},e,{placement:t})):o,c=i[0],u=i[1];return c=c||0,u=(u||0)*r,[M,z].indexOf(n)>=0?{x:u,y:c}:{x:c,y:u}}function qt(t){var e=t.state,o=t.options,n=t.name,r=o.offset,i=r===void 0?[0,0]:r,c=it.reduce(function(a,g){return a[g]=_t(g,e.rects,i),a},{}),u=c[e.placement],s=u.x,l=u.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=s,e.modifiersData.popperOffsets.y+=l),e.modifiersData[n]=c}var Wt={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:qt};const[Ut,j]=ke("popover"),Xt=["show","overlay","duration","teleport","overlayStyle","overlayClass","closeOnClickOverlay"],Yt={show:Boolean,theme:ne("light"),overlay:Boolean,actions:De(),trigger:ne("click"),duration:Ie,showArrow:G,placement:ne("bottom"),iconPrefix:String,overlayClass:Le,overlayStyle:Object,closeOnClickAction:G,closeOnClickOverlay:G,closeOnClickOutside:G,offset:{type:Array,default:()=>[0,8]},teleport:{type:[String,Object],default:"body"}},$t=he({name:Ut,props:Yt,emits:["select","touchstart","update:show"],setup(t,{emit:e,slots:o,attrs:n}){let r;const i=H(),c=H(),u=()=>({placement:t.placement,modifiers:[{name:"computeStyles",options:{adaptive:!1,gpuAcceleration:!1}},Te({},Wt,{options:{offset:t.offset}})]}),s=()=>i.value&&c.value?Vt(i.value,c.value.popupRef.value,u()):null,l=()=>{Ue(()=>{!t.show||(r?r.setOptions(u()):r=s())})},a=p=>e("update:show",p),g=()=>{t.trigger==="click"&&a(!t.show)},v=p=>{p.stopPropagation(),e("touchstart",p)},m=(p,O)=>{p.disabled||(e("select",p,O),t.closeOnClickAction&&a(!1))},F=()=>{t.closeOnClickOutside&&(!t.overlay||t.closeOnClickOverlay)&&a(!1)},x=(p,O)=>o.action?o.action({action:p,index:O}):[p.icon&&d(Fe,{name:p.icon,classPrefix:t.iconPrefix,class:j("action-icon")},null),d("div",{class:[j("action-text"),Me]},[p.text])],b=(p,O)=>{const{icon:E,color:S,disabled:w,className:h}=p;return d("div",{role:"menuitem",class:[j("action",{disabled:w,"with-icon":E}),h],style:{color:S},tabindex:w?void 0:0,"aria-disabled":w||void 0,onClick:()=>m(p,O)},[x(p,O)])};return Ve(l),_e(()=>{r&&(r.destroy(),r=null)}),qe(()=>[t.show,t.offset,t.placement],l),Pe(i,F,{eventName:"touchstart"}),()=>{var p;return d(re,null,[d("span",{ref:i,class:j("wrapper"),onClick:g},[(p=o.reference)==null?void 0:p.call(o)]),d(Be,We({ref:c,class:j([t.theme]),position:"",transition:"van-popover-zoom",lockScroll:!1,onTouchstart:v,"onUpdate:show":a},n,Ae(t,Xt)),{default:()=>[t.showArrow&&d("div",{class:j("arrow")},null),d("div",{role:"menu",class:j("content")},[o.default?o.default():t.actions.map(b)])]})])}}}),Ht=je($t),N=Ht,zt={class:"demo-popover-box"},Gt=we("div",{class:"demo-popover-refer"},null,-1),bo=he({__name:"index",setup(t){const e=Re({"zh-CN":{actions:[{text:"\u9009\u9879\u4E00"},{text:"\u9009\u9879\u4E8C"},{text:"\u9009\u9879\u4E09"}],shortActions:[{text:"\u9009\u9879\u4E00"},{text:"\u9009\u9879\u4E8C"}],actionsWithIcon:[{text:"\u9009\u9879\u4E00",icon:"add-o"},{text:"\u9009\u9879\u4E8C",icon:"music-o"},{text:"\u9009\u9879\u4E09",icon:"more-o"}],actionsDisabled:[{text:"\u9009\u9879\u4E00",disabled:!0},{text:"\u9009\u9879\u4E8C",disabled:!0},{text:"\u9009\u9879\u4E09"}],showIcon:"\u5C55\u793A\u56FE\u6807",placement:"\u5F39\u51FA\u4F4D\u7F6E",darkTheme:"\u6DF1\u8272\u98CE\u683C",lightTheme:"\u6D45\u8272\u98CE\u683C",showPopover:"\u70B9\u51FB\u5F39\u51FA\u6C14\u6CE1",actionOptions:"\u9009\u9879\u914D\u7F6E",customContent:"\u81EA\u5B9A\u4E49\u5185\u5BB9",disableAction:"\u7981\u7528\u9009\u9879",choosePlacement:"\u9009\u62E9\u5F39\u51FA\u4F4D\u7F6E"},"en-US":{actions:[{text:"Option 1"},{text:"Option 2"},{text:"Option 3"}],shortActions:[{text:"Option 1"},{text:"Option 2"}],actionsWithIcon:[{text:"Option 1",icon:"add-o"},{text:"Option 2",icon:"music-o"},{text:"Option 3",icon:"more-o"}],actionsDisabled:[{text:"Option 1",disabled:!0},{text:"Option 2",disabled:!0},{text:"Option 3"}],showIcon:"Show Icon",placement:"Placement",darkTheme:"Dark Theme",lightTheme:"Light Theme",showPopover:"Show Popover",actionOptions:"Action Options",customContent:"Custom Content",disableAction:"Disable Action",choosePlacement:"Placement"}}),o=["top","top-start","top-end","left","left-start","left-end","right","right-start","right-end","bottom","bottom-start","bottom-end"],n=H({showIcon:!1,placement:!1,darkTheme:!1,lightTheme:!1,customContent:!1,disableAction:!1}),r=H(!1),i=H("top"),c=()=>{r.value=!0,setTimeout(()=>{n.value={...n.value,placement:!0}},300)},u=l=>{setTimeout(()=>{n.value.placement=!0,i.value=l})},s=l=>Je(l.text);return(l,a)=>{const g=Xe("demo-block");return ce(),ue(re,null,[d(g,{title:f(e)("basicUsage")},{default:y(()=>[d(f(N),{show:n.value.lightTheme,"onUpdate:show":a[0]||(a[0]=v=>n.value.lightTheme=v),actions:f(e)("actions"),placement:"bottom-start",onSelect:s},{reference:y(()=>[d(f($),{type:"primary"},{default:y(()=>[X(Y(f(e)("lightTheme")),1)]),_:1})]),_:1},8,["show","actions"]),d(f(N),{show:n.value.darkTheme,"onUpdate:show":a[1]||(a[1]=v=>n.value.darkTheme=v),theme:"dark",actions:f(e)("actions"),onSelect:s},{reference:y(()=>[d(f($),{type:"primary"},{default:y(()=>[X(Y(f(e)("darkTheme")),1)]),_:1})]),_:1},8,["show","actions"])]),_:1},8,["title"]),d(g,{title:f(e)("placement")},{default:y(()=>[d(f($e),{"is-link":"",readonly:"",name:"picker",label:f(e)("choosePlacement"),onClick:c},null,8,["label"]),d(f(Ne),{show:r.value,"onUpdate:show":a[3]||(a[3]=v=>r.value=v),round:"",position:"bottom",teleport:"body"},{default:y(()=>[we("div",zt,[d(f(N),{show:n.value.placement,"onUpdate:show":a[2]||(a[2]=v=>n.value.placement=v),theme:"dark",actions:f(e)("shortActions"),placement:i.value,onSelect:s},{reference:y(()=>[Gt]),_:1},8,["show","actions","placement"])]),d(f(He),{columns:o,"show-toolbar":!1,onChange:u})]),_:1},8,["show"])]),_:1},8,["title"]),d(g,{title:f(e)("actionOptions")},{default:y(()=>[d(f(N),{show:n.value.showIcon,"onUpdate:show":a[4]||(a[4]=v=>n.value.showIcon=v),actions:f(e)("actionsWithIcon"),placement:"bottom-start",onSelect:s},{reference:y(()=>[d(f($),{type:"primary"},{default:y(()=>[X(Y(f(e)("showIcon")),1)]),_:1})]),_:1},8,["show","actions"]),d(f(N),{show:n.value.disableAction,"onUpdate:show":a[5]||(a[5]=v=>n.value.disableAction=v),actions:f(e)("actionsDisabled"),onSelect:s},{reference:y(()=>[d(f($),{type:"primary"},{default:y(()=>[X(Y(f(e)("disableAction")),1)]),_:1})]),_:1},8,["show","actions"])]),_:1},8,["title"]),d(g,{title:f(e)("customContent")},{default:y(()=>[d(f(N),{show:n.value.customContent,"onUpdate:show":a[7]||(a[7]=v=>n.value.customContent=v),placement:"top-start",onSelect:s},{reference:y(()=>[d(f($),{type:"primary"},{default:y(()=>[X(Y(f(e)("customContent")),1)]),_:1})]),default:y(()=>[d(f(ze),{square:"",clickable:"",border:!1,"column-num":"3",style:{width:"240px"}},{default:y(()=>[(ce(),ue(re,null,Ye(6,v=>d(f(Ge),{key:v,icon:"photo-o",text:f(e)("option"),onClick:a[6]||(a[6]=m=>n.value.customContent=!1)},null,8,["text"])),64))]),_:1})]),_:1},8,["show"])]),_:1},8,["title"])],64)}}});export{bo as default};
