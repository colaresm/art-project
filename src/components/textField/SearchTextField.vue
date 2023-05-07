<template>
    <v-text-field
        outlined
        prepend-inner-icon="mdi-magnify"
        :value="value"
        color="secondary"
        dense
        label="Pesquisar"
        @input="$emit('input', arguments[0])"
    ></v-text-field>
</template>

<script>
export default {
    props: {
        value: {
            type: String,
            default: ''
        }
    }
};
</script>