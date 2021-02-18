import Vue from 'vue';
import Router from 'vue-router';

import Dashboard from '../pages/Dashboard.vue';
import Chart from '../pages/Chart.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
      meta: {
        breadcrumb: [
          { name: 'dashboard' }
        ]
      }
    },
    {
      path: '/chart',
      name: 'Chart',
      component: Chart,
      meta: {
        breadcrumb: [
          { name: 'dashboard', href: 'Dashboard' },
          { name: 'charts' }
        ]
      }
    },
  ]
});
