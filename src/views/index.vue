<script setup lang="ts">
import * as echarts from 'echarts'
import { getGreet } from '@/utils/index'
import { useTemplateRefsList, useEventListener } from '@vueuse/core';

// const imageUrl = ref('./vite.svg')
const chartRefs = useTemplateRefsList<HTMLDivElement>()

const state: {
    charts: any[]
    remark: string
    workingTimeFormat: string
    pauseWork: boolean
} = reactive({
    charts: [],
    remark: '最近更新：🎉 VUE3.0 + Typescript + Vite + ElementPlus 后台管理模板。 📦 update️： vue v3.2.25； 主题切换； vscode代码智能提醒 v1.1.2； 组件按需自动导入。',
    workingTimeFormat: '',
    pauseWork: false,
})

const initVisitsChart = () => {
    const VisitsChart = echarts.init(chartRefs.value[0] as HTMLElement)
    const option = {
        grid: {
            top: 10,
            left: 35,
            right: 20,
            bottom: 20
        },
        tooltip: {
            trigger: 'axis'
        },
        xAxis: {
            boundaryGap: false,
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
            data: [
                '周一',
                '周二',
                '周三',
                '周四',
                '周五',
                '周六',
                '周日',
            ]
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
        legend: {
            show: false
        },
        series: [{
            name: '访问量',
            data: [45, 180, 146, 99, 210, 127, 288],
            type: 'line',
            smooth: true,
            areaStyle: {
                color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                    offset: 0,
                    color: '#bd34fe'
                }, {
                    offset: 1,
                    color: '#646cff'
                }])
            },
            lineStyle: {
                color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                    offset: 0,
                    color: '#bd34fe'
                }, {
                    offset: 1,
                    color: '#646cff'
                }])
            }
        }]
    }
    VisitsChart.setOption(option)
    state.charts.push(VisitsChart)
}

const initUserSourceChart = () => {
    const UserSourceChart = echarts.init(chartRefs.value[1] as HTMLElement)
    const option = {
        grid: {
            top: 10,
            left: 35,
            right: 20,
            bottom: 20
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        xAxis: {
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
            data: [
                '周一',
                '周二',
                '周三',
                '周四',
                '周五',
                '周六',
                '周日',
            ],
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
        legend: {
            show: false
        },
        series: [{
            name: '授权数',
            data: [45, 180, 146, 99, 210, 127, 288],
            type: 'bar',
            barWidth: 30,
            itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                    offset: 0,
                    color: '#bd34fe'
                }, {
                    offset: 1,
                    color: '#646cff'
                }])
            }
        }]
    }
    UserSourceChart.setOption(option)
    state.charts.push(UserSourceChart)
}

const initUserSurnameChart = () => {
    const userSurnameChart = echarts.init(chartRefs.value[2] as HTMLElement)
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
    userSurnameChart.setOption(option)
    state.charts.push(userSurnameChart)
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
    initVisitsChart()
    initUserSourceChart()
    initUserSurnameChart()
    useEventListener(window, 'resize', echartsResize)
})

