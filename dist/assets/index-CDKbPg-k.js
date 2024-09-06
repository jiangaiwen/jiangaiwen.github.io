
    /**
     * 由 Fantastic-admin 提供技术支持
     * Powered by Fantastic-admin
     * Gitee  https://fantastic-admin.gitee.io
     * Github https://fantastic-admin.github.io
     */
    
import{d as A,r as h,o as S,R as w,k as b,n as B,B as M,g as t,e as V,f as l,q as n,i as $,U as N,S as R,W as E,_ as I}from"./index-DMSqAzil.js";function _(v){const{container:u=document.body,width:p="200",height:a="100",textAlign:y="left",textBaseline:x="bottom",font:d="16px Microsoft Yahei",fillStyle:s="#000",content:e="Vue3 Admin",globalAlpha:r=.3,rotate:f=16,zIndex:i=1e3}=v,m=window.devicePixelRatio,c=document.createElement("canvas");c.style.width=p+"px",c.style.height=a+"px",c.setAttribute("width",m*p),c.setAttribute("height",m*a);const o=c.getContext("2d");o.globalAlpha=r,o.textAlign=y,o.textBaseline=x,o.font=d,o.fillStyle=s,o.rotate(Math.PI*f/180),o.fillText(e,parseFloat(p)/2*m,parseFloat(a)/2*m);const k=c.toDataURL(),g=document.querySelector(".__wm")||document.createElement("div"),C=`
        position:absolute;
        top:0px;
        left:0px;
        width:100%;
        height:100%;
        z-index:${i};
        pointer-events:none;
        background-repeat:repeat;
        background-image:url('${k}');`;g.setAttribute("style",C),g.classList.add("__wm"),u.style.position="relative",u.appendChild(g)}const P={class:"full water-marker"},T=A({__name:"index",setup(v){const u=h(.3);let p=h(-1);const a={rotate:-10,fillStyle:"#000",globalAlpha:u.value},y=["red"];for(let s=0;s<30;s++)y.push(E());function x(s,e){const r=e-s,f=Math.random();return(s+r*f).toFixed(0)}const d=s=>{switch(s){case-1:p.value=s,a.container=document.getElementsByClassName("water-marker")[0],_(a);return;case 0:p.value=s,delete a.container,_(a);return;case 1:a.fillStyle="#000",_(a);return;case 2:a.fillStyle=y[x(0,30)],_(a);return;case 3:a.globalAlpha=u.value,_(a);return;case 4:w(()=>{const e=document.getElementsByClassName("__wm")[0];e&&(p.value===-1?e.remove():document.body.removeChild(e))})}};return S(()=>{w(()=>{d(-1)})}),(s,e)=>{const r=b("el-button"),f=b("el-input"),i=b("el-descriptions-item"),m=b("el-descriptions"),c=R;return B(),M(c,null,{default:t(()=>[V("div",P,[l(r,{onClick:e[0]||(e[0]=o=>d(-1)),type:"primary"},{default:t(()=>[n("默认局部水印")]),_:1}),l(r,{onClick:e[1]||(e[1]=o=>d(0)),type:"primary"},{default:t(()=>[n("生成全局水印")]),_:1}),l(r,{onClick:e[2]||(e[2]=o=>d(1)),type:"primary"},{default:t(()=>[n("生成默认颜色水印")]),_:1}),l(r,{onClick:e[3]||(e[3]=o=>d(2)),type:"primary"},{default:t(()=>[n("生成随机颜色水印")]),_:1}),l(f,{modelValue:$(u),"onUpdate:modelValue":e[4]||(e[4]=o=>N(u)?u.value=o:null),style:{width:"100px",margin:"0 10px"}},null,8,["modelValue"]),l(r,{onClick:e[5]||(e[5]=o=>d(3)),type:"primary"},{default:t(()=>[n("设置透明度")]),_:1}),l(r,{onClick:e[6]||(e[6]=o=>d(4)),type:"primary"},{default:t(()=>[n("取消水印")]),_:1}),l(m,{title:"配置项 ",column:1,border:"",class:"descriptions"},{default:t(()=>[l(i,{label:"content"},{default:t(()=>[n(" 水印内容，默认为 'Vue3 Admin' ")]),_:1}),l(i,{label:"container"},{default:t(()=>[n(" 水印容器，默认生成在 document.body 下面 ")]),_:1}),l(i,{label:"globalAlpha"},{default:t(()=>[n(" 设置图形和图像透明度的值，默认为 0.3 ")]),_:1}),l(i,{label:"height"},{default:t(()=>[n(" 水印高度，默认为 200 ")]),_:1}),l(i,{label:"width"},{default:t(()=>[n(" 水印宽度，默认为 100 ")]),_:1}),l(i,{label:"fillStyle"},{default:t(()=>[n(" 水印颜色，默认为 '#000' ")]),_:1}),l(i,{label:"textAlign"},{default:t(()=>[n(" 文字对齐，默认为 'left' ")]),_:1}),l(i,{label:"textBaseline"},{default:t(()=>[n(" 基准线，默认为 'bottom' ")]),_:1}),l(i,{label:"rotate"},{default:t(()=>[n(" 文字旋转角度，默认为 '16' 计算方式为 (Math.PI * rotate) / 180 ")]),_:1}),l(i,{label:"iconStyle"},{default:t(()=>[n(' 图标的样式，默认样式为 { width: "1em", height: " 1em" } ')]),_:1})]),_:1})])]),_:1})}}}),q=I(T,[["__scopeId","data-v-a8741191"]]);export{q as default};