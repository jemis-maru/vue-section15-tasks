<template>
    <h3>{{ counter }}</h3>
    <p>This is paragraph</p>
</template>

<script>
export default {
    name: 'FavouriteValue',
    computed: {
        counter(){
            // return this.$store.getters.['counterModule/finalCounter']; // => used when we use namespaced in module 
            return this.$store.getters.finalCounter;
        },
    },
}
</script>