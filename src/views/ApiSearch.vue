<template>
    <v-container class="main-container">
        <v-container>
            <SearchBar
                @author="author = $event"
                @filter="sortFilter = $event"
                @search="
                    page = 0;
                    submitSearch();
                "
            />
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

        <v-container v-else grid-list-lg>
            <v-layout row wrap>
                <v-flex
                    xs12
                    sm6
                    md4
                    lg3
                    :key="index"
                    v-for="(album, index) in sortedArray"
                >
                    <Card :album="album"></Card>
                </v-flex>
                <v-flex xs12 class="text-center">
                    <Pagination
                        :albumsQty="albums.length"
                        :page="page"
                        @changePage="page = $event"
                        @search="submitSearch()"
                    />
                </v-flex>
            </v-layout>
        </v-container>
    </v-container>
</template>

<script>
import axios from 'axios';
import SearchBar from '@/components/SearchBar';
import Card from '@/components/Card';
import Pagination from '@/components/Pagination';

export default {
    name: 'ApiSearch',

    components: {
        SearchBar,
        Card,
        Pagination
    },

    data() {
        return {
            page: 0,
            sortFilter: 'none',
            author: '',
            entity: 'album',
            albums: []
        };
    },

    computed: {
        sortedArray() {
            if (this.sortFilter === 'none') {
                return this.albums;
            } else if (this.sortFilter === 'asc') {
                return JSON.parse(JSON.stringify(this.albums)).sort(
                    this.compareAsc
                );
            } else {
                return JSON.parse(JSON.stringify(this.albums)).sort(
                    this.compareDesc
                );
            }
        }
    },

    methods: {
        compareAsc(a, b) {
            if (a.collectionName < b.collectionName) return -1;
            if (a.collectionName > b.collectionName) return 1;
            return 0;
        },
        compareDesc(a, b) {
            if (a.collectionName > b.collectionName) return -1;
            if (a.collectionName < b.collectionName) return 1;
            return 0;
        },
        async submitSearch() {
            if (this.author === '') {
                this.albums = [];
                return;
            }

            return axios
                .get(
                    process.env.VUE_APP_API_URL +
                        `search?term=${this.author}&entity=${
                            this.entity
                        }&attribute=artistTerm&limit=20&offset=${
                            this.page * 20
                        }`
                )
                .then((response) => {
                    this.albums = response.data.results;
                });
        }
    }
};
</script>

<style>
.main-container {
    padding: 24px;
}
</style>
