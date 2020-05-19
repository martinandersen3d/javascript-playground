<template>
  <div id="app">

    <!-- Sidebar -->
    <div class="w3-sidebar w3-bar-block w3-collapse w3-card-2" style="width:200px;  " :class=" [ showSidebar ? '':'block' ] ">
      <button class="w3-bar-item w3-button w3-hide-large" @click='showSidebar =! showSidebar'>Close &times;</button>
      <!-- Menu items -->
      <span v-for="(item, index) in sidebarItems" :key="index">
        <h6 v-if="item.description == ''">
          {{niceString(item.component)}}
        </h6>
        <a :href="item.url" class="w3-bar-item w3-button link" @click="active = item.component, description = item.description  " v-if="item.description != ''">{{ niceString(item.component)}}</a>
      </span>
    </div>

    <div class="w3-main" style="margin-left:200px">
      <div class="w3-blue">
        <button class="w3-button w3-blue w3-xlarge" @click='showSidebar =! showSidebar'>&#9776; {{niceString(active)}}</button>
        <div class="w3-container">
        </div>
      </div>
      <!-- Content -->
      <div class="description">{{description}}</div>
      <div class="pageContent ">
        <component :is="dynamicComponent"></component>
      </div>
    </div>

    <!-- end -->
  </div>
</template>
<script>
  import localStorageCache from "./components/DataCacheMixin.vue"
  export default {
    name: 'app',
    mixin: ['localStorageCache'],
    data() {
      return {

        showSidebar: true,
        active: "FormInputPage",
        description: "select components in the menu",
        sidebarItems: [
          // The name of the component in the main.js. All comonents must have descriptions
          { component: "Title 1", description: "" }, // Header: Description not allowed
          { component: "funkyMonkey", description: "dvdvdvdvdv" },
          { component: "lodash", description: "dvdvdvdvdv" },
          { component: "dataCachePage", description: "dataCachePage", url: "/dataCachePage/" },
          { component: "PageComponentClass", description: "Boot With Class" },
          { component: "FormInputPage", description: "FormInputPage" },
          { component: "Mixins", description: "" }, // Header: Description not allowed
          { component: "DataTools", description: "Data Tools Mixin", },
          { component: "Layout", description: "" }, // Header: Description not allowed
          { component: "BlockPage", description: "Block" }, // Header: Description not allowed
        ]
      };
    }, //data

    computed: {
      dynamicComponent() {
        return this.active
      },

    },//computed
    methods: {
      niceString(str) {

        var noUnderscore = (str).replace(/_/g, " ")
        function firstToUpperCase(str) {
          return str.substr(0, 1).toUpperCase() + str.substr(1);
        }
        return (firstToUpperCase(noUnderscore)).replace(/([a-z])([A-Z])/g, '$1 $2');
      }
    },//methods

  }//export


</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  .block {
    display: block !important;
  }

  .link {
    font-size: 12px;
    font-weight: bold;
    padding: 4px 16px !important;
  }

  h6 {
    margin: 0px;
    padding-left: 5px;
    background-color: #eee;
  }

  .description {
    padding: 20px;
    margin-bottom: 20px;
    width: 100%;
    background-color: #eee;
  }

  .pageContent {
    margin: 16px;
    border: 1px solid #f2f2f2;
    padding: 0px;
  }

  .json, pre {
    font-size: 12px;
    display: block;
    font-family: monospace;
    white-space: pre;
    margin: 5px;
    padding-left: 5px;
    background-color: #eee;
    overflow: auto;
  }

</style>
