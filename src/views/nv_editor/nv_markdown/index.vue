<template>
    <PageMain>
    <md-editor v-model="text"  @onChange="onChange" @onUploadImg="onUploadImg" /></PageMain>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { MdEditor } from 'md-editor-v3'
import 'md-editor-v3/lib/style.css'

const text = ref('## Hello World！')

const onChange = (val: any) => {
    console.log(val);
}

const onUploadImg = (files: any) => {
    console.log(Array.from(files));
}
</script>