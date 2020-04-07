<script>
import Block from './Block.vue';
// import MyComponent from '@/components/file.vue'
// import { MyMixin } from '@/components/file.vue'
// import Vue from 'vue'
// import {eventBus} from '@/main.js'
// import router from '@/router'
export default {
    components: {Block},
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

<template><div>

<Block layout="fixed_auto" :class="'dsfsdf'">
    <BlockItem width="180px">Left</BlockItem>
    <BlockItem>Right</BlockItem>
</Block>

<hr>


<Block layout="auto_fixed">
    <BlockItem>Left</BlockItem>
    <BlockItem width="180px">Right</BlockItem>
</Block>

<hr>

<Block layout="auto_fixed_auto">
    <BlockItem>Left</BlockItem>
    <BlockItem width="180px">Middle</BlockItem>
    <BlockItem>Right</BlockItem>
</Block>

<hr>

<Block layout="fixed_auto_fixed">
    <BlockItem width="180px">Left</BlockItem>
    <BlockItem>Middle</BlockItem>
    <BlockItem width="180px">Right</BlockItem>
</Block>


</div>
</template>
