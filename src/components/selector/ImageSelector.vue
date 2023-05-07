<template>
    <v-card id="rounded-card" outlined class="over-flow-hidden" @click.stop="onClickSelectImage">
        <input id="file-input" class="d-none" type="file" accept="image/*" @input="onUpdateImage"/>
        <v-img v-if="image" aspect-ratio="10" src="image" />
        <v-row v-else class="d-flex flex-column align-center justify-center fill-height">
            <v-icon size="85" color="black" class="align-center">mdi-account-tie</v-icon>
        </v-row>
    </v-card>
</template>

<script>
export default {
    data: () => ({
        inputSettings: undefined,
        imageFileURL: undefined,
        image: undefined
    }),
    mounted() {
        this.input = document.getElementById('file-input');
    },
    methods: {
        onClickSelectImage() {
            this.input.click();
        },
        onUpdateImage(event) {
            this.imageFile = event.target.files[0];
            this.image = this.imageFile ? URL.createObjectURL(this.imageFile) : undefined;
            this.$emit('input', this.imageFile);
        }
    }
};
</script>

<style lang="scss" scoped>
#rounded-card {
    border-radius: 50% !important;
    height: 6rem !important;
    width: 6rem !important;
}
</style>
>
