<template>
    <nav>
        <div class="navbar">
            <img id="menu" src="../../assets/images/menu.png">
            <h3>Food Items</h3>
            <img id="search" src="../../assets/images/search.png">
        </div>
        <div class="cart-bar">
            <h3>Cart</h3>
            <p>0</p>
        </div>
    </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
nav{
    display: flex;
    position: relative;
    background-color: #ffffff;
    height: 90px;

}
.navbar{
    width: 950px;
    box-shadow: 0 4px 3px rgb(0, 0, 0, 0.25);
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.navbar img{
    height: 30px;
    width: 30px;
}
#menu{
    margin-left: 20px;
}
#search{
    margin-right: 30px;
}
.navbar h3{
    font-size: 30px;
    font-weight: bold;
}

.cart-bar{
    /* height: 90px; */
    width: 400px;
    margin-top: 0;
    box-shadow: 0 4px 0px rgb(0, 0, 0, 0.25);
    display: flex;
    align-items: center;
    justify-content: center;
}
.cart-bar h3{
    font-size: 25px;
}
.cart-bar p{
    height: 20px;
    width: 20px;
    border-radius: 100%;
    background: #57CAD5;
    text-align: center;
    font-size: 15px;
    font-weight: bold;
    color: #ffffff;
    margin-top: 10px;
    margin-left: 5px;
}
</style>
