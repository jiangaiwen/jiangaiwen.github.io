<template>
    <div class="page">
        <!-- <h2>🙍‍♂️ 个人信息</h2>
        <blockquote>
            <p>昵称：jiang<br>年龄：28<br>位置：广州<br>爱好：游戏、电影、音乐<br>职业：前端</p>
        </blockquote>
        <h2>🔨 技术栈</h2>
        <ul>
            <li>优秀的 HTML5 + CSS3 进行页面布局</li>
            <li>熟练使用 Javascript、ES6、Typescript</li>
            <li> 熟练使用 Vue 全家桶进行项目搭建</li>
            <li>熟悉 react，小程序</li>
            <li>熟练使用 uni-app、cordova 进行混合应用开发</li>
            <li>良好的编码习惯和代码风格</li>
            <li>了解 Node、mySql、mongodb</li>
            <li>……</li>
        </ul> -->
        <h2>🚩 位置</h2>
        <div class="info-box"></div>
        <div class="map">
            <iframe class="iframe" src="/static/map.html"></iframe>
        </div>
        <!-- <h2>🌱 关于本站</h2>
        <div class="info-box">
            <a href="https://vitejs.dev" target="_blank">
                <img src="/vite.svg" class="logo" alt="Vite logo" />
            </a>
            <a href="https://vuejs.org/" target="_blank">
                <img src="@/assets/images/vue.svg" class="logo vue" alt="Vue logo" />
            </a>
        </div> -->
    </div>
</template>
<style scoped lang="scss">
.page {
    width: 1080px;
    margin: 0 auto;
    border-radius: 8px;
    background-color: var(--el-bg-color);
    padding: 40px;
    color: var(--el-text-color-primary);
    blockquote {
        margin: 0 0 20px;
        padding: 12px 15px;
        border-left: 3px solid var(--el-color-primary);;
        background-color: #f7f7f7;
        color: rgba(0, 0, 0, .7);
        margin-left: 20px;
    }
    ul {
        li {
            margin: 4px 0;
            cursor: pointer;
            transition: all 0.5s;
            &:hover {
                padding-left: 10px;
                color: var(--el-color-primary);
            }
        }
    }
    .info-box {
        text-align: center;
        .logo {
            height: 6em;
            padding: 1.5em;
            will-change: filter;
            transition: filter 300ms;
        }
    }
    .map{
        padding: 5px 5px 2px;
        border-radius: 3px;
        .iframe{
            border: none;
            width: 100%;
        }
    }
}
.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
@media (max-width: 750px) {
    .page {
        width: 100% !important;
        padding: 0  !important;
    }
}
</style>