<template>
  <v-app  class="container-fluid p-0 m-0">

<!-- loader -->

    <div v-if="loaderIsShow" class="loader">
      <div class=" preloader-wrapper big active">
        <div class="spinner-layer spinner-red-only">
          <div class="circle-clipper left">
            <div class="circle"></div>
          </div>
          <div class="gap-patch">
            <div class="circle"></div>
          </div>
          <div class="circle-clipper right">
            <div class="circle"></div>
          </div>
        </div>
      </div>
    </div>

<!-- header ve kenar menüsü -->

    <app-header class="header"></app-header>
    <app-side-nav></app-side-nav>

<!-- ana içeriğin olduğu component -->

    <div class="container-fluid">
      <div class="m row d-flex justify-content-center align-items-center">
        <v-main data-app class="col-md-12">
          <transition
            enter-active-class="animate__fadeIn"
            leave-active-class="animate__fadeOut"
            mode="out-in"
          >
            <router-view class="animate__animated"></router-view>
          </transition>
        </v-main>
      </div>
    </div>
   
  </v-app>
</template>

<script>
import Header from "./common/Header";
import SideNav from "./common/sideNav";
import M from "materialize-css";
import {mapGetters} from 'vuex'

export default {
  data(){
    return{}
  },
  computed:{
    ...mapGetters({
      loaderIsShow : 'get_loaderIsShow'
    })
  },
  components: {
    appHeader: Header,
    appSideNav: SideNav,
  },
  created() {
    M.AutoInit();
  },
};
</script>

<style scoped>
.m {
  padding-left: 275px;
  padding-right: 20px;
  padding-top: 20px;
}

.animate__animated {
  animation-duration: 0.4s;
}

.loader {
  position: absolute !important;
  top: 0;
  right: 0;
  z-index: 15 !important;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  padding-left:275px;
  display:flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 1000px) {
  .m , .loader{
    padding: 10px 15px;
  }
}
</style>
