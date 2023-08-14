<template>
    <v-container>
        <v-row class="text-center">
            <v-col cols="12">
                <v-img
                    src="https://upload.wikimedia.org/wikipedia/commons/d/df/ITunes_logo.svg"
                    class="my-3"
                    contain
                    height="200"
                />
            </v-col>

            <v-col class="mb-4">
                <h1 class="display-2 font-weight-bold mb-3">
                    Welcome to Itunes Store Search
                </h1>

                <p class="subheading font-weight-regular">
                    This is a project created by Rodrigo Heredia
                    <br />To search for an album in Itunes press the "Itunes
                    Search" button located on the top left side navigation bar
                    <br />To search for an album using a local JSON file press
                    the "JSON Search" button located on the top left side
                    navigation bar
                </p>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'Home',

    data: () => ({})
};
</script>
