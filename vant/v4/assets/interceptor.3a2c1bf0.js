import{r as o,s as p}from"./use-translate.d5447508.js";function e(l,{args:r=[],done:i,canceled:s}){if(l){const f=l.apply(null,r);o(f)?f.then(t=>{t?i():s&&s()}).catch(p):f?i():s&&s()}else i()}export{e as c};
