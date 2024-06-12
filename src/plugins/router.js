import {createRouter, createWebHistory} from "vue-router";
import {defineAsyncComponent} from "vue";

const ifAuthorized = (to, from, next) => {
    if (localStorage.getItem('token') !== null){
        next()
    } else {
        next('/login')
    }
}

const ifNotAuthorized = (to, from, next) => {
    if (localStorage.getItem('token') === null){
        next()
    } else{
        next('/')
    }
}
const routes = [
    {
        path:'/',
        component: () => import('@/pages/HomePage.vue'),
        meta:{
            layout:defineAsyncComponent(() => import('@/layouts/DefaultLayout.vue'))
        },
        beforeEnter: ifAuthorized,
    },
    {
        path:'/book-info/:bookId',
        component: () => import('@/pages/BookinfoPage.vue'),
        meta:{
            layout:defineAsyncComponent(() => import('@/layouts/DefaultLayout.vue'))
        },
        beforeEnter: ifAuthorized,
    },
    {
        path: '/login',
        component: () => import('@/pages/LoginPage.vue'),
        meta:{
            layout:defineAsyncComponent(() => import('@/layouts/BlankLayout.vue'))
        },
        beforeEnter:ifNotAuthorized,
    },
    {
        path:'/edit-category',
        component: () => import('@/pages/EditCategory.vue'),
        meta:{
            layout:defineAsyncComponent(() => import('@/layouts/DefaultLayout.vue'))
        },
        beforeEnter: ifAuthorized,
    },
    {
        path:'/create-book',
        component: () => import('@/pages/CreateBook.vue'),
        meta:{
            layout:defineAsyncComponent(() => import('@/layouts/DefaultLayout.vue'))
        },
        beforeEnter: ifAuthorized,
    },
    {
        path:'/by-category/:id',
        component: () => import('@/pages/HomePage.vue'),
        meta:{
            layout:defineAsyncComponent(() => import('@/layouts/DefaultLayout.vue'))
        },
        beforeEnter: ifAuthorized,
    },
    {
        path:'/create-categoriya',
        component: () => import('@/pages/CreateCategory.vue'),
        meta:{
            layout:defineAsyncComponent(() => import('@/layouts/DefaultLayout.vue'))
        },
        beforeEnter: ifAuthorized,
    }
]

export default createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'active'
})