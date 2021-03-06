require('./bootstrap');

//importing date filter
import DateFilter from './dateFilter';

window.Vue = require('vue');
Vue.filter('date', DateFilter)

// components
Vue.component('main-app', require('./components/MainApp.vue').default);
Vue.component('tabs-menu', require('./components/TabsMenu.vue').default);
Vue.component('tab', require('./components/Tab.vue').default);


const app = new Vue({
    el: '#app',
});
