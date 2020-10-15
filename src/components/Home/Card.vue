<template>
  <div class="btn card">
    <img :src="data.image" @click="$emit('toggle-event')">
    <div class="text">
      <h3>{{data.name}}</h3>
      <p>Rp. {{data.price}}</p>
      <div>
        <button class="btn btn-active" @click="$emit('event-update', data)">Edit</button>
        <button class="btn btn-warning" @click="$emit('toggle-delete')">Delete</button>
      </div>
    </div>
  </div>
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
  cursor: pointer;
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
