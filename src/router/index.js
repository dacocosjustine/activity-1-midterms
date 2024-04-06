import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from "@/components/LoginPage.vue";
import BrowseBooks from "@/components/BrowseBooks.vue";
import ShoppingCart from "@/components/ShoppingCart.vue";

const routes = [
    {
        path: '/',
        name: 'LoginPage',
        component: LoginPage
    },
    {
        path: '/browse',
        name: 'BrowseBooks',
        component: BrowseBooks,
        beforeEnter: (to, from, next) => {
            if (localStorage.getItem('password') === 'admin') {
                next();
            } else {
                next('/');
            }
        }
    },
    {
        path: '/cart',
        name: 'ShoppingCart',
        component: ShoppingCart
    }

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router