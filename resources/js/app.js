require('./bootstrap');
import DateFilter from './dateFilter';
window.Vue = require('vue');
Vue.filter('date', DateFilter)
Vue.component('main-app', require('./components/MainApp.vue').default);
Vue.component('tabs-menu', require('./components/TabsMenu.vue').default);
Vue.component('tab', require('./components/Tab.vue').default);
Vue.component('pr', require('./components/Prac.vue').default);


const app = new Vue({
    el: '#app',
});
