<template>
    <v-layout row>
        <v-text-field
            v-model="request"
            class="custom-input mr-4"
            color="deep-purple darken-3"
            label="Enter Artist Name"
            @keyup.enter="search()"
        >
        </v-text-field>
        <v-btn
            class="text-none mr-4"
            color="deep-purple darken-3"
            outlined
            height="48"
            v-bind="attrs"
            v-on="on"
            @click="search()"
        >
            <div class="mx-1">Search</div>
            <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                    class="text-none"
                    color="deep-purple darken-3"
                    outlined
                    height="48"
                    v-bind="attrs"
                    v-on="on"
                >
                    <div class="mx-1">Filters</div>
                    <v-icon>mdi-filter</v-icon>
                </v-btn>
            </template>
            <v-list>
                <v-list-item
                    v-for="(item, index) in items"
                    :key="index"
                    link
                    @click="
                        sortFilter = item.type;
                        $emit('filter', sortFilter);
                    "
                >
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </v-layout>
</template>

<script>
export default {
    name: 'SearchBar',
    data() {
        return {
            attrs: null,
            on: null,
            sortFilter: 'none',
            request: '',
            items: [
                { title: 'Default', type: 'none' },
                { title: 'Ascending order  [A - Z]', type: 'asc' },
                { title: 'Descending order [Z - A]', type: 'desc' }
            ]
        };
    },
    methods: {
        search() {
            this.$emit('filter', this.sortFilter);
            this.$emit('author', this.request);
            this.$emit('search');
        }
    }
};
</script>
