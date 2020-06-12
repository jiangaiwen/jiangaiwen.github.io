<template>
    <div class="about">
        <nav class="navbar">
            <div class="container flex">
                <div class="navbar-logo">
                    <router-link to="/">LOGO</router-link>
                </div>
                <div class="navbar-right">
                    <ul class="navbar-nav flex">
                        <li 
                            v-for="(item, index) in aboutNavs" 
                            :key="index" 
                            :class="{active: active===index}" 
                            @click="scrollTo(index)">
                            <a>{{ item }}</a>
                        </li>
                    </ul>
                </div>
            </div>
            
        </nav>
        <div class="about-content">
            <!-- 基本资料 -->
            <div class="info" style="height:800px;">
                <div class="container">
                    <div class="title">基本资料</div>
                </div>
            </div>

            <!-- 项目经验 -->
            <div class="project">
                <div class="container">
                    <div class="title">项目经验</div>
                    <div class="project-content flex">
                        <div class="flex-item" v-for="(item, index) in project" :key="index">
                            <div class="project-item">
                                <a :href="item.link" target="_blank">
                                    <div class="hover-bg">
                                        <div class="hover-text">
                                            <h4>{{ item.title }}</h4>
                                            <p>{{ item.desc }}</p>
                                            <div class="clearfix"></div>
                                        </div>
                                        <img class="responsive" :src="item.src" :alt="item.title">
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 专业技能 -->
            <div class="skills" style="height:800px;">
                <div class="container">
                    <div class="title">专业技能</div>
                </div>
            </div>

            <!-- 工作经历 -->
            <div class="experience">
                <div class="container">
                    <div class="title">工作经历</div>
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
            <div class="evaluate">
                <div class="container">
                    <div class="title">自我评价</div>
                </div>
            </div>

            <!-- 联系方式 -->
            <div class="contact">
                <div class="container">
                    <div class="title">联系方式</div>
                    <!--  v-if="device!='mobile'" -->
                    <div class="about-map">
                        <iframe class="iframe" src="/static/partials/map.html"></iframe>
                    </div>
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
            aboutNavs: ['基本资料', '项目经验', '专业技能', '工作经历', '自我评价', '联系方式'],
            project: [{
                id: 1,
                title: '云算力合约平台',
                src: require('../../../static/images/screenshots/btchash.vip.png'),
                desc: 'Vue+ Element UI + Echarts'
            },{
                id: 2,
                title: '云算力合约平台',
                src: require('../../../static/images/screenshots/btchash.vip.png'),
                desc: 'Vue+ Element UI + Echarts'
            },{
                id: 3,
                title: '云算力合约平台',
                src: require('../../../static/images/screenshots/btchash.vip.png'),
                desc: 'Vue+ Element UI + Echarts'
            },{
                id: 4,
                title: '云算力合约平台',
                src: require('../../../static/images/screenshots/btchash.vip.png'),
                desc: 'Vue+ Element UI + Echarts'
            },{
                id: 5,
                title: '云算力合约平台',
                src: require('../../../static/images/screenshots/btchash.vip.png'),
                desc: 'Vue+ Element UI + Echarts'
            },{
                id: 6,
                title: '云算力合约平台',
                src: require('../../../static/images/screenshots/btchash.vip.png'),
                desc: 'Vue+ Element UI + Echarts'
            },{
                id: 7,
                title: '云算力合约平台',
                src: require('../../../static/images/screenshots/btchash.vip.png'),
                desc: 'Vue+ Element UI + Echarts'
            },{
                id: 8,
                title: '云算力合约平台',
                src: require('../../../static/images/screenshots/btchash.vip.png'),
                desc: 'Vue+ Element UI + Echarts'
            }]
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
            const navContents = document.querySelectorAll('.about-content>div');
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
            const targetOffsetTop = document.querySelector(`.about-content>div:nth-child(${index + 1})`).offsetTop
            
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
    .container{
        position: relative;
        width: 1200px;
        margin: 0 auto;
        .title{
            text-align: center;
            font-weight: 400;
            font-size: $font_large;
            margin-bottom: 30px;
        }
    }
    // 导航
    .navbar{
        position: fixed;
        width: 100%;
        top: 0;
        left: 0;
        z-index: 1000;
        // border-bottom: 0;
        // letter-spacing: 1px;
        // text-transform: uppercase;
        // padding: 0;
        background: #000;
        transition: background .5s ease-in-out, padding .5s ease-in-out;
        .container{
            justify-content: space-between;
            .navbar-logo{
                cursor: pointer;
                font-size: $font_medium;
                padding: 10px 15px;
                line-height: 20px;
                a{
                    color: #fff;
                }
            }
            .navbar-right{
                .navbar-nav{
                    li{
                        a{
                            font-size: $font_medium_s;
                            cursor: pointer;
                            position: relative;
                            display: block;
                            padding: 10px 15px;
                            color: #fff;
                            line-height: 20px;
                            transition: background .3s ease-in-out;
                        }
                        &.active{
                            color: #F4D03F;
                            background-color: transparent;
                        }
                        &:hover{
                            a{
                                color: #F4D03F;
                                background-color: transparent;
                            }
                        }
                    }
                }
            }
        }
    }
    
    .about-content{
        @include bg_color($background-color-light);

        // 项目经验
        .project{
            position: relative;
            .container{
                .title{
                    text-align: center;
                    font-weight: 400;
                    font-size: $font_large;
                    margin-bottom: 30px;
                }
                .project-content{
                    position: relative;
                    overflow: hidden;
                    flex-flow: row wrap;
                    .flex-item{
                        width: 25%;
                        padding-right: 15px;
                        padding-left: 15px;
                        backface-visibility: hidden;
                        transition-property: transform, opacity;
                        transform: translate3d(0px, 0px, 0px);
                        transition-duration: 0.8s;
                        .project-item{
                            margin-bottom: 30px;
                            transition: all 0.5s ease-out;
                            a{
                                cursor: pointer;
                                @include font_color($font-color-light);
                            }
                            &:hover{
                                transform: scale(1.2);
                            }
                            .hover-bg{
                                position: relative;
                                height: 180px;
                                overflow: hidden;
                                .hover-text{
                                    position: absolute;
                                    text-align: center;
                                    margin: 0 auto;
                                    background: rgba(0, 0, 0, 0.66);
                                    padding: 25% 0;
                                    height: 100%;
                                    width: 100%;
                                    opacity: 0;
                                    transition: all 0.5s;
                                    h4{
                                        opacity: 0;
                                        color: #fff;
                                        transform: translateY(100%);
                                        transition: all 0.3s;
                                    }
                                    p{
                                        opacity: 0;
                                        color: #fff;
                                        transform: translateY(0);
                                        transition: all 0.3s;
                                        font-size: $font_medium_s;
                                    }
                                }
                                &:hover{
                                    .hover-text{
                                        opacity: 1;
                                        h4{
                                            opacity: 1;
                                            transform: translateY(0);
                                        }
                                        p{
                                            opacity: 1;
                                            transform: translateY(100%);
                                        }
                                    }
                                }
                                img{
                                    display: block;
                                    max-width: 100%;
                                    height: auto;
                                }
                            }
                        }
                    }
                }
            }
        }

        // 工作经历
        .experience{
            position: relative;
            height: 850px;
            margin: auto;
            background-color: #fafbfd;
            .container{
                height: 100%;
                padding-bottom: 150px;
                .title{
                    text-align: center;
                    font-weight: 400;
                    font-size: $font_large;
                    margin-bottom: 30px;
                    padding-top: 100px;
                }
                .wrapper{
                    position: relative;
                    width: 100%;
                    height: 400px;
                    z-index: 10;
                    margin-top: 57px;
                    .flex-item{
                        height: fit-content;
                        padding-left: 6px;
                        padding-right: 6px;
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

        // 自我评价
        .evaluate{
            height: 800px;
        }
        // 联系方式
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