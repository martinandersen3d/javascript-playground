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
    <FormInput type="button" name="My_name0" label="my_label0" :errors="'whatever'"></FormInput>
    <FormInput type="button" name="My_name" label="my_label1" :errors="['error1','error2','error3']"></FormInput>
    <FormInput type="button" name="My_name" label="my_label2" :errors="{'My_name':['a', 'b'], 'other':['c']}"></FormInput>
    <FormInput type="text" name="My_name" label="my_label3"></FormInput>
    <FormInput type="select" name="My_select" label="my_select" :options="{'value1':true, 'value2':false, 'value3':1}"></FormInput>
    <FormInput type="radio" name="My_radio" label="my_radio" :options="{'value1':true, 'value2':false, 'value3':5}"></FormInput>
</div>
</template>

<style lang="css" scoped>

</style>
