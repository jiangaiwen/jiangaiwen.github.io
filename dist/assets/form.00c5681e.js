var re=Object.defineProperty;var ne=(l,t,e)=>t in l?re(l,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):l[t]=e;var w=(l,t,e)=>(ne(l,typeof t!="symbol"?t+"":t,e),e);import{u as se,S as de}from"./sortable.esm.59463e38.js";import{d as K,R as P,h as y,W as ce,X as ee,t as U,r as A,S as X,o as r,f as c,c as x,x as p,u as S,F as C,y as V,w as g,C as Q,v as T,g as H,n as ue,s as fe,U as R,Y as z,e as oe,m as Z,Z as he,k as me,_ as pe,z as be,$ as ge,a0 as ye,a1 as ve,a2 as we,L as ke}from"./vue.06dd128b.js";import{f as W,a as xe,_ as ie,g as Y,b as O}from"./index.6a4f60aa.js";const Ae=K({name:"Column",props:{attr:{type:Object,required:!0}},setup(l,{slots:t}){const e=P(l.attr);return e["column-key"]=e["column-key"]?e["column-key"]:e.prop||se(),()=>y(ce,e,t.default)}}),Se=(l,t)=>{t.target=="_blank"?window.open(l):window.location.href=l},_e=(l=["weigh-sort","edit","delete"])=>{const t=new Map([["weigh-sort",{render:"moveButton",name:"weigh-sort",title:"weigh-sort",text:"",type:"info",icon:"fa fa-arrows",class:"table-row-weigh-sort",disabledTip:!1}],["edit",{render:"tipButton",name:"edit",title:"edit",text:"",type:"primary",icon:"fa fa-pencil",class:"table-row-edit",disabledTip:!1}],["delete",{render:"confirmButton",name:"delete",title:"delete",text:"",type:"danger",icon:"fa fa-trash",class:"table-row-delete",popconfirm:{confirmButtonText:"delete",cancelButtonText:"Cancel",confirmButtonType:"danger",title:"Are you sure to delete the selected record?"},disabledTip:!1}]]),e=[];for(const i in l)t.has(l[i])&&e.push(t.get(l[i]));return e},Ce=(l=null,t="yyyy-mm-dd hh:MM:ss")=>{if(l=="none")return"none";l||(l=Number(new Date)),l.toString().length===10&&(l=+l*1e3);const e=new Date(l);let i;const o={"y+":e.getFullYear().toString(),"m+":(e.getMonth()+1).toString(),"d+":e.getDate().toString(),"h+":e.getHours().toString(),"M+":e.getMinutes().toString(),"s+":e.getSeconds().toString()};for(const u in o)i=new RegExp("("+u+")").exec(t),i&&(t=t.replace(i[1],i[1].length==1?o[u]:Fe(o[u],i[1].length,"0")));return t},Fe=(l,t,e=" ")=>{if(l.length>=t)return l;const i=t-l.length;let o=Math.ceil(i/e.length);for(;o>>=1;)e+=e,o===1&&(e+=e);return e.slice(0,i)+l},J=(l,t,e=-1)=>{for(const i in l){if(typeof e=="number"&&e++,e==t)return l[i];if(l[i].children&&(e=J(l[i].children,t,e),typeof e!="number"))return e}return e},Te={key:2,class:"ba-render-image"},Be={key:3,class:"ba-render-image"},ze={key:4},Ee={key:5},De={key:6},Re={key:7},Ie={key:8},Le=["innerHTML"],Me={key:11},Ne={key:0,class:"table-operate-text"},$e={key:0,class:"table-operate-text"},qe={class:"ml-6"},Oe={key:0,class:"table-operate-text"},Pe={key:0,class:"table-operate-text"},Ue={key:0,class:"table-operate-text"},Ve={key:0,class:"table-operate-text"},He=K({__name:"index",props:{row:null,field:null,column:null,index:null},setup(l){var d;const t=l,e=ee("baTable"),i=U(t.field.prop),o=U(i.value?t.row[i.value]:"");if(i.value&&i.value.indexOf(".")>-1){let f=i.value.split("."),v=U(t.row[f[0]]);for(let k=1;k<f.length;k++)v.value=v.value&&(d=v.value[f[k]])!=null?d:"";o.value=v.value}t.field.renderFormatter&&typeof t.field.renderFormatter=="function"&&(o.value=t.field.renderFormatter(t.row,t.field,o.value,t.column,t.index));const u=f=>{e.onTableAction("field-change",{value:f,...t})},b=f=>{if(typeof f.click=="function"){f.click(t.row,t.field);return}e.onTableAction(f.name,t)},n=(f,v)=>v&&v[f]?v[f]:"";return(f,v)=>{var B,j,F,N,D,te;const k=A("Icon"),I=A("el-switch"),L=A("el-image"),E=A("el-tag"),_=A("el-button"),G=A("el-input"),M=A("el-tooltip"),s=A("el-popconfirm"),h=X("auth"),m=X("blur");return r(),c(C,null,[l.field.render=="icon"?(r(),x(k,{key:0,class:"ba-icon-dark",name:o.value?o.value:(B=l.field.default)!=null?B:""},null,8,["name"])):p("",!0),l.field.render=="switch"?(r(),x(I,{key:1,onChange:u,"model-value":o.value.toString(),loading:l.row.loading,"active-value":"1","inactive-value":"0"},null,8,["model-value","loading"])):p("",!0),l.field.render=="image"&&o.value?(r(),c("div",Te,[y(L,{"hide-on-click-modal":!0,"preview-teleported":!0,"preview-src-list":[S(W)(o.value)],src:S(W)(o.value)},null,8,["preview-src-list","src"])])):p("",!0),l.field.render=="images"?(r(),c("div",Be,[Array.isArray(o.value)&&o.value.length?(r(!0),c(C,{key:0},V(o.value,(a,$)=>(r(),x(L,{key:$,"initial-index":$,"preview-teleported":!0,"preview-src-list":S(xe)(o.value),class:"images-item",src:S(W)(a),"hide-on-click-modal":!0},null,8,["initial-index","preview-src-list","src"]))),128)):p("",!0)])):p("",!0),l.field.render=="tag"&&o.value!==""?(r(),c("div",ze,[y(E,{type:n(o.value,l.field.custom),effect:(j=l.field.effect)!=null?j:"light",size:(F=l.field.size)!=null?F:"default"},{default:g(()=>[Q(T(l.field.replaceValue?l.field.replaceValue[o.value]:o.value),1)]),_:1},8,["type","effect","size"])])):p("",!0),l.field.render=="tags"?(r(),c("div",Ee,[Array.isArray(o.value)?(r(!0),c(C,{key:0},V(o.value,(a,$)=>{var q,le;return r(),c(C,{key:$},[a?(r(),x(E,{key:0,class:"m-10",type:n(a,l.field.custom),effect:(q=l.field.effect)!=null?q:"light",size:(le=l.field.size)!=null?le:"default"},{default:g(()=>{var ae;return[Q(T(l.field.replaceValue&&(ae=l.field.replaceValue[a])!=null?ae:a),1)]}),_:2},1032,["type","effect","size"])):p("",!0)],64)}),128)):(r(),c(C,{key:1},[o.value!==""?(r(),x(E,{key:0,class:"m-10",type:n(o.value,l.field.custom),effect:(N=l.field.effect)!=null?N:"light",size:(D=l.field.size)!=null?D:"default"},{default:g(()=>{var a;return[Q(T(l.field.replaceValue&&(a=l.field.replaceValue[o.value])!=null?a:o.value),1)]}),_:1},8,["type","effect","size"])):p("",!0)],64))])):p("",!0),l.field.render=="url"&&o.value?(r(),c("div",De,[y(G,{"model-value":o.value,placeholder:"Link address"},{append:g(()=>[y(_,{onClick:v[0]||(v[0]=a=>typeof l.field.click=="function"?l.field.click(l.row,l.field,o.value,l.column,l.index):S(Se)(o.value,l.field))},{default:g(()=>[y(k,{color:"#606266",name:"el-icon-Position"})]),_:1})]),_:1},8,["model-value"])])):p("",!0),l.field.render=="datetime"?(r(),c("div",Re,T(o.value?S(Ce)(o.value,(te=l.field.timeFormat)!=null?te:void 0):"-"),1)):p("",!0),l.field.render=="color"?(r(),c("div",Ie,[H("div",{style:ue({background:o.value}),class:"ba-render-color"},null,4)])):p("",!0),l.field.render=="customTemplate"?(r(),c("div",{key:9,innerHTML:l.field.customTemplate?l.field.customTemplate(l.row,l.field,o.value,l.column,l.index):""},null,8,Le)):p("",!0),l.field.render=="customRender"?(r(),x(fe(l.field.customRender),{key:10,renderRow:l.row,renderField:l.field,renderValue:o.value,renderColumn:l.column,renderIndex:l.index},null,8,["renderRow","renderField","renderValue","renderColumn","renderIndex"])):p("",!0),l.field.render=="buttons"&&l.field.buttons?(r(),c("div",Me,[(r(!0),c(C,null,V(l.field.buttons,(a,$)=>(r(),c(C,{key:$},[!a.display||a.display(l.row,l.field)?(r(),c(C,{key:0},[a.render=="tipButton"?(r(),x(M,{key:0,disabled:!a.title,content:a.title?a.title:"",placement:"top"},{default:g(()=>[a.name=="edit"?R((r(),x(_,z({key:0,onClick:q=>b(a),class:[a.class,"table-operate"],type:a.type,disabled:a.disabled&&a.disabled(l.row,l.field)},a.attr),{default:g(()=>[y(k,{name:a.icon},null,8,["name"]),a.text?(r(),c("div",Ne,T(a.text),1)):p("",!0)]),_:2},1040,["onClick","class","type","disabled"])),[[h,"edit"],[m]]):R((r(),x(_,z({key:1,onClick:q=>b(a),class:[a.class,"table-operate"],type:a.type,disabled:a.disabled&&a.disabled(l.row,l.field)},a.attr),{default:g(()=>[y(k,{name:a.icon},null,8,["name"]),a.text?(r(),c("div",$e,T(a.text),1)):p("",!0)]),_:2},1040,["onClick","class","type","disabled"])),[[m]])]),_:2},1032,["disabled","content"])):p("",!0),a.render=="confirmButton"?(r(),x(s,z({key:1,disabled:a.disabled&&a.disabled(l.row,l.field)},a.popconfirm,{onConfirm:q=>b(a)}),{reference:g(()=>[H("div",qe,[y(M,{disabled:!a.title,content:a.title?a.title:"",placement:"top"},{default:g(()=>[a.name=="delete"?R((r(),x(_,z({key:0,class:[a.class,"table-operate"],type:a.type,disabled:a.disabled&&a.disabled(l.row,l.field)},a.attr),{default:g(()=>[y(k,{name:a.icon},null,8,["name"]),a.text?(r(),c("div",Oe,T(a.text),1)):p("",!0)]),_:2},1040,["class","type","disabled"])),[[h,"del"],[m]]):R((r(),x(_,z({key:1,class:[a.class,"table-operate"],type:a.type,disabled:a.disabled&&a.disabled(l.row,l.field)},a.attr),{default:g(()=>[y(k,{name:a.icon},null,8,["name"]),a.text?(r(),c("div",Pe,T(a.text),1)):p("",!0)]),_:2},1040,["class","type","disabled"])),[[m]])]),_:2},1032,["disabled","content"])])]),_:2},1040,["disabled","onConfirm"])):p("",!0),a.render=="moveButton"?(r(),x(M,{key:2,disabled:!(a.title&&!a.disabledTip),content:a.title?a.title:"",placement:"top"},{default:g(()=>[a.name=="weigh-sort"?R((r(),x(_,z({key:0,class:[a.class,"table-operate move-button"],type:a.type,disabled:a.disabled&&a.disabled(l.row,l.field)},a.attr),{default:g(()=>[y(k,{name:a.icon},null,8,["name"]),a.text?(r(),c("div",Ue,T(a.text),1)):p("",!0)]),_:2},1040,["class","type","disabled"])),[[h,"sortable"]]):R((r(),x(_,z({key:1,class:[a.class,"table-operate move-button"],type:a.type,disabled:a.disabled&&a.disabled(l.row,l.field)},a.attr),{default:g(()=>[y(k,{name:a.icon},null,8,["name"]),a.text?(r(),c("div",Ve,T(a.text),1)):p("",!0)]),_:2},1040,["class","type","disabled"])),[[m]])]),_:2},1032,["disabled","content"])):p("",!0)],64)):p("",!0)],64))),128))])):p("",!0)],64)}}});const Ke={key:0,class:"table-pagination"},Ge=K({__name:"index",props:{pagination:{type:Boolean,default:!0}},setup(l,{expose:t}){const e=l,i=U(),o=ee("baTable"),u=s=>{o.onTableAction("page-size-change",{size:s})},b=s=>{o.onTableAction("current-page-change",{page:s})},n=({order:s,prop:h})=>{o.onTableAction("sort-change",{prop:h,order:s?s=="ascending"?"asc":"desc":""})},d=oe(()=>{let s=[10,20,50,100];return o.table.filter.limit&&(s.includes(o.table.filter.limit)||s.push(o.table.filter.limit)),s}),f=s=>{var h;v(s.map(m=>m[o.table.pk].toString()))?s.map(m=>{m.children&&k(m.children,!0)}):(h=i.value)==null||h.clearSelection()},v=s=>{let h=o.table.data;for(const m in h)return s.includes(h[m][o.table.pk].toString());return!1},k=(s,h)=>{s.map(m=>{I(m,h),m.children&&k(m.children,h)})},I=(s,h)=>{s&&me(()=>{var m;(m=i.value)==null||m.toggleRowSelection(s,h)})},L=(s,h)=>{s.some(m=>h[o.table.pk]===m[o.table.pk])?h.children&&k(h.children,!0):h.children&&k(h.children,!1)},E=s=>{o.onTableAction("selection-change",s)},_=(s,h)=>{var m;for(const B in s)(m=i.value)==null||m.toggleRowExpansion(s[B],h),s[B].children&&_(s[B].children,h)};return t({unFoldAll:s=>{_(o.table.data,s)},getRef:()=>i.value}),(s,h)=>{const m=A("el-table"),B=A("el-pagination"),j=X("loading");return r(),c("div",null,[R((r(),x(m,z({ref_key:"tableRef",ref:i,class:"ba-data-table w100","header-cell-class-name":"table-header-cell","default-expand-all":S(o).table.expandAll,data:S(o).table.data,"row-key":S(o).table.pk,border:!0,stripe:"",onSelectAll:f,onSelect:L,onSelectionChange:E,onSortChange:n,onRowDblclick:S(o).onTableDblclick},s.$attrs),{default:g(()=>[Z(s.$slots,"columnPrepend",{},void 0,!0),(r(!0),c(C,null,V(S(o).table.column,(F,N)=>(r(),c(C,null,[F.show!==!1?(r(),x(Ae,{attr:F,key:N+"-column"},he({_:2},[F.render?{name:"default",fn:g(D=>[(r(),x(He,{field:F,row:D.row,column:D.column,index:D.$index,key:F.render=="switch"?"sw-"+F.prop+"-"+N+"-"+D.row[F.prop]:N},null,8,["field","row","column","index"]))]),key:"0"}:void 0]),1032,["attr"])):p("",!0)],64))),256)),Z(s.$slots,"columnAppend",{},void 0,!0)]),_:3},16,["default-expand-all","data","row-key","onRowDblclick"])),[[j,S(o).table.loading]]),e.pagination?(r(),c("div",Ke,[y(B,{currentPage:S(o).table.filter.page,"page-size":S(o).table.filter.limit,"page-sizes":S(d),background:"",layout:"sizes,total, prev, pager, next, jumper",total:S(o).table.total,onSizeChange:u,onCurrentChange:b},null,8,["currentPage","page-size","page-sizes","total"])])):p("",!0)])}}});var je=ie(Ge,[["__scopeId","data-v-a54e8ffc"]]);const Qe={class:"table-header"},We={class:"table-search"},Ye={class:"table-tools"},Xe={class:"table-tools-button-group"},Ze=K({__name:"index",props:{buttons:{default:()=>["refresh","add","edit","delete"]},quickSearchPlaceholder:{default:""}},setup(l){const t=ee("baTable"),e=P({quickSearch:""}),i=oe(()=>{let b=[];for(let n of t.table.column)n.type==="selection"||n.render==="buttons"||n.enableColumnDisplayControl===!1||b.push(n);return b}),o=(b,n)=>{t.onTableHeaderAction("change-show-column",{field:n,value:b})},u=(b,n={})=>{t.onTableHeaderAction(b,n)};return(b,n)=>{const d=A("el-input"),f=A("el-form-item"),v=A("el-form"),k=A("Icon"),I=A("el-button"),L=A("el-tooltip"),E=A("el-checkbox"),_=A("el-dropdown-item"),G=A("el-dropdown-menu"),M=A("el-dropdown");return r(),c("div",Qe,[H("div",We,[y(v,{onSubmit:n[1]||(n[1]=pe(()=>{},["prevent"]))},{default:g(()=>[y(f,{label:"\u6807\u9898"},{default:g(()=>[y(d,{modelValue:e.quickSearch,"onUpdate:modelValue":n[0]||(n[0]=s=>e.quickSearch=s)},null,8,["modelValue"])]),_:1})]),_:1})]),Z(b.$slots,"default",{},void 0,!0),H("div",Ye,[H("div",Xe,[y(L,{content:"\u5237\u65B0",placement:"top"},{default:g(()=>[y(I,{class:"table-tools-button-item right-border",color:"#dcdfe6",onClick:n[2]||(n[2]=s=>u("refresh",{loading:!0})),plain:""},{default:g(()=>[y(k,{size:"14",name:"el-icon-RefreshRight"})]),_:1})]),_:1}),y(M,{"max-height":380,"hide-on-click":!1},{dropdown:g(()=>[y(G,null,{default:g(()=>[(r(!0),c(C,null,V(S(i),(s,h)=>(r(),x(_,{key:h},{default:g(()=>[s.prop?(r(),x(E,{key:0,onChange:m=>o(m,s.prop),checked:!s.show,"model-value":s.show,size:"small",label:s.label},null,8,["onChange","checked","model-value","label"])):p("",!0)]),_:2},1024))),128))]),_:1})]),default:g(()=>[y(I,{class:"table-tools-button-item",color:"#dcdfe6",plain:""},{default:g(()=>[y(k,{size:"14",name:"el-icon-Grid"})]),_:1})]),_:1})])])])}}});var Je=ie(Ze,[["__scopeId","data-v-62e75b62"]]);class et{constructor(t,e,i={},o={},u={}){w(this,"api");w(this,"table",P({ref:void 0,pk:"id",data:[],remark:null,loading:!1,selection:[],column:[],total:0,filter:{},dragSortLimitField:"pid",acceptQuery:!0,showComSearch:!1,dblClickNotEditColumn:[void 0],expandAll:!1,extend:{}}));w(this,"form",P({ref:void 0,labelWidth:160,operate:"",operateIds:[],items:{},submitLoading:!1,defaultItems:{},loading:!1,extend:{}}));w(this,"before");w(this,"after");w(this,"comSearch",P({form:{},fieldData:new Map}));w(this,"getIndex",()=>{if(this.runBefore("getIndex")!==!1)return this.table.loading=!0,this.api.index(this.table.filter).then(t=>{this.table.data=t.data.list,this.table.total=t.data.total,this.table.remark=t.data.remark,this.runAfter("getIndex",{res:t})}).finally(()=>{this.table.loading=!1})});w(this,"postDel",t=>{this.runBefore("postDel",{ids:t})!==!1&&this.api.del(t).then(e=>{this.onTableHeaderAction("refresh",{}),this.runAfter("postDel",{res:e})})});w(this,"requestEdit",t=>{if(this.runBefore("requestEdit",{id:t})!==!1)return this.form.loading=!0,this.form.items={},this.api.edit({[this.table.pk]:t}).then(e=>{this.form.items=e.data.row,this.runAfter("requestEdit",{res:e})}).catch(e=>{this.toggleForm(),this.runAfter("requestEdit",{err:e})}).finally(()=>{this.form.loading=!1})});w(this,"onTableDblclick",(t,e)=>{if(!this.table.dblClickNotEditColumn.includes("all")&&!this.table.dblClickNotEditColumn.includes(e.property)){if(this.runBefore("onTableDblclick",{row:t,column:e})===!1)return;this.toggleForm("edit",[t[this.table.pk]]),this.runAfter("onTableDblclick",{row:t,column:e})}});w(this,"toggleForm",(t="",e=[])=>{if(this.runBefore("toggleForm",{operate:t,operateIds:e})!==!1){if(this.form.ref&&this.form.ref.resetFields(),t=="edit"){if(!e.length)return!1;this.requestEdit(e[0])}else t=="add"&&(this.form.items=Object.assign({},this.form.defaultItems));this.form.operate=t,this.form.operateIds=e,this.runAfter("toggleForm",{operate:t,operateIds:e})}});w(this,"onSubmit",(t=void 0)=>{if(this.runBefore("onSubmit",{formEl:t,operate:this.form.operate,items:this.form.items})===!1)return;Object.keys(this.form.items).forEach(i=>{this.form.items[i]===null&&delete this.form.items[i]});const e=()=>{this.form.submitLoading=!0,this.api.postData(this.form.operate,this.form.items).then(i=>{var o;this.onTableHeaderAction("refresh",{}),(o=this.form.operateIds)==null||o.shift(),this.form.operateIds.length>0?this.toggleForm("edit",this.form.operateIds):this.toggleForm(),this.runAfter("onSubmit",{res:i})}).finally(()=>{this.form.submitLoading=!1})};t?(this.form.ref=t,t.validate(i=>{i&&e()})):e()});w(this,"onTableAction",(t,e)=>{if(this.runBefore("onTableAction",{event:t,data:e})===!1)return;const i=new Map([["selection-change",()=>{this.table.selection=e}],["page-size-change",()=>{this.table.filter.limit=e.size,this.getIndex()}],["current-page-change",()=>{this.table.filter.page=e.page,this.getIndex()}],["sort-change",()=>{let u;e.prop&&e.order&&(u=e.prop+","+e.order),u!=this.table.filter.order&&(this.table.filter.order=u,this.getIndex())}],["edit",()=>{this.toggleForm("edit",[e.row[this.table.pk]])}],["delete",()=>{this.postDel([e.row[this.table.pk]])}],["field-change",()=>{if(e.field.render=="switch"){if(!e.field||!e.field.prop)return;e.row.loading=!0,this.api.postData("edit",{[this.table.pk]:e.row[this.table.pk],[e.field.prop]:e.value}).then(()=>{e.row.loading=!1,e.row[e.field.prop]=e.value}).catch(()=>{e.row.loading=!1})}}],["com-search",()=>{this.table.filter.search=e,this.getIndex()}],["default",()=>{console.warn("No action defined")}]]);return(i.get(t)||i.get("default")).call(this),this.runAfter("onTableAction",{event:t,data:e})});w(this,"onTableHeaderAction",(t,e)=>{if(this.runBefore("onTableHeaderAction",{event:t,data:e})===!1)return;const i=new Map([["refresh",()=>{this.table.data=[],this.getIndex()}],["add",()=>{this.toggleForm("add")}],["edit",()=>{this.toggleForm("edit",this.getSelectionIds())}],["delete",()=>{this.postDel(this.getSelectionIds())}],["unfold",()=>{if(!this.table.ref){console.warn("Collapse/expand failed because table ref is not defined. Please assign table ref when onMounted");return}this.table.expandAll=e.unfold,this.table.ref.unFoldAll(e.unfold)}],["quick-search",()=>{this.table.filter.quick_search=e.keyword,this.getIndex()}],["change-show-column",()=>{const u=Y(this.table.column,"prop",e.field);this.table.column[u].show=e.value}],["default",()=>{console.warn("No action defined")}]]);return(i.get(t)||i.get("default")).call(this),this.runAfter("onTableHeaderAction",{event:t,data:e})});w(this,"initSort",()=>{var t;if(this.table.defaultOrder&&this.table.defaultOrder.prop){if(!this.table.ref){console.warn("Failed to initialize default sorting because table ref is not defined. Please assign table ref when onMounted");return}const e=this.table.defaultOrder.prop+","+this.table.defaultOrder.order;this.table.filter&&this.table.filter.order!=e&&(this.table.filter.order=e,(t=this.table.ref.getRef())==null||t.sort(this.table.defaultOrder.prop,this.table.defaultOrder.order=="desc"?"descending":"ascending"))}});w(this,"dragSort",()=>{var o;const t=Y(this.table.column,"render","buttons");if(Y((o=this.table.column[t])==null?void 0:o.buttons,"render","moveButton")===!1)return;if(!this.table.ref){console.warn("Failed to initialize drag sort because table ref is not defined. Please assign table ref when onMounted");return}const i=this.table.ref.getRef().$el.querySelector(".el-table__body-wrapper .el-table__body tbody");de.create(i,{animation:200,handle:".table-row-weigh-sort",ghostClass:"ba-table-row",onStart:()=>{var u;(u=this.table.column[t].buttons)==null||u.forEach(b=>{b.disabledTip=!0})},onEnd:u=>{var d;(d=this.table.column[t].buttons)==null||d.forEach(f=>{f.disabledTip=!1});const b=J(this.table.data,u.oldIndex),n=J(this.table.data,u.newIndex);if(this.table.dragSortLimitField&&b[this.table.dragSortLimitField]!=n[this.table.dragSortLimitField]){this.onTableHeaderAction("refresh",{}),ye({type:"error",message:"utils.The moving position is beyond the movable range!"});return}this.api.sortableApi(b[this.table.pk],n[this.table.pk]).finally(()=>{this.onTableHeaderAction("refresh",{})})}})});w(this,"mount",()=>{this.runBefore("mount")!==!1&&ve(t=>{this.initComSearch(t.query),this.getIndex()})});w(this,"initComSearch",(t={})=>{var o,u,b;const e={},i=this.table.column;if(!(i.length<=0)){for(const n in i){if(i[n].operator===!1)continue;const d=i[n].prop;if(typeof i[n].operator=="undefined"&&(i[n].operator="="),d){if(i[n].operator=="RANGE"||i[n].operator=="NOT RANGE"?(e[d]="",e[d+"-start"]="",e[d+"-end"]=""):i[n].operator=="NULL"||i[n].operator=="NOT NULL"?e[d]=!1:e[d]="",this.table.acceptQuery&&typeof t[d]!="undefined"){const f=(o=t[d])!=null?o:"";if(i[n].operator=="RANGE"||i[n].operator=="NOT RANGE"){const v=f.split(",");i[n].render=="datetime"?v&&v.length>=2&&(e[d+"-default"]=[new Date(v[0]),new Date(v[1])]):(e[d+"-start"]=(u=v[0])!=null?u:"",e[d+"-end"]=(b=v[1])!=null?b:"")}else i[n].operator=="NULL"||i[n].operator=="NOT NULL"?e[d]=!!f:i[n].render=="datetime"?e[d+"-default"]=new Date(f):e[d]=f}this.comSearch.fieldData.set(d,{operator:i[n].operator,render:i[n].render,comSearchRender:i[n].comSearchRender})}}if(this.table.acceptQuery){const n=[];for(const d in t){const f=this.comSearch.fieldData.get(d);f&&n.push({field:d,val:t[d],operator:f.operator,render:f.render})}this.table.filter.search=n}this.comSearch.form=Object.assign(this.comSearch.form,e)}});this.api=t,this.form=Object.assign(this.form,i),this.table=Object.assign(this.table,e),this.before=o,this.after=u;const b=be();this.initComSearch(ge(b)?{}:b.query)}runBefore(t,e={}){return this.before&&this.before[t]&&typeof this.before[t]=="function"?this.before[t]({...e})!==!1:!0}runAfter(t,e={}){return this.after&&this.after[t]&&typeof this.after[t]=="function"?this.after[t]({...e})!==!1:!0}getSelectionIds(){var e;const t=[];return(e=this.table.selection)==null||e.forEach(i=>{t.push(i[this.table.pk])}),t}}const tt="/admin/routine.attachment/";class lt{constructor(t){w(this,"controllerUrl");w(this,"actionUrl");this.controllerUrl=t,this.actionUrl=new Map([["index",t+"index"],["add",t+"add"],["edit",t+"edit"],["del",t+"del"],["sortable",t+"sortable"]])}index(t={}){return O({url:this.actionUrl.get("index"),method:"get",params:t})}edit(t){return O({url:this.actionUrl.get("edit"),method:"get",params:t})}del(t){return O({url:this.actionUrl.get("del"),method:"DELETE",params:{ids:t}},{showSuccessMessage:!0})}postData(t,e){if(!this.actionUrl.has(t))throw new Error("action does not exist");return O({url:this.actionUrl.get(t),method:"post",data:e},{showSuccessMessage:!0})}sortableApi(t,e){return O({url:this.actionUrl.get("sortable"),method:"post",data:{id:t,targetId:e}})}}const at={class:"default-main ba-table-box"},st=K({__name:"form",setup(l){const t=U(),e=_e(["edit","delete"]);e[1].popconfirm.title="\u786E\u5B9A\u8981\u5220\u9664\u5417?";const i=new et(new lt(tt),{column:[{type:"selection",align:"center",operator:!1},{label:"ID",prop:"id",align:"center",operator:"LIKE",operatorPlaceholder:"Fuzzy query",width:70},{label:"\u9879\u76EE\u540D\u79F0",prop:"name",align:"center",operator:"LIKE",operatorPlaceholder:"Fuzzy query"},{label:"\u5927\u5C0F",prop:"size",align:"center",formatter:(o,u,b)=>{const n=parseFloat(b),d=Math.floor(Math.log(n)/Math.log(1024));return(n/Math.pow(1024,d)).toFixed(d<1?0:2)+" "+["B","KB","MB","GB","TB"][d]},operator:"RANGE",sortable:"custom",operatorPlaceholder:"bytes"},{label:"\u7C7B\u578B",prop:"mimetype",align:"center",operator:"LIKE","show-overflow-tooltip":!0,operatorPlaceholder:"Fuzzy query"},{label:"\u4E0A\u4F20\u6B21\u6570",prop:"quote",align:"center",width:150,operator:"RANGE",sortable:"custom"},{label:"\u539F\u59CB\u540D\u79F0",prop:"name",align:"center","show-overflow-tooltip":!0,operator:"LIKE",operatorPlaceholder:"Fuzzy query"},{label:"\u5B58\u50A8\u65B9\u5F0F",prop:"storage",align:"center",width:100,operator:"LIKE",operatorPlaceholder:"Fuzzy query"},{label:"\u521B\u5EFA\u65F6\u95F4",prop:"lastuploadtime",align:"center",render:"datetime",operator:"RANGE",width:160,sortable:"custom"},{label:"\u521B\u5EFA\u4EBA",prop:"admin.nickname",align:"center",operator:"LIKE",operatorPlaceholder:"Fuzzy query"},{label:"\u64CD\u4F5C",align:"center",width:"100",render:"buttons",buttons:e,operator:!1}],defaultOrder:{prop:"lastuploadtime",order:"desc"}});return we("baTable",i),ke(()=>{var o;i.table.ref=t.value,i.mount(),(o=i.getIndex())==null||o.then(()=>{i.initSort()})}),(o,u)=>(r(),c("div",at,[y(Je,{buttons:["refresh","edit","comSearch","quickSearch","columnDisplay"]}),y(je,{ref_key:"tableRef",ref:t},null,512)]))}});export{st as default};
