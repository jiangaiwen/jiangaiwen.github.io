import{_ as y,c as i,d as x,e as k,h as C}from"./index.c86cece1.js";import{d as V,R as w,e as E,L as T,r as c,o,f as s,h as r,w as m,F as d,y as u,c as B,g as A,u as p,x as F}from"./vue.cb8a278b.js";const L={class:"selector-body"},R={key:0},$=["title"],M=V({__name:"Icon",setup(P){const e=w({activeTab:"Element",config:[{title:"Element"},{title:"Awesome"},{title:"ali"}],fontIconNames:[]}),N=n=>{e.fontIconNames=[],n.paneName=="Element"?i().then(t=>{e.fontIconNames=t}):n.paneName=="Awesome"?x().then(t=>{e.fontIconNames=t.map(a=>`fa ${a}`)}):n.paneName=="ali"?k().then(t=>{e.fontIconNames=t.map(a=>`iconfont ${a}`)}):n.paneName=="local"&&C().then(t=>{e.fontIconNames=t})},_=E(()=>e.fontIconNames);return T(()=>{i().then(n=>{e.fontIconNames=n})}),(n,t)=>{const a=c("Icon",!0),I=c("el-scrollbar"),b=c("el-tab-pane"),v=c("el-tabs");return o(),s("div",null,[r(v,{modelValue:e.activeTab,"onUpdate:modelValue":t[0]||(t[0]=l=>e.activeTab=l),onTabClick:N,type:"border-card"},{default:m(()=>[(o(!0),s(d,null,u(e.config,(l,h)=>(o(),B(b,{class:"config-tab-pane",key:h,name:l.title,label:l.title},{default:m(()=>[A("div",L,[r(I,{ref_for:!0,ref:"selectorScrollbarRef"},{default:m(()=>[p(_).length>0?(o(),s("ul",R,[(o(!0),s(d,null,u(p(_),(f,g)=>(o(),s("li",{title:f,key:g},[r(a,{name:f,color:"var(--el-text-color-primary)"},null,8,["name"])],8,$))),128))])):F("",!0)]),_:2},1536)])]),_:2},1032,["name","label"]))),128))]),_:1},8,["modelValue"])])}}});var j=y(M,[["__scopeId","data-v-3af5af0a"]]);export{j as default};