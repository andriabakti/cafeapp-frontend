<template>
    <div>
      <Navbar/>
      <div class="body">
        <Sidebar/>
        <Content/>
        <Cart/>
      </div>
    </div>
</template>

<script>
import Navbar from '../../../components/_base/Navbar'
import Content from '../../../components/_base/Content'
import Sidebar from '../../../components/_base/Sidebar'
import Cart from '../../../components/_base/Cart'
import { mapActions } from 'vuex'

export default {
  name: 'Home',
  components: {
    Navbar,
    Sidebar,
    Content,
    Cart
  },
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    handleLogin () {
      const data = {
        username: this.username,
        password: this.password
      }
      this.login(data)
    },
    ...mapActions(['login'])
  }
}
</script>

<style scoped>
.body {
  display: flex;
}
</style>
