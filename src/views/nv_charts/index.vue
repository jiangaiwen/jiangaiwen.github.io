<template>
    <PageMain>
        <div id="mapContainer"></div>

        <el-row :gutter="10">
            <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
                <el-card class="box-card">
                    <template #header>
                        <div class="card-header">
                            <span><el-icon><MostlyCloudy /></el-icon>{{ state.today.city }}天气</span>
                        </div>
                    </template>

                    <div class="city-info">
                        <p class="city">{{ state.today.city }}</p>
                        <p class="weather">{{ state.today.weather }}</p>
                        <h2 class="temp">
                            <em>{{ state.today.temperature }}</em>℃
                        </h2>
                        <div class="detail">
                            <span>风力：{{ state.today.windPower }}</span>|
                            <span>风向：{{ state.today.windDirection }}</span>|
                            <span>空气湿度：{{ state.today.humidity }}</span>
                        </div>
                    </div>
                    <!-- <div class="future">
                        <div class="group" v-if="state.futureData.length > 0">
                            明天：
                            <span class="tm">白天:{{ state.futureData[1].dayTemp }}℃ {{ state.futureData[1].dayWeather}} {{ state.futureData[1].dayWindDir }}风 {{ state.futureData[1].dayWindPower }} </span>
                            <span class="tm"> 夜间:{{ state.futureData[1].nightTemp }}℃ {{ state.futureData[1].nightWeather }} {{ state.futureData[1].nightWindDir }}风 {{ state.futureData[1].nightWindPower}} </span>
                        </div>
                        <div class="group" v-if="state.futureData.length > 0">
                            后天：
                            <span class="tm">白天:{{ state.futureData[2].dayTemp }}℃ {{ state.futureData[2].dayWeather}} {{ state.futureData[2].dayWindDir }}风 {{ state.futureData[2].dayWindPower }} </span>
                            <span class="tm"> 夜间:{{ state.futureData[2].nightTemp }}℃ {{ state.futureData[2].nightWeather }} {{ state.futureData[2].nightWindDir }}风 {{ state.futureData[2].nightWindPower}} </span>
                        </div>
                    </div>  -->
                </el-card>
            </el-col>
            <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
                <el-card class="box-card">
                    <template #header>
                        <div class="card-header">
                            <span><el-icon><MostlyCloudy /></el-icon>未来四天天气</span>
                        </div>
                    </template>
                    <div class="e-chart" :ref="chartRefs.set"></div>
                </el-card>
            </el-col>
            <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
                <el-card class="box-card">
                    <template #header>
                        <div class="card-header">
                            <span><el-icon><Position /></el-icon>瀑布图</span>
                        </div>
                    </template>
                    <div class="e-chart" :ref="chartRefs.set"></div>
                </el-card>
            </el-col>
            <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
                <el-card class="box-card">
                    <template #header>
                        <div class="card-header">
                            <span><el-icon><PieChart /></el-icon>饼图</span>
                        </div>
                    </template>
                    <div class="e-chart" :ref="chartRefs.set"></div>
                </el-card>
            </el-col>
            
        </el-row>
    </PageMain>
</template>

<script setup lang="ts">
import AMapLoader from '@amap/amap-jsapi-loader';
import { ref, reactive, onActivated, onMounted, onBeforeMount, nextTick } from 'vue';
import * as echarts from "echarts";
import { useTemplateRefsList, useEventListener } from '@vueuse/core';

const chartRefs = useTemplateRefsList<HTMLDivElement>()

const state: {
    charts: any[]
    today: object
    futureData: any[]
} = reactive({
    charts: [],
    today: {},
    futureData: [],
})

const tempArr = ref([])
const xData = ref([])
const map = ref<any>(null);
let locationArr = ref<any>([113.27324, 23.15792]);//广州

function initMap() {
    AMapLoader.load({
        key: '24fa3b244791dd89d4ad1c612c44ecc0',
        version: '2.0',
        plugins: [
            "AMap.ToolBar",
            "AMap.Scale",
            "AMap.HawkEye",
            "AMap.MapType",
            "AMap.Geolocation",
            "AMap.Geocoder",
            "AMap.Weather",
            "AMap.CitySearch",
            "AMap.InfoWindow",
            "AMap.Marker",
            "AMap.Pixel"
        ]
    }).then((AMap: any) => {
        map.value = new AMap.Map("mapContainer", {
            //设置地图容器id
            resizeEnable: true,
            viewMode: "3D", //是否为3D地图模式
            zoom: 10, //初始化地图级别
            center: locationArr.value, //初始化地图中心点位置
        });
        getGeolocation(AMap);
        getCitySearch(AMap)

    }).catch((e: any) => {
        console.log(e);
    })
}

