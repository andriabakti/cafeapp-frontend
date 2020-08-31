<template>
  <div class="content">
    <Card v-for="item in products" :key="item.id" :data="item" @toggle-event="clickButton"/>
  </div>
</template>

<script>
import Card from '../../components/_base/Card'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Content',
  components: {
    Card
  },
  methods: {
    clickButton (val) {
      alert(val + ' telah dipilih')
    },
    ...mapActions(['getProducts'])
  },
  computed: {
    ...mapGetters({
      products: 'products'
    })
  },
  mounted () {
    this.getProducts()
  }
}
</script>

<style scoped>
.content{
    height: 940px;
    width: 850px;
    background: rgba(190, 195, 202, 0.3);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    position: relative;
}
</style>
