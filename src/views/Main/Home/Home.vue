<template>
  <div class="container-fluid">
    <Navbar/>
    <div class="body row">
      <Sidebar @toggle-active="toggleModal"/>
      <div class="content col-md-7">
        <Card v-for="item in products" :key="item.id" :data="item" @toggle-event="clickButton"/>
        <Pagination :data="pagination" @page-event="handlePage"/>
      </div>
      <Cart/>
    </div>
    <Modal
      v-show="modalActive"
      :data="dataModal"
      :closeModal="toggleModal"
      @save-event="addProduct"
    />
  </div>
</template>

<script>
import Navbar from '../../../components/_base/Home/Navbar'
import Sidebar from '../../../components/_base/Sidebar'
import Card from '../../../components/_base/Home/Card'
import Cart from '../../../components/_base/Home/Cart'
import Modal from '../../../components/_base/Home/Modal'
import Pagination from '../../../components/_base/Home/Pagination'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
    Navbar,
    Sidebar,
    Card,
    Cart,
    Modal,
    Pagination
  },
  data: () => ({
    username: '',
    password: '',
    modalActive: false,
    dataModal: {
      id: null,
      name: '',
      price: 0,
      image: null,
      idCategory: 0
    }
  }),
  methods: {
    ...mapActions([
      'login',
      'getProducts',
      'insertProducts'
    ]),
    handleLogin () {
      const data = {
        username: this.username,
        password: this.password
      }
      this.login(data)
    },
    clickButton (val) {
      alert(val + ' telah dipilih')
    },
    toggleModal () {
      this.modalActive = !this.modalActive
    },
    addProduct () {
      const data = new FormData()
      data.append('name', this.dataModal.name)
      data.append('price', this.dataModal.price)
      data.append('image', this.dataModal.image)
      data.append('idCategory', this.dataModal.idCategory)
      this.insertProducts(data)
        .then(res => {
          this.dataModal.id = null
          this.dataModal.name = ''
          this.dataModal.price = 0
          this.dataModal.image = null
          this.dataModal.idCategory = 0
          this.modalActive = false
          this.getProducts()
          alert('Insert berhasil')
        })
    },
    handlePage (number) {
      const url = `?page=${number}`
      this.getProducts(url)
    }
  },
  computed: {
    ...mapGetters({
      products: 'products',
      pagination: 'getPage'
    })
  },
  mounted () {
    this.getProducts()
  }
}
</script>

<style scoped>
.content{
  height: 545px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  padding-top: 15px;
  background-color: rgba(190, 195, 202, 0.3);
  overflow: auto;
}
</style>
