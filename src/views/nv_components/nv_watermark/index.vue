<template>
    <PageMain>
        <div class="full water-marker">
            <el-button @click="setWaterMarker(-1)" type="primary">默认局部水印</el-button>
            <el-button @click="setWaterMarker(0)" type="primary">生成全局水印</el-button>
            <el-button @click="setWaterMarker(1)" type="primary">生成默认颜色水印</el-button>
            <el-button @click="setWaterMarker(2)" type="primary">生成随机颜色水印</el-button>
            <el-input v-model="opacity" style="width: 100px; margin: 0 10px"></el-input>
            <el-button @click="setWaterMarker(3)" type="primary">设置透明度</el-button>
            <el-button @click="setWaterMarker(4)" type="primary">取消水印</el-button>

            <el-descriptions title="配置项 " :column="1" border class="descriptions">
                <el-descriptions-item label="content"> 水印内容，默认为 'Vue3 Admin' </el-descriptions-item>
                <el-descriptions-item label="container"> 水印容器，默认生成在 document.body 下面 </el-descriptions-item>
                <el-descriptions-item label="globalAlpha"> 设置图形和图像透明度的值，默认为 0.3 </el-descriptions-item>
                <el-descriptions-item label="height"> 水印高度，默认为 200 </el-descriptions-item>
                <el-descriptions-item label="width"> 水印宽度，默认为 100 </el-descriptions-item>
                <el-descriptions-item label="fillStyle"> 水印颜色，默认为 '#000' </el-descriptions-item>
                <el-descriptions-item label="textAlign"> 文字对齐，默认为 'left' </el-descriptions-item>
                <el-descriptions-item label="textBaseline"> 基准线，默认为 'bottom' </el-descriptions-item>
                <el-descriptions-item label="rotate"> 文字旋转角度，默认为 '16' 计算方式为 (Math.PI * rotate) / 180 </el-descriptions-item>
                <el-descriptions-item label="iconStyle"> 图标的样式，默认样式为 { width: "1em", height: " 1em" } </el-descriptions-item>
            </el-descriptions>
        </div>
    </PageMain>
</template>
<script setup lang="ts">
import waterMarker from '@/utils/waterMarker';
import { getColor } from '@/utils/index'

const opacity = ref(0.3)
let selectType = ref(-1)
const options = {
    rotate: -10,
    fillStyle: '#000',
    globalAlpha: opacity.value
}

const message = ['red']
// 随机生成颜色
for (let i = 0; i < 30; i++) {
    message.push(getColor())
}

function getRandom(start:any, end:any) {
    const differ = end - start
    const random = Math.random()
    return (start + differ * random).toFixed(0)
}

const setWaterMarker = (type:number) => {
    switch (type) {
        case -1:
            selectType.value = type
            options.container = document.getElementsByClassName('water-marker')[0]
            waterMarker(options)
            return;
        case 0:
            selectType.value = type
            delete options.container
            waterMarker(options)
            return;
        case 1:
            options.fillStyle = '#000'
            waterMarker(options)
            return;
        case 2:
            options.fillStyle = message[getRandom(0, 30)]
            waterMarker(options)
            return;
        case 3:
            options.globalAlpha = opacity.value
            waterMarker(options)
            return;
        case 4:
            nextTick(() => {
                const wm = document.getElementsByClassName('__wm')[0]
                if (wm) {
                    if(selectType.value===-1){
                        wm.remove()
                    }else {
                        document.body.removeChild(wm)
                    }
                }
            })
    }
}

onMounted(() => {
    nextTick(()=>{
        setWaterMarker(-1)
    })
})
</script>
<style lang="scss" scoped>
.descriptions{
    margin-top: 50px;
}
</style>