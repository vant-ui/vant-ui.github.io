import{V as s}from"./index-bd55b31d.js";import{V as f,b as x}from"./index-67cc303b.js";import{V as m,a as c}from"./index-dd6d6bdf.js";import{c as V}from"./index-2630be1a.js";import{a as q}from"./use-translate-a757506f.js";import{s as B}from"./function-call-52cf4db5.js";import{A as I,u as N,r as R,o as p,c as g,w as a,e as o,C as e,a as b,F as v,b as k,d as y,t as h}from"./vue-libs-b2a2f6f9.js";import"./index-8c81c046.js";import"./with-install-278c4a2b.js";import"./use-id-92cebd14.js";import"./use-expose-2590a160.js";import"./use-route-efd4b866.js";import"./index-c5678a17.js";import"./use-touch-8f92051d.js";import"./on-popup-reopen-e5b691e6.js";import"./use-refs-06cfd58f.js";import"./index-29c9c9f5.js";import"./constant-a81ffd37.js";import"./interceptor-1ff3f352.js";import"./mount-component-a5a888e3.js";import"./index-e81257b3.js";import"./use-lazy-render-927fe2b4.js";import"./index-4a51f7e1.js";const w={name:"vant-icon",basic:["arrow","arrow-left","arrow-up","arrow-down","success","cross","plus","minus","fail","circle"],outline:["location-o","like-o","star-o","phone-o","setting-o","fire-o","coupon-o","cart-o","shopping-cart-o","cart-circle-o","friends-o","comment-o","gem-o","gift-o","point-gift-o","send-gift-o","service-o","bag-o","todo-list-o","balance-list-o","close","clock-o","question-o","passed","add-o","gold-coin-o","info-o","play-circle-o","pause-circle-o","stop-circle-o","warning-o","phone-circle-o","music-o","smile-o","thumb-circle-o","comment-circle-o","browsing-history-o","underway-o","more-o","video-o","shop-o","shop-collect-o","share-o","chat-o","smile-comment-o","vip-card-o","award-o","diamond-o","volume-o","cluster-o","wap-home-o","photo-o","gift-card-o","expand-o","medal-o","good-job-o","manager-o","label-o","bookmark-o","bill-o","hot-o","hot-sale-o","new-o","new-arrival-o","goods-collect-o","eye-o","delete-o","font-o","balance-o","refund-o","birthday-cake-o","user-o","orders-o","tv-o","envelop-o","flag-o","flower-o","filter-o","bar-chart-o","chart-trending-o","brush-o","bullhorn-o","hotel-o","cashier-o","newspaper-o","warn-o","notes-o","calendar-o","bulb-o","user-circle-o","desktop-o","apps-o","home-o","back-top","search","points","edit","qr","qr-invalid","closed-eye","down","scan","revoke","free-postage","certificate","logistics","contact","cash-back-record","after-sale","exchange","upgrade","ellipsis","description","records","sign","completed","failure","ecard-pay","peer-pay","balance-pay","credit-pay","debit-pay","cash-on-deliver","other-pay","tosend","pending-payment","paid","aim","discount","idcard","replay","shrink","shield-o","guide-o","cash-o","link-o","miniprogram-o"],filled:["location","like","star","phone","setting","fire","coupon","cart","shopping-cart","cart-circle","friends","comment","gem","gift","point-gift","send-gift","service","bag","todo-list","balance-list","clear","clock","question","checked","add","gold-coin","info","play-circle","pause-circle","stop-circle","warning","phone-circle","music","smile","thumb-circle","comment-circle","browsing-history","underway","more","video","shop","shop-collect","share","chat","smile-comment","vip-card","award","diamond","volume","cluster","wap-home","photo","gift-card","expand","medal","good-job","manager","label","bookmark","bill","hot","hot-sale","new","new-arrival","goods-collect","eye","delete","font","wechat","wechat-pay","wechat-moments","qq","alipay","weibo","photograph","youzan-shield","umbrella-circle","bell","printer","map-marked","card","add-square","live","lock","audio","graphic","column","invitation","play","pause","stop","weapp-nav","ascending","descending","bars","wap-nav","enlarge","photo-fail","sort"]},ae=I({__name:"index",setup(S){function z(u){const t=document.createElement("textarea");t.value=u,t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-9999px",document.body.appendChild(t);const n=document.getSelection();if(!n)return;const l=n.rangeCount>0?n.getRangeAt(0):!1;t.select(),document.execCommand("copy"),document.body.removeChild(t),l&&(n.removeAllRanges(),n.addRange(l))}const d=q({"zh-CN":{title:"图标列表",badge:"徽标提示",basic:"基础图标",copied:"复制成功",outline:"线框风格",filled:"实底风格",demo:"用法示例",color:"图标颜色",size:"图标大小"},"en-US":{title:"Icon List",badge:"Show Badge",basic:"Basic",copied:"Copied",outline:"Outline",filled:"Filled",demo:"Demo",color:"Icon Color",size:"Icon Size"}}),C=N(0),i="chat-o",_=V("icon-demo.png"),r=(u,t={})=>{let n=`<van-icon name="${u}"`;"dot"in t&&(n=`${n} ${t.dot?"dot":""}`),"badge"in t&&(n=`${n} badge="${t.badge}"`),"color"in t&&(n=`${n} color="${t.color}"`),"size"in t&&(n=`${n} size="${t.size}"`),n=`${n} />`,z(n),B({type:"success",duration:1500,className:"demo-icon-notify",message:`${d("copied")}：${n}`})};return(u,t)=>{const n=R("demo-block");return p(),g(e(x),{active:C.value,"onUpdate:active":t[9]||(t[9]=l=>C.value=l),sticky:""},{default:a(()=>[o(e(f),{class:"demo-icon-tab-panel",title:e(d)("demo")},{default:a(()=>[o(n,{title:e(d)("basicUsage")},{default:a(()=>[o(e(m),null,{default:a(()=>[o(e(c),{span:"6",onClick:t[0]||(t[0]=l=>r(i))},{default:a(()=>[o(e(s),{name:i})]),_:1})]),_:1})]),_:1},8,["title"]),o(n,{title:e(d)("usingUrl")},{default:a(()=>[o(e(m),null,{default:a(()=>[o(e(c),{span:"6",onClick:t[1]||(t[1]=l=>r(e(_)))},{default:a(()=>[o(e(s),{name:e(_)},null,8,["name"])]),_:1})]),_:1})]),_:1},8,["title"]),o(n,{title:e(d)("badge")},{default:a(()=>[o(e(m),null,{default:a(()=>[o(e(c),{span:"6",onClick:t[2]||(t[2]=l=>r(i,{dot:!0}))},{default:a(()=>[o(e(s),{name:i,dot:""})]),_:1}),o(e(c),{span:"6",onClick:t[3]||(t[3]=l=>r(i,{badge:"9"}))},{default:a(()=>[o(e(s),{name:i,badge:"9"})]),_:1}),o(e(c),{span:"6",onClick:t[4]||(t[4]=l=>r(i,{badge:"99+"}))},{default:a(()=>[o(e(s),{name:i,badge:"99+"})]),_:1})]),_:1})]),_:1},8,["title"]),o(n,{title:e(d)("color")},{default:a(()=>[o(e(m),null,{default:a(()=>[o(e(c),{span:"6",onClick:t[5]||(t[5]=l=>r("cart-o",{color:"#1989fa"}))},{default:a(()=>[o(e(s),{name:"cart-o",color:"#1989fa"})]),_:1}),o(e(c),{span:"6",onClick:t[6]||(t[6]=l=>r("fire-o",{color:"#ee0a24"}))},{default:a(()=>[o(e(s),{name:"fire-o",color:"#ee0a24"})]),_:1})]),_:1})]),_:1},8,["title"]),o(n,{title:e(d)("size")},{default:a(()=>[o(e(m),null,{default:a(()=>[o(e(c),{span:"6",onClick:t[7]||(t[7]=l=>r(i,{size:"40"}))},{default:a(()=>[o(e(s),{name:i,size:"40"})]),_:1}),o(e(c),{span:"6",onClick:t[8]||(t[8]=l=>r(i,{size:"3rem"}))},{default:a(()=>[o(e(s),{name:i,size:"3rem"})]),_:1})]),_:1})]),_:1},8,["title"])]),_:1},8,["title"]),o(e(f),{class:"demo-icon-tab-panel",title:e(d)("basic")},{default:a(()=>[o(e(m),null,{default:a(()=>[(p(!0),b(v,null,k(e(w).basic,l=>(p(),g(e(c),{key:l,span:"6",onClick:$=>r(l)},{default:a(()=>[o(e(s),{name:l},null,8,["name"]),y("span",null,h(l),1)]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1},8,["title"]),o(e(f),{class:"demo-icon-tab-panel",title:e(d)("outline")},{default:a(()=>[o(e(m),null,{default:a(()=>[(p(!0),b(v,null,k(e(w).outline,l=>(p(),g(e(c),{key:l,span:"6",onClick:$=>r(l)},{default:a(()=>[o(e(s),{name:l},null,8,["name"]),y("span",null,h(l),1)]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1},8,["title"]),o(e(f),{class:"demo-icon-tab-panel",title:e(d)("filled")},{default:a(()=>[o(e(m),null,{default:a(()=>[(p(!0),b(v,null,k(e(w).filled,l=>(p(),g(e(c),{key:l,span:"6",onClick:$=>r(l)},{default:a(()=>[o(e(s),{name:l},null,8,["name"]),y("span",null,h(l),1)]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1},8,["title"])]),_:1},8,["active"])}}});export{ae as default};
