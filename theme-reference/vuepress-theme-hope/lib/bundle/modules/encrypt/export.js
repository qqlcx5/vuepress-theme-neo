import{defineComponent as f,ref as d,computed as m,h as n,nextTick as S,onMounted as E}from"vue";import{RenderDefault as w}from"vuepress-shared/client";import{usePageFrontmatter as O,usePageData as _}from"vuepress/client";import{y as V,F as x}from"../../PageTitle-BEjf_poL.js";import{L as C}from"../../icons-BBxJRXot.js";import{u as D,c as G,d as H}from"../../PageInfo-B_AIc9gX.js";import{useStorage as b,useSessionStorage as g}from"@vueuse/core";import{compareSync as h}from"bcrypt-ts/browser";import{isPlainObject as K,keys as R,startsWith as j}from"@vuepress/helper/client";import"@vuepress/plugin-reading-time/client";import"@vuepress/helper/noopComponent";import"@vuepress/plugin-comment/pageview";import"@vuepress/plugin-theme-data/client";import"../../styles/variables.module.scss";import"balloon-css/balloon.css";var k=f({name:"PasswordModal",props:{hint:{type:String,default:""},full:Boolean,showTitle:Boolean},emits:["verify"],setup(t,{emit:a}){const c=O(),u=D(),r=d(""),s=d(!1),l=d(!1),e=m(()=>u.value.encryptLocales);let i=null;const p=()=>{i&&clearTimeout(i),s.value=!1,a("verify",r.value,l.value),S().then(()=>{s.value=!0,i=setTimeout(()=>{s.value=!1},1e3)})};return()=>n("div",{class:["vp-decrypt-layer",{expand:t.full||c.value.home}]},[t.showTitle?n(V):null,n("div",{class:"vp-decrypt-modal"},[n("div",{class:["vp-decrypt-hint",{tried:s.value}]},s.value?e.value.errorHint:n(C,{"aria-label":e.value.iconLabel})),t.hint?n("div",{class:"vp-decrypt-hint"},t.hint):null,n("div",{class:"vp-decrypt-input"},[n("input",{type:"password",value:r.value,placeholder:e.value.placeholder,onInput:({target:o})=>{r.value=o.value},onKeydown:({key:o})=>{o==="Enter"&&p()}})]),n("div",{class:"vp-remember-password"},[n("input",{id:"remember-password",type:"checkbox",value:l.value,onChange:()=>{l.value=!l.value}}),n("label",{for:"remember-password"},e.value.remember)]),n("button",{type:"button",class:"vp-decrypt-submit",onClick:()=>{p()}},"OK")])])}});const L=()=>{const t=G();return m(()=>t.value.encrypt)},T="VUEPRESS_HOPE_GLOBAL_TOKEN",B=()=>{const t=L(),a=b(T,""),c=g(T,"");return{status:m(()=>{const{global:u=!1,admin:r}=t.value,s=u&&!!r?.tokens.length,l=s?a.value?t.value.admin.tokens.some(e=>h(a.value,e)):t.value.admin.tokens.some(e=>h(c.value,e)):!1;return{isEncrypted:s,isLocked:l,hint:r?.hint??""}}),validate:(u,r=!1)=>{(r?a:c).value=u}}},y=(t="",a)=>!!t&&h(t,a),P="VUEPRESS_HOPE_PATH_TOKEN",F=()=>{const t=_(),a=L(),c=b(P,{}),u=g(P,{}),r=l=>K(a.value.config)?R(a.value.config).filter(e=>j(decodeURI(l),e)).sort((e,i)=>i.length-e.length):[],s=l=>{const{config:e={}}=a.value,i=r(l);if(i.length>0){const p=i.find(o=>e[o].hint);return{isEncrypted:!0,isLocked:i.some(o=>(c.value[o]?e[o].tokens.every(v=>!y(c.value[o],v)):!0)&&(u.value[o]?e[o].tokens.every(v=>!y(u.value[o],v)):!0)),hint:p?e[p].hint:""}}return{isEncrypted:!1,isLocked:!1,hint:""}};return{status:m(()=>s(t.value.path)),getStatus:s,validate:(l,e=!1)=>{const{config:i={}}=a.value,p=r(t.value.path);for(const o of p)if(i[o].tokens.some(v=>y(l,v))){(e?c:u).value[o]=l;break}}}};var I=f({name:"GlobalEncrypt",slots:Object,setup(t,{slots:a}){const{status:c,validate:u}=B(),r=H(),s=d(!1);return E(()=>{s.value=!0}),()=>{const{isEncrypted:l,isLocked:e,hint:i}=c.value;return n(r.value?w:x,()=>l?s.value?e?n(k,{full:!0,hint:i,onVerify:u}):a.default():null:a.default())}}}),M=f({name:"LocalEncrypt",slots:Object,setup(t,{slots:a}){const{status:c,validate:u}=F(),r=d(!1);return E(()=>{r.value=!0}),()=>{const{isEncrypted:s,isLocked:l,hint:e}=c.value;return s?r.value?l?n(k,{showTitle:!0,full:!0,hint:e,onVerify:u}):a.default():null:a.default()}}});export{I as GlobalEncrypt,M as LocalEncrypt};
//# sourceMappingURL=export.js.map
