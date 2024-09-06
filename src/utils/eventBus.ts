import mitt from "mitt";

// const instance = mitt()
// const eventBus = {}
// eventBus.$on = instance.on
// eventBus.$off = instance.off
// eventBus.$emit = instance.emit

interface MittTypes {
    [key: string | symbol]: any
    'global-search-toggle'?: 'menu' | 'tab'
}

export default mitt<MittTypes>()