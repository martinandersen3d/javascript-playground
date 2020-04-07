<script>
// import MyComponent from '@/components/file.vue'
// import { MyMixin } from '@/components/file.vue'
// import Vue from 'vue'
// import {eventBus} from '@/main.js'
// import router from '@/router'
export default {
    // components: {MyComponent},
    // mixins: [MyMixin],
    // use camelCase for names in props, use kebab-case for html-attributes
    props: {
        width: {
            type: [String, Number],
        },

    },
    // mounted() {},
    // watch: {},
    computed: {
        addStyle(){
            if( typeof this.width !== 'undefined' ){
                let isString = Number.isInteger(this.width)
                let value = isString ? this.width + 'px' : this.width;
                return `min-width:${value}; max-width:${value}`;
            }
            return '';
        }
    },
}
</script>

<template>
<dt :style="addStyle"><slot></slot></dt>
</template>
