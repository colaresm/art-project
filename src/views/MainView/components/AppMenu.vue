<template>
    <v-navigation-drawer :mini-variant="collapsedMenu" permanent width="240">
        <v-list nav dense>
            <v-list-item>
                <v-img aspect-ratio="5" class="my-6" contain src="@/assets/crea.png"></v-img>
            </v-list-item>

            <v-list-item-title class="menu-title my-3" v-if="!collapsedMenu">
                <div class="ml-4" :class="collapsedMenu ? 'hidden-menu-text' : ''">
                    <h3 style="font-size: 1.25rem">Menu</h3>
                </div>
            </v-list-item-title>

            <v-list-item-group v-model="selectedMenuItem" mandatory>
                <v-list-item v-for="(item, i) in items" :key="i" color="#000" :to="item.to">
                    <v-tooltip right color="primary">
                        <template v-slot:activator="{ on }">
                            <v-list-item-icon v-on="on">
                                <v-icon v-text="item.icon" color="#333"></v-icon>
                            </v-list-item-icon>

                            <v-list-item-content>
                                <v-list-item-title
                                    v-text="item.text"
                                    style="font-size: 0.875em; color: #333"
                                ></v-list-item-title>
                            </v-list-item-content>
                        </template>

                        <span>{{ item.text }}</span>
                    </v-tooltip>
                </v-list-item>
            </v-list-item-group>
        </v-list>

        <template v-slot:append>
            <v-divider></v-divider>

            <v-list-item two-line dense class="px-2">
                <v-list-item-avatar>
                    <img src="https://randomuser.me/api/portraits/women/81.jpg" />
                </v-list-item-avatar>

                <v-list-item-content>
                    <v-list-item-title class="primary--text">Caio Pedrosa Lima</v-list-item-title>

                    <v-list-item-subtitle></v-list-item-subtitle>
                </v-list-item-content>

                <v-btn icon>
                    <v-icon color="secondary">mdi-logout-variant</v-icon>
                </v-btn>
            </v-list-item>
        </template>
    </v-navigation-drawer>
</template>
<script>
import { RoutePath } from '@/router';
export default {
    props: {
        collapsedMenu: {
            type: Boolean,
            default: false
        }
    },

    data: () => ({
        selectedMenuItem: 0
    }),

    computed: {
        items() {
            return [
                {
                    text: 'Painel Principal',
                    icon: 'mdi-view-dashboard',
                    to: RoutePath.DASHBOARD
                },

                {
                    text: 'Emissão de ARTS',
                    icon: 'di mdi-account-box-multiple',
                    to: RoutePath.PATIENTS
                },

          
                ]
        }
    }
};
</script>
<style>
.menu-title {
    display: absolute;
}

.menu-icon {
    margin-top: -2em;
    text-align: right;
}

.hidden-menu-text {
    visibility: hidden;
}
</style>