onBeforeMount(() => {
    for (const key in state.charts) {
        state.charts[key].dispose()
    }
})
</script>
<template>
    <PageMain>
        <el-row :gutter="10">
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-card class="box-card">
                    <el-avatar src="https://t.mwm.moe/lai" />
                    <div>
                        <p>Admin {{ getGreet() }} </p>
                        <p>{{ state.remark }}</p>
                    </div>
                    
                </el-card>
            </el-col>
            <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
                <el-card class="box-card">
                    <template #header>
                        <div class="card-header">
                            <span><el-icon><PieChart /></el-icon>访问量</span>
                            <el-tag>日</el-tag>
                        </div>
                    </template>
                    <div class="visits-chart" :ref="chartRefs.set"></div>
                </el-card>
            </el-col>
            
            <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
                <el-card class="box-card">
                    <template #header>
                        <div class="card-header">
                            <span><el-icon><Histogram /></el-icon>授权数</span>
                            <el-tag type="warning">周</el-tag>
                        </div>
                    </template>
                    <div class="user-source-chart" :ref="chartRefs.set"></div>
                </el-card>
            </el-col>

            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-card class="box-card" style="padding-bottom: 20px;">
                    <template #header>
                        <div class="card-header">
                            <span><el-icon><InfoFilled /></el-icon>With border</span>
                        </div>
                    </template>
                    <el-descriptions :column="2" border>
                        <el-descriptions-item>
                            <template #label>
                                <div class="cell-item">用户名</div>
                            </template>
                            Admin
                        </el-descriptions-item>
                        <el-descriptions-item>
                            <template #label>
                                <div class="cell-item">电话</div>
                            </template>
                            18100000000
                        </el-descriptions-item>
                        <el-descriptions-item>
                            <template #label>
                                <div class="cell-item">用户名</div>
                            </template>
                            Admin
                        </el-descriptions-item>
                        <el-descriptions-item>
                            <template #label>
                                <div class="cell-item">电话</div>
                            </template>
                            18100000000
                        </el-descriptions-item>
                        <el-descriptions-item>
                            <template #label>
                                <div class="cell-item">用户名</div>
                            </template>
                            Admin
                        </el-descriptions-item>
                        <el-descriptions-item>
                            <template #label>
                                <div class="cell-item">电话</div>
                            </template>
                            18100000000
                        </el-descriptions-item>
                        <el-descriptions-item>
                            <template #label>
                                <div class="cell-item">标签</div>
                            </template>
                            <el-tag size="small">高大</el-tag>
                            <el-tag size="small" style="margin-left: 10px">威猛</el-tag>
                        </el-descriptions-item>
                        <el-descriptions-item>
                            <template #label>
                                <div class="cell-item">地址</div>
                            </template>
                            广东省广州市天河区
                        </el-descriptions-item>
                    </el-descriptions>
                </el-card>
            </el-col>

            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-card class="box-card">
                    <template #header>
                        <div class="card-header">
                            <span><el-icon><Position /></el-icon>我的位置</span>
                        </div>
                    </template>
                    <iframe class="full" src="/static/map.html"></iframe>
                </el-card>
            </el-col>

            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-card class="box-card">
                    <template #header>
                        <div class="card-header">
                            <span><el-icon><Position /></el-icon>我的位置</span>
                        </div>
                    </template>
                    <div class="home">
                        <a href="https://vitejs.dev" target="_blank">
                            <img src="/vite.svg" class="logo" alt="Vite logo" />
                        </a>
                        <a href="https://vuejs.org/" target="_blank">
                            <img src="@/assets/images/vue.svg" class="logo vue" alt="Vue logo" />
                        </a>
                    </div>
                </el-card>
            </el-col>

            <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
                <el-card class="box-card">
                    <template #header>
                        <div class="card-header">
                            <span><el-icon><Position /></el-icon>我的位置</span>
                        </div>
                    </template>
                    <el-carousel indicator-position="outside">
                        <el-carousel-item v-for="item in 4" :key="item">
                            <h3>{{ item }}</h3>
                        </el-carousel-item>
                    </el-carousel>
                </el-card>
            </el-col>

            <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
                <el-card class="box-card">
                    <template #header>
                        <div class="card-header">
                            <span><el-icon><Position /></el-icon>我的位置</span>
                        </div>
                    </template>
                    <div class="user-surname-chart" :ref="chartRefs.set"></div>
                </el-card>
            </el-col>
        </el-row>
    </PageMain>
</template>
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
    .visits-chart,
    .user-source-chart,
    .user-surname-chart {
        height: 180px;
    }
}
.el-carousel {
    :deep(.el-carousel__container) {
        height: 150px;
    }
}
.el-carousel__item h3 {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #475669;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
}
.home {
    text-align: center;
}
.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
}
.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
</style>