<template>
    <v-layout row>
        <v-text-field
            v-model="request"
            filled
            label="Enter Artist Name"
            @keyup.enter="search()"
        >
        </v-text-field>
        <v-btn
            color="deep-purple darken-3"
            outlined
            dark
            height="55"
            v-bind="attrs"
            v-on="on"
            @click="search()"
        >
            <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                    color="deep-purple darken-3"
                    outlined
                    dark
                    height="55"
                    v-bind="attrs"
                    v-on="on"
                >
                    <v-icon>mdi-filter</v-icon>
                </v-btn>
            </template>
            <v-list>
                <v-list-item
                    v-for="(item, index) in items"
                    :key="index"
                    link
                    @click="sortFilter = item.type; $emit('filter', sortFilter);"
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
                { title: 'Predeterminado', type: 'none' },
                { title: 'Alfabéticamente ascendente  [A - Z]', type: 'asc' },
                { title: 'Alfabéticamente descendente [Z - A]', type: 'desc' }
            ],
        }
    },
    methods: {
        search() {
            this.$emit('filter', this.sortFilter);
            this.$emit('author', this.request);
            this.$emit('search');
        },
    }
}
</script>
