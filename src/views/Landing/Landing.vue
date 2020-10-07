<template>
    <div class="container-fluid p-0">
        <div class="row no-gutters">
            <div class="col-lg-12">
                <div id="navbar">
                    <div class="title">
                        <span>Cafetaria</span>
                    </div>
                    <div class="subtitle">
                        <span><i>Online cafe shop for coffee, cakes and dishes</i></span>
                    </div>
                </div>
                <div class="main">
                    <button class="btn" id="login" @click="toLogin">Login</button>
                    <button class="btn" id="register" @click="toRegister">Register</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Landing',
  methods: {
    toLogin () {
      this.$router.push('/login')
    },
    toRegister () {
      this.$router.push('/register')
    }
  }
}
</script>

<style scoped>
/* Background */
.container-fluid {
    background-image: url('../../assets/images/bg.jpg');
    background-size: cover;
}
.row {
    height: 100vh;
}

#navbar {
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.title {
    color: #ffffff;
    font-weight: bold;
    font-size: 50px;
    padding: 15px;
    border: 7px solid #ffffff;
}
.subtitle {
    margin-top: 20px;
    color: #ffffff;
    font-size: 18px;
    font-weight: 700;
}

.main {
    display: flex;
    align-items: center;
    justify-content: center;
}
@media screen and (max-width: 700px) {
    .main {
        flex-direction: column;
    }
}

.main button {
    /* Button */
    height: 45px;
    width: 300px;
    border-radius: 15px;
    box-shadow: 0 4px 7px rgb(0, 0, 0, 0.3);
    margin: 30px;
    /* Button Text */
    color: #ffffff;
    font-weight: 700;
}
#login {
    background-color: #F24F8A;
}
#register {
    background-color: cornflowerblue;
}
</style>
