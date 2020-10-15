<template>
  <div class="container-fluid p-0">
    <div class="row no-gutters">
      <div class="col-lg-6 left">
        <div class="brand">
          <span class="name" @click="toLanding">Cafetaria</span>
          <span class="sub"><i>Online cafe shop for coffee, cakes & dishes</i></span>
        </div>
      </div>
      <div class="col-lg-6 main">
        <form>
          <h3 class="title">Login</h3>
          <div class="form-group">
            <label for="email">Your email</label>
            <input type="email" id="email" class="form-control" v-model="email" placeholder="Type here" required>
          </div>
          <div class="form-group">
            <label for="password">Your password</label>
            <input type="password" id="password" class="form-control" v-model="password" placeholder="Type here" required>
          </div>
          <div class="submit">
            <button type="submit" class="btn" @click="handleLogin">Login</button>
            <span>Doesn't have any account yet?</span>
            <div>
              <span>Register</span>
              <span class="link" @click="toRegister"> "here"</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Login',
  data: () => {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(['login']),
    handleLogin (e) {
      e.preventDefault()
      const data = {
        email: this.email,
        password: this.password
      }
      this.login(data)
      // .then(() => {
      //   this.$router.push('/home')
      // })
    },
    toRegister () {
      this.$router.push('/register')
    },
    toLanding () {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
/* Background */
.row {
  height: 100vh;
  background-image: url('../../../assets/images/bg.jpg');
  background-size: cover;
}
@media screen and (max-width: 960px) {
  .row {
    height: max-content;
  }
}

/* Left Side */
.left {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 0 20px;
}
@media screen and (max-width: 960px) {
  .left {
    padding: 50px 0 20px;
  }
}
@media screen and (max-width: 540px) {
  .left {
    background-image: url('../../../assets/images/bg.jpg');
    background-size: cover;
  }
}
/* Brand */
.brand {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.name {
  color: #ffffff;
  font-weight: bold;
  font-size: 50px;
  padding: 15px;
  border: 7px solid #ffffff;
  cursor: pointer;
}
.sub {
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
  margin-top: 20px;
  text-align: center;
}
@media screen and (max-width: 540px) {
  .sub {
    padding: 0 20px;
  }
}

/* Right Side */
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
/* Box Body */
form {
  width: 400px;
  padding: 30px 35px;
  border-radius: 20px;
  box-shadow: 0 4px 7px rgb(0, 0, 0, 0.3);
  background-color: #ffffff;
}
@media screen and (max-width: 960px) {
  form {
    margin-bottom: 60px;
  }
}
@media screen and (max-width: 540px) {
  form {
    width: 100%;
    height: 100%;
    margin-bottom: 0;
    padding: 30px 35px 70px;
    border-radius: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}

/* Box Title */
.title {
  color: #F24F8A;
  font-weight: bold;
  text-align: center;
  margin-bottom: 30px;
}
/* Form Label */
label {
  font-weight: 700;
}

/* Submit & Login */
.submit {
  text-align: right;
}
.submit button {
  /* Button */
  width: 100%;
  height: 45px;
  border: none;
  border-radius: 15px;
  background-color: #F24F8A;
  margin: 30px 0;
  /* Button Text */
  font-weight: 700;
  color: #ffffff;
}
.link {
  color: #F24F8A;
  cursor: pointer;
  font-weight: 700;
}
</style>
