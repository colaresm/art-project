<template>
    <v-text-field
        color="#333"
        :rules="[rules.required, rules.email]"
        label="Email"
        placeholder="Digite seu email"
    ></v-text-field>
</template>

<script>
export default {
    data: () => ({
        rules: {
            required: (value) => !!value || 'Campo obrigatório',
            email: (value) => {
                const pattern =
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return pattern.test(value) || 'E-mail inválido.';
            }
        }
    })
};
</script>

<style lang="scss" scoped>
</style>