import{i as w}from"./echarts.46db1d66.js";import{_ as b,i as L,j as R}from"./index.c86cece1.js";import{d as k,B as V,t as W,R as S,r as m,o as M,f as H,g as u,v as p,h as e,w as t,C as x,F as U,a5 as $,a6 as N,L as O,a7 as j,a8 as G,u as E,G as P,H as X,k as q}from"./vue.cb8a278b.js";const J=k({__name:"HelloWorld",props:{msg:null},setup(c){V();const l=W(0),a=S({count:0});return(B,r)=>{const i=m("el-button");return M(),H(U,null,[u("h1",null,p(c.msg),1),e(i,{type:"primary",onClick:r[0]||(r[0]=s=>a.count++)},{default:t(()=>[x("count is: "+p(a.count),1)]),_:1}),e(i,{type:"success",onClick:r[1]||(r[1]=s=>l.value++)},{default:t(()=>[x("count is: "+p(l.value),1)]),_:1})],64)}}});var K=b(J,[["__scopeId","data-v-4b873fe8"]]);const o=c=>(P("data-v-522fcf82"),c=c(),X(),c),Q={class:"default-main"},Y={class:"banner"},Z={class:"welcome suspension"},uu=o(()=>u("img",{class:"welcome-img",src:"https://demo.buildadmin.com/static/images/avatar.png",alt:""},null,-1)),eu={class:"welcome-text"},su={class:"welcome-title"},tu={class:"welcome-note"},au={class:"small-panel-box"},ou={class:"small-panel user-reg suspension"},nu=o(()=>u("div",{class:"small-panel-title"},"\u8FD9\u662F\u6807\u9898",-1)),lu={class:"small-panel-content"},cu={class:"small-panel user-reg suspension"},ru=o(()=>u("div",{class:"small-panel-title"},"\u4E3B\u9898\u5207\u6362",-1)),iu={class:"small-panel-content"},du={class:"small-panel user-reg suspension"},_u=o(()=>u("div",{class:"small-panel-title"},"\u8FD9\u662F\u6807\u9898",-1)),mu={class:"small-panel-content"},pu={class:"content-left"},hu=o(()=>u("span",{id:"user_reg_number"},"5456",-1)),Fu=o(()=>u("div",{class:"content-right"},"+14%",-1)),vu={class:"small-panel user-reg suspension"},Eu=o(()=>u("div",{class:"small-panel-title"},"\u8FD9\u662F\u6807\u9898",-1)),Bu={class:"small-panel-content"},fu={class:"content-left"},Cu=o(()=>u("span",{id:"user_reg_number"},"5456",-1)),gu=o(()=>u("div",{class:"content-right"},"+14%",-1)),Du={class:"growth-chart"},Au=k({__name:"Home",setup(c){const l=$(),a=S({charts:[],remark:"\u6700\u8FD1\u66F4\u65B0\uFF1A\u{1F389} VUE3.0 + Typescript + Vite + ElementPlus \u540E\u53F0\u7BA1\u7406\u6A21\u677F\u3002 \u{1F4E6} update\uFE0F\uFF1A vue v3.2.25\uFF1B \u4E3B\u9898\u5207\u6362\uFF1B vscode\u4EE3\u7801\u667A\u80FD\u63D0\u9192 v1.1.2\uFF1B \u7EC4\u4EF6\u6309\u9700\u81EA\u52A8\u5BFC\u5165\u3002",workingTimeFormat:"",pauseWork:!1}),B=()=>{const s=w(l.value[0]),d={grid:{top:0,right:0,bottom:20,left:0},xAxis:{data:["\u5468\u4E00","\u5468\u4E8C","\u5468\u4E09","\u5468\u56DB","\u5468\u4E94","\u5468\u516D","\u5468\u65E5"]},yAxis:{},legend:{data:["\u6CE8\u518C\u91CF","\u8BBF\u95EE\u91CF"],textStyle:{color:"#73767a"}},series:[{name:"\u6CE8\u518C\u91CF",data:[100,160,280,230,190,200,480],type:"line",smooth:!0,areaStyle:{color:"#8595F4"}},{name:"\u8BBF\u95EE\u91CF",data:[45,180,146,99,210,127,288],type:"line",smooth:!0,areaStyle:{color:"#F48595",opacity:.5}}]};s.setOption(d),a.charts.push(s)},r=()=>{const s=w(l.value[1]),d=h(50),n={tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{type:"scroll",orient:"vertical",right:10,top:20,bottom:20,data:d.legendData,textStyle:{color:"#73767a"}},series:[{name:"\u59D3\u6C0F",type:"pie",radius:"55%",center:["40%","50%"],data:d.seriesData,emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]};function h(F){const _=["\u8D75","\u94B1","\u5B59","\u674E","\u5468","\u5434","\u90D1","\u738B","\u51AF","\u9648","\u891A","\u536B","\u848B","\u6C88","\u97E9","\u6768","\u6731","\u79E6","\u5C24","\u8BB8","\u4F55","\u5415","\u65BD","\u5F20","\u5B54","\u66F9","\u4E25","\u534E","\u91D1","\u9B4F","\u9676","\u59DC","\u621A","\u8C22","\u90B9","\u55BB","\u67CF","\u6C34","\u7AA6","\u7AE0","\u4E91","\u82CF","\u6F58","\u845B","\u595A","\u8303","\u5F6D","\u90CE","\u9C81","\u97E6","\u660C","\u9A6C","\u82D7","\u51E4","\u82B1","\u65B9","\u4FDE","\u4EFB","\u8881","\u67F3","\u9146","\u9C8D","\u53F2","\u5510","\u8D39","\u5EC9","\u5C91","\u859B","\u96F7","\u8D3A","\u502A","\u6C64","\u6ED5","\u6BB7","\u7F57","\u6BD5","\u90DD","\u90AC","\u5B89","\u5E38","\u4E50","\u4E8E","\u65F6","\u5085","\u76AE","\u535E","\u9F50","\u5EB7","\u4F0D","\u4F59","\u5143","\u535C","\u987E","\u5B5F","\u5E73","\u9EC4","\u548C","\u7A46","\u8427","\u5C39","\u59DA","\u90B5","\u6E5B","\u6C6A","\u7941","\u6BDB","\u79B9","\u72C4","\u7C73","\u8D1D","\u660E","\u81E7","\u8BA1","\u4F0F","\u6210","\u6234","\u8C08","\u5B8B","\u8305","\u5E9E","\u718A","\u7EAA","\u8212","\u5C48","\u9879","\u795D","\u8463","\u6881","\u675C","\u962E","\u84DD","\u95F5","\u5E2D","\u5B63","\u9EBB","\u5F3A","\u8D3E","\u8DEF","\u5A04","\u5371"],f=[],C=[];for(var g=0;g<F;g++){var D=Math.random()>.65?v(4,1)+"\xB7"+v(3,0):v(2,1);f.push(D),C.push({name:D,value:Math.round(Math.random()*1e5)})}return{legendData:f,seriesData:C};function v(I,T){const z=Math.ceil(Math.random()*I+T),A=[];for(var y=0;y<z;y++)A.push(_[Math.round(Math.random()*_.length-1)]);return A.join("")}}s.setOption(n),a.charts.push(s)},i=()=>{q(()=>{for(const s in a.charts)a.charts[s].resize()})};return N(()=>{i()}),O(()=>{B(),r(),j(window,"resize",i)}),G(()=>{for(const s in a.charts)a.charts[s].dispose()}),(s,d)=>{const n=m("el-col"),h=m("Icon"),F=m("el-row"),_=m("el-card");return M(),H("div",Q,[u("div",Y,[u("div",Z,[uu,u("div",eu,[u("div",su,p("Admin\uFF0C"+E(L)()),1),u("div",tu,p(a.remark),1)])])]),u("div",au,[e(F,{gutter:20},{default:t(()=>[e(n,{sm:12,lg:6},{default:t(()=>[u("div",ou,[nu,u("div",lu,[e(K,{msg:""})])])]),_:1}),e(n,{sm:12,lg:6},{default:t(()=>[u("div",cu,[ru,u("div",iu,[e(R)])])]),_:1}),e(n,{sm:12,lg:6},{default:t(()=>[u("div",du,[_u,u("div",mu,[u("div",pu,[e(h,{color:"#8595F4",size:"20",name:"fa fa-line-chart"}),hu]),Fu])])]),_:1}),e(n,{sm:12,lg:6},{default:t(()=>[u("div",vu,[Eu,u("div",Bu,[u("div",fu,[e(h,{color:"#8595F4",size:"20",name:"fa fa-line-chart"}),Cu]),gu])])]),_:1})]),_:1})]),u("div",Du,[e(F,{gutter:20},{default:t(()=>[e(n,{class:"lg-mb-20",xs:24,sm:24,md:24,lg:12},{default:t(()=>[e(_,{shadow:"hover",header:"\u8FD9\u662F\u6807\u9898"},{default:t(()=>[u("div",{class:"user-source-chart",ref:E(l).set},null,512)]),_:1})]),_:1}),e(n,{class:"lg-mb-20",xs:24,sm:24,md:24,lg:12},{default:t(()=>[e(_,{shadow:"hover",header:"\u8FD9\u662F\u6807\u9898"},{default:t(()=>[u("div",{class:"user-surname-chart",ref:E(l).set},null,512)]),_:1})]),_:1})]),_:1})])])}}});var bu=b(Au,[["__scopeId","data-v-522fcf82"]]);export{bu as default};