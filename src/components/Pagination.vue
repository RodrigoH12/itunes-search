<template>
    <div>
        <v-btn
            class="left-arrow"
            :disabled="page <= 0"
            color="deep-purple darken-3"
            fab
            outlined
            small
            @click="changePage('left')"
        >
            <v-icon>mdi-arrow-left-bold</v-icon>
        </v-btn>
        <span class="title mx-4 page-index">{{ page }}</span>
        <v-btn
            class="right-arrow"
            :disabled="albumsQty < 20"
            color="deep-purple darken-3"
            fab
            outlined
            small
            @click="changePage('right')"
        >
            <v-icon>mdi-arrow-right-bold</v-icon>
        </v-btn>
    </div>
</template>

<script>
export default {
    name: 'Pagination',
    props: {
        albumsQty: Number,
        page: Number
    },
    methods: {
        changePage(direction) {
            let newPage = this.page;
            switch (direction) {
                case 'left':
                    newPage--;
                    break;
                case 'right':
                    newPage++;
                    break;
                default:
                    break;
            }
            this.$emit('changePage', newPage);
            this.$emit('search');
        }
    }
};
</script>

<style>
.page-index {
    color: #4527a0;
}
</style>
