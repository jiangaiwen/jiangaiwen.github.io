<template>
    <div class="order">
        <p @click="changeTheme">{{theme=='light'?'dark':'light'}}</p>
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    computed: {
        ...mapState({
            theme: state => state.app.theme
        })
    },
    methods: {
        changeTheme() {
            if(this.theme == 'light') {
                this.$store.dispatch('ToggleTheme', 'dark');
                window.document.documentElement.setAttribute('data-theme', 'dark')
            } else {
                this.$store.dispatch('ToggleTheme', 'light');
                window.document.documentElement.setAttribute('data-theme', 'light')
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.order{
    position: relative;
    width: 100%;
    height: 100%;
    @include font_color($font-color-light);
    @include bg_color($background-color-light);
}
p:first-child{
    @include font_color($font-color-light);
    @include bg_color($background-color-light);
}
p:last-child{
    @include font_color($font-color-dark);
    @include bg_color($background-color-dark);
}
.about-map{
    background: $background-color-dark;
    padding: 10px 10px 6px;
    .iframe{
        border: none;
        width: 100%;
    }
}
</style>