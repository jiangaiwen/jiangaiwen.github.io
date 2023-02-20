<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
defineProps<{ msg: string }>()

const router = useRouter();
const count = ref(0)
const realTime = reactive({ count: 0 })

function handleClick() {
  router.push('/vuex')
}
</script>

<template>
  <h1>{{ msg }}</h1>
  <el-button type="primary" @click="realTime.count++">count is: {{ realTime.count }}</el-button>
  <el-button type="success" @click="count++">count is: {{ count }}</el-button>
  <!-- <el-button type="info" @click="handleClick">跳转到vuex</el-button> -->
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
