<template>
    <div>
        <br>
            <v-container>
                <v-layout row>
                    <v-text-field
                        v-model="request"
                        filled
                        label="Enter Artist Name"
                        @keyup.enter="page=0; submitSearch();"
                    >
                    </v-text-field>
                    <v-btn
                        color="deep-purple darken-3"
                        outlined
                        dark
                        height="55"
                        v-bind="attrs"
                        v-on="on"
                        @click="page=0; submitSearch();"
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
                            @click="sortFilter = item.type"
                            >
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </v-layout>
            </v-container>

            <v-container v-if="sortedArray.length === 0">
                <v-row class="text-center">
                    <v-col class="mb-4">
                        <p class="subheading font-weight-regular">
                            Type the name of your favorite artist
                        </p>
                    </v-col>
                </v-row>
            </v-container>
            
            <v-container v-else class="my-5" grid-list-lg>
                <v-layout row wrap>
                    <v-flex xs12 sm6 md4 lg3 :key="index" v-for="(album, index) in sortedArray">
                        <Card :album="(album)"></Card>
                    </v-flex>
                    <v-flex xs12 class="text-center">
                        <Pagination :albumsQty="albums.length" 
                            @changePage="page = $event" 
                            @search="submitSearch()"
                        />
                    </v-flex>
                </v-layout>
            </v-container>
    </div>
</template>

<script>
import axios from 'axios'
import Card from "@/components/Card";
import Pagination from "@/components/Pagination";

export default {
    name: 'ApiSearch',

    components: {
        Card,
        Pagination
    },

    data() {
        return {
            attrs: null,
            on: null,
            page: 0,
            sortFilter: null,
            request: '',
            entity: 'album',
            albums: [],
            items: [
                { title: 'Predeterminado', type: null },
                { title: 'Alfabéticamente ascendente  [A - Z]', type: 'asc' },
                { title: 'Alfabéticamente descendente [Z - A]', type: 'desc' }
            ],
        }
    },

    computed: {
        sortedArray() {
            if (this.sortFilter == null) {
                return this.albums;
            }
            else if (this.sortFilter == "asc") {
                return (JSON.parse(JSON.stringify(this.albums))).sort(this.compareAsc);
            }
            else {
                return (JSON.parse(JSON.stringify(this.albums))).sort(this.compareDesc);
            }
        }
    },

    methods: {
        compareAsc(a, b) {
            if (a.collectionName < b.collectionName)
                return -1;
            if (a.collectionName > b.collectionName)
                return 1;
            return 0;
        },
        compareDesc(a, b) {
            if (a.collectionName > b.collectionName)
                return -1;
            if (a.collectionName < b.collectionName)
                return 1;
            return 0;
        },
        async submitSearch() {
            if (this.request === '') {
                this.albums = []
                return
            }

            return axios.get(`https://itunes.apple.com/search?term=${this.request}&entity=${this.entity}&attribute=artistTerm&limit=20&offset=${this.page * 20}`)
            .then((response) => {
                this.albums=response.data.results;
            })
        },
    }
};
</script>
