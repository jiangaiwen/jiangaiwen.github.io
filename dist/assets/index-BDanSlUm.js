
    /**
     * 由 Fantastic-admin 提供技术支持
     * Powered by Fantastic-admin
     * Gitee  https://fantastic-admin.gitee.io
     * Github https://fantastic-admin.github.io
     */
    
import{d as M,j as C,u as k,t as x,r as l,o as y,ag as B,x as R,n as r,c as i,f as u,i as e,A as t,e as p,g as H,a3 as T,a8 as $,ah as j,C as S,D as w,F as z,ae as N,_ as V}from"./index-DGclp6VM.js";import{_ as D}from"./index.vue_vue_type_script_setup_true_lang-DPqZUOIl.js";import{_ as E}from"./index.vue_vue_type_script_setup_true_lang-D_J1t261.js";import"./sub.vue_vue_type_script_setup_true_lang-CI9UKxxQ.js";import"./item.vue_vue_type_script_setup_true_lang-CeT1MBct.js";import"./HTooltip.vue_vue_type_script_setup_true_lang-qlcnVjRg.js";const F=M({name:"SubSidebar",__name:"index",setup(O){const f=C(),s=k(),c=x(),a=l(),b=l(!1),g=l(!1);function d(){const o=a.value.scrollTop;b.value=o>0;const n=a.value.clientHeight,m=a.value.scrollHeight;g.value=Math.ceil(o+n)<m}const h=l();return y(()=>{d();const{height:o}=B(h);R(()=>o.value,()=>{o.value>0&&d()},{immediate:!0})}),(o,n)=>{const m=N;return r(),i("div",{class:t(["sub-sidebar-container",{"is-collapse":e(s).mode==="pc"&&e(s).settings.menu.subMenuCollapse}])},[u(D,{"show-logo":e(s).settings.menu.menuMode==="single",class:t(["sidebar-logo",{"sidebar-logo-bg":e(s).settings.menu.menuMode==="single"}])},null,8,["show-logo","class"]),p("div",{ref_key:"subSidebarRef",ref:a,class:t(["sub-sidebar flex-1 transition-shadow-300",{"shadow-top":e(b),"shadow-bottom":e(g)}]),onScroll:d},[p("div",{ref_key:"menuRef",ref:h},[u(j,{name:"sub-sidebar"},{default:H(()=>[(r(!0),i(T,null,$(e(c).allMenus,(v,_)=>S((r(),i("div",{key:_},[u(E,{menu:v.children,value:e(f).meta.activeMenu||e(f).path,"default-openeds":e(c).defaultOpenedPaths,accordion:e(s).settings.menu.subMenuUniqueOpened,collapse:e(s).mode==="pc"&&e(s).settings.menu.subMenuCollapse,class:"menu"},null,8,["menu","value","default-openeds","accordion","collapse"])],512)),[[w,_===e(c).actived]])),128))]),_:1})],512)],34),e(s).mode==="pc"?(r(),i("div",{key:0,class:t(["relative flex items-center px-4 py-3",[e(s).settings.menu.subMenuCollapse?"justify-center":"justify-end"]])},[S(p("span",{class:t(["flex-center cursor-pointer rounded bg-stone-1 p-2 transition dark:bg-stone-9 hover:bg-stone-2 dark:hover:bg-stone-8",{"-rotate-z-180":e(s).settings.menu.subMenuCollapse}]),onClick:n[0]||(n[0]=v=>e(s).toggleSidebarCollapse())},[u(m,{name:"toolbar-collapse"})],2),[[w,e(s).settings.menu.enableSubMenuCollapseButton]])],2)):z("",!0)],2)}}}),U=V(F,[["__scopeId","data-v-5ea79293"]]);export{U as default};
