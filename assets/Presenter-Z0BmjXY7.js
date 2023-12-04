import{o as u,e as _,f as e,p as g,q as Z,b as w,d as D,s as C,v as x,w as k,_ as A,x as F,y as R,c as M,a as E,z as N,A as q,B as O,C as U,D as W,E as G,G as X,H as j,I as J,J as K,K as Q,L as Y,M as ee,g as t,N as te,l as i,t as se,n as f,i as V,O as P,S as T,m as b,P as oe,Q as B,R as H,T as ne,j as le,U as $,V as ae,W as ie,F as re,X as ce,Y as ue,Z as de,$ as _e,a0 as me,a1 as L,a2 as ve,a3 as pe}from"./index-V0ShyspD.js";import{N as he}from"./NoteDisplay-fhATQTgO.js";import fe from"./DrawingControls-N1Vr-E0P.js";const ge={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},xe=e("path",{fill:"currentColor",d:"M8 12h10v2H8z"},null,-1),we=e("path",{fill:"currentColor",d:"M21.448 20A10.856 10.856 0 0 0 24 13a11 11 0 1 0-11 11a10.856 10.856 0 0 0 7-2.552L27.586 29L29 27.586ZM13 22a9 9 0 1 1 9-9a9.01 9.01 0 0 1-9 9Z"},null,-1),Se=[xe,we];function ye(s,n){return u(),_("svg",ge,[...Se])}const be={name:"carbon-zoom-out",render:ye},$e={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Ce=e("path",{fill:"currentColor",d:"M18 12h-4V8h-2v4H8v2h4v4h2v-4h4v-2z"},null,-1),ke=e("path",{fill:"currentColor",d:"M21.448 20A10.856 10.856 0 0 0 24 13a11 11 0 1 0-11 11a10.856 10.856 0 0 0 7-2.552L27.586 29L29 27.586ZM13 22a9 9 0 1 1 9-9a9.01 9.01 0 0 1-9 9Z"},null,-1),ze=[Ce,ke];function Me(s,n){return u(),_("svg",$e,[...ze])}const Ne={name:"carbon-zoom-in",render:Me},Ve={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Pe=e("path",{fill:"currentColor",d:"M12 10H6.78A11 11 0 0 1 27 16h2A13 13 0 0 0 6 7.68V4H4v8h8zm8 12h5.22A11 11 0 0 1 5 16H3a13 13 0 0 0 23 8.32V28h2v-8h-8z"},null,-1),Te=[Pe];function Be(s,n){return u(),_("svg",Ve,[...Te])}const He={name:"carbon-renew",render:Be},Le={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},De=e("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),Ae=e("path",{fill:"currentColor",d:"M20.59 22L15 16.41V7h2v8.58l5 5.01L20.59 22z"},null,-1),Ie=[De,Ae];function Ze(s,n){return u(),_("svg",Le,[...Ie])}const Fe={name:"carbon-time",render:Ze},Re="/ED_Civica_Inglese/assets/logo-title-horizontal-XSaaVPPu.png";function Ee(){const s=g(Date.now()),n=Z({interval:1e3}),m=w(()=>{const l=(n.value-s.value)/1e3,r=Math.floor(l%60).toString().padStart(2,"0");return`${Math.floor(l/60).toString().padStart(2,"0")}:${r}`});function v(){s.value=n.value}return{timer:m,resetTimer:v}}const qe=D({__name:"NoteStatic",props:{class:{type:String,required:!1}},setup(s){const n=s,m=w(()=>{var l,r,a;return(a=(r=(l=C.value)==null?void 0:l.meta)==null?void 0:r.slide)==null?void 0:a.note}),v=w(()=>{var l,r,a;return(a=(r=(l=C.value)==null?void 0:l.meta)==null?void 0:r.slide)==null?void 0:a.noteHTML});return(l,r)=>(u(),x(he,{class:k(n.class),note:m.value,"note-html":v.value},null,8,["class","note","note-html"]))}}),Oe=A(qe,[["__file","/opt/hostedtoolcache/node/18.18.2/x64/lib/node_modules/@slidev/cli/node_modules/@slidev/client/internals/NoteStatic.vue"]]),S=s=>(_e("data-v-62986e62"),s=s(),me(),s),Ue={class:"bg-main h-full slidev-presenter"},We={class:"grid-section top flex"},Ge=S(()=>e("img",{src:Re,class:"ml-2 my-auto h-10 py-1 lg:h-14 lg:py-2",style:{height:"3.5rem"},alt:"Slidev logo"},null,-1)),Xe=S(()=>e("div",{class:"flex-auto"},null,-1)),je={class:"text-2xl pl-2 pr-6 my-auto tabular-nums"},Je=S(()=>e("div",{class:"context"}," current ",-1)),Ke=S(()=>e("div",{class:"context"}," next ",-1)),Qe={key:1,class:"grid-section note grid grid-rows-[1fr_min-content] overflow-hidden"},Ye={class:"border-t border-main py-1 px-2 text-sm"},et={class:"grid-section bottom"},tt={class:"progress-bar"},st=D({__name:"Presenter",setup(s){const n=g();F(),R(n);const m=M.titleTemplate.replace("%s",M.title||"Slidev");E({title:`Presenter - ${m}`}),g(!1);const{timer:v,resetTimer:l}=Ee(),r=g([]),a=w(()=>N.value<q.value?{route:C.value,clicks:N.value+1}:O.value?{route:U.value,clicks:0}:null);return W(),G(()=>{const z=n.value.querySelector("#slide-content"),o=X(j()),y=J();K(()=>{if(!y.value||Y.value||!ee.value)return;const d=z.getBoundingClientRect(),p=(o.x-d.left)/d.width*100,h=(o.y-d.top)/d.height*100;if(!(p<0||p>100||h<0||h>100))return{x:p,y:h}},d=>{Q.cursor=d})}),(z,o)=>{const y=Fe,d=He,p=Ne,h=be;return u(),_(re,null,[e("div",Ue,[e("div",{class:k(["grid-container",`layout${t(te)}`])},[e("div",We,[Ge,Xe,e("div",{class:"timer-btn my-auto relative w-22px h-22px cursor-pointer text-lg",opacity:"50 hover:100",onClick:o[0]||(o[0]=(...c)=>t(l)&&t(l)(...c))},[i(y,{class:"absolute"}),i(d,{class:"absolute opacity-0"})]),e("div",je,se(t(v)),1)]),e("div",{ref_key:"main",ref:n,class:"relative grid-section main flex flex-col p-2 lg:p-4",style:f(t(V))},[i(T,{key:"main",class:"h-full w-full"},{default:P(()=>[i(ce,{"render-context":"presenter"})]),_:1}),Je],4),e("div",{class:"relative grid-section next flex flex-col p-2 lg:p-4",style:f(t(V))},[a.value?(u(),x(T,{key:"next",class:"h-full w-full"},{default:P(()=>{var c;return[i(t(de),{is:(c=a.value.route)==null?void 0:c.component,"clicks-elements":r.value,"onUpdate:clicksElements":o[1]||(o[1]=I=>r.value=I),clicks:a.value.clicks,"clicks-disabled":!1,class:k(t(ue)(a.value.route)),route:a.value.route,"render-context":"previewNext"},null,8,["is","clicks-elements","clicks","class","route"])]}),_:1})):b("v-if",!0),Ke],4),b(" Notes "),(u(),_("div",Qe,[(u(),x(Oe,{key:1,class:"w-full max-w-full h-full overflow-auto p-2 lg:p-4",style:f({fontSize:`${t(oe)}em`})},null,8,["style"])),e("div",Ye,[e("button",{class:"slidev-icon-btn",onClick:o[2]||(o[2]=(...c)=>t(B)&&t(B)(...c))},[i(L,{text:"Increase font size"}),i(p)]),e("button",{class:"slidev-icon-btn",onClick:o[3]||(o[3]=(...c)=>t(H)&&t(H)(...c))},[i(L,{text:"Decrease font size"}),i(h)]),b("v-if",!0)])])),e("div",et,[i(ve,{persist:!0})]),(u(),x(fe,{key:2}))],2),e("div",tt,[e("div",{class:"progress h-2px bg-primary transition-all",style:f({width:`${(t(ne)-1)/(t(le)-1)*100}%`})},null,4)])]),i(pe),i(ie,{modelValue:t($),"onUpdate:modelValue":o[5]||(o[5]=c=>ae($)?$.value=c:null)},null,8,["modelValue"])],64)}}}),at=A(st,[["__scopeId","data-v-62986e62"],["__file","/opt/hostedtoolcache/node/18.18.2/x64/lib/node_modules/@slidev/cli/node_modules/@slidev/client/internals/Presenter.vue"]]);export{at as default};
