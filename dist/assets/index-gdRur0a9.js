
    /**
     * 由 Fantastic-admin 提供技术支持
     * Powered by Fantastic-admin
     * Gitee  https://fantastic-admin.gitee.io
     * Github https://fantastic-admin.github.io
     */
    
import{d as b,r as v,k as c,n as _,B as L,g as V,f as o,i as a,U as r,q as m,S as w}from"./index-CQZsta3J.js";const y=b({__name:"index",setup(x){const l=v(),i=[{value:"1",label:"Level one 1",children:[{value:"1-1",label:"Level two 1-1",children:[{value:"1-1-1",label:"Level three 1-1-1"}]}]},{value:"2",label:"Level one 2",children:[{value:"2-1",label:"Level two 2-1",children:[{value:"2-1-1",label:"Level three 2-1-1"}]},{value:"2-2",label:"Level two 2-2",children:[{value:"2-2-1",label:"Level three 2-2-1"}]}]},{value:"3",label:"Level one 3",children:[{value:"3-1",label:"Level two 3-1",children:[{value:"3-1-1",label:"Level three 3-1-1"}]},{value:"3-2",label:"Level two 3-2",children:[{value:"3-2-1",label:"Level three 3-2-1"}]}]}],n=v(i),f=d=>{n.value=[...i].filter(e=>e.label.includes(d))},h=(d,e)=>e.label.includes(d);return(d,e)=>{const u=c("el-tree-select"),s=c("el-divider"),p=w;return _(),L(p,null,{default:V(()=>[o(u,{modelValue:a(l),"onUpdate:modelValue":e[0]||(e[0]=t=>r(l)?l.value=t:null),data:a(n),filterable:"","check-strictly":"",style:{width:"240px"}},null,8,["modelValue","data"]),o(s),m(" filter method: "),o(u,{modelValue:a(l),"onUpdate:modelValue":e[1]||(e[1]=t=>r(l)?l.value=t:null),data:a(n),"filter-method":f,filterable:"",style:{width:"240px"}},null,8,["modelValue","data"]),o(s),m(" filter node method: "),o(u,{modelValue:a(l),"onUpdate:modelValue":e[2]||(e[2]=t=>r(l)?l.value=t:null),data:a(n),"filter-node-method":h,filterable:"",style:{width:"240px"}},null,8,["modelValue","data"])]),_:1})}}});export{y as default};
