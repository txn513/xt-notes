<template>
  <div id="register">
    <van-nav-bar
      title="注册"
      left-text="返回"
      right-text="登录"
      @click-right="onClickRight"
      left-arrow
    />
    <van-cell-group class="cell-group">
      <van-field label="用户名" v-model="username" placeholder="请输入用户名" required/>
      <van-field label="密码" type="password" v-model="password" placeholder="请输入密码" required/>
    </van-cell-group>

    <van-button id="submit" size="large" @click="submit">注册</van-button>
  </div>
</template>

<script>
export default {
  name: 'Register',
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
        url: '/user/register',
        data: {
          user: {
            username: _this.username,
            password: _this.password
          }
        }
      }).then(function (response) {
        console.log(response)
        let data = response.data
        if (data.isRegister) {
          _this.$router.push({path: '/registersuccess'})
        } else {
          alert(data.error)
        }
      })
    },
    onClickRight () {
      this.$router.push({path: '/login'})
    },
    onClickLight () {
      this.$router.go(-1)
    }
  }

}
</script>

<style scoped>
.cell-group {
  margin-top: 0.3rem;
}
#submit {
  width: 9rem;
  margin-top: 1rem;
}
</style>
