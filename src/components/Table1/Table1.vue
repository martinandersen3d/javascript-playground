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
    props: ['titles', 'items'],
    // mounted() {},
    // watch: {},
    // computed: {},

    methods: {
        toggle(){
            if( this.selection.length  === this.items.length ){
                this.selection = []
                this.$refs.firstCheckbox.value = 0
            }
            else if( this.selection.length > 0 ){
                this.selection = [...this.items]
                this.$refs.firstCheckbox.value = 1
            }
            else if( this.selection.length === 0 ){
                this.selection = [...this.items]
                this.$refs.firstCheckbox.value = 1
            }
            else{
                this.selection = []
                this.$refs.firstCheckbox.value = 0
            }
        },
        clickChild(e){
            let el = e.target
            try {
                let firstChild = el.childNodes[0]
                firstChild.click()
            } catch (err) {}
        }
    }, //__________________________________________

    data() {
        return {
            busy: false,
            selection:[],
        };
    },
}
</script>

<template><div class='VueTemplate1 '>

    <table class="w3-table">
    <tr>
      <th><input ref="firstCheckbox" @click="toggle()" type="checkbox"/></th>
      <th v-for="( item, index) in Object.keys(titles)" :key="index">{{ item }}</th>
      
    </tr>
    <tr  v-for="( item, index) in items" :key="index">
        <td @click="clickChild"><input type="checkbox" v-model="selection" :value="item" /></td>
        <td v-for="(td, index2) in Object.keys(item)" :key="index2">{{ item[td] }}</td>
    </tr>
    </table>


</div>
</template>

<style lang="css" scoped>
    table:first-child tr{
        height: 24px;
    }

    tr th{
        background: rgb(255,255,255);
        background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 35%, rgba(246,247,249,1) 50%, rgba(242,243,245,1) 100%);
        box-shadow: -1px 0px 0px 0px #e5e6e8, 0px 0px 0px 1px #e5e6e8;
        padding: 0 0 0 5px;
        font-weight: normal;
        font-size: 12px;
        vertical-align: middle;
    }
    
    /* Records ------------ */
        tr td{
        padding: 0 0 0 5px;
        height: 24px;
        font-size: 12px;
        vertical-align: middle;
    }
    /* Records mouseover */
    tr:hover td{
        background-color: #0078d7;
        color:white;
        cursor: pointer;
    }

    
    /* First Row */
    tr th:first-child, tr td:first-child {
        width: 48px;
        padding: 0 0px 0 14px;
    } 
    tr input[type='checkbox'] {
        height: 18px;
        width: 18px;
        margin-bottom: -2px;
        top: 4px;
        position: relative;

    }


</style>
