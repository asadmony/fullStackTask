import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// import fp from './components/pages/firstpage'

const routes = [
    {
        path: '/',
        component: home
    },
]

export default new Router({
    mode: 'history',
    routes
})
