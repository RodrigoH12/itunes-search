<template>
    <div class="text-left mx-auto custom-card">
        <v-img
            v-if="album.artworkUrl100 != null"
            contain
            height="300"
            width="300"
            :src="resizeImg(album)"
        ></v-img>
        <v-img
            v-else
            contain
            height="300"
            width="300"
            src="https://upload.wikimedia.org/wikipedia/commons/d/df/ITunes_logo.svg"
        ></v-img>
        <v-flex class="text-xs-left" xs12>
            <div class="subheading font-weight-medium"><b> Album: </b></div>
            <div class="grey--text albumData">{{ album.collectionName }}</div>
            <div class="subheading"><b> Artist: </b></div>
            <div class="grey--text albumData">{{ album.artistName }}</div>
            <div class="subheading"><b> Price: </b></div>
            <div class="grey--text albumData">
                {{ album.collectionPrice }} {{ album.Price }} $
            </div>
        </v-flex>
    </div>
</template>

<script>
export default {
    name: 'Card',
    props: ['album'],
    methods: {
        resizeImg(album) {
            return album.artworkUrl100.replace('100x100', '300x300');
        }
    }
};
</script>

<style>
.custom-card {
    max-height: 470px;
    max-width: 300px;
}
.albumData {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
