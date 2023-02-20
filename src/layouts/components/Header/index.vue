<template>
    <el-header class="layout-header">
        <div class="layout-header__content">
            <div class="layout-header__left">
                <div class="flex logo">
                    <img src="@/assets/logo.png" />
                </div>
                <h4>Vite-Vue3-Admin</h4>
            </div>
            
            <div class="layout-header__right">
                <ScreenFull class="item-children"/>
                <Setting class="item-children" />
                <Avatar />
            </div>
        </div>
    </el-header>
</template>

<script lang="ts" setup>
import ScreenFull from './components/ScreenFull.vue';
import Setting from './components/Setting.vue';
import Avatar from './components/Avatar.vue';
</script>

<style scoped lang="scss">
.layout-header {
    width: 100%;
    height: 60px;
    line-height: 60px;
    border-bottom:1px solid var(--el-menu-border-color);
    &__content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .layout-header__left {
            display: flex;
            align-items: center;
            .logo {
                width: 30px;
                margin-right: 10px;
                img {
                    width: 100%;
                }
            }
            h4 {
                font-size: 18px;
            }
        }
        .layout-header__right {
            display: flex;
            align-items: center;
            height: 100%;
            .item-children {
                margin-right: 20px;
            }
        }
    }
}
</style>