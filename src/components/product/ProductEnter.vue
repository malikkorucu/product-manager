<template>
  <div>
    <app-trade></app-trade>
    <div class="row">
      <form class="col s12">
        <div class="row">
          <div class="input-field col s6">
            <i class="fas fa-file-signature prefix"></i>
            <input
              v-model="product.name"
              id="pr-name"
              type="text"
              class="validate"
            />
            <label for="pr-name">Ürün Adı</label>
          </div>

          <div class="input-field col s6">
            <i class="fas fa-layer-group prefix"></i>
            <input
              v-model="product.count"
              id="pr-stock"
              type="number"
              class="validate"
            />
            <label for="pr-stock">Ürün Adedi</label>
          </div>
        </div>

        <div class="row">
          <div class="input-field col s6">
            <i class="fas fa-shopping-cart prefix"></i>
            <input
              v-model="product.price"
              id="pr-purchase"
              type="number"
              class="validate"
            />
            <label for="pr-purchase">Alış Fiyatı</label>
          </div>
          <div class="input-field col s6">
            <i class="material-icons prefix">attach_money</i>
            <input
              v-model="product.salePrice"
              id="pr-sale"
              type="number"
              class="validate"
            />
            <label for="pr-sale">Satış Fiyatı</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <i class="far fa-comment-dots prefix"></i>
            <textarea
              v-model="product.description"
              id="textarea1"
              class="materialize-textarea validate"
            ></textarea>
            <label for="textarea1">Ürün Açıklaması</label>
          </div>
        </div>

        <div class="row">
          <div class="col s12 d-flex justify-content-between">
            <a
              @click="saveProduct"
              :disabled="isDisabled"
              class="waves-effect waves-light btn-large btn-dark text-white"
              ><i class="fas fa-plus pr-3"></i>Ürün Ekle</a
            >
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import M from "materialize-css";
import Trade from './Trade'

export default {
  components:{
    appTrade:Trade
  },
  data: () => {
    return {
      product: {
        name: "",
        count: null,
        price: null,
        salePrice: null,
        description: "",
      },
    };
  },
  methods: {
    saveProduct() {
      this.$store.dispatch("addProduct", this.product);
    },
  },
  computed: {
    isDisabled() {
      if (
        this.product.name.length > 0 &&
        this.product.count > 0 &&
        this.product.price > 0 &&
        this.product.salePrice > 0 &&
        this.product.description.length > 0
      ) {
        return false;
      } else {
        return true;
      }
    },
  },
  created() {
    M.AutoInit();
  },
};
</script>

<style scoped>
.input-field input:focus + label {
  color: #c82333 !important;
}
.input-field textarea:focus + label {
  color: #c82333 !important;
}
/* label underline focus color */
.input-field input:focus {
  border-bottom: 1px solid #c82333 !important;
  box-shadow: 0 1px 0 0 #c82333 !important;
}
.input-field textarea:focus {
  border-bottom: 1px solid #c82333 !important;
  box-shadow: 0 1px 0 0 #c82333 !important;
}
/* icon prefix focus color */
.input-field .prefix.active {
  color: rgb(238, 77, 77);
}
</style>
