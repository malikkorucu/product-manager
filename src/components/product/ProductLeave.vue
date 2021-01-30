<template>
  <div>
    <app-trade></app-trade>
    <div class="row px-3 py-0 my-0">
      <div class="col-md-12 px-1">
        <label for="a">Ürün Seç</label>
        <sui-dropdown
          :options="products"
          placeholder="Ürün Listesi"
          selection
          v-model="current_product"
          class="w-100"
          @input="getProduct"
        />
      </div>
    </div>

    <table v-if="selectedProduct" class="ui celled table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Ürün Adı</th>
          <th>Stok</th>
          <th>Alış (₺)</th>
          <th>Satış (₺)</th>
          <th>Açıklama</th>
        </tr>
      </thead>
      <tbody>
        <tr
          :class="{
            negative: selectedProduct.count == 0,
            positive: selectedProduct.count > 0,
          }"
          class="list-item"
        >
          <td>
            <div class="new badge grey">{{ selectedProduct.key }}</div>
          </td>
          <td>{{ selectedProduct.name }}</td>
          <td>{{ selectedProduct.count }}</td>
          <td>{{ selectedProduct.price }}</td>
          <td>{{ selectedProduct.salePrice }}</td>
          <td>{{ selectedProduct.description }}</td>
        </tr>
      </tbody>
    </table>

    <div v-else class="preview">
      <table class="ui celled table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Ürün Adı</th>
            <th>Stok</th>
            <th>Alış (₺)</th>
            <th>Satış (₺)</th>
            <th>Açıklama</th>
          </tr>
        </thead>
        <tbody>
          <tr class="list-item">
            <td>
              <div class="new badge grey"># Ürün Kodu</div>
            </td>
            <td>#</td>
            <td>#</td>
            <td>#</td>
            <td>#</td>
            <td>#</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="row">
      <form class="col s12">
        <div class="row">
          <div class="input-field col s6">
            <i class="fas fa-layer-group prefix"></i>
            <input
              v-model="product_sale.saleCount"
              id="pr-sale"
              type="number"
              class="validate"
            />
            <label for="pr-sale">Satış Adedi</label>
          </div>
          <div class="input-field col s6">
            <i class="fas fa-layer-group prefix"></i>
            <input
              v-model="product_sale.discountPercent"
              id="discount"
              type="number"
              class="validate"
            />
            <label for="discount">İskonto (%)</label>
          </div>
        </div>
        <div class="col s12 d-flex justify-content-between">
          <a
            :disabled="selectedProduct === null"
            @click="saleProduct"
            class="waves-effect waves-light btn-large btn-dark text-white d-flex"
            ><i class="fas fa-plus pr-3"></i>Kaydet</a
          >
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import M from "materialize-css";
import { mapGetters } from "vuex";
import Trade from "./Trade";

export default {
  components: {
    appTrade: Trade,
  },
  data: () => {
    return {
      selectedProduct: null,
      current_product: null,
      product_sale: {
        saleCount: null,
        discountPercent: null,
      },
    };
  },
  methods: {
    getProduct() {
      this.selectedProduct = this.$store.getters.getSingleProduct(
        this.current_product
      )[0];
    },
    saleProduct() {
      let productCount = parseInt(this.selectedProduct.count);
      let saleCount = parseInt(this.product_sale.saleCount);
      let discount = parseInt(this.product_sale.discountPercent);

      let pr = {
        ...this.selectedProduct,
        ...this.product_sale,
      };

      if (productCount === 0 || saleCount > productCount) {
        this.$store.dispatch("alert", {
          message: "Yetersiz stok !!",
          type: "error",
          duration: 3000,
        });
      } else if (discount > 100) {
        this.$store.dispatch("alert", {
          message: "Geçersiz yüzde (%) değeri !!",
          type: "error",
          duration: 3000,
        });
      } else {
        this.$store.dispatch("leaveProduct", pr);
      }
    },
  },
  computed: {
    ...mapGetters({
      products: "getProductList_DD",
    }),
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
    if(this.$route.query !== {}){
      this.current_product = this.$route.query.key
      this.getProduct()
    }
    this.$store.dispatch("getProductsFromDB");
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
.collection i {
  font-size: 70px;
  color: rgb(95, 95, 95);
}
.badge {
  padding: 7px;
  color: rgb(2, 2, 2);
  min-width: 160px;
}
.animate_animated {
  animation-duration: 0.1s;
}
.preview {
  border: 2px dashed black;
  padding: 20px;
  border-radius: 15px;
  margin: 10px 0;
}
</style>
