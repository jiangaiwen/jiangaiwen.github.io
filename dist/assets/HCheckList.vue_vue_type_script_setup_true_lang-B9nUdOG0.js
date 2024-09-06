
    /**
     * 由 Fantastic-admin 提供技术支持
     * Powered by Fantastic-admin
     * Gitee  https://fantastic-admin.gitee.io
     * Github https://fantastic-admin.github.io
     */
    
import{d as u,ax as l,ay as m,x as b,n as a,c as t,a3 as o,a8 as p,A as _,B as f,q as g,H as h,ae as v}from"./index-CQZsta3J.js";const x={class:"inline-flex select-none items-center justify-center of-hidden rounded-md bg-stone-3 dark:bg-stone-7"},y=["disabled","onClick"],V=u({__name:"HCheckList",props:l({options:{},disabled:{type:Boolean,default:!1}},{modelValue:{},modelModifiers:{}}),emits:l(["change"],["update:modelValue"]),setup(i,{emit:d}){const r=d,n=m(i,"modelValue");return b(n,s=>{r("change",s)}),(s,k)=>{const c=v;return a(),t("div",x,[(a(!0),t(o,null,p(s.options,e=>(a(),t("button",{key:e.value,disabled:s.disabled||e.disabled,class:_(["flex cursor-pointer items-center truncate border-size-0 bg-inherit px-2 py-1.5 text-sm disabled:cursor-not-allowed disabled:opacity-50 hover:not-disabled:bg-ui-primary hover:not-disabled:text-ui-text",{"text-ui-text bg-ui-primary":n.value===e.value}]),onClick:B=>n.value=e.value},[e.icon?(a(),f(c,{key:0,name:e.icon},null,8,["name"])):(a(),t(o,{key:1},[g(h(e.label),1)],64))],10,y))),128))])}}});export{V as _};
