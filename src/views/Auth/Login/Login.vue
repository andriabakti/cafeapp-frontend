<template>
  <div class="container">
    <h3>Login</h3>
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Email</label>
        <input type="email" class="form-control" id="exampleInputEmail1" v-model="email" aria-describedby="emailHelp">
        <!-- <small id="emailHelp" class="form-text text-muted"></small> -->
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" v-model="password">
      </div>
      <button type="back" class="btn btn-secondary" id="goback" @click="register">Back to Register</button>
      <button type="submit" class="btn btn-primary" id="submit" @click="handleLogin">Submit</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    handleLogin (e) {
      e.preventDefault()
      const data = {
        email: this.email,
        password: this.password
      }
      this.login(data)
        .then(() => {
          this.$router.push('/home')
        })
    },
    register () {
      this.$router.push('/auth/register')
    },
    ...mapActions(['login'])
  }
}
</script>

<style scoped>
.container {
  width: 500px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: 100px auto;
  padding: 20px;
  border: gray 1px solid;
  border-radius: 10px;
  box-shadow: 0 4px 7px rgb(0, 0, 0, 0.3);
}
h3 {
  text-align: center;
  font-weight: bold;
}
#submit {
  margin-left: 235px;
}
</style>
