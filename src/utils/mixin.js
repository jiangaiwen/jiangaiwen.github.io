import { mapState } from 'vuex';
import { deviceEnquire, DEVICE_TYPE } from '@/utils/device';

const mixin = {
    computed: {
        ...mapState({
            layoutMode: state => state.app.layout
        })
    }
}


const mixinDevice = {
    computed: {
        ...mapState({
            device: state => state.app.device
        })
    },
    methods: {
        isMobile() {
            return this.device === DEVICE_TYPE.MOBILE
        },
        isDesktop() {
            return this.device === DEVICE_TYPE.DESKTOP
        },
        isTablet() {
            return this.device === DEVICE_TYPE.TABLET
        }
    }
}

const AppDeviceEnquire = {
    mounted() {
        const { $store } = this
        deviceEnquire(deviceType => {
            console.log(deviceType);
            
            switch(deviceType) {
                case DEVICE_TYPE.DESKTOP:
                    $store.commit('TOGGLE_DEVICE', 'desktop')
                    break
                case DEVICE_TYPE.TABLET:
                    $store.commit('TOGGLE_DEVICE', 'tablet')
                    break
                case DEVICE_TYPE.MOBILE:
                default:
                    $store.commit('TOGGLE_DEVICE', 'mobile')
                    break
            }
        })
    }
}

export { mixin, mixinDevice, AppDeviceEnquire }