// 浏览器定位
const getGeolocation = (AMap: any) => {
    const geolocation = new AMap.Geolocation({
        enableHighAccuracy: true, //是否使用高精度定位，默认:true
        timeout: 1000, //超过10秒后停止定位，默认：5s
        position: "RB", //定位按钮的停靠位置
        offset: [10, 20], //定位按钮与设置的停靠位置的偏移量，默认：[10, 20]
        zoomToAccuracy: true, //定位成功后是否自动调整地图视野到定位点
    });
    map.value.addControl(geolocation);
    geolocation.getCurrentPosition(function (status: string, result: any) {
        if (status == "complete") {
            onComplete(result);
        } else {
            onError(result);
        }
    });
};

// IP定位获取当前城市信息
const getCitySearch = (AMap: any) => {
    const citySearch = new AMap.CitySearch();
    citySearch.getLocalCity(function (
        status: string,
        result: {
            city: string;
            info: string;
        }
    ) {
        if (status === "complete" && result.info === "OK") {
            console.log(
                "🚀 ~ file: map-container.vue:88 ~ getCitySearch ~ result:",
                result
            );
            // 查询成功，result即为当前所在城市信息
            getWeather(AMap, result.city);
        }
    });
};

// 天气
const getWeather = (AMap: any, cityName: string) => {
    //加载天气查询插件
    AMap.plugin('AMap.Weather', function () {
        //创建天气查询实例
        var weather = new AMap.Weather();

        //执行实时天气信息查询
        weather.getLive(cityName, function (err: any, data: {
            city: string;
            weather: string;
            temperature: string;
            windDirection: string;
            windPower: string;
            humidity: string;
            reportTime: string;
        }) {
            if (!err) {
                state.today = data
            }
        });
        //未来的天气
        weather.getForecast(cityName, function (err: any, data: { forecasts: string | any[] }) {
            console.log(
                "🚀 ~ file: map-container.vue:186 ~ getWeather ~ data:",
                data
            );

            if (err) {
                return
            }
            state.futureData = data.forecasts

            data.forecasts.forEach(item => {
                xData.value.push(item.date)
                tempArr.value.push(item.dayTemp)
            })
            initWeatherChart()
        });
    });
}


const initWeatherChart = () => {
    const myChat = echarts.init(chartRefs.value[0] as HTMLElement)
    let option = {
        grid: {
            top: 10,
            left: 35,
            right: 20,
            bottom: 20
        },
        tooltip: {
            trigger: "axis"
        },
        xAxis: {
            type: 'category',
            axisLine: {
                lineStyle: {
                    color: '#e4e7ed'
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#505050'
                }
            },
            splitLine: {
                show: true,
               
            },
            axisTick: {
                show: false
            },
            data: xData.value
        },
        yAxis: {
            type: 'value',
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#e4e7ed'
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#505050'
                }
            }
        },
        series: [{
            data: tempArr.value,
            type: 'line'
        }]
    };
    myChat.setOption(option)
    state.charts.push(myChat)
}

function onComplete(data: any) {
    console.log("🚀 ~ file: map-container.vue:107 ~ onComplete ~ data:", data);
    const lngLat = [data.position.lng, data.position.lat];
    locationArr.value = lngLat;
}

// 定位出错
function onError(data: any) {
    console.log("🚀 ~ file: map-container.vue:113 ~ onError ~ data:", data);
}

const initWaterFallChart = () => {
    const myChat = echarts.init(chartRefs.value[1] as HTMLElement)
    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            },
            formatter: function (params) {
                var tar = params[1];
                return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
            }
        },
        grid: {
            top: 10,
            left: 40,
            right: 20,
            bottom: 20
        },
        xAxis: {
            type: 'category',
            axisLine: {
                lineStyle: {
                    color: '#e4e7ed'
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#505050'
                }
            },
            splitLine: { 
                show: false 
            },
            axisTick: {
                show: false
            },
            data: ['Total', 'Rent', 'Utilities', 'Transportation', 'Meals', 'Other']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            name: 'Placeholder',
            type: 'bar',
            stack: 'Total',
            itemStyle: {
                borderColor: 'transparent',
                color: 'transparent'
            },
            emphasis: {
                itemStyle: {
                borderColor: 'transparent',
                color: 'transparent'
                }
            },
            data: [0, 1700, 1400, 1200, 300, 0]
        }, {
            name: 'Life Cost',
            type: 'bar',
            stack: 'Total',
            label: {
                show: true,
                position: 'inside'
            },
            data: [2900, 1200, 300, 200, 900, 300]
        }]
    }

    myChat.setOption(option)
    state.charts.push(myChat)
}

