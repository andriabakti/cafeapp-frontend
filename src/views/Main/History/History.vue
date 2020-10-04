<template>
  <div class="container-fluid">
    <div class="row">
      <Titlebar/>
    </div>
    <div class="body row">
      <Sidebar/>
      <div class="content col-md-11">
        <Longcard/>
        <Longcard/>
        <Longcard/>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '../../../components/_base/Sidebar'
import Titlebar from '../../../components/_base/Titlebar'
import Longcard from '../../../components/_base/Longcard'

export default {
  name: 'History',
  components: {
    Sidebar,
    Titlebar,
    Longcard
  }
}
</script>

<style scoped>
.container-fluid {
  background-color: rgba(190, 195, 202, 0.3);
}
.content {
  height: 545px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  padding: 10px 0 15px 0;
  overflow: auto;
}
</style>
