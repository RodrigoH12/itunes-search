<template>
    <div id="nav-bar-menu">
        <v-system-bar color="deep-purple darken-3"></v-system-bar>

        <v-app-bar color="deep-purple accent-4" dark>
            <v-app-bar-nav-icon
                @click.stop="drawer = !drawer"
            ></v-app-bar-nav-icon>

            <v-toolbar-title>Itunes Store Search</v-toolbar-title>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" absolute temporary>
            <v-list nav dense>
                <v-list-item-group v-model="group">
                    <v-list-item
                        v-for="view in views"
                        :key="view.title"
                        link
                        :to="view.path"
                    >
                        <v-list-item-content>
                            <v-list-item-title>{{
                                view.title
                            }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
export default {
    name: 'NavBarMenu',
    data() {
        return {
            drawer: false,
            group: null,
            views: [
                { title: 'Home', path: '/' },
                { title: 'Itunes Search', path: '/apiSearch' },
                { title: 'JSON Search', path: '/jsonSearch' }
            ]
        };
    }
};
</script>
