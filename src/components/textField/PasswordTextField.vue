<template>
    <v-text-field
        :type="type"
        :append-icon="icon"
        @click:append="isPasswordVisible = !isPasswordVisible"
        :rules="[rules.required]"
        color="#333"
        :label="label"
        :placeholder="placeholder"
    >
    </v-text-field>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            default: ''
        },

        placeholder: {
            type: String,
            default: ''
        }
    },

    data: () => ({
        isPasswordVisible: false,
        rules: {
            required: (value) => !!value || 'Campo obrigatório'
        }
    }),

    computed: {
        type() {
            return this.isPasswordVisible ? 'text' : 'password';
        },

        icon() {
            return this.isPasswordVisible ? 'mdi-eye' : 'mdi-eye-off';
        }
    }
};
</script>

<style lang="scss" scoped>
</style>