<template>
    <button v-if="!isAuth" @click="login">Login</button>
    <button v-else @click="logout">Logout</button>
</template>

<script>
    export default {
        name: 'UserAuth',
        methods: {
            login(){
                this.$store.dispatch('login');
            },
            logout(){
                this.$store.dispatch('logout');
            },
        },
        computed: {
            isAuth(){
                return this.$store.getters.userIsAuth;
            },
        },
    }
</script>