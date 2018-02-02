import Vue from 'vue';
import Router from 'vue-router';
import BootstrapVue from 'bootstrap-vue';
import LandingPage from '../components/LandingPage';
import TodoList from '../components/TodoList';

Vue.use(BootstrapVue);
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage,
    },
    {
      path: '/todo',
      name: 'TodoList',
      component: TodoList,
    },
  ],
});
