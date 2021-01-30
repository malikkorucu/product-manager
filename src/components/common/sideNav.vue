<template>
  <div>
    <ul id="slide-out" class="sidenav sidenav-fixed">
      <li>
        <div class="user-view">
          <div class="background"></div>
          <a href="#user"><img class="ciksrcle" src=""/></a>
          <a href="#name"><span class="text-white name"># {{user.displayName}}</span></a>
          <a href="#email"
            ><span class="white-text email">{{user.email}}</span></a
          >
        </div>
      </li>
   
      <router-link tag="li" :to="{ name: 'home' }"
        ><a href="#!">
          <i class="fas fa-home"></i>
          Anasayfa</a></router-link
      >
      <li><div class="divider"></div></li>
      <li><a class="subheader">İşlemler</a></li>

      <ul class="collapsible">
        <!-- İşlemler Menüsü -->
        <li>
          <div class="collapsible-header">
            <i class="fas fa-layer-group"></i>Ürün İşlemleri
          </div>
          <div class="collapsible-body">
            <router-link
              tag="div"
              :to="{ name: 'product-list' }"
              class="pr-2  text-right"
            >
              <i class="material-icons">format_list_bulleted</i>
              <span class="pl-2">Ürün Listesi</span>
            </router-link>

            <router-link
              tag="div"
              :to="{ name: 'product-enter' }"
              class="pr-2  text-right"
            >
              <i class="material-icons">add_shopping_cart</i>
              <span class="pl-2">Ürün Girişi</span>
            </router-link>

            <router-link 
            tag="div"
            :to="{name:'product-leave'}"
            class="pr-2 text-right">
              <i class="material-icons">remove_shopping_cart</i>
              <span class="pl-2">Ürün Çıkışı</span>
            </router-link>
          </div>
        </li>

        <li>
          <div class="collapsible-header">
            <i class="fas fa-users"></i>Personel İşlemleri
          </div>
          <div class="collapsible-body">
            <div class="pr-2 text-right">
              <i class="material-icons">add_shopping_cart</i>
              <span class="pl-2">Ürün Ekle</span>
            </div>

            <div class="pr-2 text-right">
              <i class="material-icons">add_shopping_cart</i>
              <span class="pl-2">Ürün Ekle</span>
            </div>

            <div class="pr-2 text-right">
              <i class="material-icons">add_shopping_cart</i>
              <span class="pl-2">Ürün Ekle</span> 
            </div>
          </div>
        </li>

        <li>
          <div class="collapsible-header">
            <i class="fas fa-coins"></i>Hesap - Ciro Takip
          </div>
          <div class="collapsible-body">
            <div class="pr-2 text-right">
              <i class="material-icons">add_shopping_cart</i>
              <span class="pl-2">Ürün Ekle</span>
            </div>

            <div class="pr-2 text-right">
              <i class="material-icons">add_shopping_cart</i>
              <span class="pl-2">Ürün Ekle</span>
            </div>

            <div class="pr-2 text-right">
              <i class="material-icons">add_shopping_cart</i>
              <span class="pl-2">Ürün Ekle</span>
            </div>
          </div>
        </li>

        <li>
          <div class="collapsible-header">
            <i class="far fa-calendar-alt"></i>Takvim - Planlayıcı
          </div>
          <div class="collapsible-body">
            <router-link tag="div" :to="{name:'planner'}" class="pr-2 text-right">
              <i class="far fa-calendar"></i>
              <span class="pl-2">Planlayıcı</span>
            </router-link>

          
          </div>
        </li>
      </ul>
    </ul>
  </div>
</template>

<script>
import M from "materialize-css";
import {mapGetters} from 'vuex'

export default {
  mounted() {
    M.AutoInit();
  },
  computed:{
    ...mapGetters({
      user: 'getLoggedInUser'
    })
  }
};
</script>

<style>
.user-view a {
  color: black;
}
.background {
  background: url("https://www.creativefabrica.com/wp-content/uploads/2018/08/Abstract-Black-Metallic-Background-by-Kanggraphic-580x387.jpg")
    center center no-repeat;
  background-size: cover;
  position: relative;
  box-shadow: 0 0 10px 5px rgba(255, 255, 255, 0.7);
  /* border-bottom-left-radius:15px; */
  border-bottom-right-radius: 40px;
}
.sidenav {
  max-width: 250px;
  box-shadow: 0 0 25px 5px rgba(0, 0, 0, 0.5) !important;
  border-right: 3px solid #c82333;
  background: url("https://www.publicdomainpictures.net/pictures/140000/nahled/grey-white-background.jpg")
    center center no-repeat;
  background-size: cover;
}
.collapsible li {
  border-bottom: 1px solid rgb(231, 231, 231);
}
.collapsible li:first-of-type {
  border-top: 1px solid rgb(231, 231, 231);
}
.collapsible-body > div {
  cursor: pointer;
  display: flex;
  align-items: center;
  padding-left:40px;
}
.collapsible-body div:hover {
  background: rgb(250, 250, 250);
}
@media (max-width: 1000px) {
  .sidenav {
    margin-top: 0 !important;
  }
}
</style>
