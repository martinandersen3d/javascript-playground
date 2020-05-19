<script>
import FormInput from './FormInput.vue';
// import MyComponent from '@/components/file.vue'
// import { MyMixin } from '@/components/file.vue'
// import Vue from 'vue'
// import {eventBus} from '@/main.js'
// import router from '@/router'
export default {
    components: {
    FormInput},
    // mixins: [MyMixin],
    // use camelCase for names in props, use kebab-case for html-attributes
    // props: {},
    // mounted() {},
    // watch: {},
    // computed: {},

    methods: {
        todo() {

        }
    }, //__________________________________________

    data() {
        return {
            state: "",
        };
    },
}
</script>

<template><div class='FormInputPage '>
    <FormInput type="button" name="My_name" label="my_label" :errors="['error1','error2','error3']"></FormInput>
</div>
</template>

<style lang="css" scoped>

</style>
