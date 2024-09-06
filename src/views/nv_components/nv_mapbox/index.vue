<template>
    <PageMain>
        <div class="full" id="inspectMap"></div>
    </PageMain>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import "mapbox-gl/dist/mapbox-gl.css";
import mapbox from 'mapbox-gl';
import MapboxLanguage from "@mapbox/mapbox-gl-language";

let map: any = ref({})
let fullscreenControl: any = ref(null)
const jwd = [{
    zoom: 12,
    end: [113.231745,23.163224]
}, {
    zoom: 10,
    end: [113.288915,23.331363]
}, {
    zoom: 11,
    end: [113.341762,22.948051]
}, {
    zoom: 10,
    end: [113.309353,22.99428]
}, {
    zoom: 12,
    end: [113.575778,23.182908]
}, {
    zoom: 10,
    end: [113.940088,23.07634]
}, {
    zoom: 11,
    end: [114.382725,23.080317]
}, {
    zoom: 12,
    end: [113.351436,23.121899]
}]
let index = 0

const initMap = () => {
    mapbox.accessToken = 'pk.eyJ1Ijoic3VuMzY4IiwiYSI6ImNsdDFmajB2aDE5cm0ya3A0bW12bHhtZmUifQ.NCRzTY2414NbQLm63QdyNw'
    
    // 创建地图实例
    map.value = new mapbox.Map({
        container: "inspectMap",
        center: [113.27324, 23.15792],
        // style: 'mapbox://styles/mapbox/streets-v9',
        // style: 'mapbox://styles/sun368/clti1mas900mb01r5hce7dzxd',
        // style: "mapbox://styles/mapbox/satellite-streets-v12",
        style: "mapbox://styles/mapbox/satellite-streets-v11",
        zoom: 2.5,  // 层级
        pitch: 0, // 相对于地面3D视角的角度
        bearing: 0, // 东西南北 方向，正北方为 0
        projection: 'globe',// 为 3D 地球
        antialias: false, //抗锯齿，通过false关闭提升性能
        essential: true, //不知道什么意思，我看人家写我就写了
        renderWorldCopies: false, //可理解为loop，在projection: 'globe'时无效
        skipOnboarding: true,//可选择不等待瓦片加载
    })

    map.value.on("style.load", () => {
        // 开启宇宙、星空
        map.value.setFog({
            color: "rgb(186, 210, 235)",
            'high-color': 'rgb(36, 92, 223)', 
            'horizon-blend': 0.02, 
            'space-color': 'rgb(11, 11, 25)', 
            'star-intensity': 0.6 
        })
    })
    

    /* 全屏控件 */
    map.value.addControl(new mapbox.FullscreenControl())
    /* 导航控件 */
    map.value.addControl(
        new mapbox.NavigationControl(),
        /* top-left,top-right,bottom-right,bottom-left */
        'bottom-right'
    )
    /* 比例尺 */
    map.value.addControl(
        new mapbox.ScaleControl()
    )
    /* 汉化 */
    map.value.addControl(
        new MapboxLanguage({
            defaultLanguage: 'zh-Hans'
        })
    )

    function autoFly(end: any, zoom: number) {
        map.value.flyTo({
            // These options control the ending camera position: centered at
            // the target, at zoom level 9, and north up.
            center: end,
            zoom: zoom,
            bearing: 0, //目标方位角
            speed: 0.8, // 速度
            curve: 1, // change the speed at which it zooms out

            // This can be any easing function: it takes a number between
            // 0 and 1 and returns another number between 0 and 1.
            easing: function(t: any) {
                return t;
            }
        })
    }

    setInterval(()=>{
        if(index < jwd.length) {
            autoFly(jwd[index].end, jwd[index].zoom)
            index++
        } else {
            index = 0;
            autoFly(jwd[index].end, jwd[index].zoom)
        }
        
    }, 8000)
}

onMounted(() => {
    initMap()
})
</script>