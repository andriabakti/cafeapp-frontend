<template>
  <div class="container-fluid">
    <div class="row">
      <Titlebar/>
    </div>
    <div class="body row">
      <Sidebar/>
      <div class="content col-md-11">
        <Card/>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '../../../components/_base/Sidebar'
import Titlebar from '../../../components/_base/Titlebar'
import Card from '../../../components/_base/Home/Card'

export default {
  name: 'Product',
  components: {
    Sidebar,
    Titlebar,
    Card
  }
}
</script>

<style scoped>
  .container-fluid {
  background-color: rgba(190, 195, 202, 0.3);
}
.body {
  position: relative;
}
</style>
