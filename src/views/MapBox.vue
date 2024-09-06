<template>
    <div class="full" id="inspectMap"></div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';
import "mapbox-gl/dist/mapbox-gl.css";
// 引入语言包（引入天地图后 ，mapbox 原生的 地名就失效了）
// import MapboxLanguage from "@mapbox/mapbox-gl-language";
// 搜索控件
// import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
// import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
// 引入地图
// import mapboxgl from 'mapbox-gl';


let map: any = ref({})
let fullscreenControl: any = ref(null)
// const center = ref([116.177794023, 39.905043954])
// const flyZoom = ref(16)

const initMap = () => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiY2FvcnVpYmluIiwiYSI6ImNsYWR3MjEwMjA5b2UzcW85dmZlbTVtMTAifQ.4v81PyG-oZ6TVL7IuyCbrg'
    // class Cjmapbox extends mapboxgl.Map {}
    // Cjmapbox.prototype.__proto__._authenticate = function () {
    //     return true;
    // };
    // const bounds = [
    //     [101.25543088037318, 29.34312792014849], //界限的西南坐标
    //     [106.4820798028914, 32.151061649798784], //界限的东北坐标
    // ];
    // 创建地图实例
    map.value = new mapboxgl.Map({
        container: "inspectMap",
        center: [116.177794023, 39.905043954],
        view: "3D",
        // maxBounds: bounds, // 边界
        // 背景设置
        style: {
            version: 8,
            name: "BlankMap",
            // sources: {},
            // layers: [
            //     {
            //         id: "background",
            //         type: "background",
            //         paint: {
            //             "background-color": "#08294A",
            //         },
            //     },
            // ],
            sources: {
                "tian-satellite1": {
                    type: "raster",
                    tiles: [
                    "http://t0.tianditu.gov.cn/img_w/wmts?tk=1883a2da124fe27b3c281f9d65356e82&SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=w&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&FORMAT=tiles",
                    ],
                    tileSize: 256,
                    minZoom: 0,
                    maxZoom: 18,
                },
            },
            layers: [
                {
                    id: "tian-satellite1",
                    type: "raster",
                    source: "tian-satellite1",
                    layout: {
                        visibility: "none",
                    },
                    minZoom: 0,
                    maxZoom: 22,
                },
            ],
            // 配置天地图的字体
            glyphs: "mapbox://fonts/mapbox/{fontstack}/{range}.pbf",
        },
        showZoomControl: true, // mapbox控制工具
        zoom: 10, // 层级
        // pitch: 0, // 地图倾斜(相对于地面3D视角的角度)
        // bearing: 0, // 东西南北 方向，正北方为 0
        // maxZoom: 18, //最大层级
        // minZoom: 2, //最小层级
        // preserveDrawingBuffer: true, //是否截取当前地图
    })

    fullscreenControl.value = new mapboxgl.FullscreenControl()
    map.value.addControl(fullscreenControl, 'top-left')
    
    // 地图初始化加载操作
    map.value.on("load", () => {
        // map.value._logoControl && map.value.removeControl(map.value._logoControl); //去除mapbox logo
        map.value.setFog({}); // 设置天气
        map.value.setLayoutProperty(
            "tian-satellite1",
            "visibility",
            "visible"
        )
        // // // 1.加载数据源
        // map.value.addSource("DZDT_Vector_BZB", {
        //     type: "raster",
        //     tiles: [
        //         "http://t0.tianditu.gov.cn/img_w/wmts?tk=1883a2da124fe27b3c281f9d65356e82&SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=w&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&FORMAT=tiles",
        //     ],
        // });
        // // 2.加载天空盒子图层
        // map.value.addLayer({
        //     id: "sky",
        //     type: "sky",
        //     paint: {
        //         "sky-type": "atmosphere",
        //         "sky-atmosphere-sun": [0.0, 0.0],
        //         "sky-atmosphere-sun-intensity": 15,
        //     },
        // });
        // // 3.加载地图图层，控制显示隐藏
        // map.value.addLayer({
        //     id: "TDT_TITLE_ID_ONE",
        //     type: "raster",
        //     source: "DZDT_Vector_BZB",
        //     layout: { visibility: "visible" },
        // });
    
    });
}

// const clearArrowLayerFn = () => {

// }

// const loadArrowLayersFn = () => {

// }

// const clearTbLayerFn = () => {

// }

// const loadTbLayersFn = () => {

// }

// const flyTo = () => {

// }

onMounted(() => {
    initMap()
})
</script>