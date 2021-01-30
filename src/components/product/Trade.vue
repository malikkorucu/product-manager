<template>
  <div class="mt-5">
    <sui-statistics-group
      class="d-flex justify-content-center align-items-center"
    >
      <div class="row px-5">
        <div class="col-md-4">
          <sui-statistic in-group class="px-5 py-4 rounded-lg shadow-sm border">
            <sui-statistic-value>
              <i class="fas fa-cart-plus"></i> {{tradeInfo.purchase | currency}}
            </sui-statistic-value>
            <sui-statistic-label>
              Alış Toplam
            </sui-statistic-label>
          </sui-statistic>
        </div>
        <div class="col-md-4">
          <sui-statistic in-group class="px-5 py-4 rounded-lg shadow-sm border">
            <sui-statistic-value>
              <i class="fas fa-tags"></i>{{tradeInfo.sale | currency}}
            </sui-statistic-value>
            <sui-statistic-label>
              Satış Toplam
            </sui-statistic-label>
          </sui-statistic>
        </div>
        <div class="col-md-4">
          <sui-statistic in-group class="px-5 py-4 rounded-lg shadow-sm border">
            <sui-statistic-value>
              <i class="fas fa-balance-scale"></i> {{tradeInfo.balance | currency}}
            </sui-statistic-value>
            <sui-statistic-label>
              Kâr - Zarar
            </sui-statistic-label>
          </sui-statistic>
        </div>
      </div>
    </sui-statistics-group>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  data(){
    return{}
  },
  computed:{
    ...mapGetters({
      tradeInfo:'getTradeInfo'
    })
  },
  created(){
    this.$store.dispatch('getTradeInfoFromDB')
  }
};
</script>

<style scoped>

</style>
