import{u as T}from"./vue-libs.d5ee895a.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function i(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerpolicy&&(a.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?a.credentials="include":o.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=i(o);fetch(o.href,a)}})();const Q_=(_,e)=>{const i=_.__vccOpts||_;for(const[r,o]of e)i[r]=o;return i},A="modulepreload",D=function(_){return"/vant/"+_},c={},t=function(e,i,r){return!i||i.length===0?e():Promise.all(i.map(o=>{if(o=D(o),o in c)return;c[o]=!0;const a=o.endsWith(".css"),s=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${s}`))return;const n=document.createElement("link");if(n.rel=a?"stylesheet":A,a||(n.as="script",n.crossOrigin=""),n.href=o,document.head.appendChild(n),a)return new Promise((P,L)=>{n.addEventListener("load",P),n.addEventListener("error",()=>L(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>e())},I=()=>t(()=>import("./advanced-usage.en-US.fede6535.js"),["assets/advanced-usage.en-US.fede6535.js","assets/vue-libs.d5ee895a.js"]),R=()=>t(()=>import("./advanced-usage.zh-CN.1fd84260.js"),["assets/advanced-usage.zh-CN.1fd84260.js","assets/vue-libs.d5ee895a.js"]),C=()=>t(()=>import("./changelog.en-US.1815516d.js"),["assets/changelog.en-US.1815516d.js","assets/vue-libs.d5ee895a.js"]),V=()=>t(()=>import("./changelog.zh-CN.accd6e62.js"),["assets/changelog.zh-CN.accd6e62.js","assets/vue-libs.d5ee895a.js"]),O=()=>t(()=>import("./contribution.zh-CN.db323ffd.js"),["assets/contribution.zh-CN.db323ffd.js","assets/vue-libs.d5ee895a.js"]),g=()=>t(()=>import("./design.en-US.dca7e314.js"),["assets/design.en-US.dca7e314.js","assets/design.en-US.55e4382d.css","assets/vue-libs.d5ee895a.js"]),S=()=>t(()=>import("./design.zh-CN.d688eb4c.js"),["assets/design.zh-CN.d688eb4c.js","assets/design.zh-CN.55e4382d.css","assets/vue-libs.d5ee895a.js"]),U=()=>t(()=>import("./faq.zh-CN.0a2ccb4f.js"),["assets/faq.zh-CN.0a2ccb4f.js","assets/vue-libs.d5ee895a.js"]),f=()=>t(()=>import("./home.en-US.8c6783a1.js"),["assets/home.en-US.8c6783a1.js","assets/vue-libs.d5ee895a.js"]),N=()=>t(()=>import("./home.zh-CN.7b4521a9.js"),["assets/home.zh-CN.7b4521a9.js","assets/vue-libs.d5ee895a.js"]),z=()=>t(()=>import("./migrate-from-v2.zh-CN.5cf84e54.js"),["assets/migrate-from-v2.zh-CN.5cf84e54.js","assets/vue-libs.d5ee895a.js"]),y=()=>t(()=>import("./migrate-from-v3.zh-CN.697f5605.js"),["assets/migrate-from-v3.zh-CN.697f5605.js","assets/vue-libs.d5ee895a.js"]),b=()=>t(()=>import("./quickstart.en-US.b2de3f8a.js"),["assets/quickstart.en-US.b2de3f8a.js","assets/vue-libs.d5ee895a.js"]),w=()=>t(()=>import("./quickstart.zh-CN.23ab9d68.js"),["assets/quickstart.zh-CN.23ab9d68.js","assets/vue-libs.d5ee895a.js"]),k=()=>t(()=>import("./style-guide.zh-CN.e8cafba6.js"),["assets/style-guide.zh-CN.e8cafba6.js","assets/vue-libs.d5ee895a.js"]),B=()=>t(()=>import("./use-click-away.en-US.6d09d3fc.js"),["assets/use-click-away.en-US.6d09d3fc.js","assets/vue-libs.d5ee895a.js"]),x=()=>t(()=>import("./use-click-away.zh-CN.66d13790.js"),["assets/use-click-away.zh-CN.66d13790.js","assets/vue-libs.d5ee895a.js"]),M=()=>t(()=>import("./use-count-down.en-US.9434b7a9.js"),["assets/use-count-down.en-US.9434b7a9.js","assets/vue-libs.d5ee895a.js"]),F=()=>t(()=>import("./use-count-down.zh-CN.1f68abcb.js"),["assets/use-count-down.zh-CN.1f68abcb.js","assets/vue-libs.d5ee895a.js"]),q=()=>t(()=>import("./use-custom-field-value.en-US.d2e7e283.js"),["assets/use-custom-field-value.en-US.d2e7e283.js","assets/vue-libs.d5ee895a.js"]),G=()=>t(()=>import("./use-custom-field-value.zh-CN.4b396411.js"),["assets/use-custom-field-value.zh-CN.4b396411.js","assets/vue-libs.d5ee895a.js"]),j=()=>t(()=>import("./use-event-listener.en-US.df36a0da.js"),["assets/use-event-listener.en-US.df36a0da.js","assets/vue-libs.d5ee895a.js"]),W=()=>t(()=>import("./use-event-listener.zh-CN.88bce8cd.js"),["assets/use-event-listener.zh-CN.88bce8cd.js","assets/vue-libs.d5ee895a.js"]),$=()=>t(()=>import("./use-page-visibility.en-US.ab84da5c.js"),["assets/use-page-visibility.en-US.ab84da5c.js","assets/vue-libs.d5ee895a.js"]),H=()=>t(()=>import("./use-page-visibility.zh-CN.31789be2.js"),["assets/use-page-visibility.zh-CN.31789be2.js","assets/vue-libs.d5ee895a.js"]),K=()=>t(()=>import("./use-rect.en-US.2e43b291.js"),["assets/use-rect.en-US.2e43b291.js","assets/vue-libs.d5ee895a.js"]),Z=()=>t(()=>import("./use-rect.zh-CN.e0329e6e.js"),["assets/use-rect.zh-CN.e0329e6e.js","assets/vue-libs.d5ee895a.js"]),Q=()=>t(()=>import("./use-relation.en-US.f9e20975.js"),["assets/use-relation.en-US.f9e20975.js","assets/vue-libs.d5ee895a.js"]),Y=()=>t(()=>import("./use-relation.zh-CN.93989997.js"),["assets/use-relation.zh-CN.93989997.js","assets/vue-libs.d5ee895a.js"]),J=()=>t(()=>import("./use-scroll-parent.en-US.d364f866.js"),["assets/use-scroll-parent.en-US.d364f866.js","assets/vue-libs.d5ee895a.js"]),X=()=>t(()=>import("./use-scroll-parent.zh-CN.b0c603d2.js"),["assets/use-scroll-parent.zh-CN.b0c603d2.js","assets/vue-libs.d5ee895a.js"]),tt=()=>t(()=>import("./use-toggle.en-US.b5375bed.js"),["assets/use-toggle.en-US.b5375bed.js","assets/vue-libs.d5ee895a.js"]),et=()=>t(()=>import("./use-toggle.zh-CN.aee87c35.js"),["assets/use-toggle.zh-CN.aee87c35.js","assets/vue-libs.d5ee895a.js"]),_t=()=>t(()=>import("./use-window-size.en-US.0491104e.js"),["assets/use-window-size.en-US.0491104e.js","assets/vue-libs.d5ee895a.js"]),ot=()=>t(()=>import("./use-window-size.zh-CN.498a99ec.js"),["assets/use-window-size.zh-CN.498a99ec.js","assets/vue-libs.d5ee895a.js"]),it=()=>t(()=>import("./vant-use-intro.en-US.e2d324c6.js"),["assets/vant-use-intro.en-US.e2d324c6.js","assets/vue-libs.d5ee895a.js"]),rt=()=>t(()=>import("./vant-use-intro.zh-CN.fb5fd346.js"),["assets/vant-use-intro.zh-CN.fb5fd346.js","assets/vue-libs.d5ee895a.js"]),at=()=>t(()=>import("./README.zh-CN.c6478e98.js"),["assets/README.zh-CN.c6478e98.js","assets/vue-libs.d5ee895a.js"]),nt=()=>t(()=>import("./README.zh-CN.53ed7e37.js"),["assets/README.zh-CN.53ed7e37.js","assets/vue-libs.d5ee895a.js"]),st=()=>t(()=>import("./README.zh-CN.0e4b62dc.js"),["assets/README.zh-CN.0e4b62dc.js","assets/vue-libs.d5ee895a.js"]),pt=()=>t(()=>import("./README.zh-CN.f84483db.js"),["assets/README.zh-CN.f84483db.js","assets/vue-libs.d5ee895a.js"]),lt=()=>t(()=>import("./README.zh-CN.f079867c.js"),["assets/README.zh-CN.f079867c.js","assets/vue-libs.d5ee895a.js"]),ct=()=>t(()=>import("./README.zh-CN.68b8223c.js"),["assets/README.zh-CN.68b8223c.js","assets/vue-libs.d5ee895a.js"]),dt=()=>t(()=>import("./README.zh-CN.53903e07.js"),["assets/README.zh-CN.53903e07.js","assets/vue-libs.d5ee895a.js"]),ut=()=>t(()=>import("./README.zh-CN.5e0c50af.js"),["assets/README.zh-CN.5e0c50af.js","assets/vue-libs.d5ee895a.js"]),ht=()=>t(()=>import("./README.zh-CN.92dd5702.js"),["assets/README.zh-CN.92dd5702.js","assets/vue-libs.d5ee895a.js"]),Et=()=>t(()=>import("./README.zh-CN.c926a1bc.js"),["assets/README.zh-CN.c926a1bc.js","assets/vue-libs.d5ee895a.js"]),mt=()=>t(()=>import("./README.zh-CN.66565471.js"),["assets/README.zh-CN.66565471.js","assets/vue-libs.d5ee895a.js"]),vt=()=>t(()=>import("./README.zh-CN.5170db37.js"),["assets/README.zh-CN.5170db37.js","assets/vue-libs.d5ee895a.js"]),Pt=()=>t(()=>import("./README.zh-CN.e04c6f32.js"),["assets/README.zh-CN.e04c6f32.js","assets/vue-libs.d5ee895a.js"]),Lt=()=>t(()=>import("./README.zh-CN.6c0b5d4d.js"),["assets/README.zh-CN.6c0b5d4d.js","assets/vue-libs.d5ee895a.js"]),Tt=()=>t(()=>import("./README.zh-CN.51c1d6b8.js"),["assets/README.zh-CN.51c1d6b8.js","assets/vue-libs.d5ee895a.js"]),At=()=>t(()=>import("./README.zh-CN.a8c09146.js"),["assets/README.zh-CN.a8c09146.js","assets/vue-libs.d5ee895a.js"]),Dt=()=>t(()=>import("./README.zh-CN.d8e9a338.js"),["assets/README.zh-CN.d8e9a338.js","assets/vue-libs.d5ee895a.js"]),It=()=>t(()=>import("./README.zh-CN.0a406ee0.js"),["assets/README.zh-CN.0a406ee0.js","assets/vue-libs.d5ee895a.js"]),Rt=()=>t(()=>import("./README.zh-CN.0a3c636b.js"),["assets/README.zh-CN.0a3c636b.js","assets/vue-libs.d5ee895a.js"]),Ct=()=>t(()=>import("./README.zh-CN.a98d330b.js"),["assets/README.zh-CN.a98d330b.js","assets/vue-libs.d5ee895a.js"]),Vt=()=>t(()=>import("./README.zh-CN.82a20ae2.js"),["assets/README.zh-CN.82a20ae2.js","assets/vue-libs.d5ee895a.js"]),Ot=()=>t(()=>import("./README.zh-CN.426f86aa.js"),["assets/README.zh-CN.426f86aa.js","assets/vue-libs.d5ee895a.js"]),gt=()=>t(()=>import("./README.zh-CN.b5e73344.js"),["assets/README.zh-CN.b5e73344.js","assets/vue-libs.d5ee895a.js"]),St=()=>t(()=>import("./README.zh-CN.301e38e9.js"),["assets/README.zh-CN.301e38e9.js","assets/vue-libs.d5ee895a.js"]),Ut=()=>t(()=>import("./README.zh-CN.b0bef145.js"),["assets/README.zh-CN.b0bef145.js","assets/vue-libs.d5ee895a.js"]),ft=()=>t(()=>import("./README.zh-CN.b3ee8967.js"),["assets/README.zh-CN.b3ee8967.js","assets/vue-libs.d5ee895a.js"]),Nt=()=>t(()=>import("./README.zh-CN.ef02deb0.js"),["assets/README.zh-CN.ef02deb0.js","assets/vue-libs.d5ee895a.js"]),zt=()=>t(()=>import("./README.zh-CN.7c24c663.js"),["assets/README.zh-CN.7c24c663.js","assets/vue-libs.d5ee895a.js"]),yt=()=>t(()=>import("./README.zh-CN.dc5dcb4b.js"),["assets/README.zh-CN.dc5dcb4b.js","assets/vue-libs.d5ee895a.js"]),bt=()=>t(()=>import("./README.zh-CN.9d0fc9b6.js"),["assets/README.zh-CN.9d0fc9b6.js","assets/vue-libs.d5ee895a.js"]),wt=()=>t(()=>import("./README.zh-CN.07b33a9b.js"),["assets/README.zh-CN.07b33a9b.js","assets/vue-libs.d5ee895a.js"]),kt=()=>t(()=>import("./README.zh-CN.1f6bb61e.js"),["assets/README.zh-CN.1f6bb61e.js","assets/vue-libs.d5ee895a.js"]),Bt=()=>t(()=>import("./README.zh-CN.6f6a4015.js"),["assets/README.zh-CN.6f6a4015.js","assets/vue-libs.d5ee895a.js"]),xt=()=>t(()=>import("./README.zh-CN.e472812e.js"),["assets/README.zh-CN.e472812e.js","assets/vue-libs.d5ee895a.js"]),Mt=()=>t(()=>import("./README.zh-CN.b988a211.js"),["assets/README.zh-CN.b988a211.js","assets/vue-libs.d5ee895a.js"]),Ft=()=>t(()=>import("./README.zh-CN.702f7d7b.js"),["assets/README.zh-CN.702f7d7b.js","assets/vue-libs.d5ee895a.js"]),qt=()=>t(()=>import("./README.zh-CN.9e6b3d2a.js"),["assets/README.zh-CN.9e6b3d2a.js","assets/vue-libs.d5ee895a.js"]),Gt=()=>t(()=>import("./README.zh-CN.9df746d9.js"),["assets/README.zh-CN.9df746d9.js","assets/vue-libs.d5ee895a.js"]),jt=()=>t(()=>import("./README.zh-CN.bfaa9449.js"),["assets/README.zh-CN.bfaa9449.js","assets/vue-libs.d5ee895a.js"]),Wt=()=>t(()=>import("./README.zh-CN.dae8a2a6.js"),["assets/README.zh-CN.dae8a2a6.js","assets/vue-libs.d5ee895a.js"]),$t=()=>t(()=>import("./README.zh-CN.ea93bab7.js"),["assets/README.zh-CN.ea93bab7.js","assets/vue-libs.d5ee895a.js"]),Ht=()=>t(()=>import("./README.zh-CN.ca9230f6.js"),["assets/README.zh-CN.ca9230f6.js","assets/vue-libs.d5ee895a.js"]),Kt=()=>t(()=>import("./README.zh-CN.2c66ca80.js"),["assets/README.zh-CN.2c66ca80.js","assets/vue-libs.d5ee895a.js"]),Zt=()=>t(()=>import("./README.zh-CN.896ed807.js"),["assets/README.zh-CN.896ed807.js","assets/vue-libs.d5ee895a.js"]),Qt=()=>t(()=>import("./README.zh-CN.ab010afc.js"),["assets/README.zh-CN.ab010afc.js","assets/vue-libs.d5ee895a.js"]),Yt=()=>t(()=>import("./README.zh-CN.be18d6dd.js"),["assets/README.zh-CN.be18d6dd.js","assets/vue-libs.d5ee895a.js"]),Jt=()=>t(()=>import("./README.zh-CN.2e85732c.js"),["assets/README.zh-CN.2e85732c.js","assets/vue-libs.d5ee895a.js"]),Xt=()=>t(()=>import("./README.zh-CN.e8df9a23.js"),["assets/README.zh-CN.e8df9a23.js","assets/vue-libs.d5ee895a.js"]),te=()=>t(()=>import("./README.zh-CN.1af4759c.js"),["assets/README.zh-CN.1af4759c.js","assets/vue-libs.d5ee895a.js"]),ee=()=>t(()=>import("./README.zh-CN.a5e4fc1b.js"),["assets/README.zh-CN.a5e4fc1b.js","assets/vue-libs.d5ee895a.js"]),_e=()=>t(()=>import("./README.zh-CN.5094952c.js"),["assets/README.zh-CN.5094952c.js","assets/vue-libs.d5ee895a.js"]),oe=()=>t(()=>import("./README.zh-CN.c78acc77.js"),["assets/README.zh-CN.c78acc77.js","assets/vue-libs.d5ee895a.js"]),ie=()=>t(()=>import("./README.zh-CN.41474348.js"),["assets/README.zh-CN.41474348.js","assets/vue-libs.d5ee895a.js"]),re=()=>t(()=>import("./README.zh-CN.02bf5e6c.js"),["assets/README.zh-CN.02bf5e6c.js","assets/vue-libs.d5ee895a.js"]),ae=()=>t(()=>import("./README.zh-CN.fd5a03b8.js"),["assets/README.zh-CN.fd5a03b8.js","assets/vue-libs.d5ee895a.js"]),ne=()=>t(()=>import("./README.zh-CN.469fd42e.js"),["assets/README.zh-CN.469fd42e.js","assets/vue-libs.d5ee895a.js"]),se=()=>t(()=>import("./README.zh-CN.76999ef0.js"),["assets/README.zh-CN.76999ef0.js","assets/vue-libs.d5ee895a.js"]),pe=()=>t(()=>import("./README.zh-CN.5349c6e0.js"),["assets/README.zh-CN.5349c6e0.js","assets/vue-libs.d5ee895a.js"]),le=()=>t(()=>import("./README.zh-CN.34c7469b.js"),["assets/README.zh-CN.34c7469b.js","assets/vue-libs.d5ee895a.js"]),ce=()=>t(()=>import("./README.zh-CN.4bee6857.js"),["assets/README.zh-CN.4bee6857.js","assets/vue-libs.d5ee895a.js"]),de=()=>t(()=>import("./README.zh-CN.4f5565e8.js"),["assets/README.zh-CN.4f5565e8.js","assets/vue-libs.d5ee895a.js"]),ue=()=>t(()=>import("./README.zh-CN.af3fb16a.js"),["assets/README.zh-CN.af3fb16a.js","assets/vue-libs.d5ee895a.js"]),he=()=>t(()=>import("./README.zh-CN.b73ba061.js"),["assets/README.zh-CN.b73ba061.js","assets/vue-libs.d5ee895a.js"]),Ee=()=>t(()=>import("./README.zh-CN.206cd8cf.js"),["assets/README.zh-CN.206cd8cf.js","assets/vue-libs.d5ee895a.js"]),me=()=>t(()=>import("./README.zh-CN.33813a82.js"),["assets/README.zh-CN.33813a82.js","assets/vue-libs.d5ee895a.js"]),ve=()=>t(()=>import("./README.zh-CN.84481881.js"),["assets/README.zh-CN.84481881.js","assets/vue-libs.d5ee895a.js"]),Pe=()=>t(()=>import("./README.zh-CN.f720bc56.js"),["assets/README.zh-CN.f720bc56.js","assets/vue-libs.d5ee895a.js"]),Le=()=>t(()=>import("./README.zh-CN.094a389c.js"),["assets/README.zh-CN.094a389c.js","assets/vue-libs.d5ee895a.js"]),Te=()=>t(()=>import("./README.zh-CN.bafe133a.js"),["assets/README.zh-CN.bafe133a.js","assets/vue-libs.d5ee895a.js"]),Ae=()=>t(()=>import("./README.zh-CN.0c19261a.js"),["assets/README.zh-CN.0c19261a.js","assets/vue-libs.d5ee895a.js"]),De=()=>t(()=>import("./README.zh-CN.55cf6bf7.js"),["assets/README.zh-CN.55cf6bf7.js","assets/vue-libs.d5ee895a.js"]),Ie=()=>t(()=>import("./README.zh-CN.bdea2be4.js"),["assets/README.zh-CN.bdea2be4.js","assets/vue-libs.d5ee895a.js"]),Re=()=>t(()=>import("./README.zh-CN.41120780.js"),["assets/README.zh-CN.41120780.js","assets/vue-libs.d5ee895a.js"]),Ce=()=>t(()=>import("./README.zh-CN.1e778956.js"),["assets/README.zh-CN.1e778956.js","assets/vue-libs.d5ee895a.js"]),Ve=()=>t(()=>import("./README.e1a0b797.js"),["assets/README.e1a0b797.js","assets/vue-libs.d5ee895a.js"]),Oe=()=>t(()=>import("./README.2d360990.js"),["assets/README.2d360990.js","assets/vue-libs.d5ee895a.js"]),ge=()=>t(()=>import("./README.2791aaac.js"),["assets/README.2791aaac.js","assets/vue-libs.d5ee895a.js"]),Se=()=>t(()=>import("./README.72acbf93.js"),["assets/README.72acbf93.js","assets/vue-libs.d5ee895a.js"]),Ue=()=>t(()=>import("./README.0f309b59.js"),["assets/README.0f309b59.js","assets/vue-libs.d5ee895a.js"]),fe=()=>t(()=>import("./README.8524ee70.js"),["assets/README.8524ee70.js","assets/vue-libs.d5ee895a.js"]),Ne=()=>t(()=>import("./README.2a127415.js"),["assets/README.2a127415.js","assets/vue-libs.d5ee895a.js"]),ze=()=>t(()=>import("./README.a02f9275.js"),["assets/README.a02f9275.js","assets/vue-libs.d5ee895a.js"]),ye=()=>t(()=>import("./README.f41affb2.js"),["assets/README.f41affb2.js","assets/vue-libs.d5ee895a.js"]),be=()=>t(()=>import("./README.68a7816c.js"),["assets/README.68a7816c.js","assets/vue-libs.d5ee895a.js"]),we=()=>t(()=>import("./README.d0509288.js"),["assets/README.d0509288.js","assets/vue-libs.d5ee895a.js"]),ke=()=>t(()=>import("./README.a1fb9aff.js"),["assets/README.a1fb9aff.js","assets/vue-libs.d5ee895a.js"]),Be=()=>t(()=>import("./README.c417fbdc.js"),["assets/README.c417fbdc.js","assets/vue-libs.d5ee895a.js"]),xe=()=>t(()=>import("./README.562b8e56.js"),["assets/README.562b8e56.js","assets/vue-libs.d5ee895a.js"]),Me=()=>t(()=>import("./README.ead0d650.js"),["assets/README.ead0d650.js","assets/vue-libs.d5ee895a.js"]),Fe=()=>t(()=>import("./README.ac0087c1.js"),["assets/README.ac0087c1.js","assets/vue-libs.d5ee895a.js"]),qe=()=>t(()=>import("./README.f41a8e60.js"),["assets/README.f41a8e60.js","assets/vue-libs.d5ee895a.js"]),Ge=()=>t(()=>import("./README.54b25d21.js"),["assets/README.54b25d21.js","assets/vue-libs.d5ee895a.js"]),je=()=>t(()=>import("./README.c4ea2628.js"),["assets/README.c4ea2628.js","assets/vue-libs.d5ee895a.js"]),We=()=>t(()=>import("./README.c2c4af2f.js"),["assets/README.c2c4af2f.js","assets/vue-libs.d5ee895a.js"]),$e=()=>t(()=>import("./README.0d00b283.js"),["assets/README.0d00b283.js","assets/vue-libs.d5ee895a.js"]),He=()=>t(()=>import("./README.99ac53f1.js"),["assets/README.99ac53f1.js","assets/vue-libs.d5ee895a.js"]),Ke=()=>t(()=>import("./README.ceaa5425.js"),["assets/README.ceaa5425.js","assets/vue-libs.d5ee895a.js"]),Ze=()=>t(()=>import("./README.7aa5699f.js"),["assets/README.7aa5699f.js","assets/vue-libs.d5ee895a.js"]),Qe=()=>t(()=>import("./README.ac1413ea.js"),["assets/README.ac1413ea.js","assets/vue-libs.d5ee895a.js"]),Ye=()=>t(()=>import("./README.a6b35fce.js"),["assets/README.a6b35fce.js","assets/vue-libs.d5ee895a.js"]),Je=()=>t(()=>import("./README.eb898816.js"),["assets/README.eb898816.js","assets/vue-libs.d5ee895a.js"]),Xe=()=>t(()=>import("./README.682b512c.js"),["assets/README.682b512c.js","assets/vue-libs.d5ee895a.js"]),t_=()=>t(()=>import("./README.d67ab806.js"),["assets/README.d67ab806.js","assets/vue-libs.d5ee895a.js"]),e_=()=>t(()=>import("./README.eb98eb2c.js"),["assets/README.eb98eb2c.js","assets/vue-libs.d5ee895a.js"]),__=()=>t(()=>import("./README.35c03423.js"),["assets/README.35c03423.js","assets/vue-libs.d5ee895a.js"]),o_=()=>t(()=>import("./README.ba2af44c.js"),["assets/README.ba2af44c.js","assets/vue-libs.d5ee895a.js"]),i_=()=>t(()=>import("./README.b0865afa.js"),["assets/README.b0865afa.js","assets/vue-libs.d5ee895a.js"]),r_=()=>t(()=>import("./README.bef529a6.js"),["assets/README.bef529a6.js","assets/vue-libs.d5ee895a.js"]),a_=()=>t(()=>import("./README.2b4d63d7.js"),["assets/README.2b4d63d7.js","assets/vue-libs.d5ee895a.js"]),n_=()=>t(()=>import("./README.f58a4019.js"),["assets/README.f58a4019.js","assets/vue-libs.d5ee895a.js"]),s_=()=>t(()=>import("./README.ad377c16.js"),["assets/README.ad377c16.js","assets/vue-libs.d5ee895a.js"]),p_=()=>t(()=>import("./README.e8ea4a62.js"),["assets/README.e8ea4a62.js","assets/vue-libs.d5ee895a.js"]),l_=()=>t(()=>import("./README.62ae307f.js"),["assets/README.62ae307f.js","assets/vue-libs.d5ee895a.js"]),c_=()=>t(()=>import("./README.da1133f6.js"),["assets/README.da1133f6.js","assets/vue-libs.d5ee895a.js"]),d_=()=>t(()=>import("./README.dca20250.js"),["assets/README.dca20250.js","assets/vue-libs.d5ee895a.js"]),u_=()=>t(()=>import("./README.6a4003a7.js"),["assets/README.6a4003a7.js","assets/vue-libs.d5ee895a.js"]),h_=()=>t(()=>import("./README.3f1310b9.js"),["assets/README.3f1310b9.js","assets/vue-libs.d5ee895a.js"]),E_=()=>t(()=>import("./README.4acb2504.js"),["assets/README.4acb2504.js","assets/vue-libs.d5ee895a.js"]),m_=()=>t(()=>import("./README.48c91284.js"),["assets/README.48c91284.js","assets/vue-libs.d5ee895a.js"]),v_=()=>t(()=>import("./README.e8d7e0de.js"),["assets/README.e8d7e0de.js","assets/vue-libs.d5ee895a.js"]),P_=()=>t(()=>import("./README.b5859652.js"),["assets/README.b5859652.js","assets/vue-libs.d5ee895a.js"]),L_=()=>t(()=>import("./README.b37c3602.js"),["assets/README.b37c3602.js","assets/vue-libs.d5ee895a.js"]),T_=()=>t(()=>import("./README.2e01ff01.js"),["assets/README.2e01ff01.js","assets/vue-libs.d5ee895a.js"]),A_=()=>t(()=>import("./README.90952c78.js"),["assets/README.90952c78.js","assets/vue-libs.d5ee895a.js"]),D_=()=>t(()=>import("./README.695447d3.js"),["assets/README.695447d3.js","assets/vue-libs.d5ee895a.js"]),I_=()=>t(()=>import("./README.8b15edae.js"),["assets/README.8b15edae.js","assets/vue-libs.d5ee895a.js"]),R_=()=>t(()=>import("./README.2927b97e.js"),["assets/README.2927b97e.js","assets/vue-libs.d5ee895a.js"]),C_=()=>t(()=>import("./README.9843c464.js"),["assets/README.9843c464.js","assets/vue-libs.d5ee895a.js"]),V_=()=>t(()=>import("./README.e365410f.js"),["assets/README.e365410f.js","assets/vue-libs.d5ee895a.js"]),O_=()=>t(()=>import("./README.8284627c.js"),["assets/README.8284627c.js","assets/vue-libs.d5ee895a.js"]),g_=()=>t(()=>import("./README.78b78555.js"),["assets/README.78b78555.js","assets/vue-libs.d5ee895a.js"]),S_=()=>t(()=>import("./README.379c06e9.js"),["assets/README.379c06e9.js","assets/vue-libs.d5ee895a.js"]),U_=()=>t(()=>import("./README.7c5659bc.js"),["assets/README.7c5659bc.js","assets/vue-libs.d5ee895a.js"]),f_=()=>t(()=>import("./README.be606e97.js"),["assets/README.be606e97.js","assets/vue-libs.d5ee895a.js"]),N_=()=>t(()=>import("./README.69039d58.js"),["assets/README.69039d58.js","assets/vue-libs.d5ee895a.js"]),z_=()=>t(()=>import("./README.5ad67dfd.js"),["assets/README.5ad67dfd.js","assets/vue-libs.d5ee895a.js"]),y_=()=>t(()=>import("./README.71c6fc6c.js"),["assets/README.71c6fc6c.js","assets/vue-libs.d5ee895a.js"]),b_=()=>t(()=>import("./README.412ae24c.js"),["assets/README.412ae24c.js","assets/vue-libs.d5ee895a.js"]),w_=()=>t(()=>import("./README.2c567f31.js"),["assets/README.2c567f31.js","assets/vue-libs.d5ee895a.js"]),k_=()=>t(()=>import("./README.869d593b.js"),["assets/README.869d593b.js","assets/vue-libs.d5ee895a.js"]),B_=()=>t(()=>import("./README.bb6024a0.js"),["assets/README.bb6024a0.js","assets/vue-libs.d5ee895a.js"]),x_=()=>t(()=>import("./README.81b4d3aa.js"),["assets/README.81b4d3aa.js","assets/vue-libs.d5ee895a.js"]),M_=()=>t(()=>import("./README.40efd0f7.js"),["assets/README.40efd0f7.js","assets/vue-libs.d5ee895a.js"]),F_=()=>t(()=>import("./README.06e824e7.js"),["assets/README.06e824e7.js","assets/vue-libs.d5ee895a.js"]),q_=()=>t(()=>import("./README.e12d7022.js"),["assets/README.e12d7022.js","assets/vue-libs.d5ee895a.js"]),G_=()=>t(()=>import("./README.486f4921.js"),["assets/README.486f4921.js","assets/vue-libs.d5ee895a.js"]),j_=()=>t(()=>import("./README.6442258b.js"),["assets/README.6442258b.js","assets/vue-libs.d5ee895a.js"]),W_=()=>t(()=>import("./README.a1457c47.js"),["assets/README.a1457c47.js","assets/vue-libs.d5ee895a.js"]),d={name:"vant",build:{srcDir:"src",tagPrefix:"van-",namedExport:!0,skipInstall:["lazyload"],packageManager:"pnpm",extensions:{esm:".mjs"},site:{publicPath:typeof window>"u"&&process.env.PUBLIC_PATH||"/vant/"},vetur:{tagPrefix:"van-"},css:{removeSourceFile:!0}},site:{defaultLang:"en-US",darkModeClass:"van-theme-dark",lightModeClass:"van-theme-light",versions:[{label:"v1",link:"/vant/v1/"},{label:"v2",link:"/vant/v2/"},{label:"v3",link:"/vant/v3/"}],baiduAnalytics:{seed:"af5d41bc4e446e76665dbe3ec18d55c3"},htmlMeta:{"docsearch:version":"v4"},headHtml:`<script>
if (location.host === 'youzan.github.io') {
location.href = location.href.replace('youzan.github.io', 'vant-ui.github.io');
}
<\/script>
`,locales:{"zh-CN":{title:"Vant 4",subtitle:"\uFF08\u9002\u7528\u4E8E Vue 3\uFF09",description:"\u8F7B\u91CF\u3001\u53EF\u9760\u7684\u79FB\u52A8\u7AEF\u7EC4\u4EF6\u5E93",logo:"https://fastly.jsdelivr.net/npm/@vant/assets/logo.png",langLabel:"\u4E2D",links:[{logo:"https://fastly.jsdelivr.net/npm/@vant/assets/weapp.svg",url:"https://vant-contrib.gitee.io/vant-weapp/"},{logo:"https://fastly.jsdelivr.net/npm/@vant/assets/github.svg",url:"https://github.com/vant-ui/vant"}],nav:[{title:"\u5F00\u53D1\u6307\u5357",items:[{path:"home",title:"\u4ECB\u7ECD"},{path:"quickstart",title:"\u5FEB\u901F\u4E0A\u624B"},{path:"advanced-usage",title:"\u8FDB\u9636\u7528\u6CD5"},{path:"faq",title:"\u5E38\u89C1\u95EE\u9898"},{path:"changelog",title:"\u66F4\u65B0\u65E5\u5FD7"},{path:"migrate-from-v2",title:"\u4ECE v2 \u5347\u7EA7\u5230 v3"},{path:"migrate-from-v3",title:"\u4ECE v3 \u5347\u7EA7\u5230 v4"},{path:"contribution",title:"\u8D21\u732E\u6307\u5357"},{path:"design",title:"\u8BBE\u8BA1\u8D44\u6E90"},{path:"style-guide",title:"\u98CE\u683C\u6307\u5357"},{path:"locale",title:"\u56FD\u9645\u5316"}]},{title:"\u57FA\u7840\u7EC4\u4EF6",items:[{path:"button",title:"Button \u6309\u94AE"},{path:"cell",title:"Cell \u5355\u5143\u683C"},{path:"config-provider",title:"ConfigProvider \u5168\u5C40\u914D\u7F6E"},{path:"icon",title:"Icon \u56FE\u6807"},{path:"image",title:"Image \u56FE\u7247"},{path:"col",title:"Layout \u5E03\u5C40"},{path:"popup",title:"Popup \u5F39\u51FA\u5C42"},{path:"space",title:"Space \u95F4\u8DDD"},{path:"style",title:"Style \u5185\u7F6E\u6837\u5F0F"},{path:"toast",title:"Toast \u8F7B\u63D0\u793A"}]},{title:"\u8868\u5355\u7EC4\u4EF6",items:[{path:"calendar",title:"Calendar \u65E5\u5386"},{path:"cascader",title:"Cascader \u7EA7\u8054\u9009\u62E9"},{path:"checkbox",title:"Checkbox \u590D\u9009\u6846"},{path:"date-picker",title:"DatePicker \u65E5\u671F\u9009\u62E9"},{path:"field",title:"Field \u8F93\u5165\u6846"},{path:"form",title:"Form \u8868\u5355"},{path:"number-keyboard",title:"NumberKeyboard \u6570\u5B57\u952E\u76D8"},{path:"password-input",title:"PasswordInput \u5BC6\u7801\u8F93\u5165\u6846"},{path:"picker",title:"Picker \u9009\u62E9\u5668"},{path:"picker-group",title:"PickerGroup \u9009\u62E9\u5668\u7EC4"},{path:"radio",title:"Radio \u5355\u9009\u6846"},{path:"rate",title:"Rate \u8BC4\u5206"},{path:"search",title:"Search \u641C\u7D22"},{path:"slider",title:"Slider \u6ED1\u5757"},{path:"stepper",title:"Stepper \u6B65\u8FDB\u5668"},{path:"switch",title:"Switch \u5F00\u5173"},{path:"time-picker",title:"TimePicker \u65F6\u95F4\u9009\u62E9"},{path:"uploader",title:"Uploader \u6587\u4EF6\u4E0A\u4F20"}]},{title:"\u53CD\u9988\u7EC4\u4EF6",items:[{path:"action-sheet",title:"ActionSheet \u52A8\u4F5C\u9762\u677F"},{path:"dialog",title:"Dialog \u5F39\u51FA\u6846"},{path:"dropdown-menu",title:"DropdownMenu \u4E0B\u62C9\u83DC\u5355"},{path:"loading",title:"Loading \u52A0\u8F7D"},{path:"notify",title:"Notify \u6D88\u606F\u901A\u77E5"},{path:"overlay",title:"Overlay \u906E\u7F69\u5C42"},{path:"pull-refresh",title:"PullRefresh \u4E0B\u62C9\u5237\u65B0"},{path:"share-sheet",title:"ShareSheet \u5206\u4EAB\u9762\u677F"},{path:"swipe-cell",title:"SwipeCell \u6ED1\u52A8\u5355\u5143\u683C"}]},{title:"\u5C55\u793A\u7EC4\u4EF6",items:[{path:"badge",title:"Badge \u5FBD\u6807"},{path:"circle",title:"Circle \u73AF\u5F62\u8FDB\u5EA6\u6761"},{path:"collapse",title:"Collapse \u6298\u53E0\u9762\u677F"},{path:"count-down",title:"CountDown \u5012\u8BA1\u65F6"},{path:"divider",title:"Divider \u5206\u5272\u7EBF"},{path:"empty",title:"Empty \u7A7A\u72B6\u6001"},{path:"image-preview",title:"ImagePreview \u56FE\u7247\u9884\u89C8"},{path:"lazyload",title:"Lazyload \u61D2\u52A0\u8F7D"},{path:"list",title:"List \u5217\u8868"},{path:"notice-bar",title:"NoticeBar \u901A\u77E5\u680F"},{path:"popover",title:"Popover \u6C14\u6CE1\u5F39\u51FA\u6846"},{path:"progress",title:"Progress \u8FDB\u5EA6\u6761"},{path:"skeleton",title:"Skeleton \u9AA8\u67B6\u5C4F"},{path:"steps",title:"Steps \u6B65\u9AA4\u6761"},{path:"sticky",title:"Sticky \u7C98\u6027\u5E03\u5C40"},{path:"swipe",title:"Swipe \u8F6E\u64AD"},{path:"tag",title:"Tag \u6807\u7B7E"}]},{title:"\u5BFC\u822A\u7EC4\u4EF6",items:[{path:"action-bar",title:"ActionBar \u52A8\u4F5C\u680F"},{path:"grid",title:"Grid \u5BAB\u683C"},{path:"index-bar",title:"IndexBar \u7D22\u5F15\u680F"},{path:"nav-bar",title:"NavBar \u5BFC\u822A\u680F"},{path:"pagination",title:"Pagination \u5206\u9875"},{path:"sidebar",title:"Sidebar \u4FA7\u8FB9\u5BFC\u822A"},{path:"tab",title:"Tab \u6807\u7B7E\u9875"},{path:"tabbar",title:"Tabbar \u6807\u7B7E\u680F"},{path:"tree-select",title:"TreeSelect \u5206\u7C7B\u9009\u62E9"},{path:"back-top",title:"BackTop \u56DE\u5230\u9876\u90E8"}]},{title:"\u4E1A\u52A1\u7EC4\u4EF6",items:[{path:"address-edit",title:"AddressEdit \u5730\u5740\u7F16\u8F91"},{path:"address-list",title:"AddressList \u5730\u5740\u5217\u8868"},{path:"area",title:"Area \u7701\u5E02\u533A\u9009\u62E9"},{path:"card",title:"Card \u5546\u54C1\u5361\u7247"},{path:"contact-card",title:"ContactCard \u8054\u7CFB\u4EBA\u5361\u7247"},{path:"contact-edit",title:"ContactEdit \u8054\u7CFB\u4EBA\u7F16\u8F91"},{path:"contact-list",title:"ContactList \u8054\u7CFB\u4EBA\u5217\u8868"},{path:"coupon-list",title:"Coupon \u4F18\u60E0\u5238"},{path:"submit-bar",title:"SubmitBar \u63D0\u4EA4\u8BA2\u5355\u680F"}]},{title:"\u7EC4\u5408\u5F0F API",items:[{path:"vant-use-intro",title:"\u4ECB\u7ECD"},{path:"use-click-away",title:"useClickAway"},{path:"use-count-down",title:"useCountDown"},{path:"use-custom-field-value",title:"useCustomFieldValue"},{path:"use-event-listener",title:"useEventListener"},{path:"use-page-visibility",title:"usePageVisibility"},{path:"use-rect",title:"useRect"},{path:"use-relation",title:"useRelation"},{path:"use-scroll-parent",title:"useScrollParent"},{path:"use-toggle",title:"useToggle"},{path:"use-window-size",title:"useWindowSize"}]}]},"en-US":{title:"Vant 4",subtitle:" (for Vue 3)",description:"Lightweight Mobile UI Components built on Vue",logo:"https://fastly.jsdelivr.net/npm/@vant/assets/logo.png",langLabel:"EN",links:[{logo:"https://fastly.jsdelivr.net/npm/@vant/assets/github.svg",url:"https://github.com/vant-ui/vant"}],nav:[{title:"Essentials",items:[{path:"home",title:"Introduction"},{path:"quickstart",title:"Quickstart"},{path:"advanced-usage",title:"Advanced Usage"},{path:"changelog",title:"Changelog"},{path:"design",title:"Design Resources"},{path:"locale",title:"Internationalization"}]},{title:"Basic Components",items:[{path:"button",title:"Button"},{path:"cell",title:"Cell"},{path:"config-provider",title:"ConfigProvider"},{path:"icon",title:"Icon"},{path:"image",title:"Image"},{path:"col",title:"Layout"},{path:"popup",title:"Popup"},{path:"space",title:"Space"},{path:"style",title:"Built-in style"},{path:"toast",title:"Toast"}]},{title:"Form Components",items:[{path:"calendar",title:"Calendar"},{path:"cascader",title:"Cascader"},{path:"checkbox",title:"Checkbox"},{path:"date-picker",title:"DatePicker"},{path:"field",title:"Field"},{path:"form",title:"Form"},{path:"number-keyboard",title:"NumberKeyboard"},{path:"password-input",title:"PasswordInput"},{path:"picker",title:"Picker"},{path:"picker-group",title:"PickerGroup"},{path:"radio",title:"Radio"},{path:"rate",title:"Rate"},{path:"search",title:"Search"},{path:"slider",title:"Slider"},{path:"stepper",title:"Stepper"},{path:"switch",title:"Switch"},{path:"time-picker",title:"TimePicker"},{path:"uploader",title:"Uploader"}]},{title:"Action Components",items:[{path:"action-sheet",title:"ActionSheet"},{path:"dialog",title:"Dialog"},{path:"dropdown-menu",title:"DropdownMenu"},{path:"loading",title:"Loading"},{path:"notify",title:"Notify"},{path:"overlay",title:"Overlay"},{path:"pull-refresh",title:"PullRefresh"},{path:"share-sheet",title:"ShareSheet"},{path:"swipe-cell",title:"SwipeCell"}]},{title:"Display Components",items:[{path:"badge",title:"Badge"},{path:"circle",title:"Circle"},{path:"collapse",title:"Collapse"},{path:"count-down",title:"CountDown"},{path:"divider",title:"Divider"},{path:"empty",title:"Empty"},{path:"image-preview",title:"ImagePreview"},{path:"lazyload",title:"Lazyload"},{path:"list",title:"List"},{path:"notice-bar",title:"NoticeBar"},{path:"popover",title:"Popover"},{path:"progress",title:"Progress"},{path:"skeleton",title:"Skeleton"},{path:"steps",title:"Steps"},{path:"sticky",title:"Sticky"},{path:"swipe",title:"Swipe"},{path:"tag",title:"Tag"}]},{title:"Navigation Components",items:[{path:"action-bar",title:"ActionBar"},{path:"grid",title:"Grid"},{path:"index-bar",title:"IndexBar"},{path:"nav-bar",title:"NavBar"},{path:"pagination",title:"Pagination"},{path:"sidebar",title:"Sidebar"},{path:"tab",title:"Tab"},{path:"tabbar",title:"Tabbar"},{path:"tree-select",title:"TreeSelect"},{path:"back-top",title:"BackTop"}]},{title:"Business Components",items:[{path:"address-edit",title:"AddressEdit"},{path:"address-list",title:"AddressList"},{path:"area",title:"Area"},{path:"card",title:"Card"},{path:"contact-card",title:"ContactCard"},{path:"contact-edit",title:"ContactEdit"},{path:"contact-list",title:"ContactList"},{path:"coupon-list",title:"Coupon"},{path:"submit-bar",title:"SubmitBar"}]},{title:"Composables",items:[{path:"vant-use-intro",title:"Intro"},{path:"use-click-away",title:"useClickAway"},{path:"use-count-down",title:"useCountDown"},{path:"use-custom-field-value",title:"useCustomFieldValue"},{path:"use-event-listener",title:"useEventListener"},{path:"use-page-visibility",title:"usePageVisibility"},{path:"use-rect",title:"useRect"},{path:"use-relation",title:"useRelation"},{path:"use-scroll-parent",title:"useScrollParent"},{path:"use-toggle",title:"useToggle"},{path:"use-window-size",title:"useWindowSize"}]}]}}}},Y_={AdvancedUsage_en_US:I,AdvancedUsage_zh_CN:R,Changelog_en_US:C,Changelog_zh_CN:V,Contribution_zh_CN:O,Design_en_US:g,Design_zh_CN:S,Faq_zh_CN:U,Home_en_US:f,Home_zh_CN:N,MigrateFromV2_zh_CN:z,MigrateFromV3_zh_CN:y,Quickstart_en_US:b,Quickstart_zh_CN:w,StyleGuide_zh_CN:k,UseClickAway_en_US:B,UseClickAway_zh_CN:x,UseCountDown_en_US:M,UseCountDown_zh_CN:F,UseCustomFieldValue_en_US:q,UseCustomFieldValue_zh_CN:G,UseEventListener_en_US:j,UseEventListener_zh_CN:W,UsePageVisibility_en_US:$,UsePageVisibility_zh_CN:H,UseRect_en_US:K,UseRect_zh_CN:Z,UseRelation_en_US:Q,UseRelation_zh_CN:Y,UseScrollParent_en_US:J,UseScrollParent_zh_CN:X,UseToggle_en_US:tt,UseToggle_zh_CN:et,UseWindowSize_en_US:_t,UseWindowSize_zh_CN:ot,VantUseIntro_en_US:it,VantUseIntro_zh_CN:rt,ActionBar_zh_CN:at,ActionSheet_zh_CN:nt,AddressEdit_zh_CN:st,AddressList_zh_CN:pt,Area_zh_CN:lt,BackTop_zh_CN:ct,Badge_zh_CN:dt,Button_zh_CN:ut,Calendar_zh_CN:ht,Card_zh_CN:Et,Cascader_zh_CN:mt,Cell_zh_CN:vt,Checkbox_zh_CN:Pt,Circle_zh_CN:Lt,Col_zh_CN:Tt,Collapse_zh_CN:At,ConfigProvider_zh_CN:Dt,ContactCard_zh_CN:It,ContactEdit_zh_CN:Rt,ContactList_zh_CN:Ct,CountDown_zh_CN:Vt,CouponList_zh_CN:Ot,DatePicker_zh_CN:gt,Dialog_zh_CN:St,Divider_zh_CN:Ut,DropdownMenu_zh_CN:ft,Empty_zh_CN:Nt,Field_zh_CN:zt,Form_zh_CN:yt,Grid_zh_CN:bt,Icon_zh_CN:wt,Image_zh_CN:kt,ImagePreview_zh_CN:Bt,IndexBar_zh_CN:xt,Lazyload_zh_CN:Mt,List_zh_CN:Ft,Loading_zh_CN:qt,Locale_zh_CN:Gt,NavBar_zh_CN:jt,NoticeBar_zh_CN:Wt,Notify_zh_CN:$t,NumberKeyboard_zh_CN:Ht,Overlay_zh_CN:Kt,Pagination_zh_CN:Zt,PasswordInput_zh_CN:Qt,Picker_zh_CN:Yt,PickerGroup_zh_CN:Jt,Popover_zh_CN:Xt,Popup_zh_CN:te,Progress_zh_CN:ee,PullRefresh_zh_CN:_e,Radio_zh_CN:oe,Rate_zh_CN:ie,Search_zh_CN:re,ShareSheet_zh_CN:ae,Sidebar_zh_CN:ne,Skeleton_zh_CN:se,Slider_zh_CN:pe,Space_zh_CN:le,Stepper_zh_CN:ce,Steps_zh_CN:de,Sticky_zh_CN:ue,Style_zh_CN:he,SubmitBar_zh_CN:Ee,Swipe_zh_CN:me,SwipeCell_zh_CN:ve,Switch_zh_CN:Pe,Tab_zh_CN:Le,Tabbar_zh_CN:Te,Tag_zh_CN:Ae,TimePicker_zh_CN:De,Toast_zh_CN:Ie,TreeSelect_zh_CN:Re,Uploader_zh_CN:Ce,ActionBar_en_US:Ve,ActionSheet_en_US:Oe,AddressEdit_en_US:ge,AddressList_en_US:Se,Area_en_US:Ue,BackTop_en_US:fe,Badge_en_US:Ne,Button_en_US:ze,Calendar_en_US:ye,Card_en_US:be,Cascader_en_US:we,Cell_en_US:ke,Checkbox_en_US:Be,Circle_en_US:xe,Col_en_US:Me,Collapse_en_US:Fe,ConfigProvider_en_US:qe,ContactCard_en_US:Ge,ContactEdit_en_US:je,ContactList_en_US:We,CountDown_en_US:$e,CouponList_en_US:He,DatePicker_en_US:Ke,Dialog_en_US:Ze,Divider_en_US:Qe,DropdownMenu_en_US:Ye,Empty_en_US:Je,Field_en_US:Xe,Form_en_US:t_,Grid_en_US:e_,Icon_en_US:__,Image_en_US:o_,ImagePreview_en_US:i_,IndexBar_en_US:r_,Lazyload_en_US:a_,List_en_US:n_,Loading_en_US:s_,Locale_en_US:p_,NavBar_en_US:l_,NoticeBar_en_US:c_,Notify_en_US:d_,NumberKeyboard_en_US:u_,Overlay_en_US:h_,Pagination_en_US:E_,PasswordInput_en_US:m_,Picker_en_US:v_,PickerGroup_en_US:P_,Popover_en_US:L_,Popup_en_US:T_,Progress_en_US:A_,PullRefresh_en_US:D_,Radio_en_US:I_,Rate_en_US:R_,Search_en_US:C_,ShareSheet_en_US:V_,Sidebar_en_US:O_,Skeleton_en_US:g_,Slider_en_US:S_,Space_en_US:U_,Stepper_en_US:f_,Steps_en_US:N_,Sticky_en_US:z_,Style_en_US:y_,SubmitBar_en_US:b_,Swipe_en_US:w_,SwipeCell_en_US:k_,Switch_en_US:B_,Tab_en_US:x_,Tabbar_en_US:M_,Tag_en_US:F_,TimePicker_en_US:q_,Toast_en_US:G_,TreeSelect_en_US:j_,Uploader_en_US:W_},J_="4.0.1";let l=[],u=!1;function h(_){u?_():l.push(_)}window.top===window?window.addEventListener("message",_=>{_.data.type==="iframeReady"&&(u=!0,l.forEach(e=>e()),l=[])}):window.top.postMessage({type:"iframeReady"},"*");function E(){var i,r;const _=window.vueRouter,{path:e}=_.currentRoute.value;return(i=d.site.simulator)!=null&&i.routeMapper?(r=d.site.simulator)==null?void 0:r.routeMapper(e):e}function X_(){window.top.postMessage({type:"replacePath",value:E()},"*")}function to(){const _=document.querySelector("iframe");_&&h(()=>{_.contentWindow.postMessage({type:"replacePath",value:E()},"*")})}function eo(_){const e=document.querySelector("iframe");e&&h(()=>{e.contentWindow.postMessage({type:"updateTheme",value:_},"*")})}function $_(){const _=window.localStorage.getItem("vantTheme");return _||(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")}function _o(){const _=T($_());return window.addEventListener("message",e=>{var r,o;if(((r=e.data)==null?void 0:r.type)!=="updateTheme")return;const i=((o=e.data)==null?void 0:o.value)||"";_.value=i}),_}function oo(_){window.addEventListener("message",e=>{var r,o;if(((r=e.data)==null?void 0:r.type)!=="replacePath")return;const i=((o=e.data)==null?void 0:o.value)||"";_.currentRoute.value.path!==i&&_.replace(i).catch(()=>{})})}const H_=navigator.userAgent.toLowerCase(),io=/ios|iphone|ipod|ipad|android/.test(H_);function ro(_,e="-"){return _.replace(/([a-z\d])([A-Z])/g,"$1"+e+"$2").replace(/([A-Z])([A-Z][a-z\d]+)/g,"$1"+e+"$2").toLowerCase()}function ao(_){const e=document.createElement("textarea");e.value=_,e.setAttribute("readonly",""),e.style.position="absolute",e.style.left="-9999px",document.body.appendChild(e);const i=document.getSelection();if(!i)return;const r=i.rangeCount>0?i.getRangeAt(0):!1;e.select(),document.execCommand("copy"),document.body.removeChild(e),r&&(i.removeAllRanges(),i.addRange(r))}const m="zh-CN",K_="en-US",v="vant-cli-lang";let p=m;function no(){return p}function so(_){p=_,localStorage.setItem(v,_)}function po(_){const e=localStorage.getItem(v);if(e){p=e;return}if(navigator.language&&navigator.language.indexOf("zh-")!==-1){p=m;return}p=_||K_}export{Q_ as _,t as a,d as b,ao as c,so as d,po as e,Y_ as f,$_ as g,to as h,io as i,ro as j,no as k,oo as l,X_ as m,J_ as p,eo as s,_o as u};
