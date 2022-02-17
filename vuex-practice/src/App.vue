<template>
  <base-container title="Vuex" v-if="isAuth">
    <the-counter></the-counter>
    <favourite-value></favourite-value>
    <button @click="incrementCounter">Add 2</button>
    <change-counter></change-counter>
  </base-container>
  <base-container title="Auth">
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import { mapActions } from 'vuex';
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import FavouriteValue from './components/FavouriteValue.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import UserAuth from './components/UserAuth.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    FavouriteValue,
    ChangeCounter,
    UserAuth,
  },
  methods:{
    // addMethod(){
    //   this.$store.dispatch('incrementCounter');
    // },
    ...mapActions(['incrementCounter']),
  },
  computed: {
      isAuth(){
          return this.$store.getters.userIsAuth;
      },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>