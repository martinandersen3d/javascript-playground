<script>
// import MyComponent from '@/components/file.vue'
// import { MyMixin } from '@/components/file.vue'
// import Vue from 'vue'
// import router from '@/router'

import PageComponentClass from './PageComponentClass.js'
// import model from './model.js'

// module.exports = {page}
export default {
    // components: {MyComponent},
    // mixins: [MyMixin],
    // use camelCase for names in props, use kebab-case for html-attributes
    // props: {},
    mounted() {
        console.log('hi from Mounted')
        this.age = this.model.age
    },
    // watch: {},

    data() {
        return {
            model: new PageComponentClass(),
            age: null,
            // ViewList
            // table: new ViewList(),
        };
    },
}
</script>

<template><div class='PageComponentClass '>
Counter A: {{ this.model.counterA }}
<button @click="model.counterA = 3" >{{ 'Button + 3' }}</button>
<hr>
Counter B: {{ this.model.counterB }}
<button @click="model.counterB++" >{{ 'Button ++' }}</button>
<hr>
<button @click="model.go" >{{ 'Button ++' }}</button>

<button name="Something" @click="(item) => { model.btnEvent(item) }" >{{ 'call method' }}</button>
{{ age }}

</div>
</template>

<style lang="css" scoped>

</style>
<!-- 
controller
    - models{
        persons:..
        posts:..
    }

    // Will transform the response from server, in case the response structure is different on your server.
    + handleCreateResponse():array
    + handleListResponse():array
    + handleTableResponse():array
    + handleShowResponse():array
    + handleUpdateResponse():array



    // Extends
    CreatePostController
    ListPostsController
    ShowPostController
    TablePostsController
    UpdatePostController


 -->