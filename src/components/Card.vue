<template>
    <v-card class="mx-auto itunes-card" width="300" margin="50">
        <v-img
            class="artwork"
            v-if="album.artworkUrl100 != null"
            :src="resizeImg(album)"
        ></v-img>
        <v-img
            class="artwork"
            v-else
            src="https://upload.wikimedia.org/wikipedia/commons/d/df/ITunes_logo.svg"
        ></v-img>

        <div class="itunes-card-content">
            <div class="album-label" :data-hover="album.collectionName">
                {{ album.collectionName }}
            </div>
            <div class="artist-label">{{ album.artistName }}</div>
            <div class="price-label">
                {{ album.collectionPrice }} {{ album.Price }} $
            </div>
        </div>
    </v-card>
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
.itunes-card {
    box-shadow: none !important;
}
.itunes-card-content {
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 0px;
    padding-right: 0px;
}
.artwork {
    background-size: contain;
    height: 278px;
    border-radius: 16px !important;
}
.album-label {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: large;
    color: #2d2b2b;
    font-weight: bold;
    cursor: default;
}
.album-label:before {
    content: attr(data-hover);
    font-size: 12px;
    visibility: hidden;
    opacity: 0;
    max-width: 300px;
    background-color: rgb(15, 15, 15);
    color: #fff;
    text-align: center;
    padding: 4px;
    transition: opacity 1s ease-in-out;
    position: absolute;
    z-index: 1;
    top: 84%;
    white-space: initial;
}
.album-label:hover:before {
    opacity: 1;
    visibility: visible;
}
.artist-label {
    color: gray;
    font-size: medium;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.price-label {
    color: gray;
    font-size: medium;
}
</style>
