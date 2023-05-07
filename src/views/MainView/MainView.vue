<template>
    <div class="d-flex layout-wrapper">
        <div class="layout-menu">
            <app-menu :collapsedMenu="isCollapsedMenu"></app-menu>
        </div>

        <div class="layout-main">
            <app-header :collapsedMenu="isCollapsedMenu" @clickOpenMenu="onClickOpenMenu"></app-header>

            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import AppMenu from './components/AppMenu.vue';
import AppHeader from './components/AppHeader.vue';

export default {
    components: {
        'app-menu': AppMenu,
        'app-header': AppHeader
    },

    data: () => ({
        isCollapsedMenu: false
    }),

    methods: {
        onClickOpenMenu(event) {
            this.isCollapsedMenu = !this.isCollapsedMenu;

            event.preventDefault();
        }
    }
};
</script>

<style lang="scss">
.layout-wrapper {
    height: 100%;
}

.layout-main {
    width: 100%;
    padding: 1em;
}
</style>
