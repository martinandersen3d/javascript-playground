 <script>
 // https://travishorn.com/add-localstorage-to-your-vue-app-in-2-lines-of-code-56eb2c9f371b
 // https://codingexplained.com/coding/front-end/vue-js/adding-removing-watchers-dynamically
// import { XXX } from 'XXX'
// import {apiXMixin} from '../apiMixin/apiXMixin'

export default {

    // mixins: [apiXMixin],
    // components: {
    //     X
    // },

    // FIELDS --------------------------------------
    data() {
        return {
            
        } 
    }, 

    // CONSTRUCTOR --------------------------------------
    mounted() {
      console.log('App mounted!');
      if (localStorage.getItem('todos')) this.todos = JSON.parse(localStorage.getItem('todos'));
    },

    // METHODS --------------------------------------
    methods: {
        initDataCache(key){

            if (localStorage.getItem([key])) this[key] = JSON.parse(localStorage.getItem([key]));

            this.$watch(
                // get
                function() {
                    return this[key];
                },
                // set
                function(newValue, oldValue) {
                    localStorage.setItem([key], JSON.stringify(this[key]));
                }
            );
        },
        hasDataCache(){
          
        }
    },
    // WATCH --------------------------------------
    // watch: {
    //   todos: {
    //     handler() {
    //       console.log('Todos changed!');
    //       localStorage.setItem('todos', JSON.stringify(this.todos));
    //     },
    //     deep: true,
    //   },
    // },
} // Export
 </script>

<style scoped>

</style>