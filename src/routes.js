import home from            './App.vue';
/* 
import login from            './components/auth/login.vue';
import dashboard from            './components/page/dashboard.vue';
import session from            './components/userSession.vue';
import crud from            './components/page/crud.vue';
import crudEdit from            './components/page/crudEdit.vue';
import templates from            './components/page/templates.vue';
import project from            './components/page/project.vue';
// import projectEdit from       './components/page/projectEdit.vue';
 */

export const routes = [
{path: '#',  name: 'home',  components:  home }, 
/* 
{path: '/login',  name: 'login',  components: { default: login },  meta: {    forVisitors: true  }}, 
{path: '/register',  name: 'register',  components: { default: login },  meta: {    forVisitors: true  }  }, 
{path: '/dashboard',  name: 'dashboard',  components: { default: dashboard }  ,  meta: {    forAuth: true  }  }, 
{path: '/crud',  name: 'crud',  components: { default: crud }  ,  meta: {    forAuth: true  }  },
{path: '/crud/:product/edit',  name: 'crudEdit',  components: { default: crudEdit }  ,  meta: {    forAuth: true  }  },
{path: '/session',  name: 'session',  components: { default: session }  ,  meta: {    forAuth: true  }  } ,
{path: '/templates',  name: 'templates',  components: { default: templates }  ,  meta: {    forAuth: true  }  },
{path: '/project/:id',  name: 'project',  components: { default: project }  ,  meta: {    forAuth: true  }  }
//meta beskytter ruten og tjekker at brugeren er autoriseret
 */
]

