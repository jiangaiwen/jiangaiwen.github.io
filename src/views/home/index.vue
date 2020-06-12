<template>
    <div class="home">
        <p style="text-align:center;color:#000;font-size:18px;font-weight:500;padding-top: 20%;">{{device}}</p>

        <router-link to="/gank">福利</router-link>
        <router-link to="/about">关于</router-link>
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    computed: {
        ...mapState({
            device: state => state.app.device
        })
    }
}
</script>