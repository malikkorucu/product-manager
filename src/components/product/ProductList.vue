<template>
  <div>
    <app-trade></app-trade>
    <div class="input-container">
      <div class="ui icon input w-100">
        <input
          v-model="filter"
          class="py-0 pl-4 pr-0"
          type="text"
          placeholder="Ürün Ara..."
        />
        <i class="search icon"></i>
      </div>
    </div>

    <table class="ui celled table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Ürün Adı</th>
          <th>Stok</th>
          <th>Alış (₺)</th>
          <th>Satış (₺)</th>
          <th>Açıklama</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-show="
            product.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1
          "
          :key="product.key"
          v-for="product in products"
          class="list-item"
          @click="goToLeaveProduct(product)"
        >
          <td>
            <div class="new badge grey">{{ product.key }}</div>
          </td>
          <td>{{ product.name }}</td>
          <td :class="stockClass(product)">{{ product.count }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.salePrice }}</td>
          <td>{{ product.description }}</td>
          <td class="align-middle d-flex justify-content-center trash">
            <i class="fas fa-trash"></i>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Trade from "./Trade";

export default {
  components: {
    appTrade: Trade,
  },
  data() {
    return {
      filter: "",
    };
  },
  computed: {
    ...mapGetters({
      products: "getProducts",
    }),
  },
  methods: {
    stockClass(product) {
      if (product.count > 0) return { positive: true };
      else return { negative: true };
    },
    goToLeaveProduct(pr) {
      this.$router.replace({ name: "product-leave", query: { key: pr.key } });
    },
  },
  created() {
    this.$store.dispatch("getProductsFromDB");
  },
};
</script>

<style scoped>
.input-container {
  margin-right: 15px;
}
.input input:focus {
  border-bottom: none;
}
.list-item {
  cursor: pointer;
  transition: 0.2s ease all;
}
.list-item:hover {
  background: rgb(238, 238, 238) !important;
}
.trash i {
  font-size: 17px;
}
.trash i:hover {
  color: #c82333;
}
.badge {
  padding: 7px;
  color: rgb(2, 2, 2);
  min-width: 160px;
}
</style>
