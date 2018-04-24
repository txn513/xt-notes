<template>
  <div id="login">
    <van-nav-bar
      title="登录"
      left-text="返回"
      right-text="注册"
      left-arrow
      @click-right="onClickRight"
      @click-left="onClickLight"
    />
    <van-cell-group class="cell-group">
      <van-field label="用户名" v-model="username" placeholder="请输入用户名"/>
      <van-field label="密码" type="password" v-model="password" placeholder="请输入密码"/>
    </van-cell-group>

    <van-button id="submit" size="large" @click="submit">登录</van-button>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      // email: '',
      password: ''
    }
  },
  methods: {
    submit () {
      var _this = this
      this.axios({
        method: 'post',
        url: '/user/login',
        data: {
          user: {
            username: _this.username,
            password: _this.password
          }
        }
      }).then((response) => {
        console.log(response)
        let data = response.data
        if (data.userid) {
          //console.log(_this.$route.query);
          // let redirectPath = _this.$route.query.redirect || '/'
          let redirectPath = '/'
          localStorage.isLogin = true
          this.$store.commit('isLogin')
          sessionStorage.userid = data.userid
          this.$router.push({path: redirectPath})
        } else {
          alert(data.error)
        }
      })
    },
    onClickRight () {
      this.$router.push({path: '/register'})
    },
    onClickLight () {
      window.history.go(-1)
    }
  }
}
</script>

<style scoped>
  .cell-group {
    margin-top: 0.3rem;
  }
  #submit {
    margin-top: 1rem;
  }
</style>
