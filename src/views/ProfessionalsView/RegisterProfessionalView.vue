<template>
    <v-card class="border" outlined rounded="10">
        <v-container class="align-center">
            <h1><center>Cadastro de Funcionários</center></h1>
            <div class="body">
                <span class="message-required-field">Atenção os campos marcados com * são obrigatórios </span>
                <div class="compact-form">
                    <v-card class="form-professional" rounded="10" height="19rem" elevation="3">
                        <v-card-title class="title-card white--text">Dados Pessoais:</v-card-title>
                        <v-form ref="form">
                            <v-container class="pb-0">
                                <v-row class="ma-0 py-0">
                                    <v-col>
                                        <image-selector v-model="image" />
                                    </v-col>
                                    <v-col class="py-0" cols="12" md="10" align-self="stretch">
                                        <v-text-field
                                            label="Nome completo*"
                                            placeholder="Ex. João Ademar Vieira"
                                            outlined
                                            dense
                                            hint="Digite seu nome completo"
                                            color="#333"
                                            :rules="[rules.required, rules.min]"
                                        ></v-text-field>
                                        <v-row>
                                            <v-col class="py-0" cols="12" md="8">
                                                <v-text-field
                                                    label="CPF*"
                                                    placeholder="Ex. 000.000.000-00"
                                                    outlined
                                                    dense
                                                    hint="Digite seu número de cpf"
                                                    color="#333"
                                                    :rules="[rules.required, rules.minCPF]"
                                                ></v-text-field>
                                            </v-col>
                                            <v-col class="py-0 ma-0" cols="12" md="4">
                                                <v-text-field
                                                    label="Nasc*"
                                                    placeholder="Ex. 01/01/2022"
                                                    outlined
                                                    dense
                                                    color="#333"
                                                ></v-text-field>
                                            </v-col>
                                        </v-row>
                                        <v-text-field
                                            label="Email*"
                                            placeholder="Ex. joao@gmail.com"
                                            outlined
                                            dense
                                            hint="Digite seu email"
                                            color="#333"
                                            :rules="[rules.required, rules.email]"
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row class="ma-0 pa-0" dense>
                                    <v-col class="py-0" cols="12" md="4">
                                        <v-text-field
                                            label="Tel.1*"
                                            placeholder="Ex. (99) 90000-0000"
                                            outlined
                                            dense
                                            hint="Digite seu número de telefone"
                                            color="#333"
                                            :rules="[rules.required, rules.minCellphone]"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col class="py-0" cols="12" md="4">
                                        <v-text-field
                                            label="Tel.2"
                                            placeholder="Ex. (99) 90000-0000"
                                            outlined
                                            dense
                                            color="#333"
                                            :rules="[rules.minCellphone]"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col class="py-0" cols="12" md="4">
                                        <v-text-field
                                            label="RG*"
                                            placeholder="Ex. 00000000-0"
                                            outlined
                                            dense
                                            color="#333"
                                            :rules="[rules.required, rules.minRG]"
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-form>
                    </v-card>
                </div>
                <div class="compact-form">
                    <v-card class="form-professional" rounded="10" elevation="3">
                        <v-card-title class="title-card white--text" dense>Endereço:</v-card-title>
                        <v-form ref="form">
                            <v-container class="pb-0">
                                <v-row class="ma-0 py-0" dense>
                                    <v-col class="py-0" cols="12" md="12">
                                        <v-text-field
                                            label="Endereço*"
                                            placeholder="Ex. Rua Valdemar dos Santos"
                                            outlined
                                            dense
                                            hint="Digite seu endereço"
                                            color="#333"
                                            :rules="[rules.required, rules.min, rules.max]"
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row class="ma-0 py-0" dense>
                                    <v-col class="py-0" cols="12" md="4">
                                        <v-text-field
                                            label="CEP*"
                                            placeholder="Ex. 000000-00"
                                            outlined
                                            dense
                                            hint="Digite seu CEP"
                                            color="#333"
                                            :rules="[rules.required, rules.minCEP]"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col class="py-0" cols="12" md="4">
                                        <v-text-field
                                            label="Estado*"
                                            placeholder="Ex. Ceará"
                                            outlined
                                            dense
                                            hint="Digite o nome do seu estado"
                                            color="#333"
                                            :rules="[rules.required, rules.min]"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col class="py-0" cols="12" md="4">
                                        <v-text-field
                                            label="Bairro"
                                            placeholder="Ex. Meireles"
                                            hint="Digite seu bairro"
                                            outlined
                                            dense
                                            color="#333"
                                            :rules="[rules.required, rules.min]"
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row class="space_cards ma-0 py-0" dense>
                                    <v-col class="py-0" cols="12" md="6">
                                        <v-text-field
                                            label="Cidade*"
                                            placeholder="Ex. Fortaleza"
                                            outlined
                                            dense
                                            hint="Digite o nome da sua cidade"
                                            color="#333"
                                            :rules="[rules.required, rules.minCity]"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col class="py-0" cols="12" md="6">
                                        <v-text-field
                                            label="Complemento"
                                            placeholder="Ex. Próximo ao detran"
                                            outlined
                                            dense
                                            color="#333"
                                            :rules="[rules.min]"
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-form>
                    </v-card>
                </div>
                <div class="compact-form">
                    <v-card class="form-professional" rounded="10" elevation="3">
                        <v-card-title class="title-card white--text">Dados Profissionais:</v-card-title>
                        <v-form ref="form">
                            <v-container class="pb-0">
                                <v-row class="ma-0 py-0" dense>
                                    <v-col class="py-0" cols="12" md="8">
                                        <v-text-field
                                            label="Admissão*"
                                            placeholder="Ex. 22/02/2012"
                                            outlined
                                            dense
                                            color="#333"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col class="py-0 ma-0" cols="12" md="4">
                                        <v-text-field
                                            label="CRM"
                                            placeholder="Ex. 00000000"
                                            outlined
                                            dense
                                            color="#333"
                                            :rules="[rules.maxCRM]"
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row class="ma-0 py-0" dense>
                                    <v-col class="py-0" cols="12">
                                        <v-text-field
                                            label="Cargo*"
                                            placeholder="Ex. Médico"
                                            outlined
                                            dense
                                            hint="Digite seu cargo"
                                            color="#333"
                                            :rules="[rules.required, rules.min]"
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-form>
                    </v-card>
                </div>
                <div class="compact-form">
                    <v-card class="form-professional" rounded="10" elevation="3">
                        <v-card-title class="title-card white--text">Dados de Login:</v-card-title>
                        <v-form ref="form">
                            <v-container class="pb-0">
                                <v-row class="space_cards ma-0 py-0" dense>
                                    <v-col class="py-0" cols="12" md="6" dense>
                                        <v-text-field
                                            id="password"
                                            v-model="password"
                                            type="password"
                                            name="password"
                                            label="Senha*"
                                            outlined
                                            dense
                                            hint="Digite sua senha"
                                            color="#333"
                                            :rules="[rules.minPassword]"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col class="py-0" cols="12" md="6" dense>
                                        <v-text-field
                                            id="password"
                                            v-model="password"
                                            type="password"
                                            name="password"
                                            label="Confirm. de senha*"
                                            outlined
                                            dense
                                            color="#333"
                                            :rules="[rules.minPassword]"
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-form>
                    </v-card>
                </div>
            </div>
        </v-container>
    </v-card>
