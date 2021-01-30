<template>
  <v-app>
    
    <transition
      enter-active-class="animate__fadeIn"
      leave-active-class="animate__fadeOut"
      mode="out-in"
    >
    <v-main>
        <router-view class="animate__animated router-trans"></router-view>
  </v-main>
    </transition>
  </v-app>
</template>

<script>
export default {
  name: "App",
  created() {
    this.$store.dispatch('initAuth')
    this.$store.dispatch('fullScreen')
    this.$store.dispatch("getProductsFromDB");
    this.$store.dispatch('getTradeInfoFromDB')
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
body {
  min-height: 100vh;
}
.router-trans{
  animation-duration: 0.3s;
}

</style>
