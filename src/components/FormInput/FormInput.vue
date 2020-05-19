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
        errors: [String, Array],
        label: {
          type: String
        },
        name: {
          type: String
        },
        type: {
            // type: String,
          validator: function (value) {
            // The value must match one of these strings
            return ['button','checkbox','color','date','datetime-local','email','file','hidden','image','month','number','password','radio','range','reset','search', 'select','submit','tel','text','time','url','week'].indexOf(value) !== -1
          }
        },

    },
    // mounted() {},
    // watch: {},
    computed: {
        labelComputed(){
            if( this.label !== undefined ){
               return this.label
            }
            if(this.name !== undefined){
                return this.name.replace('_', ' ').replace('-', ' ')
            }
            // else{
            //     return undefined
            // }
        },
        idComputed(){
            if( this.id !== undefined ){
               return this.id
            }
            if(this.name !== undefined){
                return this.name
            }
        },
        errorsComputed(){
            if( typeof this.errors === 'string' && this.errors === ''){
               return [this.errors]
            }
            return this.errors;
        }
    },

    methods: {
        todo() {

        }
    }, //__________________________________________

    // data() {
    //     return {
    //         _label: labelComputed,
    //     };
    //},
}
</script>

<template><div class='FormInput '>
    <label v-if="labelComputed" :for="idComputed" class="fi-label">{{ labelComputed }} 🛈</label>
    <input v-if="type" :id="idComputed" :type="type" value="sfd" class="fi-input">
    <div class="fi-div-errors"><ul v-for="( errorItem, index) in errorsComputed" :key="index" class="fi-ul-errors">
        <li>{{ errorItem }}</li>
    </ul></div>

</div>
</template>

<style lang="css" scoped>
label.fi-label{
    display: block;
    width: 100%;
    text-transform: capitalize;
}
input.fi-input{
    width: 100%;
    display: block;
}
div.fi-div-errors{
    margin: 8px 0 8px 0;
    padding:8px;
    width: 100%;
    color: #721c24;
    background-color: #f8d7da;
    border-color: #f5c6cb;
    border-radius: 5px;
}
ul.fi-ul-errors{
    width: 100%;
    margin-block-start: 0;
    margin-block-end: 0;
}
ul.fi-ul-errors > li{
    padding:0;
    margin:0;
    text-transform: capitalize;
}
</style>
