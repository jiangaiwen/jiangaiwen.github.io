<template>
    <div class="home" style="text-align:center;color:#000;font-size:18px;font-weight:500;margin-top:20%;">
        <p>爸爸爱你</p>
        <img src="@/assets/比心.png" style="vertical-align: bottom;">
        <p>{{device}}</p>
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