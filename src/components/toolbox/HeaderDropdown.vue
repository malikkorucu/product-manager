<template>
  <div class="dropdown">
    <span
      class="dropdown-trigger btn btn-danger border d-flex align-items-center"
      data-target="dropdown1"
      ><i class="fas fa-user"></i>
      <span class="username pl-2 font-italic">{{
        user.displayName
      }}</span></span
    >

    <ul id="dropdown1" class="dropdown-content">
      <li class="d-flex align-items-center justify-content-between px-3">
        <i class="fas fa-sign-out-alt"></i>
        <span class="p-0 text-dark">Seçenek</span>
      </li>

      <li class="d-flex align-items-center justify-content-between px-3">
        <i class="fas fa-sign-out-alt"></i>
        <span class="p-0 text-dark">Seçenek</span>
      </li>

      <li class="d-flex align-items-center justify-content-between px-3">
        <i class="fas fa-sign-out-alt"></i>
        <span class="p-0 text-dark">Seçenek</span>
      </li>

      <li class="divider" tabindex="-1"></li>
      <li
        @click="exit"
        class="exit d-flex align-items-center justify-content-between px-3"
      >
        <span class="p-0 text-white">Çıkış</span
        ><i class="fas fa-sign-out-alt"></i>
      </li>
    </ul>
  </div>
</template>

<script>
import M from "materialize-css";
import {mapGetters} from 'vuex'

export default {
  name: "DropdownPointingExample",
  methods: {
    exit() {
      this.$store.dispatch("logOut");
    },
  },
  computed:{
    ...mapGetters({
      user : 'getLoggedInUser'
    })
  },
  mounted() {
    M.AutoInit();
  },
};
</script>

<style scoped>
.username {
  text-transform: lowercase;
}

.dropdown {
  margin-right: 4px;
}
ul li {
  font-size: 18px;
}
ul li.exit {
  background: tomato;
  color: white;
}

@media (max-width: 1000px) {
  .dropdown {
    margin-right: 5px;
  }
}
</style>
