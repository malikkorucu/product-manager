<template>
  <div class="container-fluid progress-bar-striped">
    <div class="row">
      <div class="col-md-4 login-container px-5 align-items-center d-flex">
        <div class="blur"></div>
        <img
          width="280"
          src="https://cdn.shortpixel.ai/client/q_glossy,ret_img/https://productmanagerhq.com/wp-content/uploads/2020/04/PMHQ-Official-Logo-New.png"
        />
        <div class="ui form w-100">
          <!-- <div class="two fields">
            <div class="field">
              <label>Ad</label>
              <div class="ui left icon input">
                <input
                  v-model="registerUser.name"
                  type="text"
                  placeholder="İsim"
                />
                <i class="fas fa-signature icon"></i>
              </div>
            </div>
            <div class="field">
              <label>Soyad</label>
              <div class="ui left icon input">
                <input
                  v-model="registerUser.surname"
                  type="text"
                  placeholder="Soyisim"
                />
                <i class="fas fa-signature icon"></i>
              </div>
            </div>
          </div>
          <div class="field">
            <label>Kullanıcı Adı</label>
            <div class="ui left icon input mb-3">
              <input
                v-model="registerUser.username"
                type="text"
                placeholder="Kullanıcı Adı"
              />
              <i class="user icon"></i>
            </div>
          </div> -->
          <div class="field">
            <label>E-mail</label>
            <div class="ui left icon input mb-3">
              <input
                v-model="registerUser.email"
                type="email"
                placeholder="Email adresi"
              />
              <i class="icon fas fa-envelope"></i>
            </div>
          </div>

          <div class="field">
            <label>Şifre*</label>
            <div class="ui left icon input mb-3">
              <input
                v-model="registerUser.password"
                type="password"
                placeholder="Şifre"
              />
              <i class="lock icon"></i>
            </div>
          </div>
          <div class="field">
            <label>Şifre Tekrar*</label>
            <div class="ui left icon input">
              <input
                v-model="repeatPassword"
                type="password"
                placeholder="Şifre Tekrar"
              />
              <i class="lock icon"></i>
            </div>
          </div>
          <div
            @click="signUp"
            class="ui blue submit button mt-3 btn-block waves-effect waves-light mt-4"
          >
            <i class="signup icon"></i>
            Kayıt Ol
          </div>
          <router-link
            tag="div"
            :to="{ name: 'login' }"
            class="ui submit button btn-block waves-effect waves-light mt-2"
          >
            Zaten Üyeyim
          </router-link>
        </div>
      </div>
      <div class="col-md-8 login-background">
        <div class="blur"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      registerUser: {
        email: "",
        password: "",
        returnSecureToken: true,
      },
      repeatPassword: "",
      counter: 0,
    };
  },
  methods: {
    signUp() {
      this.$store.dispatch("signUp", this.registerUser);
      this.clearInputs()
    },
    clearInputs(){
      this.registerUser = {
        email:'',
        password:'',
        returnSecureToken:true
      },
      this.repeatPassword = ''
    },
    created(){
      this.$store.dispatch('fullScreen')
    }
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
body {
  overflow: hidden !important;
}
.container-fluid {
  height: 100%;
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
  /* border-left:3px solid #c82333; */
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
input {
  padding: 0 35px !important;
}
@media (max-width: 520px) {
  img {
    left: 50%;
    transform: translateX(-50%);
  }
  /* .login-background,
  img {
    display: none;
  } */
  .login-container {
    padding: 0 10px !important;
  }
}
.toast-text {
  padding: 0 !important;
  margin: 0 !important;
}
</style>
