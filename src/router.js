import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export const RoutePath = {
    HOME: '/',
    DASHBOARD: '/dashboard',
    REGISTER_PROFESSIONAL: '/professionals/register',
    PATIENTS: '/createART',
   
};

export default new Router({
    mode: 'history',
    routes: [
        {
            path: RoutePath.HOME,
            name: 'Home',
            redirect: RoutePath.DASHBOARD
        },

        {
            path: RoutePath.DASHBOARD,
            name: 'DashboardView',
            component: () => import('./views/DashboardView/DashboardView.vue')
        },

        {
            path: RoutePath.PATIENTS,
            name: 'Patients',
            component: () => import('./views/RegisterARTView/RegisterARTView.vue')
        },

        {
            path: RoutePath.REGISTER_PROFESSIONAL,
            name: 'RegisterProfesionalView',
            component: () => import('./views/ProfessionalsView/RegisterProfessionalView.vue')
        }
    ],
    scrollBehavior() {
        return { x: 0, y: 0 };
    }
});

export const RouteHandler = {
    goToPreviousPage(context) {
        return context.$router.go(-1);
    },

    goToDashboardPage(context) {
        goToRouteIfNotThereYet(context, RoutePath.DASHBOARD);
    }
};

const goToRouteIfNotThereYet = (context, route) => {
    if (context.$route.path != route) {
        context.$router.push(route);
    }
};
