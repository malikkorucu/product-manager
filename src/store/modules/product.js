import Vue from "vue";
import router from "../../router/index";

const state = {
    productList: [],
    productList_DD: [],
};

const getters = {
    getProducts(state) {
        return state.productList;
    },
    getProductList_DD(state) {
        return state.productList_DD;
    },
    getSingleProduct(state) {
        return (key) => state.productList.filter((pr) => pr.key === key);
    },
};
const mutations = {
    addProduct_(state, product) {
        state.productList.push(product);
    },
    updateProducts(state, products) {
        state.productList = products;
    },
};

const actions = {
    addProduct({ commit, dispatch }, product) {
        commit("change_loaderIsShow");

        let tradeInfo = {
            purchase: product.price,
            sale: 0,
            count: product.count
        }

        dispatch('setTradeResult_DB', tradeInfo)
        Vue.http.post("products.json", product).then((res) => {
            product.key = res.body.name;
            commit("addProduct_", product);
            commit("change_loaderIsShow");
            router.replace({ name: "product-list" });
        });
    },
    getProductsFromDB({ state }) {
        Vue.http.get("products.json").then((res) => {
            let updatedProductList = [];
            for (let key in res.body) {
                let pr = {...res.body[key], key };
                updatedProductList.push(pr);
                state.productList = updatedProductList;
            }

            let productList_DD = [];
            for (let key in res.body) {
                let pr = {
                    key,
                    text: res.body[key].name,
                    value: key,
                    productInfo: res.body,
                };
                productList_DD.push(pr);
                state.productList_DD = productList_DD;
            }
        });
    },
    leaveProduct({ commit, dispatch }, saleProduct) {
        let filterProduct = this.getters.getSingleProduct(saleProduct.key)[0];
        filterProduct.count -= saleProduct.saleCount;

        let tradeInfo = {
            purchase: 0,
            sale: parseInt(saleProduct.salePrice),
            count: parseInt(saleProduct.saleCount),
            discountPercent: parseInt(saleProduct.discountPercent)
        }

        dispatch('setTradeResult_DB', tradeInfo)

        commit("change_loaderIsShow");
        Vue.http
            .patch("products/" + saleProduct.key + ".json", {
                count: filterProduct.count,
            })
            .then((res) => {
                router.replace({ name: "product-list" });
                commit("change_loaderIsShow");
                return res;
            })
            .catch((err) => console.log(err));
    },

};

export default {
    state,
    getters,
    mutations,
    actions,
};