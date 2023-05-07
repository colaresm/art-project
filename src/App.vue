<template>
    <v-app>
        <main-view v-if="isLogged"></main-view>

        <authentication-view v-else></authentication-view>
    </v-app>
</template>

<script>
import { AuthenticationHandler } from '@/store/modules/authentication';
// import AuthenticationHttpRequest from '@/http/AuthenticationHttpRequest';
// import LocalStorageHandler from '@/handlers/LocalStorageHandler';

import AuthenticationView from '@/views/AuthenticationView/AuthenticationView.vue';
import MainView from '@/views/MainView/MainView.vue';

export default {
    components: {
        'main-view': MainView,
        'authentication-view': AuthenticationView
    },

    data: () => ({
        isLoadingUser: false
    }),

    computed: {
        isLogged() {
            return AuthenticationHandler.isLogged(this);
        }
    },

    mounted() {
        document.title = 'REGISTRART';
    }
};
</script>
