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

    <loading v-show="!ifLoad"></loading>
  </div>
</template>

<script>
import Loading from './elements/Loding'
export default {
  name: 'Login',
  components: {Loading},
  data () {
    return {
      username: '',
      // email: '',
      password: '',
      ifLoad: true
    }
  },
  methods: {
    submit () {
      this.ifLoad = false;
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
        this.ifLoad = true;
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
          this.$toast(data.error);
          // alert(data.error)
        }
      })
    },
    onClickRight () {
      this.$router.push({path: '/register'})
    },
    onClickLight () {
      this.$router.push({path: '/'})
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
