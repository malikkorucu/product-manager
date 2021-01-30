import Vue from "vue";

const state = {
    plans: [],
};
const getters = {
    getPlans(state) {
        return state.plans;
    },
};
const mutations = {
    addPlan(state, plan) {
        state.plans.push(plan);
    },
    updatePlans(state, plans) {
        for (let key in plans) {
            state.plans.push({
                ...plans[key],
                start: new Date(plans[key].start),
                end: new Date(plans[key].end),
            });
        }
    },
};
const actions = {
    addPlan({ commit }, plan) {
        commit("addPlan", plan);
        Vue.http.post("plans.json", plan).then((res) => console.log(res));
    },
    getPlansFromDB({ commit }) {
        Vue.http.get("plans.json").then((res) => {
            commit("updatePlans", res.body);
        });
    },
};

export default {
    state,
    getters,
    mutations,
    actions,
};