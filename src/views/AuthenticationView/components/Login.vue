<template>
    <v-card width="35vw" min-width="450" class="ma-auto py-10 px-13 rounded-lg">
        <v-img src="@/assets/crea.png" contain aspect-ratio="7"> </v-img>

        <v-card-title class="justify-center caption">LOGIN</v-card-title>

        <v-form>
            <v-container>
                <v-row>
                    <v-col class="pa-0 ma-0">
                        <email-text-field></email-text-field>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col class="pa-0 ma-0">
                        <password-text-field label="Senha" placeholder="Digite sua senha"></password-text-field>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col class="pa-0 ma-0">
                        <v-checkbox label="Lembre-me" color="#CC0000"></v-checkbox>
                    </v-col>

                    <v-col class="pa-0 ma-0 d-flex justify-end align-center">
                        <a class="forget caption" @click="onClickPasswordRecover()">Esqueci minha senha</a>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col class="pa-0 ma-0">
                        <v-btn class="white--text" block color="#CC0000">Entrar</v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-form>
    </v-card>
</template>

<script>
import EmailTextField from '@/components/textField/EmailTextField.vue';
import PasswordTextField from '@/components/textField/PasswordTextField.vue';

export default {
    components: {
        'email-text-field': EmailTextField,
        'password-text-field': PasswordTextField
    },

    data: () => ({
        rules: {
            required: (value) => !!value || 'Campo obrigatório',
            email: (value) => {
                const pattern =
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return pattern.test(value) || 'E-mail inválido.';
            }
        }
    }),

    methods: {
        onClickPasswordRecover() {
            this.$emit('goToPasswordRecover');
        }
    }
};
</script>

<style lang="scss">
.forget {
    text-decoration: underline;
    color: #333 !important;
}
</style>
