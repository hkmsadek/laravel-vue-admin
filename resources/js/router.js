
import Router from 'vue-router'
import Vue from 'vue'
Vue.use(Router)
// admin project pages 
import home from './components/pages/home'
import category from './admin/pages/category'
import adminusers from './admin/pages/adminusers'
import login from './admin/pages/login'
const routes = [
    //projects routes....

    {
        path: '/', 
        component: home, 
        name: 'home'
       
    },

    {
        path: '/category', 
        component: category, 
        name: 'category'
       
    },
    {
        path: '/adminusers', 
        component: adminusers, 
        name: 'adminusers'
       
    },
    {
        path: '/login', 
        component: login, 
        name: 'login'
    },




]



export default new Router({
    mode: 'history', 
    routes

})