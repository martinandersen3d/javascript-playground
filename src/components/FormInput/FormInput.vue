<script>
// import MyComponent from '@/components/file.vue'
// import { MyMixin } from '@/components/file.vue'
// import Vue from 'vue'
// import {eventBus} from '@/main.js'
// import router from '@/router'
export default {
    name:'FormInput',
    // components: {MyComponent},
    // mixins: [MyMixin],
    // use camelCase for names in props, use kebab-case for html-attributes
    props: {
        errors: [String, Array, Object],
        description: {
            type: String
        },
        label: {
            type: String
        },
        name: {
            type: String
        },
        options: [String, Array, Object, Boolean],
        required: [String, Boolean],
        type: {
            // type: String,
          validator: function (value) {
            // The value must match one of these strings
            return ['button','checkbox','color','date','datetime-local','email','file','hidden','image','month','number','password','radio','range','reset','search', 'select','submit','tel','text','time','url','week'].indexOf(value) !== -1
          }
        },
        value: {
            type:  [String, Number, Boolean, Object]
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
            // if string
            if( typeof this.errors === 'string' && this.errors !== ''){
                let arr = []
                arr.push(this.errors)
               return arr;
            }
            // If Array
            if(Array.isArray(this.errors)){
                return this.errors;
            }
            // If object
            if(this.errors instanceof Object){
                if( this.name !==undefined || this.id !== undefined ){
                   let val = this.name || this.id
                   return this.errors[val]
                }
            }
        },
        optionsComputed(){
            // if string
            if( typeof this.options === 'string' && this.options === ''){
                let obj = {}
                obj[this.options] = this.options
               return obj
            }
            // If Array
            if(Array.isArray(this.options)){
                let obj = {}
                for( let item of this.options){
                    obj[item] = item
                }
                return this.obj;
            }
            // If object
            if(this.options instanceof Object){
                   return this.options
            }
        },
        valueGS: {
            get: function() {
                this.value
            },
            set: function(newValue) {
                this.value = newValue
            }
        }

    },
    methods: {
        isType(val){
            let type = this.type.toLowerCase() || ''
            let defauls = ['button','checkbox','color','date','datetime-local','email','file','hidden','image','month','number','password','range','reset','search','submit','tel','text','time','url','week']
            // 'default'
            if( val === 'default' && defauls.includes(type) ){
               return true
            }

            // if(  val === 'checkbox' && type === 'checkbox' ){ return true}
            if(  val === 'radio' && type === 'radio' ){ return true}
            if(  val === 'select' && type === 'select' ){ return true}
                
            

        }
    }, //__________________________________________

    data() {
        return {
            radioValue: 3,
            selectValue: this.value,
        };
    },
}
</script>

<template><div class='FormInput '>
    <label v-if="labelComputed" :for="idComputed" class="fi-label">{{ labelComputed }}</label>
    
    <!-- Default types -->
    <input v-if="isType('default')" :id="idComputed" :type="type" :value="value" class="fi-input" :required="required === true ? 'true':null">

    <!-- Radio type -->
    <div v-if="isType('radio') && options">
        <div   class="fi-input"  v-for="( itemValue, itemName, itemIndex) in optionsComputed" :key="itemIndex">
              <input type="radio" :name="name" :id="itemName" v-model="value.selection" :value="itemValue"  >
              <label  :for="itemName">{{ itemName }}</label>
        </div>
    </div>

    <!-- Select type -->
    <div v-if="isType('select') && options">
        <div >
            <select  class="fi-input" v-model="value.selection">
                <option v-for="( itemValue, name, index) in optionsComputed" :value="itemValue" :key="index"  >{{ name }}</option>
            </select>
        </div>
    </div>


    <!-- Description -->
     <div class="fi-div-errors" v-if="errorsComputed" :class="!errorsComputed ? 'fi-div-errors-hide' : ''">
        <ul v-for="( errorItem, index) in errorsComputed" :key="index" class="fi-ul-errors">
            <li>{{ errorItem }}</li>
        </ul>
    </div> 

    <!-- Description -->
    <div class="fi-div-description" v-if="!errorsComputed">
        {{ description }}
    </div>

</div>
</template>

<style lang="css" scoped>
label.fi-label{
    display: block;
    width: 100%;
    text-transform: capitalize;
}
.fi-input{
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
    font-size:80%;
    max-height:650px;
    transition:all 200ms ease;
}
div.fi-div-errors-hide{
  max-height:0px;
  overflow:hidden;
  color: rgba(255, 0, 0, 0);
  padding:0px;
  padding-left: 8px;
  background-color:transparent;
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
.fi-div-description{
    opacity: 50%;
    font-size:80%;
    margin: 8px 0 8px 0;
}

div.fi-checkbox-group{
    display: block;
}

</style>
