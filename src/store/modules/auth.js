import Vue from "vue";
import router from "../../router";
import * as ENV from "../../env_var";

const state = {
    isAuthenticated: false,
    loggedInUser: null,
};
const getters = {
    getLoggedInUser(state) {
        return state.loggedInUser;
    },
    get_isAuthenticated(state) {
        return state.loggedInUser ? true : false;
    },
};
const mutations = {
    setToken(state, token) {
        state.token = token;
    },
    setLoggedInUser(state, user) {
        state.loggedInUser = user;
    },
    clearLoggedInUser(state) {
        state.loggedInUser = null;
    },
};
const actions = {
    initAuth({ commit, dispatch }) {
        let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

        if (loggedInUser) {
            commit("setLoggedInUser", loggedInUser);
            if (new Date().getTime() >= loggedInUser.expireDate) {
                dispatch("logOut");
            } else {
                router.replace(router.history._startLocation);
                let leftTime = loggedInUser.expireDate - new Date().getTime();
                dispatch("logTimer", leftTime);
            }
        }
    },
    signUp(vueContext, user) {
        Vue.http
            .post(ENV.SIGN_UP_URL, user)
            .then((res) => {
                vueContext.dispatch("alert", {
                    message: "Üye kayıt işlemi başarıyla gerçekleştirildi...",
                    type: "default",
                    duration: 3000,
                    position: "top-right",
                });
                router.replace({ name: "login" });
                return res;
            })
            .catch((err) => {
                if (err.body.error.message === "INVALID_EMAIL") {
                    vueContext.dispatch("alert", {
                        message: "geçersiz email adresi...",
                        type: "warning",
                        duration: 3000,
                    });
                }
                if (err.body.error.message === "EMAIL_EXISTS") {
                    vueContext.dispatch("alert", {
                        message: "zaten böyle bir email adresi mevcut !!",
                        type: "warning",
                        duration: 3000,
                    });
                }
                if (
                    err.body.error.message ===
                    "WEAK_PASSWORD : Password should be at least 6 characters"
                ) {
                    vueContext.dispatch("alert", {
                        message: "şifre en az 6 karakterden oluşmalıdır",
                        type: "error",
                        duration: 3000,
                    });
                }
            });
    },
    login({ commit, dispatch }, user) {
        commit("change_loaderIsShow");
        Vue.http
            .post(ENV.LOGIN_URL, user)
            .then((res) => {
                commit("change_loaderIsShow");
                let loggedInUser = {
                    ...res.body,
                    displayName: res.body.email.split("@")[0],
                    expireDate: new Date().getTime() + parseInt(res.body.expiresIn) * 1000,
                    expiresIn: parseInt(res.body.expiresIn) * 1000,
                };
                commit("setLoggedInUser", loggedInUser);
                localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
                router.replace({ name: "home" });

                dispatch("logTimer", loggedInUser.expiresIn);
            })
            .catch((err) => {
                commit("change_loaderIsShow");
                console.log(err);
            });
    },
    logOut({ commit }) {
        router.replace({ name: "root" });
        localStorage.removeItem("loggedInUser");
        commit("clearLoggedInUser");
    },
    logTimer({ dispatch }, expiresIn) {
        setTimeout(() => {
            dispatch("logOut");
        }, expiresIn);
    },
};

export default {
    state,
    getters,
    mutations,
    actions,
};