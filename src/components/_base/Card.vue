<template>
  <button class="card" @click="$emit('toggle-event', data.name)">
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
  text-align: left;
  display: flex;
  flex-direction: column;
  align-content: center;
  margin-bottom: auto;
  margin-top: 25px;
  border-radius: 10px 10px 0 0;
  border: 0;
  background: none;
}
.card img{
  height: 180px;
  width: 230px;
  border-radius: 10px 10px 0 0;
}
.text{
  width: 200px;
}
.text h3{
  font-size: 25px;
  font-weight: normal;
  margin: 0;
}
.text p{
  font-size: 25px;
  font-weight: bold;
  margin: 0;
}
</style>
