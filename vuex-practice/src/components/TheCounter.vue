<template>
    <!-- <h3>{{ counter }}</h3> -->
    <h3>{{ checkCounter }}</h3>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'TheCounter',
    computed: {
        // counter(){
        //     return this.$store.getters.checkCounter;
        // },
        ...mapGetters(['checkCounter']),
    },
}
</script>