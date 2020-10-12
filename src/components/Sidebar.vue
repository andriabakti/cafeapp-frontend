<template>
    <nav class="side col-md-1">
      <div class="up">
        <button id="product" @click="toHome"></button>
        <button id="history" @click="toHistory"></button>
        <button id="addition" @click="$emit('toggle-active')"></button>
      </div>
      <div class="down">
        <button id="exit" @click="toLogout"></button>
      </div>
    </nav>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Sidebar',
  methods: {
    toHome () {
      this.$router.push('/home')
    },
    toHistory () {
      this.$router.push('/history')
    },
    ...mapActions(['toLogout'])
  }
}
</script>

<style scoped>
.side {
  height: 100%;
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
