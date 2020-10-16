<template>
    <div class="cart col-md-4">
        <div class="empty">
            <img src="../../../assets/images/pan.png">
            <h3>Your cart is empty</h3>
            <p>Please add some items from the menu</p>
        </div>
        <ul class="list-unstyled card">
            <li class="media"  v-for="item in getCart" :key="item.id">
                <div class="container-img">
                    <img :src="item.image" class="mr-3">
                </div>
                <div class="media-body">
                    <h6 class="mt-0 mb-1">{{item.name}}</h6>
                    <div class="cart-body">
                        <h5>{{item.price}}</h5>
                        <div class="count-box">
                            <button> -</button>
                            <input type="number" name="count" value="1" disabled>
                            <button>+</button>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Cart',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['getCart'])
  }
}
</script>

<style scoped>
.cart {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-left: 1px solid #CECECE;
    /* overflow: auto; */
}
.card {
    position: absolute;
    width: 100%;
    display: flex;
    /* align-items: center; */
    /* background-color: coral; */
}
/* .media {
    border-bottom: 1px solid #CECECE;
} */
.empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
}
.empty img {
    width: 150px;
}
.empty h3 {
    margin-top: -25px;
    font-size: 25px;
    font-weight: bold;
}
.empty p {
    margin-top: -5px;
    font-size: 15px;
    font-weight: bold;
    color:#CECECE;
}
.count-box input{
    width: 30px;
    font-size: 12px;
}
.cart-body{
    display: flex;
    justify-content: space-between;
}
.container-img{
    width: 70px;
    height: 70px;
    margin-right: 10px;
}
.container-img img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.media{
    margin-bottom: 20px;
}
.count-box button {
    border-style: none;
    border: 1px solid green;
    color: green;
}
</style>
