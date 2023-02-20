<template>
    <div class="default-main">
        <div class="banner">
            <div class="welcome suspension">
                <img class="welcome-img" src="https://demo.buildadmin.com/static/images/avatar.png" alt="" />
                <div class="welcome-text">
                    <div class="welcome-title">{{ 'Admin，' + getGreet() }}</div>
                    <div class="welcome-note">{{ state.remark }}</div>
                </div>
            </div>
        </div>

        <div class="small-panel-box">
            <el-row :gutter="20">
                <el-col :sm="12" :lg="6">
                    <div class="small-panel user-reg suspension">
                        <div class="small-panel-title">这是标题</div>
                        <div class="small-panel-content">
                            <HelloWorld msg="" />
                        </div>
                    </div>
                </el-col>
                <el-col :sm="12" :lg="6">
                    <div class="small-panel user-reg suspension">
                        <div class="small-panel-title">主题切换</div>
                        <div class="small-panel-content">
                            <switch-dark></switch-dark>
                        </div>
                    </div>
                </el-col>
                <el-col :sm="12" :lg="6">
                    <div class="small-panel user-reg suspension">
                        <div class="small-panel-title">这是标题</div>
                        <div class="small-panel-content">
                            <div class="content-left">
                                <Icon color="#8595F4" size="20" name="fa fa-line-chart" />
                                <span id="user_reg_number">5456</span>
                            </div>
                            <div class="content-right">+14%</div>
                        </div>
                    </div>
                </el-col>
                <el-col :sm="12" :lg="6">
                    <div class="small-panel user-reg suspension">
                        <div class="small-panel-title">这是标题</div>
                        <div class="small-panel-content">
                            <div class="content-left">
                                <Icon color="#8595F4" size="20" name="fa fa-line-chart" />
                                <span id="user_reg_number">5456</span>
                            </div>
                            <div class="content-right">+14%</div>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>

        <div class="growth-chart">
            <el-row :gutter="20">
                <el-col class="lg-mb-20" :xs="24" :sm="24" :md="24" :lg="12">
                    <el-card shadow="hover" header="这是标题">
                        <div class="user-source-chart" :ref="chartRefs.set"></div>
                    </el-card>
                </el-col>
                <el-col class="lg-mb-20" :xs="24" :sm="24" :md="24" :lg="12">
                    <el-card shadow="hover" header="这是标题">
                        <div class="user-surname-chart" :ref="chartRefs.set"></div>
                    </el-card>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive, nextTick, watch, onActivated, onMounted, onBeforeMount } from 'vue';
import * as echarts from 'echarts'
import SwitchDark from '@/components/SwitchDark/index.vue'
import HelloWorld from '@/components/HelloWorld.vue';
import { getGreet } from '@/utils/common';
import { useTemplateRefsList } from '@vueuse/core';
import { useEventListener } from '@vueuse/core';

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

const initUserSourceChart = () => {
    const UserSourceChart = echarts.init(chartRefs.value[0] as HTMLElement)
    const option = {
        grid: {
            top: 0,
            right: 0,
            bottom: 20,
            left: 0,
        },
        xAxis: {
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
        yAxis: {},
        legend: {
            data: ['注册量', '访问量'],
            textStyle: {
                color: '#73767a',
            },
        },
        series: [
            {
                name: '注册量',
                data: [100, 160, 280, 230, 190, 200, 480],
                type: 'line',
                smooth: true,
                areaStyle: {
                    color: '#8595F4',
                },
            },
            {
                name: '访问量',
                data: [45, 180, 146, 99, 210, 127, 288],
                type: 'line',
                smooth: true,
                areaStyle: {
                    color: '#F48595',
                    opacity: 0.5,
                },
            },
        ],
    }
    UserSourceChart.setOption(option)
    state.charts.push(UserSourceChart)
}

const initUserSurnameChart = () => {
    const userSurnameChart = echarts.init(chartRefs.value[1] as HTMLElement)
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
    initUserSourceChart()
    initUserSurnameChart()
    useEventListener(window, 'resize', echartsResize)
})

onBeforeMount(() => {
    for (const key in state.charts) {
        state.charts[key].dispose()
    }
})

// watch(() => {
//         echartsResize()
//     }
// )
</script>

<style scoped lang="scss">
.default-main {
    color: var(--el-text-color-primary);
}
.welcome {
    border-radius: 6px;
    display: flex;
    align-items: center;
    padding: 15px 20px !important;
    border: 1px solid var(--el-menu-border-color);
    box-shadow: 0 0 30px 0 rgba(82, 63, 105, 0.05);
    .welcome-img {
        height: 100px;
        margin-right: 10px;
        user-select: none;
    }
    .welcome-title {
        font-size: 1.5rem;
        line-height: 30px;
        color: var(--ba-color-primary-light);
    }
    .welcome-note {
        padding-top: 6px;
        font-size: 15px;
        color: var(--el-text-color-primary);
    }
}
.small-panel-box {
    margin-top: 20px;
}
.small-panel {
    border: 1px solid var(--el-menu-border-color);
    border-radius: var(--el-border-radius-base);
    padding: 25px;
    margin-bottom: 20px;
    .small-panel-title {
        color: #92969a;
        font-size: 15px;
    }
    .small-panel-content {
        display: flex;
        align-items: flex-end;
        margin-top: 20px;
        color: #2c3f5d;
        .content-left {
            font-size: 24px;
            .icon {
                margin-right: 10px;
            }
            span {
                display: inline-block;
                font-size: 28px;
            }
        }
        .content-right {
            font-size: 18px;
            margin-left: auto;
        }
        .color-success {
            color: var(--el-color-success);
        }
        .color-warning {
            color: var(--el-color-warning);
        }
        .color-danger {
            color: var(--el-color-danger);
        }
        .color-info {
            color: var(--el-text-color-secondary);
        }
    }
}
.growth-chart {
    margin-bottom: 20px;
}
.user-source-chart,
.user-surname-chart {
    height: 400px;
}
</style>