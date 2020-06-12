<template>
    <div class="gank">
        <div class="container">
            <div class="gank-grid">
                <div class="grid-item" v-for="(item, index) in gankData" :key="index">
                    <div class="grid-item-content">
                        <div class="item-header">
                            <div class="item-header-content">
                                <span class="badge">妹纸</span>
                                妹纸图{{item.title}} -- {{item.author}}
                            </div>
                        </div>
                        <div class="item-body">
                            <a class="item-body-content" :title="'妹纸图'+item.title" target="_bank" :style="{backgroundImage: 'url('+item.url+')'}"></a>
                        </div>
                        <div class="item-footer">
                            <div class="item-footer-content">{{item.desc}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return{
            gankData: [],
            page: 1,
            hotGirl: [],
        }
    },
    mounted(){
        this.getData();
        this.getHotGril();
    },
    methods: {
        getData(){
            this.axios.get('https://gank.io/api/v2/data/category/Girl/type/Girl/page/'+this.page+'/count/10').then((res) => {
                if(res.data.data){
                    this.gankData = res.data.data;
                }
            })
        },
        getHotGril(){
            this.axios.get('https://gank.io/api/v2/hot/views/category/Girl/count/3').then((res) => {
                if(res.data.data){
                    this.hotGirl = res.data.data;
                }
            })
        }
    }
}
</script>
<style lang="scss" scoped>
.gank{
    position: relative;
    width: 100%;
    @include font_color($font-color-light);
    @include bg_color($background-color-light);
    .container {
        width: 100%;
        padding-top: 30px;
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
        .theme{
            @include font_color($font-color-light);
            @include bg_color($background-color-light);
        }
        .gank-grid{
            .grid-item{
                position: relative;
                display: flex;
                flex-direction: column;
                padding: 1.25rem;
                margin-bottom: 1.5rem;
                @include bg_color($background-color-light);
                border-radius: 3px;
                .grid-item-content{
                    display: flex;
                    flex-direction: column;
                    flex: 1 1 auto;
                    justify-content: center;
                    .item-header{
                        .item-header-content{
                            @include font_color($font-color-light);
                            overflow: hidden;
                            display: -webkit-box;
                            line-height: 1.4285714286;
                            font-size: 1.125rem !important;
                            margin-bottom: 1rem;
                            .badge{
                                position: relative;
                                top: -2px;
                                font-size: .75rem;
                                margin: 0 .25rem 0 0;
                                background-color: #2c63ff;
                                @include font_color($font-color-light);
                                border-radius: 2px;
                                font-weight: 400;
                                padding: .25em .3em;
                                display: inline-block;
                                line-height: 1;
                                text-align: center;
                                white-space: nowrap;
                                vertical-align: baseline;
                                transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
                            }
                        }
                    }
                    .item-body{
                        position: relative;
                        border-radius: 3px;
                        display: block;
                        align-items: flex-start;
                        overflow: hidden;
                        padding: 0;
                        flex-shrink: 0;
                        margin-bottom: 20px;
                        .item-body-content{
                            position: absolute;
                            top: 0;
                            bottom: 0;
                            left: 0;
                            right: 0;
                            border: 0;
                            border-radius: inherit;
                            background-size: cover;
                            background-repeat: no-repeat;
                            background-position: 50% 50%;
                            background-color: rgba(120, 120, 120, 0.1);
                        }
                        &::after{
                            content: '';
                            display: block;
                            padding-top: 42.857143%;
                        }
                    }
                    .item-footer{
                        color: #B1B1C1;
                    }
                }
            }
        }
        .sidebar{
            position: relative;
            .card{
                background: #fff;
                border-width: 0;
                border-radius: 3px;
                margin-bottom: 1.5rem;background-color: #1D1F20;
                display: flex;
                flex-direction: column;
                min-width: 0;
                word-wrap: break-word;
                border: 1px solid rgba(0,0,0,.125);
                .card-header{
                    color: #fff;
                    padding: 1.5rem 1.25rem 0;
                    border-radius: calc(.25rem - 1px) calc(.25rem - 1px) 0 0;
                    background-clip: padding-box;
                    line-height: 1;
                    font-size: 16px;
                    .bg-primary{
                        background-color: #2C63FF !important;
                        display: inline-block;
                        content: '';
                        height: 1px;
                        width: 28px;
                        vertical-align: middle;
                        margin-left: 16px;
                        top: 0;
                        transform: translate(0%, -50%);
                    }
                }
                .gallery{
                    padding: .75rem .75rem 0;
                    margin-bottom: 0;
                    display: flex;
                    flex-flow: row wrap;
                    justify-content: center;
                    .gallery-item{
                        display: inline-block;
                        margin-right: 10px;
                        margin-bottom: 10px;
                        text-align: center;
                        vertical-align: top;
                        width: 100%;
                        position: relative;
                        flex: 1;
                        &:last-child{
                            margin-right: 0;
                        }
                        .media{
                            position: relative;
                            display: block;
                            overflow: hidden;
                            padding: 0;
                            height: 120px;
                            flex-shrink: 0;
                            border-top-left-radius: inherit;
                            border-top-right-radius: inherit;
                            align-items: flex-start;
                            .media-content{
                                position: absolute;
                                top: 0;
                                bottom: 0;
                                left: 0;
                                right: 0;
                                border: 0;
                                background-size: cover;
                                background-repeat: no-repeat;
                                background-position: 50% 50%;
                                background-color: rgba(120, 120, 120, 0.1);
                                border-radius: 3px;
                            }
                            &::after{
                                content: '';
                                display: block;
                                padding-top: 100%;
                            }
                        }
                    }
                }
            }
        }
    }
}
@media screen and (min-width: 576px) {
    .container {
        max-width: 540px !important;
    }
}
@media screen and (min-width: 768px) {
    .container {
        max-width: 720px !important;
    }
}
@media screen and (min-width: 992px) {
    .container {
        max-width: 960px !important;
    }
}
@media screen and (min-width: 1200px) {
    .container {
        max-width: 1140px !important;
    }
}
</style>