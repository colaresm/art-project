<template>
    <v-text-field
        :value="value"
        label="Items por página"
        type="number"
        min="1"
        max="15"
        @input="$emit('input', arguments[0])"
        color="secondary"
        outlined
        dense
    ></v-text-field>
</template>

<script>
export default {
    props: {
        value: {
            type: Number,
            default: 0
        }
    }
};
</script>

<style>
</style>
