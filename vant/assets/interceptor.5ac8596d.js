import{s as r,t as p}from"./use-translate.8ba7ae4e.js";function e(t,{args:l=[],done:i,canceled:s}){if(t){const f=t.apply(null,l);r(f)?f.then(o=>{o?i():s&&s()}).catch(p):f?i():s&&s()}else i()}export{e as c};
