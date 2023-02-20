<template>
    <div class="table-header">
        <div class="table-search">
            <el-form @submit.prevent="">
                <el-form-item label="标题">
                    <el-input v-model="Text"></el-input>
                </el-form-item>
            </el-form>
        </div>
        
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const Text = ref(null)
</script>
