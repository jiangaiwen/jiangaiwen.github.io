
    /**
     * 由 Fantastic-admin 提供技术支持
     * Powered by Fantastic-admin
     * Gitee  https://fantastic-admin.gitee.io
     * Github https://fantastic-admin.github.io
     */
    
import{m as t}from"./mapbox-gl-C9fNtGM9.js";import{d as n,r as a,o as i,n as s,c as r}from"./index-C-3tFKuV.js";const m={class:"full",id:"inspectMap"},T=n({__name:"MapBox",setup(p){let e=a({}),o=a(null);const l=()=>{t.accessToken="pk.eyJ1IjoiY2FvcnVpYmluIiwiYSI6ImNsYWR3MjEwMjA5b2UzcW85dmZlbTVtMTAifQ.4v81PyG-oZ6TVL7IuyCbrg",e.value=new t.Map({container:"inspectMap",center:[116.177794023,39.905043954],view:"3D",style:{version:8,name:"BlankMap",sources:{"tian-satellite1":{type:"raster",tiles:["http://t0.tianditu.gov.cn/img_w/wmts?tk=1883a2da124fe27b3c281f9d65356e82&SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=w&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&FORMAT=tiles"],tileSize:256,minZoom:0,maxZoom:18}},layers:[{id:"tian-satellite1",type:"raster",source:"tian-satellite1",layout:{visibility:"none"},minZoom:0,maxZoom:22}],glyphs:"mapbox://fonts/mapbox/{fontstack}/{range}.pbf"},showZoomControl:!0,zoom:10}),o.value=new t.FullscreenControl,e.value.addControl(o,"top-left"),e.value.on("load",()=>{e.value.setFog({}),e.value.setLayoutProperty("tian-satellite1","visibility","visible")})};return i(()=>{l()}),(c,u)=>(s(),r("div",m))}});export{T as default};
