<script setup lang="ts">
const imageUrl = ref('./vite.svg')
</script>
<template>
    <!-- <div class="home">
        <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" class="logo" alt="Vite logo" />
        </a>
        <a href="https://vuejs.org/" target="_blank">
            <img src="@/assets/images/vue.svg" class="logo vue" alt="Vue logo" />
        </a>
    </div> -->
    <PageMain>
    <Star :imageUrl="imageUrl" /></PageMain>
</template>
<style scoped>
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