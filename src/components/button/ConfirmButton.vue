<template>
    <v-btn class="white--text" @click="$emit('click')" color="#CC0000">{{ text }}</v-btn>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            default: ''
        }
    }
};
</script>