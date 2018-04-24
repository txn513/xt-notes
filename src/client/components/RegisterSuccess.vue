<template>
  <div id="register-success">
    <van-icon name="success" />
    <p>注册成功</p>
    <van-button id="goToLogin" size="large" @click="goToLogin">前往登录</van-button>
  </div>
</template>

<script>
export default {
  name: 'LoginSuccess',
  methods: {
    goToLogin () {
      this.$router.push({path: '/login'})
    },
  },
}
</script>

<style scoped >
  #register-success {
    padding-top: 2rem;
  }
  p {
    font-size: 0.5rem;
  }
  #goToLogin {
    margin-top: 1rem;
  }
</style>
