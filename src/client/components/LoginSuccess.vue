<template>
  <div id="login-success">
    <van-icon name="success" />
    <p>登录成功</p>
    <van-button id="backToHome" size="large" @click="backToHome">回到首页</van-button>
  </div>
</template>

<script>
export default {
  name: 'LoginSuccess',
  methods: {
    backToHome () {
      this.$router.push({path: '/'})
    }
  }
}
</script>

<style scoped >
#login-success {
  padding-top: 2rem;
}
p {
  font-size: 0.5rem;
}
#backToHome {
  margin-top: 1rem;
}
</style>
