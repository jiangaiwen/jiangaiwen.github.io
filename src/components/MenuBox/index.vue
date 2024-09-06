<template>
    <div class="menu-box">
        <input type="checkbox" class="box-button" id="box-buttons" />
        <label class="circular" for="box-buttons"></label>
        <label class="fork" for="box-buttons"></label>
        <ul>
            <li class="box-item">
                <a href="#"><el-icon><Aim /></el-icon></a>
            </li>
            <li class="box-item">
                <a href="#"><el-icon><Menu /></el-icon></a>
            </li>
            <li class="box-item">
                <a href="#"><el-icon><Setting /></el-icon></a>
            </li>
            <li class="box-item">
                <a href="#"><el-icon><Headset /></el-icon></a>
            </li>
            <li class="box-item">
                <a href="#"><el-icon><TurnOff /></el-icon></a>
            </li>
        </ul>
    </div>
</template>
<script lang="ts" setup name="menuBox">
import { Aim, Menu, Setting, Headset, TurnOff } from "@element-plus/icons-vue";
</script>
<style lang="scss" scoped>
$translateX: -100px;

.box-button + .circular,
.box-button + .circular + .fork,
.box-button,
.box-item {
    position: fixed;
    bottom: 200px;
    right: 50px;
}
.box-button {
    display: block;
    width: 40px;
    height: 40px;
    z-index: 2;
    opacity: 0;
    cursor: pointer;
}
.box-button + .circular {
    width: 30px;
    height: 30px;
    display: block;
    z-index: 1;
    border-radius: 50%;
    border: 5px solid rgba(255, 255, 255, 0.7);
    background: rgba(0, 0, 0, 0.2);
    box-shadow: 0px 0px 0px 10px rgba(0, 0, 0, 0.2);
    margin: 10px;
    transition: all 0.5s;
    transform-origin: 50% 50%;
}

.box-button:checked + .circular + .fork {
    width: 40px;
    height: 40px;
    display: block;
    z-index: 1;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.2);
    box-shadow: 0px 0px 0px 10px rgba(0, 0, 0, 0.2);
    margin: 10px;
    transition: all 0.5s;
}

.box-button:checked + .circular + .fork::after,
.box-button:checked + .circular + .fork::before {
    content: "";
    width: 30px;
    height: 3px;
    display: block;
    z-index: 1;
    border-radius: 2.5px;
    background: var(--el-text-color-primary);
    transition: all 0.5s;
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.box-button:checked + .circular + .fork {
    transform: rotate(360deg);
}
.box-button:checked + .circular + .fork::after {
    transform: translate(-50%, -50%) rotate(45deg);
}
.box-button:checked + .circular + .fork::before {
    transform: translate(-50%, -50%) rotate(-45deg);
}
.box-button:checked + .circular {
    width: 0;
    height: 0;
    border: 0px;
    box-shadow: none;
}
.box-button:checked ~ ul .box-item {
    opacity: 1;
}
.box-item:nth-child(1) {
    transform: rotate(90deg);
}
.box-item:nth-child(2) {
    transform: rotate(45deg);
}
.box-item:nth-child(3) {
    transform: rotate(0deg);
}
.box-item:nth-child(4) {
    transform: rotate(315deg);
}
.box-item:nth-child(5) {
    transform: rotate(270deg);
}

.box-item:nth-child(1) a {
    transform: rotate(0deg);
}
.box-item:nth-child(2) a {
    transform: rotate(-45deg);
}
.box-item:nth-child(3) a {
    transform: rotate(0deg);
}
.box-item:nth-child(4) a {
    transform: rotate(45deg);
}
.box-item:nth-child(5) a {
    transform: rotate(90deg);
}

.box-button:checked ~ ul .box-item:nth-child(1) {
    transform: rotate(90deg) translateX($translateX);
}
.box-button:checked ~ ul .box-item:nth-child(2) {
    transform: rotate(45deg) translateX($translateX);
}
.box-button:checked ~ ul .box-item:nth-child(3) {
    transform: rotate(0deg) translateX($translateX);
}
.box-button:checked ~ ul .box-item:nth-child(4) {
    transform: rotate(315deg) translateX($translateX);
}
.box-button:checked ~ ul .box-item:nth-child(5) {
    transform: rotate(270deg) translateX($translateX);
}
.box-button:checked ~ ul .box-item a {
    pointer-events: auto;
}
.box-button + .circular::before {
    top: 10px;
}
.box-button + .circular::after {
    top: -10px;
}
.box-item {
    display: block;
    width: 60px;
    height: 60px;
    opacity: 0;
    transition: 0.5s;
}
.box-item a {
    display: block;
    width: inherit;
    height: inherit;
    line-height: 65px;
    color: var(--el-text-color-primary);
    background: rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    text-align: center;
    text-decoration: none;
    font-size: 30px;
    pointer-events: none;
    transition: 0.2s;
}
</style>