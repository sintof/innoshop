import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/NavViews/HomeView.vue'
import { auth } from '@/firebase'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/profile',
            name: 'profile',
            component: () => import('../views/NavViews/ProfileView.vue'),
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/favorite',
            name: 'favorite',
            component: () => import('../views/NavViews/FavoriteItemsView.vue'),
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../views/AuthViews/LoginView.vue')
        },
        {
            path: '/signup',
            name: 'signup',
            component: () => import('../views/AuthViews/SignUpView.vue')
        }
    ]
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        const isAuthenticated = auth.currentUser
        if (!isAuthenticated) {
            next('/login')
        } else {
            next()
        }
    } else {
        next()
    }
})

export default router
