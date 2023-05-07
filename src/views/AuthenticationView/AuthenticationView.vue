<template>
    <v-app class="background-login">
        <login v-if="isLogging" @goToPasswordRecover="isLogging = false" />
        <password-recover v-else @goToLogin="isLogging = true" />
    </v-app>
</template>

<script>
import Login from './components/Login.vue';
import PasswordRecover from './components/PasswordRecover.vue';

export default {
    components: {
        login: Login,
        'password-recover': PasswordRecover
    },

    data: () => ({
        isLogging: true
    })
};
</script>

<style scoped>
.background-login {
    background-image: linear-gradient(#333, #484848) !important;
}
</style>
