
    /**
     * 由 Fantastic-admin 提供技术支持
     * Powered by Fantastic-admin
     * Gitee  https://fantastic-admin.gitee.io
     * Github https://fantastic-admin.github.io
     */
    
import{d as p,u,r as a,v as m,k as g,n as o,B as h,g as _,c as r,F as i,H as d,i as e,A as f,aA as k,aB as w}from"./index-DGclp6VM.js";const x={key:0,src:k,class:"logo h-[30px] w-[30px] object-contain"},B={key:1,class:"block truncate font-bold"},C=p({name:"Logo",__name:"index",props:{showLogo:{type:Boolean,default:!0},showTitle:{type:Boolean,default:!0}},setup(b){const t=u(),s=a("页面标题");a(w);const l=m(()=>t.settings.home.enable?t.settings.home.fullPath:"");return(n,L)=>{const c=g("RouterLink");return o(),h(c,{to:e(l),class:f(["h-[var(--g-sidebar-logo-height)] w-inherit flex-center gap-2 px-3 text-inherit no-underline",{"cursor-pointer":e(t).settings.home.enable}]),title:e(s)},{default:_(()=>[n.showLogo?(o(),r("img",x)):i("",!0),n.showTitle?(o(),r("span",B,d(e(s)),1)):i("",!0)]),_:1},8,["to","class","title"])}}});export{C as _};
