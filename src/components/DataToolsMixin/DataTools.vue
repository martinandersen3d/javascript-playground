<script>
// import MyComponent from '@/components/file.vue'
import {
    DataToolsMixin
} from '@/components/DataToolsMixin/DataToolsMixin.js'
// import Vue from 'vue'
// import {eventBus} from '@/main.js'
// import router from '@/router'
export default {
    // components: {MyComponent},
    mixins: [DataToolsMixin],
    // use camelCase for names in props, use kebab-case for html-attributes
    // props: {},
    // mounted() {},
    // watch: {},
    // computed: {},

    methods: {
        todo() {
            // this._data()
            // this.da
            // this.da
        }
    }, //__________________________________________

    data() {
        return {
            state: "",
            states: {
                loading: {
                    title: "Loading title",
                },
                isFalse: false,
                
                types:{
                    array: [1,2,3],
                    object : {
                        'a':1,
                        'b':2,
                        'c':3,
                        'd':4,
                    },
                    text: 'some text',
                    number: 5
                },
                items:[
                    {id: 0, name: "Hulda Guzman", male:true},
                    {id: 1, name: "Clarence Santiago", male:true},
                    {id: 2, name: "Jack Maldonado", male:false},
                    {id: 3, name: "Myrtie Marsh", male:false},
                ]
            },
        };
    },
}
</script>

<template>
<div class='NestedObject '>
    <h3>Makes it easy to work with nested data, in vues "data" property</h3>
    <hr>
    <br><button @click=" states.loading.title += ', extra text'">Add to text</button>
    <br><strong>dataGet('states.loading.title') - Nested Title Method:</strong> {{ dataGet('states.loading.title')  }}
    <br><strong>dataGet() - Non object:</strong> {{ dataGet('states.loading.doNotExist') }}
    <hr>
    <br><strong>dataHas():</strong> {{ dataHas('states.isFalse') }}
    <br><strong>dataHas() - nope:</strong> {{ dataHas('states.doNotExists') }}
    <hr>
    <br><strong>dataCount() - array:</strong> {{ dataCount('states.types.array') }}
    <br><strong>dataCount() - object:</strong> {{ dataCount('states.types.object') }}
    <br><strong>dataCount() - text:</strong> {{ dataCount('states.types.text') }}
    <hr>
    <br><strong>dataType([1,2]) - array:</strong> {{ dataType([1,2]) }}
    <br><strong>dataType() - object:</strong> {{ dataType({a:3}) }}
    <br><strong>dataType() - text:</strong> {{ dataType("here is text") }}
    <br><strong>dataType() - number:</strong> {{ dataType(2) }}
    <br><strong>dataType() - null:</strong> {{ dataType(null) }}
    <br><strong>dataType() - date:</strong> {{ dataType(new Date()) }}
    <br><strong>dataType() - undefined:</strong> {{ dataType(undefined) }}
    <br><strong>dataType() - boolean / true:</strong> {{ dataType(true) }}
    <br><strong>dataType() - boolean / false:</strong> {{ dataType(false) }}
    <hr>
    <br><strong>dataWhere('states.items', 'male', true) - </strong><br> {{ JSON.stringify(  dataWhere('states.items', 'male', true)  ) }}
    <hr>
    <br><strong>dataFind('states.items', 'id', 2) - </strong><br> {{ JSON.stringify(  dataFind('states.items', 'id', 2)  ) }}
    <hr>
    <br><strong>dataFor('states.items', item => item['male'] === true) - </strong><br> {{ JSON.stringify(  dataFor('states.items', item => item['male'] === true)  ) }}
    <hr>
    <br><button @click=" states.items.push({id: 4, name: 'Myrtie Marsh', male:true})">Add object to Array</button>



</div>
</template>

<style lang="css" scoped>

</style>
