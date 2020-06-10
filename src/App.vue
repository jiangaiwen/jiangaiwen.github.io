<template>
    <div id="app">
        <router-view />
    </div>
</template>
<script>
import { AppDeviceEnquire } from '@/utils/mixin';
export default {
    name: 'App',
    mixins: [AppDeviceEnquire]
}
</script>