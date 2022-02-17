<template>
    <button @click="addMethod">Add 10</button>
</template>

<script>
    export default {
        methods:{
            addMethod(){
                this.$store.commit('incrementCustom', {value: 10});
            },
        },
    }
</script>