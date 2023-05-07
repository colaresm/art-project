<template>
    <v-card width="35vw" min-width="450" class="ma-auto py-7 px-13 rounded-lg">
        <v-card-title class="justify-center">Recuperar senha</v-card-title>

        <v-stepper alt-labels v-model="stepIndex" flat>
            <v-stepper-header>
                <v-stepper-step :complete="stepIndex > 1" step="1" color="#CC0000"> Email </v-stepper-step>

                <v-divider></v-divider>

                <v-stepper-step :complete="stepIndex > 2" step="2" color="#CC0000"> Código </v-stepper-step>

                <v-divider></v-divider>

                <v-stepper-step step="3" color="#CC0000"> Senha </v-stepper-step>
            </v-stepper-header>

            <v-stepper-items>
                <v-stepper-content step="1">
                    <v-container>
                        <v-row>
                            <v-col class="pa-0 ma-0">
                                <v-card-subtitle class="justify-center"
                                    >Insira o e-mail para a recuperação de senha</v-card-subtitle
                                >
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col class="pa-0 ma-0">
                                <email-text-field></email-text-field>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col>
                                <cancel-button @click="onClickCancel()"></cancel-button>
                            </v-col>

                            <v-col class="d-flex justify-end align-center">
                                <confirm-button text="Enviar" @click="onClickSend()"></confirm-button>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-stepper-content>

                <v-stepper-content step="2">
                    <v-container>
                        <v-row>
                            <v-col class="pa-0 ma-0">
                                <v-card-subtitle class="d-flex justify-center"
                                    >Insira o código de recuperação</v-card-subtitle
                                >
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col class="pa-0 ma-0">
                                <v-text-field color="#333" :rules="[rules.required]" label="Código"></v-text-field>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col>
                                <cancel-button @click="onClickCancel()"></cancel-button>
                            </v-col>

                            <v-col class="d-flex justify-end align-center">
                                <confirm-button text="Validar" @click="onClickValidate()"></confirm-button>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-stepper-content>

                <v-stepper-content step="3">
                    <v-container>
                        <v-row>
                            <v-col class="pa-0 ma-0">
                                <v-card-subtitle class="d-flex justify-center">Insira sua nova senha</v-card-subtitle>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col class="pa-0 ma-0">
                                <password-text-field
                                    label="Senha"
                                    placeholder="Digite sua nova senha"
                                ></password-text-field>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col class="pa-0 ma-0">
                                <password-text-field
                                    label="Confirmar senha"
                                    placeholder="Confirme sua nova senha"
                                ></password-text-field>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col>
                                <cancel-button @click="onClickCancel()"></cancel-button>
                            </v-col>

                            <v-col class="d-flex justify-end align-center">
                                <confirm-button text="Salvar" @click="onClickSave()"></confirm-button>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-stepper-content>
            </v-stepper-items>
        </v-stepper>
    </v-card>
</template>

<script>
import EmailTextField from '@/components/textField/EmailTextField.vue';
import PasswordTextField from '@/components/textField/PasswordTextField.vue';
import CancelButton from '@/components/button/CancelButton.vue';
import ConfirmButton from '@/components/button/ConfirmButton.vue';

export default {
    components: {
        'email-text-field': EmailTextField,
        'password-text-field': PasswordTextField,
        'cancel-button': CancelButton,
        'confirm-button': ConfirmButton
    },

    data: () => ({
        stepIndex: 1,
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
        onClickCancel() {
            this.$emit('goToLogin');
        },

        onClickSend() {
            this.stepIndex = 2;
        },

        onClickValidate() {
            this.stepIndex = 3;
        },

        onClickSave() {
            this.stepIndex = 1;
        }
    }
};
</script>

<style lang="scss" scoped>
.forget {
    text-decoration: underline;
    color: #333 !important;
}

.v-stepper__header {
    box-shadow: none;
}
</style>
