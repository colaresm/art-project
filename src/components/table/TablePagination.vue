<template>
    <v-pagination
        :value="value"
        @input="$emit('input', arguments[0])"
        :length="Number.parseInt(length / itemsPerPage)"
        :total-visible="5"
        class="elevation-0"
    ></v-pagination>
</template>

<script>
export default {
    props: {
        value: {
            type: Number,
            default: 0
        },

        length: {
            type: Number,
            default: 0
        },

        itemsPerPage: {
            type: Number,
            default: 0
        }
    }
};
</script>

<style>
</style>