import{m as L,c as U,a as j}from"./use-translate-1e5abec2.js";import{A as S,y as C,D as q,M as O,u as G,e as a,r as J,o as K,a as Q,w as f,C as e,F as W}from"./vue-libs-dcfba01b.js";import{c as X,m as w,w as Y}from"./with-install-042fcf0c.js";const[Z,H]=U("text-ellipsis"),$={rows:X(1),dots:w("..."),content:w(""),expandText:w(""),collapseText:w(""),position:w("end")},P=S({name:Z,props:$,emits:["clickAction"],setup(n,{emit:t}){const g=C(""),y=C(!1),c=C(!1),b=C(),E=q(()=>y.value?n.collapseText:n.expandText),k=m=>{if(!m)return 0;const _=m.match(/^\d*(\.\d*)?/);return _?Number(_[0]):0},I=()=>{const m=()=>{if(!b.value)return;const i=window.getComputedStyle(b.value),o=document.createElement("div");return Array.prototype.slice.apply(i).forEach(x=>{o.style.setProperty(x,i.getPropertyValue(x))}),o.style.position="fixed",o.style.zIndex="-9999",o.style.top="-9999px",o.style.height="auto",o.style.minHeight="auto",o.style.maxHeight="auto",o.innerText=n.content,document.body.appendChild(o),o},_=(i,o)=>{const{content:r,position:x,dots:T}=n,p=r.length,F=()=>{const l=(s,u)=>{if(u-s<=1)return x==="end"?r.slice(0,s)+T:T+r.slice(u,p);const d=Math.round((s+u)/2);return x==="end"?i.innerText=r.slice(0,d)+T+E.value:i.innerText=T+r.slice(d,p)+E.value,i.offsetHeight>o?x==="end"?l(s,d):l(d,u):x==="end"?l(d,u):l(s,d)};i.innerText=l(0,p)},M=(l,s)=>{if(l[1]-l[0]<=1&&s[1]-s[0]<=1)return r.slice(0,l[0])+T+r.slice(s[1],p);const u=Math.floor((l[0]+l[1])/2),d=Math.ceil((s[0]+s[1])/2);return i.innerText=n.content.slice(0,u)+n.dots+n.content.slice(d,p)+n.expandText,i.offsetHeight>=o?M([l[0],u],[d,s[1]]):M([u,l[1]],[s[0],d])},N=0+p>>1;return n.position==="middle"?i.innerText=M([0,N],[N,p]):F(),i.innerText},h=m();if(!h)return;const{paddingBottom:R,paddingTop:D,lineHeight:V}=h.style,A=Math.ceil((Number(n.rows)+.5)*k(V)+k(D)+k(R));A<h.offsetHeight?(c.value=!0,g.value=_(h,A)):(c.value=!1,g.value=n.content),document.body.removeChild(h)},z=m=>{y.value=!y.value,t("clickAction",m)},B=()=>a("span",{class:H("action"),onClick:z},[E.value]);return O(I),G(()=>[n.content,n.rows,n.position],I),L("resize",I),()=>a("div",{ref:b,class:H()},[y.value?n.content:g.value,c.value?B():null])}}),ee=Y(P),v=ee,le=S({__name:"index",setup(n){const t=j({"zh-CN":{text1:"慢慢来，不要急，生活给你出了难题，可也终有一天会给出答案。",text2:"似水流年是一个人所有的一切，只有这个东西，才真正归你所有。其余的一切，都是片刻的欢娱和不幸，转眼间就已跑到那似水流年里去了。",text3:"那一天我二十一岁，在我一生的黄金时代。我有好多奢望。我想爱，想吃，还想在一瞬间变成天上半明半暗的云。后来我才知道，生活就是个缓慢受锤的过程，人一天天老下去，奢望也一天天消失，最后变得像挨了锤的牛一样。可是我过二十一岁生日时没有预见到这一点。我觉得自己会永远生猛下去，什么也锤不了我。",expandText:"展开",collapseText:"收起",expandCollapse:"展开/收起",customRows:"自定义展示行数",collapsePosition:"自定义省略位置",collapseStart:"头部省略",collapseMiddle:"中部省略"},"en-US":{text1:"Take your time and be patient. Life itself will eventually answer all those questions it once raised for you.",text2:"The fleeting time of one's life is everything that belongs to a person. Only this thing truly belongs to you. Everything else is just a momentary pleasure or misfortune, which will soon be gone with the passing of time.",text3:"That day, I turned twenty-one. In the golden age of my life, I was full of dreams. I wanted to love, to eat, and to instantly transform into one of these clouds, part alight, part darkened. It was only later that I understood life is but a slow, drawn-out process of getting your balls crushed. Day by day, you get older. Day by day, your dreams fade. In the end you are no different from a crushed ox. But I hadn't foreseen any of it on my twenty-first birthday. I thought I would be vigorous forever, and that nothing could ever crush me.",expandText:"expand",collapseText:"collapse",expandCollapse:"Expand/Collapse",customRows:"Customize Rows",collapsePosition:"Custom Collapse Position",collapseStart:"Head Area Collapse Position",collapseMiddle:"Middle Area Collapse Position"}});return(g,y)=>{const c=J("demo-block");return K(),Q(W,null,[a(c,{title:e(t)("basicUsage")},{default:f(()=>[a(e(v),{content:e(t)("text1")},null,8,["content"])]),_:1},8,["title"]),a(c,{title:e(t)("expandCollapse")},{default:f(()=>[a(e(v),{content:e(t)("text2"),"expand-text":e(t)("expandText"),"collapse-text":e(t)("collapseText")},null,8,["content","expand-text","collapse-text"])]),_:1},8,["title"]),a(c,{title:e(t)("customRows")},{default:f(()=>[a(e(v),{rows:"3",content:e(t)("text3"),"expand-text":e(t)("expandText"),"collapse-text":e(t)("collapseText")},null,8,["content","expand-text","collapse-text"])]),_:1},8,["title"]),a(c,{title:e(t)("collapsePosition")},{default:f(()=>[a(c,{title:e(t)("collapseStart")},{default:f(()=>[a(e(v),{rows:"1",content:e(t)("text3"),"expand-text":e(t)("expandText"),"collapse-text":e(t)("collapseText"),position:"start"},null,8,["content","expand-text","collapse-text"])]),_:1},8,["title"]),a(c,{title:e(t)("collapseMiddle")},{default:f(()=>[a(e(v),{rows:"2",content:e(t)("text3"),"expand-text":e(t)("expandText"),"collapse-text":e(t)("collapseText"),position:"middle"},null,8,["content","expand-text","collapse-text"])]),_:1},8,["title"])]),_:1},8,["title"])],64)}}});export{le as default};
