<template>
    <div class="about">
        <ul class="navs">
            <li v-for="(item, index) in aboutNavs" :key="index" :class="{active: active===index}" @click="scrollTo(index)">{{ item }}</li>
        </ul>
        <div class="content">
            <!-- 基本资料 -->
            <div style="height:800px;">
                基本资料
            </div>

            <!-- 项目经验 -->
            <div style="height:800px;">
                项目经验
            </div>

            <!-- 专业技能 -->
            <div style="height:800px;">
                专业技能
            </div>
            <!-- 工作经历 -->
            <div class="experience">
                <div class="container">
                    <div class="wrapper flex">
                        <div class="flex-item">
                            <div class="card">
                                <div class="content">
                                    <img class="resource" src="https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*icqYSbEiNxIAAAAAAAAAAABkARQnAQ" alt="resource">
                                    <p class="title">图表用法</p>
                                    <p class="desc">从数据出发，从功能角度对常见图表进行分类，提供规范使用指引。</p>
                                    <a class="detail" href="https://antv-2018.alipay.com/zh-cn/vis/chart/index.html" target="newtab">查看详情</a>
                                </div>
                            </div>
                        </div>
                        <div class="flex-item">
                            <div class="card">
                                <div class="content">
                                    <img class="resource" src="https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*mt47RKxGy8kAAAAAAAAAAABkARQnAQ" alt="resource">
                                    <p class="title">图表用法</p>
                                    <p class="desc">从数据出发，从功能角度对常见图表进行分类，提供规范使用指引。</p>
                                    <a class="detail" href="https://antv-2018.alipay.com/zh-cn/vis/chart/index.html" target="newtab">查看详情</a>
                                </div>
                            </div>
                        </div>
                        <div class="flex-item">
                            <div class="card">
                                <div class="content">
                                    <img class="resource" src="https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*zBDKTaSg-7AAAAAAAAAAAABkARQnAQ" alt="resource">
                                    <p class="title">图表用法</p>
                                    <p class="desc">从数据出发，从功能角度对常见图表进行分类，提供规范使用指引。</p>
                                    <a class="detail" href="https://antv-2018.alipay.com/zh-cn/vis/chart/index.html" target="newtab">查看详情</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 自我评价 -->
            <div style="height:800px;">
                自我评价
            </div>

            <!-- 联系方式 -->
            <div class="contact">
                联系方式
                <!--  v-if="device!='mobile'" -->
                <div class="about-map">
                    <iframe class="iframe" src="/static/partials/map.html"></iframe>
                </div>
            </div>
        </div>
        
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    data() {
        return {
            active: 0,
            aboutNavs: ['基本资料', '项目经验', '专业技能', '工作经历', '自我评价', '联系方式']
        }
    },
    computed: {
        ...mapState({
            device: state => state.app.device
        })
    },
    mounted() {
        window.addEventListener('scroll', this.onScroll);
    },
    destroy() {
        window.removeEventListener('scroll', this.onScroll);
    },
    methods: {
        // 滚动监听
        onScroll() {
            const navContents = document.querySelectorAll('.content div');
            const offsetTopArr = []
            navContents.forEach(item => {
                offsetTopArr.push(item.offsetTop)
            })
            
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
            // 定义当前点亮的导航下标
            let navIndex = 0
            for (let n = 0; n < offsetTopArr.length; n++) {
                // 如果 scrollTop 大于等于第 n 个元素的 offsetTop 则说明 n-1 的内容已经完全不可见
                // 那么此时导航索引就应该是 n 了
                if (scrollTop >= offsetTopArr[n]) {
                    navIndex = n
                }
            }
            this.active = navIndex
        },
        // 滚动到指定元素位置
        scrollTo(index) {
            // 获取目标的 offsetTop
            // css选择器是从 1 开始计数，我们是从 0 开始，所以要 +1
            const targetOffsetTop = document.querySelector(`.content div:nth-child(${index + 1})`).offsetTop
            
            let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
            // 定义一次跳 50 个像素，数字越大跳得越快，但是会有掉帧得感觉
            const STEP = 50
            // 判断是往下滑还是往上滑
            if (scrollTop > targetOffsetTop) {
                // 往上滑
                smoothUp()
            } else {
                // 往下滑
                smoothDown()
            }

            // 定义往下滑函数
            function smoothDown() {
                // 如果当前 scrollTop 小于 targetOffsetTop 说明视口还没滑到指定位置
                if (scrollTop < targetOffsetTop) {
                    // 如果和目标相差距离大于等于 STEP 就跳 STEP
                    // 否则直接跳到目标点，目标是为了防止跳过了。
                    if (targetOffsetTop - scrollTop >= STEP) {
                        scrollTop += STEP
                    } else {
                        scrollTop = targetOffsetTop
                    }
                    document.body.scrollTop = scrollTop
                    document.documentElement.scrollTop = scrollTop
                    // 在这种场景下，requestAnimationFrame 相比 setInterval 性价比更高
                    requestAnimationFrame(smoothDown)
                }
            }

            // 定义往上滑函数
            function smoothUp() {
                if (scrollTop > targetOffsetTop) {
                    if (scrollTop - targetOffsetTop >= STEP) {
                        scrollTop -= STEP
                    } else {
                        scrollTop = targetOffsetTop
                    }
                    document.body.scrollTop = scrollTop
                    document.documentElement.scrollTop = scrollTop
                    requestAnimationFrame(smoothUp)
                }
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.about{
    .navs{
        position: fixed;
        top: 0;
        left: 0;
        background-color: #efefef;
        display: flex;
        li{
            padding: 0 20px;
            &.active{
                color: #847ec3;
                background-color: #e2e2e2;
            }
        }
    }
    .content{
        width: 100%;
        background-color: #fff;
        div{
            width: 100%;
        }
        .experience{
            position: relative;
            height: 450px;
            margin: auto;
            .container{
                position: relative;
                width: 1200px;
                height: 100%;
                margin-left: auto;
                margin-right: auto;
                padding-bottom: 150px;
                .wrapper{
                    position: absolute;
                    width: 100%;
                    .flex-item{
                        height: fit-content;
                        .card{
                            background-color: #fff;
                            margin-top: 0;
                            height: 400px;
                            transition: all .3s;
                            box-shadow: 0 8px 10px rgba(49,70,89,.05);
                            .content{
                                text-align: center;
                                padding: 69px 10% 96px;
                                .resource{
                                    transition: all .3s;
                                    height: 96px;
                                }
                                .title{
                                    font-size: 1.71em;
                                    color: #000;
                                    margin-top: 40px;
                                    margin-bottom: 0;
                                }
                                .desc{
                                    margin-top: 16px;
                                    opacity: .6;
                                    width: 100%;
                                    font-size: 1em;
                                    font-weight: 350;
                                    line-height: 1.7em;
                                    color: #697b8c;
                                }
                                .detail{
                                    margin-top: 14.2%;
                                    color: #4776e8;
                                    display: none;
                                    font-size: 1.14em;
                                }
                            }
                            &:hover{
                                margin-top: -25px;
                                height: 450px;
                                border-image: linear-gradient(90deg,#aa6aff,#706dff) 30 30;
                                border-bottom: 4px solid;
                                border-color: #aa6aff;
                                .detail{
                                    display: block;
                                }
                            }
                        }
                    }
                }
            }
        }
        .contact{
            height: 500px;
            .about-map{
                background: $background-color-dark;
                padding: 10px 10px 6px;
                .iframe{
                    border: none;
                    width: 100%;
                }
            }
        }
    }
}

</style>