<template>
  <div
    class="header container-fluid d-flex align-items-center justify-content-between"
  >
    <div class="logo d-flex py-2 align-items-center">
      <span href="#" data-target="slide-out" class="sidenav-trigger">
        <i class="fas fa-bars"></i>
      </span>
      <img
        width="200"
        src="https://cdn.shortpixel.ai/client/q_glossy,ret_img/https://productmanagerhq.com/wp-content/uploads/2020/04/PMHQ-Official-Logo-New.png"
      />
    </div>

    <app-dropdown></app-dropdown>
 
  </div>
</template>

<script>
import HeaderDropdown from "../toolbox/HeaderDropdown";

export default {
  components: {
    appDropdown: HeaderDropdown,
  },
};
</script>

<style scoped>
.header {
  background: url("https://www.publicdomainpictures.net/pictures/140000/nahled/grey-white-background.jpg")
    center center no-repeat;
  background-size: cover;
  display: inline-block;
  border-bottom: 4px solid #c82333;
  z-index: 10 !important;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.5);
  position: sticky;
  top: 0;
}
.logo {
  margin-left: 263px;
}
.sidenav-trigger {
  cursor: pointer;
  font-size: 20px;
  display: none;
}
@media (max-width: 1000px) {
  .sidenav-trigger {
    display: block;
  }
  .logo {
    margin-left: 6px;
  }
  .logo img {
    width: 150px;
  }
}
</style>
