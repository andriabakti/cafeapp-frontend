<template>
    <nav>
        <img src="../../assets/images/fork.png">
        <img src="../../assets/images/clip.png">
        <img src="../../assets/images/add.png">
        <button class="btn btn-primary" @click="toLogout">Logout</button>
    </nav>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Sidebar',
  methods: {
    ...mapActions(['toLogout'])
  }
}
</script>

<style scoped>
nav{
    height: 940px;
    width: 100px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
}
nav img{
    height: 40px;
    width: 40px;
    margin: 30px;
}
</style>
