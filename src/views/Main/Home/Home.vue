<template>
  <div class="container-fluid">
    <Navbar/>
    <div class="body row">
      <Sidebar @toggle-active="toggleModal"/>
      <div class="content col-md-7">
        <div class="upper">
          <div class="form-group">
            <select id="sort" class="form-control" @change="setSort">
              <option selected>- Sort by -</option>
              <option value="name">Name</option>
              <option value="price">Price</option>
              <option value="idCategory">Category</option>
            </select>
          </div>
          <Pagination
            :data="pagination" @page-event="handlePage"
          />
          <input type="text" class="form-control" placeholder="Search" @keyup="setSearch">
        </div>
        <div class="lower">
          <Card
            v-for="item in products" :key="item.id"
            :data="item" @toggle-event="addCart(item)"
            :active="checkProductActive(item.id)"
            @event-update="setUpdate(item)"
            @select-product="addCart(item)"
            @delete-event="deleteProduct(item.id)"
          />
        </div>
      </div>
      <Cart/>
    </div>
    <Modal
      v-show="modalActive" :data="dataModal"
      @close-modal="toggleModal" @save-event="addProduct"
      @fire-event="handleEventModal"
    />
  </div>
</template>

<script>
import Navbar from '../../../components/Home/Navbar'
import Sidebar from '../../../components/Sidebar'
import Card from '../../../components/Home/Card'
import Cart from '../../../components/Home/Cart'
import Modal from '../../../components/Home/Modal'
import Pagination from '../../../components/Home/Pagination'
import { mapActions, mapGetters, mapMutations } from 'vuex'

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
      'insertProducts',
      'editProducts',
      'deleteProducts'
    ]),
    ...mapMutations([
      'addCart'
    ]),
    handleLogin () {
      const data = {
        username: this.username,
        password: this.password
      }
      this.login(data)
    },
    toggleModal () {
      this.modalActive = !this.modalActive
      // if (!this.modalActive) {
      //   this.clearModal()
      // }
    },
    clearModal () {
      this.dataModal.id = null
      this.dataModal.name = ''
      this.dataModal.price = 0
      this.dataModal.image = null
      this.dataModal.idCategory = 0
      this.modalActive = false
    },
    addProduct () {
      const data = new FormData()
      data.append('name', this.dataModal.name)
      data.append('price', this.dataModal.price)
      data.append('image', this.dataModal.image)
      data.append('idCategory', this.dataModal.idCategory)
      this.insertProducts(data)
        .then(res => {
          this.clearModal()
          this.getProducts()
          alert('Insert berhasil')
        })
    },
    updateProduct () {
      const data = new FormData()
      data.append('title', this.dataModal.title)
      data.append('price', this.dataModal.price)
      data.append('image', this.dataModal.image)
      data.append('idCategory', this.dataModal.idCategory)
      const container = {
        id: this.dataModal.id,
        data: data
      }
      this.editProducts(container)
        .then(res => {
          this.clearModal()
          this.getProduct()
          alert('Edit berhasil')
        })
    },
    setUpdate (data) {
      this.modalActive = true
      this.dataModal.id = data.id
      this.dataModal.name = data.name
      this.dataModal.price = data.price
      this.dataModal.image = data.image
      this.dataModal.idCategory = data.idCategory
    },
    handleEventModal () {
      this.dataModal.id ? this.updateProducts() : this.addProduct()
    },
    deleteProduct (id) {
      this.deleteProducts(id)
        .then(res => {
          this.getProduct()
          alert('Delete berhasil')
        })
    },
    setSearch (e) {
      const url = `?search=${e.target.value}`
      this.getProducts(url)
    },
    setSort (e) {
      const url = `?sort=${e.target.value}`
      this.getProducts(url)
    },
    handlePage (number) {
      const url = `?page=${number}`
      this.getProducts(url)
    },
    checkProductActive (id) {
      return this.getCart.find(item => {
        return item.id === id
      })
    }
  },
  computed: {
    ...mapGetters({
      products: 'products',
      pagination: 'getPage',
      countCart: 'countCart',
      getCart: 'getCart'
    })
  },
  mounted () {
    this.getProducts()
  }
}
</script>

<style scoped>
.content{
  height: 86vh;
  display: flex;
  flex-direction: column;
  background-color: rgba(190, 195, 202, 0.3);
  overflow: auto;
}
.upper {
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 15px;
}
.lower {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  padding-bottom: 30px;
}
</style>
