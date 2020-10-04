<template>
    <div class="cart col-md-4">
        <div class="empty">
            <img src="../../../assets/images/pan.png">
            <h3>Your cart is empty</h3>
            <p>Please add some items from the menu</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Cart'
}
</script>

<style scoped>
.cart {
    height: 545px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-left: 1px solid #CECECE;
}
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
</style>
