<script>
// import MyComponent from '@/components/file.vue'
import { NestedData } from '@/components/NestedObjectMixin/NestedObjectMixin.js'
// import Vue from 'vue'
// import {eventBus} from '@/main.js'
// import router from '@/router'
export default {
    // components: {MyComponent},
    mixins: [NestedData],
    // use camelCase for names in props, use kebab-case for html-attributes
    // props: {},
    // mounted() {},
    // watch: {},
    // computed: {},

    methods: {
        todo() {
            // this._data()
            this.da
        }
    }, //__________________________________________

    data() {
        return {
            state: "",
            states: {
                loading:{
                    title:"Loading title"
                }
            },
        };
    },
    mounted() {
        console.log('out: ', dataNested('states.loading.doNotExist'))
    },
}
</script>

<template><div class='NestedObject '>
<strong>Nested Title Method:</strong> {{ dataNested('states.loading.title')  }}
<br><strong>Non object:</strong> {{ dataNested('states.loading.doNotExist') }}
</div>
</template>

<style lang="css" scoped>

</style>
