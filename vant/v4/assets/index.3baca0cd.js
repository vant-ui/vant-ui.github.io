import{C as s}from"./index.172b9149.js";import{C as D}from"./index.9aa5a8cc.js";import{a as g}from"./use-translate.94d81043.js";import{r as k,o as x,c as b,w as p,e as n,C as e,A as R,H as w,a as S,F as T}from"./vue-libs.84c45047.js";import"./with-install.dd5596ee.js";import"./use-route.7c55373a.js";import"./index.9326a531.js";import"./use-refs.e65104ff.js";import"./use-expose.771ababc.js";import"./index.cae7cbae.js";import"./constant.80c6de18.js";import"./interceptor.e76ee8d4.js";import"./use-touch.109c1035.js";import"./use-lazy-render.20e241a7.js";import"./on-popup-reopen.e7b96e14.js";import"./index.9c372815.js";import"./index.d0d913b5.js";import"./index.a750e74d.js";import"./function-call.c77f6bc2.js";import"./mount-component.725b707e.js";import"./utils.e639c14b.js";import"./Picker.a386e4b2.js";import"./use-height.f8b07716.js";const F={setup(v){const i=new Date(2012,0,10),t=new Date(2012,2,20),f=g({"zh-CN":{calendar:"\u65E5\u5386",tiledDisplay:"\u5E73\u94FA\u5C55\u793A"},"en-US":{calendar:"Calendar",tiledDisplay:"Tiled display"}});return(C,a)=>{const c=k("demo-block");return x(),b(c,{card:"",title:e(f)("tiledDisplay")},{default:p(()=>[n(e(D),{title:e(f)("calendar"),poppable:!1,"show-confirm":!1,"min-date":e(i),"max-date":e(t),"default-date":e(i),style:{height:"500px"}},null,8,["title","min-date","max-date","default-date"])]),_:1},8,["title"])}}},Z=R({setup(v){const i=g({"zh-CN":{in:"\u5165\u5E97",out:"\u79BB\u5E97",today:"\u4ECA\u5929",laborDay:"\u52B3\u52A8\u8282",youthDay:"\u9752\u5E74\u8282",maxRange:"\u65E5\u671F\u533A\u95F4\u6700\u5927\u8303\u56F4",selectCount:o=>`\u9009\u62E9\u4E86 ${o} \u4E2A\u65E5\u671F`,selectSingle:"\u9009\u62E9\u5355\u4E2A\u65E5\u671F",selectMultiple:"\u9009\u62E9\u591A\u4E2A\u65E5\u671F",selectRange:"\u9009\u62E9\u65E5\u671F\u533A\u95F4",quickSelect:"\u5FEB\u6377\u9009\u62E9",confirmText:"\u5B8C\u6210",customColor:"\u81EA\u5B9A\u4E49\u989C\u8272",customRange:"\u81EA\u5B9A\u4E49\u65E5\u671F\u8303\u56F4",customConfirm:"\u81EA\u5B9A\u4E49\u6309\u94AE\u6587\u5B57",customDayText:"\u81EA\u5B9A\u4E49\u65E5\u671F\u6587\u6848",customPosition:"\u81EA\u5B9A\u4E49\u5F39\u51FA\u4F4D\u7F6E",customCalendar:"\u81EA\u5B9A\u4E49\u65E5\u5386",confirmDisabledText:"\u8BF7\u9009\u62E9\u7ED3\u675F\u65F6\u95F4",firstDayOfWeek:"\u81EA\u5B9A\u4E49\u5468\u8D77\u59CB\u65E5"},"en-US":{in:"In",out:"Out",today:"Today",laborDay:"Labor day",youthDay:"Youth Day",maxRange:"Max Range",selectCount:o=>`${o} dates selected`,selectSingle:"Select Single Date",selectMultiple:"Select Multiple Date",selectRange:"Select Date Range",quickSelect:"Quick Select",confirmText:"OK",customColor:"Custom Color",customRange:"Custom Date Range",customConfirm:"Custom Confirm Text",customDayText:"Custom Day Text",customPosition:"Custom Position",customCalendar:"Custom Calendar",firstDayOfWeek:"Custom First Day Of Week",confirmDisabledText:"Select End Time"}}),t=w({date:{maxRange:[],selectSingle:null,selectRange:[],selectMultiple:[],quickSelect1:null,quickSelect2:[],customColor:[],customConfirm:[],customRange:null,customDayText:[],customPosition:null},type:"single",round:!0,color:void 0,minDate:void 0,maxDate:void 0,maxRange:void 0,position:void 0,formatter:void 0,showConfirm:!1,showCalendar:!1,confirmText:void 0,confirmDisabledText:void 0,firstDayOfWeek:0}),f=()=>{t.round=!0,t.color=void 0,t.minDate=void 0,t.maxDate=void 0,t.maxRange=void 0,t.position=void 0,t.formatter=void 0,t.showConfirm=!0,t.confirmText=void 0,t.confirmDisabledText=void 0,t.firstDayOfWeek=0},C=o=>{if(!o.date)return o;const l=o.date.getMonth()+1,r=o.date.getDate();return l===5&&(r===1?o.topInfo=i("laborDay"):r===4?o.topInfo=i("youthDay"):r===11&&(o.text=i("today"))),o.type==="start"?o.bottomInfo=i("in"):o.type==="end"&&(o.bottomInfo=i("out")),o},a=(o,l)=>{switch(f(),t.id=l,t.type=o,t.showCalendar=!0,l){case"quickSelect1":case"quickSelect2":t.showConfirm=!1;break;case"customColor":t.color="#ee0a24";break;case"customConfirm":t.confirmText=i("confirmText"),t.confirmDisabledText=i("confirmDisabledText");break;case"customRange":t.minDate=new Date(2010,0,1),t.maxDate=new Date(2010,0,31);break;case"customDayText":t.minDate=new Date(2010,4,1),t.maxDate=new Date(2010,4,31),t.formatter=C;break;case"customPosition":t.round=!1,t.position="right";break;case"maxRange":t.maxRange=3;break;case"firstDayOfWeek":t.firstDayOfWeek=1;break}},c=o=>{if(o)return`${o.getMonth()+1}/${o.getDate()}`},d=o=>{if(o)return`${o.getFullYear()}/${c(o)}`},E=o=>{if(o.length)return i("selectCount",o.length)},m=o=>{if(o.length){const[l,r]=o;return`${c(l)} - ${c(r)}`}},y=o=>{t.showCalendar=!1,t.date[t.id]=o};return(o,l)=>{const r=k("demo-block");return x(),S(T,null,[n(r,{card:"",title:e(i)("basicUsage")},{default:p(()=>[n(e(s),{"is-link":"",title:e(i)("selectSingle"),value:d(e(t).date.selectSingle),onClick:l[0]||(l[0]=u=>a("single","selectSingle"))},null,8,["title","value"]),n(e(s),{"is-link":"",title:e(i)("selectMultiple"),value:E(e(t).date.selectMultiple),onClick:l[1]||(l[1]=u=>a("multiple","selectMultiple"))},null,8,["title","value"]),n(e(s),{"is-link":"",title:e(i)("selectRange"),value:m(e(t).date.selectRange),onClick:l[2]||(l[2]=u=>a("range","selectRange"))},null,8,["title","value"])]),_:1},8,["title"]),n(r,{card:"",title:e(i)("quickSelect")},{default:p(()=>[n(e(s),{"is-link":"",title:e(i)("selectSingle"),value:d(e(t).date.quickSelect1),onClick:l[3]||(l[3]=u=>a("single","quickSelect1"))},null,8,["title","value"]),n(e(s),{"is-link":"",title:e(i)("selectRange"),value:m(e(t).date.quickSelect2),onClick:l[4]||(l[4]=u=>a("range","quickSelect2"))},null,8,["title","value"])]),_:1},8,["title"]),n(r,{card:"",title:e(i)("customCalendar")},{default:p(()=>[n(e(s),{"is-link":"",title:e(i)("customColor"),value:m(e(t).date.customColor),onClick:l[5]||(l[5]=u=>a("range","customColor"))},null,8,["title","value"]),n(e(s),{"is-link":"",title:e(i)("customRange"),value:d(e(t).date.customRange),onClick:l[6]||(l[6]=u=>a("single","customRange"))},null,8,["title","value"]),n(e(s),{"is-link":"",title:e(i)("customConfirm"),value:m(e(t).date.customConfirm),onClick:l[7]||(l[7]=u=>a("range","customConfirm"))},null,8,["title","value"]),n(e(s),{"is-link":"",title:e(i)("customDayText"),value:m(e(t).date.customDayText),onClick:l[8]||(l[8]=u=>a("range","customDayText"))},null,8,["title","value"]),n(e(s),{"is-link":"",title:e(i)("customPosition"),value:d(e(t).date.customPosition),onClick:l[9]||(l[9]=u=>a("single","customPosition"))},null,8,["title","value"]),n(e(s),{"is-link":"",title:e(i)("maxRange"),value:m(e(t).date.maxRange),onClick:l[10]||(l[10]=u=>a("range","maxRange"))},null,8,["title","value"]),n(e(s),{"is-link":"",title:e(i)("firstDayOfWeek"),onClick:l[11]||(l[11]=u=>a("single","firstDayOfWeek"))},null,8,["title"])]),_:1},8,["title"]),n(F),n(e(D),{show:e(t).showCalendar,"onUpdate:show":l[12]||(l[12]=u=>e(t).showCalendar=u),type:e(t).type,color:e(t).color,round:e(t).round,position:e(t).position,"min-date":e(t).minDate,"max-date":e(t).maxDate,"max-range":e(t).maxRange,formatter:e(t).formatter,"show-confirm":e(t).showConfirm,"confirm-text":e(t).confirmText,"first-day-of-week":e(t).firstDayOfWeek,"confirm-disabled-text":e(t).confirmDisabledText,onConfirm:y},null,8,["show","type","color","round","position","min-date","max-date","max-range","formatter","show-confirm","confirm-text","first-day-of-week","confirm-disabled-text"])],64)}}});export{Z as default};
