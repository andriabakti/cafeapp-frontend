<template>
  <div class="container-fluid">
    <div class="row no-gutters">
      <div class="col-lg-12 main">
        <form>
          <h3 class="title">Register</h3>
          <div class="form-group">
            <label>Your email</label>
            <input type="email" class="form-control" v-model="email" placeholder="Type here">
          </div>
          <div class="form-group">
            <label>Your password</label>
            <input type="password" class="form-control" v-model="password" placeholder="Type here">
          </div>
          <div class="form-group">
            <label>Your username</label>
            <input type="text" class="form-control" v-model="username" placeholder="Type here">
          </div>
          <div class="submit">
            <button class="btn" @click="handleRegister">Register</button>
            <span>Already have an account?</span>
            <div>
              <span>Login</span>
              <span class="link" @click="toLogin">here</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data: () => {
    return {
      email: '',
      password: '',
      username: '',
    }
  },
  methods: {
    ...mapActions(['register']),
    handleRegister (e) {
      e.preventDefault()
      const data = {
        email: this.email,
        password: this.password,
        username: this.username
      }
      this.register(data)
        .then(() => {
          this.$router.push('/auth/login')
        }
      )
    },
    toLogin () {
      this.$router.push('/auth/login')
    }
  }
}
</script>

<style scoped>
/* Background */
.container-fluid {
  background-image: url('../../../assets/images/bg.jpg');
  background-size: cover;
}
@media screen and (max-width: 500px) {
  .container-fluid  {
    background-image: none;
  }
}
.row {
  height: 100vh;
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
