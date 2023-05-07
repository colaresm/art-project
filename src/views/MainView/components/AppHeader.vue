<template>
    <div class="d-flex align-center">
        <v-btn icon @click="$emit('clickOpenMenu', arguments[0])">
            <v-icon :style="collapsedMenu ? 'transform: rotate(180deg)' : ''">mdi-menu-open</v-icon>
        </v-btn>

        <v-breadcrumbs class="pa-0 ma-0" :items="items"></v-breadcrumbs>
    </div>
</template>

<script>
export default {
    props: {
        collapsedMenu: {
            type: Boolean,
            default: false
        }
    },

    data: () => ({
        items: [
            {
                text: 'Dashboard',
                disabled: false,
                href: 'breadcrumbs_dashboard'
            },
            {
                text: 'Link 1',
                disabled: false,
                href: 'breadcrumbs_link_1'
            },
            {
                text: 'Link 2',
                disabled: true,
                href: 'breadcrumbs_link_2'
            }
        ]
    })
};
</script>

<style></style>
