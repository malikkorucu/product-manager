<template>
  <v-main>
      <div v-if="loaderIsShow" class="loader-login">
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

    <div class="row">
      <div class="col-md-4 login-container px-5 align-items-center d-flex">
        <div class="blur"></div>
        <img
          width="280"
          src="https://cdn.shortpixel.ai/client/q_glossy,ret_img/https://productmanagerhq.com/wp-content/uploads/2020/04/PMHQ-Official-Logo-New.png"
        />
        <div class="ui form w-100 px-3">
          <div class="field">
            <label>Email Adresi</label>
            <div class="ui left icon input mb-3">
              <input
                v-model="loginUser.email"
                type="email"
                placeholder="Email adresi"
              />
              <i class="user icon"></i>
            </div>
          </div>
          <div class="field">
            <label>Şifre</label>
            <div class="ui left icon input">
              <input
                v-model="loginUser.password"
                type="password"
                placeholder="Şifre"
              />
              <i class="lock icon"></i>
            </div>
          </div>
          <div
            @click="login"
            class="ui blue submit button mt-3 btn-block waves-effect waves-light"
          >
            Giriş
          </div>
          <router-link
            tag="div"
            :to="{ name: 'register' }"
            class="ui button mt-3 btn-block waves-effect waves-light"
          >
            <i class="signup icon"></i>
            Kayıt
          </router-link>
        </div>
      </div>
      <div class="col-md-8 login-background">
        <div class="blur"></div>
      </div>
    </div>
  </v-main>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  data() {
    return {
      loginUser: {
        email: "",
        password: "",
        returnSecureToken: true,
      },
    };
  },
  methods: {
    login() {
      this.$store.dispatch("login", this.loginUser);
      this.clearInputs()
    },
    clearInputs(){
      this.loginUser = {
        email:'',
        password:'',
        returnSecureToken:true
      }
    }
  },
  computed:{
    ...mapGetters({
      loaderIsShow: "get_loaderIsShow"
    })
  },
  created() {
    this.$store.dispatch('fullScreen')
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.row {
  min-height: 100vh;
}
.login-container {
  background: url("https://www.adevia.com/wp-content/uploads/2018/04/115323-most-popular-background-white-2400x1800.jpg")
    center center no-repeat;
  background-size: cover;

}
.login-background {
  background: url("https://wallpaperaccess.com/full/656670.jpg") center center
    no-repeat;
  background-size: cover;
  position: relative;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.5);
}
.blur {
  background: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
img {
  position: absolute;
  top: 20px;
  left: 28px;
}
.loader-login{
  position: absolute !important;
  top: 0;
  right: 0;
  z-index: 15 !important;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  display:flex;
  justify-content: center;
  align-items: center;
}
@media (max-width: 520px) {
  img {
    left: 50%;
    transform: translateX(-50%);
  }
  .login-container {
    padding: 0 10px !important;
  }
}
/* .login-container{
    border:2px solid red;
} */
</style>