const initUserSurnameChart = () => {
    const myChat = echarts.init(chartRefs.value[2] as HTMLElement)
    const data = genData(50)
    const option = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)',
        },
        legend: {
            type: 'scroll',
            orient: 'vertical',
            right: 10,
            top: 20,
            bottom: 20,
            data: data.legendData,
            textStyle: {
                color: '#73767a',
            },
        },
        series: [
            {
                name: '姓氏',
                type: 'pie',
                radius: '55%',
                center: ['40%', '50%'],
                data: data.seriesData,
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)',
                    },
                },
            },
        ],
    }
    function genData(count: any) {
        // prettier-ignore
        const nameList = [
            '赵', '钱', '孙', '李', '周', '吴', '郑', '王', '冯', '陈', '褚', '卫', '蒋', '沈', '韩', '杨', '朱', '秦', '尤', '许', '何', '吕', '施', '张', '孔', '曹', '严', '华', '金', '魏', '陶', '姜', '戚', '谢', '邹', '喻', '柏', '水', '窦', '章', '云', '苏', '潘', '葛', '奚', '范', '彭', '郎', '鲁', '韦', '昌', '马', '苗', '凤', '花', '方', '俞', '任', '袁', '柳', '酆', '鲍', '史', '唐', '费', '廉', '岑', '薛', '雷', '贺', '倪', '汤', '滕', '殷', '罗', '毕', '郝', '邬', '安', '常', '乐', '于', '时', '傅', '皮', '卞', '齐', '康', '伍', '余', '元', '卜', '顾', '孟', '平', '黄', '和', '穆', '萧', '尹', '姚', '邵', '湛', '汪', '祁', '毛', '禹', '狄', '米', '贝', '明', '臧', '计', '伏', '成', '戴', '谈', '宋', '茅', '庞', '熊', '纪', '舒', '屈', '项', '祝', '董', '梁', '杜', '阮', '蓝', '闵', '席', '季', '麻', '强', '贾', '路', '娄', '危'
        ];
        const legendData = []
        const seriesData = []
        for (var i = 0; i < count; i++) {
            var name = Math.random() > 0.65 ? makeWord(4, 1) + '·' + makeWord(3, 0) : makeWord(2, 1)
            legendData.push(name)
            seriesData.push({
                name: name,
                value: Math.round(Math.random() * 100000),
            })
        }
        return {
            legendData: legendData,
            seriesData: seriesData,
        }
        function makeWord(max: any, min: any) {
            const nameLen = Math.ceil(Math.random() * max + min)
            const name = []
            for (var i = 0; i < nameLen; i++) {
                name.push(nameList[Math.round(Math.random() * nameList.length - 1)])
            }
            return name.join('')
        }
    }
    myChat.setOption(option)
    state.charts.push(myChat)
}

const echartsResize = () => {
    nextTick(() => {
        for (const key in state.charts) {
            state.charts[key].resize()
        }
    })
}

onActivated(() => {
    echartsResize()
})

onMounted(() => {
    initMap();
    initWaterFallChart()
    initUserSurnameChart();
    useEventListener(window, 'resize', echartsResize)
})

onBeforeMount(() => {
    for (const key in state.charts) {
        state.charts[key].dispose()
    }
})
</script>

<style lang="scss" scoped>
.el-card {
    margin-bottom: 10px;
    .card-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        span {
            &:first-child {
                display: flex;
                align-items: center;
                i {
                    margin-right: 5px;
                }
            }
        }
    }
    .e-chart {
        height: 200px;
    }
}
.city-info {
    text-align: center;
    .temp {
        font-size: 26px;

        em {
            font-size: 34px;
            font-style: normal;
        }
    }
}

.future {
    padding: 0 10px;
    margin-top: 30px;
    text-align: center;
    .group {
        background: rgba(255, 255, 255, 0.3);
        margin-bottom: 10px;
        padding: 0 10px;
        font-size: 13px;
        border-radius: 5px;

    }
}
</style>