</template>

<script>
import ImageSelector from '../../components/selector/ImageSelector.vue';

export default {
    components: {
        'image-selector': ImageSelector
    },
    data: () => ({
        return: {
            image: undefined
        },
        rules: {
            required: (value) => !!value || 'Campo obrigatório',
            max: (value) => value.length <= 120 || 'Máximo de 120 caracteres.',
            min: (value) => value.length >= 5 || 'Mínimo de 5 caracteres.',
            minCity: (value) => value.length >= 3 || 'Mínimo de 3 caracteres.',
            minPassword: (value) => value.length >= 6 || 'Mínimo de 6 caracteres.',
            maxCRM: (value) => value.length <= 20 || 'Máximo de 20 caracteres.',
            minCPF: (value) => value.length == 14 || 'Mínimo de 11 caracteres.',
            minRG: (value) => value.length == 0 || value.length >= 8 || 'Mínimo de 8 caracteres.',
            minCEP: (value) => value.length >= 9 || 'Mínimo de 8 caracteres.',
            minCellphone: (value) => value.length == 15 || 'Mínimo de 11 caracteres.',
            email: (value) => {
                const pattern =
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return pattern.test(value) || 'E-mail inválido';
            }
        }
    })
};
</script>

<style lang="scss" scoped>
h1 {
    color: #cc0000;
    margin-left: 30%;
    display: flex;
    font-family: 'Open Sans';
    font-weight: 620;
}
.title-card {
    background-color: #333 !important;
    font-family: 'Open Sans';
    font-weight: 350;
    height: 3rem;
    align-content: center;
}
.border {
    border-color: #cc0000;
    margin-left: 2rem;
    margin-right: 2rem;
    background-color: #fff;
}
.message-required-field {
    font-family: 'Open Sans';
    font-size: 10px;
    margin: 8%;
}
.form-professional {
    margin-left: 5%;
    margin-right: 5%;
    margin-bottom: 2%;
    width: 50rem;
    text-align: center;
}
.compact-form {
    transform: scale(0.9);
}
</style>
>
