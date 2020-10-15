<template>
  <nav class="side col-lg-1">
    <div class="up">
      <button class="btn" id="product" @click="toHome"></button>
      <button class="btn" id="history"></button>
      <button class="btn" id="addition" @click="$emit('toggle-active')"></button>
    </div>
    <div class="down">
      <button class="btn" id="exit" @click="$emit('toggle-exit')"></button>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Sidebar',
  methods: {
    toHome () {
      this.$router.push('/home')
    },
    toHistory () {
      this.$router.push('/history')
    }
  }
}
</script>

<style scoped>
.side {
  height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
}
.up {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.down {
  margin-bottom: 20px;
}
button {
  height: 60px;
  width: 60px;
  margin: 20px 0 0;
  background-size: 40px 40px;
  background-color: #ffffff;
  background-repeat: no-repeat;
  background-position: center;
  border: none;
}
#product {
  background-image: url("../assets/images/fork.png");
}
#history {
  background-image: url("../assets/images/clip.png");
}
#addition {
  background-image: url("../assets/images/add.png");
}
#exit {
  background-image: url("../assets/images/exit.png");
}
</style>
