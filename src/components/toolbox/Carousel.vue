<template>
  <v-carousel>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://png.pngtree.com/thumb_back/fw800/back_our/20190623/ourmid/pngtree-g20-summit-simple-business-background-image_238037.jpg',
          },
          {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQVwf-26zISIlDSSlMQwyoLIvFfDPAoERjxag&usqp=CAU',
          },
          {
            src: 'https://149357291.v2.pressablecdn.com/wp-content/uploads/2019/02/ItemID4066-768x576.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
      }
    },
  }
</script>

<style scoped></style>
