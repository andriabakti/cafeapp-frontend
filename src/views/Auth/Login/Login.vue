<template>
  <div class="container-fluid p-0">
    <div class="row no-gutters">
      <div class="col-lg-12 main">
        <form>
          <h3 class="title">Log In</h3>
          <div class="form-group">
            <label>Your email</label>
            <input type="email" class="form-control" v-model="email" placeholder="Type here">
          </div>
          <div class="form-group">
            <label>Your password</label>
            <input type="password" class="form-control" v-model="password" placeholder="Type here">
          </div>
          <div class="submit">
            <button class="btn" @click="handleLogin">Login</button>
            <span>Doesn't have any account yet?</span>
            <div>
              <span>Register</span>
              <span class="link" @click="toRegister">here</span>
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
        .then(() => {
          this.$router.push('/home')
        }
      )
    },
    toRegister () {
      this.$router.push('/auth/register')
    }
  }
}
</script>

<style scoped>
/* Background */
.container-fluid {
  background-image: url('../../../assets/images/bg.jpg');
  background-size: cover;
  height: 100vh;
}
@media screen and (max-width: 500px) {
  .container-fluid  {
    background-image: none;
  }
}
.main {
  display: flex;
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
@media screen and (max-width: 500px) {
  form {
    width: 100%;
    height: 100%;
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
  font-weight: 500;
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
  font-weight: 500;
  color: #ffffff;
}
.submit span {
  font-weight: 500;
}
.link {
  color: #F24F8A;
  cursor: pointer;
}
</style>
