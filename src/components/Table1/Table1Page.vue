<script>
import Table1 from './Table1.vue'
// import { MyMixin } from '@/components/file.vue'
// import Vue from 'vue'
// import {eventBus} from '@/main.js'
// import router from '@/router'
export default {
    components: {Table1},
    // mixins: [MyMixin],
    // use camelCase for names in props, use kebab-case for html-attributes
    // props: {},
    // mounted() {},
    // watch: {},
    // computed: {},

    methods: {

    }, //__________________________________________

    data() {
        return {
            busy: false,
            
            tableTitles:{
                'id' : 'index',
                'name': 'navn',
                'age': 'alder',

            },

            tableItems:[
                {id:1, name: 'a', age:11 },
                {id:2, name: 'b', age:22 },
                {id:3, name: 'c', age:33 },
                {id:3, name: 'c', age:33 },
                {id:3, name: 'c', age:33 },
            ],
            // from route or prop
            sourceId: null
        };
    },
}
</script>

<template><div class=''>

    <Table1 :titles="tableTitles" :items="tableItems"></Table1>

</div>
</template>

<style lang="css" scoped>

</style>
