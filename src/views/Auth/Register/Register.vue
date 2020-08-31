<template>
  <div class="container">
    <h3>Register</h3>
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
      <div class="form-group">
        <label for="inputFirstName">First Name</label>
        <input type="firstName" class="form-control" id="firstName">
      </div>
      <div class="form-group">
        <label for="inputLastName">Last Name</label>
        <input type="lastName" class="form-control" id="lastName">
      </div>
      <button type="submit" class="btn btn-primary" @click="handleLogin">Submit</button>
      <button type="forward" class="btn btn-secondary" id="toLogin" @click="toLogin">Next</button>

    </form>
  </div>
</template>

<script>
export default {
  name: 'Register',
  methods: {
    toLogin () {
      this.$router.push('/auth/login')
    }
  }
}
</script>

<style scoped>
.container {
  width: 500px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: 50px auto;
  padding: 20px;
  border: gray 1px solid;
  border-radius: 10px;
  box-shadow: 0 4px 7px rgb(0, 0, 0, 0.3);
}
h3 {
  text-align: center;
  font-weight: bold;
}
#toLogin {
  margin-left: 320px;
}
</style>
