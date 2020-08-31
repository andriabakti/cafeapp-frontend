<template>
    <div class="cart">
        <img src="../../assets/images/pan.png">
        <h3>Your cart is empty</h3>
        <p>Please add some items from the menu</p>
    </div>
</template>

<script>
export default {
  name: 'Cart'
}
</script>

<style scoped>
.cart{
    height: 940px;
    width: 400px;
    border-left: 1px solid #CECECE;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.cart img{
    height: 150px;
    border-radius: 10px 10px 0 0;
    margin-top: 30px;
    margin-bottom: 0;
}
.cart h3{
    margin-top: -25px;
    font-size: 25px;
    font-weight: bold;
}
.cart p{
    margin-top: -5px;
    font-size: 15px;
    font-weight: bold;
    color:#CECECE;
}
</style>
