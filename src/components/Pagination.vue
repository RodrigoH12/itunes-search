<template>
    <div>
        <v-btn :disabled="page <= 0" fab outlined small @click="changePage('left')">
        <v-icon>mdi-arrow-left-bold</v-icon>
        </v-btn>
        <span class="title mx-4">{{ page }}</span>
        <v-btn :disabled="albumsQty < 20" fab outlined small @click="changePage('right')">
            <v-icon>mdi-arrow-right-bold</v-icon>
        </v-btn>
    </div>
</template>
  
<script>
export default {
    name: 'Pagination',
    props: {
        albumsQty: Number,
        page: String
    },
    data() {
        return {
            // page: 0,
        }
    },
    methods: {
        changePage(direction) {
            switch(direction){
                case "left":
                    this.page--;
                    break;
                case "right":
                    this.page++;
                    break;
                default:
                    break;
            }
            this.$emit('changePage', this.page);
            this.$emit('search');
        },
    }
}
</script>
  