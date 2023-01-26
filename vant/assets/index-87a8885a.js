import{V as r}from"./index-f153440d.js";import{V as k}from"./index-b2cbf02a.js";import{a as D}from"./use-translate-a757506f.js";import{r as C,o as x,c as T,w as p,e as n,C as o,A as R,H as w,a as S,F as $}from"./vue-libs-b2a2f6f9.js";import"./use-route-efd4b866.js";import"./index-bd55b31d.js";import"./index-8c81c046.js";import"./with-install-278c4a2b.js";import"./use-refs-06cfd58f.js";import"./use-expose-2590a160.js";import"./index-e81257b3.js";import"./use-touch-8f92051d.js";import"./use-lazy-render-927fe2b4.js";import"./on-popup-reopen-e5b691e6.js";import"./index-4a51f7e1.js";import"./interceptor-1ff3f352.js";import"./constant-a81ffd37.js";import"./index-018e8a5c.js";import"./index-61c1f2e0.js";import"./utils-704ef717.js";import"./Picker-03bafe0f.js";import"./index-67cc303b.js";import"./use-id-92cebd14.js";import"./index-c5678a17.js";import"./index-29c9c9f5.js";import"./use-height-c3c3350c.js";import"./function-call-761433ae.js";import"./mount-component-a5a888e3.js";const O={__name:"TiledDisplay",setup(v){const l=new Date(2012,0,10),e=new Date(2012,2,20),f=D({"zh-CN":{calendar:"日历",tiledDisplay:"平铺展示"},"en-US":{calendar:"Calendar",tiledDisplay:"Tiled display"}});return(g,a)=>{const c=C("demo-block");return x(),T(c,{card:"",title:o(f)("tiledDisplay")},{default:p(()=>[n(o(k),{title:o(f)("calendar"),poppable:!1,"show-confirm":!1,"min-date":o(l),"max-date":o(e),"default-date":o(l),style:{height:"500px"}},null,8,["title","min-date","max-date","default-date"])]),_:1},8,["title"])}}},q=O,le=R({__name:"index",setup(v){const l=D({"zh-CN":{in:"入店",out:"离店",today:"今天",laborDay:"劳动节",youthDay:"青年节",maxRange:"日期区间最大范围",selectCount:t=>`选择了 ${t} 个日期`,selectSingle:"选择单个日期",selectMultiple:"选择多个日期",selectRange:"选择日期区间",quickSelect:"快捷选择",confirmText:"完成",customColor:"自定义颜色",customRange:"自定义日期范围",customConfirm:"自定义按钮文字",customDayText:"自定义日期文案",customPosition:"自定义弹出位置",customCalendar:"自定义日历",confirmDisabledText:"请选择结束时间",firstDayOfWeek:"自定义周起始日"},"en-US":{in:"In",out:"Out",today:"Today",laborDay:"Labor day",youthDay:"Youth Day",maxRange:"Max Range",selectCount:t=>`${t} dates selected`,selectSingle:"Select Single Date",selectMultiple:"Select Multiple Date",selectRange:"Select Date Range",quickSelect:"Quick Select",confirmText:"OK",customColor:"Custom Color",customRange:"Custom Date Range",customConfirm:"Custom Confirm Text",customDayText:"Custom Day Text",customPosition:"Custom Position",customCalendar:"Custom Calendar",firstDayOfWeek:"Custom First Day Of Week",confirmDisabledText:"Select End Time"}}),e=w({date:{maxRange:[],selectSingle:null,selectRange:[],selectMultiple:[],quickSelect1:null,quickSelect2:[],customColor:[],customConfirm:[],customRange:null,customDayText:[],customPosition:null},type:"single",round:!0,color:void 0,minDate:void 0,maxDate:void 0,maxRange:void 0,position:void 0,formatter:void 0,showConfirm:!1,showCalendar:!1,confirmText:void 0,confirmDisabledText:void 0,firstDayOfWeek:0}),f=()=>{e.round=!0,e.color=void 0,e.minDate=void 0,e.maxDate=void 0,e.maxRange=void 0,e.position=void 0,e.formatter=void 0,e.showConfirm=!0,e.confirmText=void 0,e.confirmDisabledText=void 0,e.firstDayOfWeek=0},g=t=>{if(!t.date)return t;const i=t.date.getMonth()+1,m=t.date.getDate();return i===5&&(m===1?t.topInfo=l("laborDay"):m===4?t.topInfo=l("youthDay"):m===11&&(t.text=l("today"))),t.type==="start"?t.bottomInfo=l("in"):t.type==="end"&&(t.bottomInfo=l("out")),t},a=(t,i)=>{switch(f(),e.id=i,e.type=t,e.showCalendar=!0,i){case"quickSelect1":case"quickSelect2":e.showConfirm=!1;break;case"customColor":e.color="#ee0a24";break;case"customConfirm":e.confirmText=l("confirmText"),e.confirmDisabledText=l("confirmDisabledText");break;case"customRange":e.minDate=new Date(2010,0,1),e.maxDate=new Date(2010,0,31);break;case"customDayText":e.minDate=new Date(2010,4,1),e.maxDate=new Date(2010,4,31),e.formatter=g;break;case"customPosition":e.round=!1,e.position="right";break;case"maxRange":e.maxRange=3;break;case"firstDayOfWeek":e.firstDayOfWeek=1;break}},c=t=>{if(t)return`${t.getMonth()+1}/${t.getDate()}`},d=t=>{if(t)return`${t.getFullYear()}/${c(t)}`},y=t=>{if(t.length)return l("selectCount",t.length)},u=t=>{if(t.length){const[i,m]=t;return`${c(i)} - ${c(m)}`}},b=t=>{e.showCalendar=!1,e.date[e.id]=t};return(t,i)=>{const m=C("demo-block");return x(),S($,null,[n(m,{card:"",title:o(l)("basicUsage")},{default:p(()=>[n(o(r),{"is-link":"",title:o(l)("selectSingle"),value:d(e.date.selectSingle),onClick:i[0]||(i[0]=s=>a("single","selectSingle"))},null,8,["title","value"]),n(o(r),{"is-link":"",title:o(l)("selectMultiple"),value:y(e.date.selectMultiple),onClick:i[1]||(i[1]=s=>a("multiple","selectMultiple"))},null,8,["title","value"]),n(o(r),{"is-link":"",title:o(l)("selectRange"),value:u(e.date.selectRange),onClick:i[2]||(i[2]=s=>a("range","selectRange"))},null,8,["title","value"])]),_:1},8,["title"]),n(m,{card:"",title:o(l)("quickSelect")},{default:p(()=>[n(o(r),{"is-link":"",title:o(l)("selectSingle"),value:d(e.date.quickSelect1),onClick:i[3]||(i[3]=s=>a("single","quickSelect1"))},null,8,["title","value"]),n(o(r),{"is-link":"",title:o(l)("selectRange"),value:u(e.date.quickSelect2),onClick:i[4]||(i[4]=s=>a("range","quickSelect2"))},null,8,["title","value"])]),_:1},8,["title"]),n(m,{card:"",title:o(l)("customCalendar")},{default:p(()=>[n(o(r),{"is-link":"",title:o(l)("customColor"),value:u(e.date.customColor),onClick:i[5]||(i[5]=s=>a("range","customColor"))},null,8,["title","value"]),n(o(r),{"is-link":"",title:o(l)("customRange"),value:d(e.date.customRange),onClick:i[6]||(i[6]=s=>a("single","customRange"))},null,8,["title","value"]),n(o(r),{"is-link":"",title:o(l)("customConfirm"),value:u(e.date.customConfirm),onClick:i[7]||(i[7]=s=>a("range","customConfirm"))},null,8,["title","value"]),n(o(r),{"is-link":"",title:o(l)("customDayText"),value:u(e.date.customDayText),onClick:i[8]||(i[8]=s=>a("range","customDayText"))},null,8,["title","value"]),n(o(r),{"is-link":"",title:o(l)("customPosition"),value:d(e.date.customPosition),onClick:i[9]||(i[9]=s=>a("single","customPosition"))},null,8,["title","value"]),n(o(r),{"is-link":"",title:o(l)("maxRange"),value:u(e.date.maxRange),onClick:i[10]||(i[10]=s=>a("range","maxRange"))},null,8,["title","value"]),n(o(r),{"is-link":"",title:o(l)("firstDayOfWeek"),onClick:i[11]||(i[11]=s=>a("single","firstDayOfWeek"))},null,8,["title"])]),_:1},8,["title"]),n(q),n(o(k),{show:e.showCalendar,"onUpdate:show":i[12]||(i[12]=s=>e.showCalendar=s),type:e.type,color:e.color,round:e.round,position:e.position,"min-date":e.minDate,"max-date":e.maxDate,"max-range":e.maxRange,formatter:e.formatter,"show-confirm":e.showConfirm,"confirm-text":e.confirmText,"first-day-of-week":e.firstDayOfWeek,"confirm-disabled-text":e.confirmDisabledText,onConfirm:b},null,8,["show","type","color","round","position","min-date","max-date","max-range","formatter","show-confirm","confirm-text","first-day-of-week","confirm-disabled-text"])],64)}}});export{le as default};
