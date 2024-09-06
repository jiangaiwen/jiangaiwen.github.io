
    /**
     * 由 Fantastic-admin 提供技术支持
     * Powered by Fantastic-admin
     * Gitee  https://fantastic-admin.gitee.io
     * Github https://fantastic-admin.github.io
     */
    
import{d as h,v as g,k,n as t,B as f,g as a,c as r,a8 as n,i as _,a3 as l,ab as y,an as w,H as x}from"./index-C-3tFKuV.js";const v=["disabled","onClick"],B=h({__name:"HDropdownMenu",props:{items:{}},setup(d){const i=d,p=g(()=>i.items.map(e=>e.filter(o=>!o.hide)).filter(e=>e.length));return(e,o)=>{const c=k("VMenu");return t(),f(c,w({"show-triggers":["hover"],"auto-hide":!1,"popper-triggers":["hover","click"],delay:200},e.$attrs),{popper:a(()=>[(t(!0),r(l,null,n(_(p),(u,m)=>(t(),r("div",{key:m,class:"p-1","border-b":"~ solid stone-2 dark:stone-7 last:size-0"},[(t(!0),r(l,null,n(u,(s,b)=>(t(),r("button",{key:b,disabled:s.disabled,class:"w-full flex cursor-pointer items-center gap-2 border-size-0 rounded-md bg-inherit px-2 py-1.5 text-sm text-dark disabled:cursor-not-allowed dark:text-white disabled:opacity-50 hover:not-disabled:bg-stone-1 dark:hover:not-disabled:bg-stone-9",onClick:s.handle},x(s.label),9,v))),128))]))),128))]),default:a(()=>[y(e.$slots,"default")]),_:3},16)}}});export{B as _};
