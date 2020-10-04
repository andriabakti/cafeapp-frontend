<template>
    <div class="col-md-12">
        <button id="menu" @click="toProduct"></button>
        <h3>Food Items</h3>
    </div>
</template>

<script>
export default {
  name: 'Titlebar',
  methods: {
    toProduct () {
      this.$router.push('/product')
    }
  }
}
</script>

<style scoped>
div {
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: left;
    background-color: #ffffff;
    border-bottom: 1px solid rgb(0, 0, 0, 0.25);
    box-shadow: 0 4px 3px rgb(0, 0, 0, 0.25);
}
button {
    height: 60px;
    width: 60px;
    border: none;
    background-size: 30px 30px;
    background-color: #ffffff;
    background-repeat: no-repeat;
    background-position: center;
}
#menu {
    margin-left: 13px;
    background-image: url("../../assets/images/menu.png");
}
h3{
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    margin: auto;
}
</style>
