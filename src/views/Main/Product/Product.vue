<template>
    <div class="container">
        <h2>Product</h2>
        <div class="row">
        <div class="col-md-3 card-cos" v-for="item in products" :key="item.id">
            <Card :data="item"/>
        </div>
        </div>
    </div>
</template>

<script>
import Card from '../../../components/_base/Card'

export default {
  name: 'Product',
  components: {
    Card
  },
  data () {
    return {
      products: []
    }
  }
}
</script>

<style scoped>
    .card-cos {
        padding: 10px;
    }
</style>
