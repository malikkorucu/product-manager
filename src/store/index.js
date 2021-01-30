import Vue from "vue";
import Vuex from "vuex";
import product from "./modules/product";
import calendar from "./modules/calendar";
import auth from "./modules/auth";
import alert from "./modules/alert";
import router from "../router";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        loaderIsShow: false,
        tradeInfo: {
            purchase: 0,
            sale: 0,
            balance: 0,
        },
    },
    getters: {
        get_loaderIsShow(state) {
            return state.loaderIsShow;
        },
        getTradeInfo(state) {
            return state.tradeInfo;
        },
    },
    mutations: {
        change_loaderIsShow(state) {
            state.loaderIsShow = !state.loaderIsShow;
        },
        setTrade(state, tradeInfo) {
            let TI = state.tradeInfo;
            let discount = tradeInfo.discountPercent;

            TI.purchase += tradeInfo.purchase * tradeInfo.count;
            if (discount) {
                TI.sale +=
                    (tradeInfo.sale - (tradeInfo.sale * discount) / 100) *
                    tradeInfo.count;
                console.log(tradeInfo);
            } else {
                TI.sale += tradeInfo.sale * tradeInfo.count;
            }
            TI.balance = TI.sale - TI.purchase;
        },
        initTradeInfo(state, tradeInfo) {
            state.tradeInfo = tradeInfo;
        },
    },
    actions: {
        fullScreen() {
            if (
                router.app._route.fullPath === "/login" ||
                router.app._route.fullPath === "/register" ||
                router.app._route.fullPath === "/" ||
                router.app._route.fullPath === ""
            ) {
                document.querySelector("body").style.overflow = "hidden";
            }
        },
        updateTrade_DB({ commit }, tradeInfo) {
            commit("setTrade", tradeInfo);
        },
        setTradeResult_DB({ getters, commit }, tradeInfo) {
            commit("setTrade", tradeInfo);

            let trade = getters.getTradeInfo;
            Vue.http
                .put("tradeInfo.json", trade)
                .then((res) => res)
                .catch((err) => console.log(err));
        },
        getTradeInfoFromDB({ commit }) {
            Vue.http.get("tradeInfo.json").then((res) => {
                if (res.body) {
                    commit("initTradeInfo", res.body);
                }
            });
        },
    },
    modules: {
        product,
        calendar,
        auth,
        alert,
    },
});