<template>
  <div class="row">
    <div class="title-bar col-lg-8">
      <button class="btn" id="menu"></button>
      <h3>Food Items</h3>
      <button class="btn" id="search"></button>
    </div>
    <div class="cart-bar col-lg-4">
      <h3>Cart</h3>
      <p class="badge">{{countCart}}</p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Navbar',
  methods: {
    ...mapActions([
      'getProducts'
    ]),
    toProduct () {
      this.$router.push('/product')
    },
    setSearch (e) {
      const url = `?search=${e.target.value}`
      this.getProducts(url)
    }
  },
  computed: {
    ...mapGetters({
      products: 'products',
      countCart: 'countCart'
    })
  },
  mounted () {
    this.getProducts()
  }
}
</script>

<style scoped>
.row {
  height: 15vh;
}
.title-bar {
  /* height: 90px; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  border-bottom: 1px solid rgb(0, 0, 0, 0.25);
  box-shadow: 0 4px 3px rgb(0, 0, 0, 0.25);
}
button {
  background-size: 30px 30px;
  background-color: #ffffff;
  background-repeat: no-repeat;
  background-position: center;
  border: none;
}
#menu {
  margin-left: 13px;
  height: 60px;
  width: 60px;
  background-image: url("../../assets/images/menu.png");
}
.title-bar h3 {
  font-size: 30px;
  font-weight: bold;
  margin-top: 5px;
}
#search {
  margin-right: 5px;
  height: 60px;
  width: 60px;
  background-image: url('../../assets/images/search.png');
}

.cart-bar {
  /* height: 90px; */
  margin-top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid rgb(0, 0, 0, 0.25);
  box-shadow: 0 4px 0px rgb(0, 0, 0, 0.25);
}
.cart-bar h3 {
  font-size: 25px;
  font-weight: bold;
  margin-top: 10px;
}
.cart-bar p {
  height: 30px;
  width: 30px;
  border-radius: 100%;
  background: #57CAD5;
  text-align: center;
  font-size: 22px;
  font-weight: bold;
  color: #ffffff;
  margin-top: 17px;
  margin-left: 5px;
}
</style>
