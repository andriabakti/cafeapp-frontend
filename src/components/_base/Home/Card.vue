<template>
  <button class="btn card" @click="$emit('toggle-event', data.name)">
    <img :src="data.image">
    <div class="text">
      <h3>{{data.name}}</h3>
      <p>Rp. {{data.price}}</p>
    </div>
  </button>
</template>

<script>
export default {
  name: 'Card',
  props: {
    data: {
      type: Object
    }
  }
}
</script>

<style scoped>
.card{
  height: 260px;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-content: center;
  margin-bottom: 10px;
  margin-top: 25px;
  border-radius: 10px 10px 0 0;
  border: 0;
  background: none;
}
.card img{
  height: 165px;
  width: 210px;
  border-radius: 10px 10px 0 0;
}
.text{
  width: 200px;
}
.text h3{
  font-size: 22px;
  font-weight: normal;
  margin: 5px 0 0 0;
}
.text p{
  font-size: 22px;
  font-weight: bold;
  margin: 0;
}
</style>
