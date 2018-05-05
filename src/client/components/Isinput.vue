<template>
    <div id="is-input">
      <h1>notes</h1>
      <div class="input-wrap">
        <van-cell-group>
          <van-field
            v-model.trim="input"
            type="textarea"
            placeholder="请输入内容"
            rows="4"
            autosize
            @keyup = keyUp
          />
        </van-cell-group>
        <van-button id="submit" size="large" @click="submit">提交</van-button>

        <div class="small-btn-wrap">
          <router-link class="small-btn" :to="{ name: 'AllMyNotes'}">我的notes</router-link>
        </div>
        <div class="user-btn-wrap" v-if="!login">
          <router-link class="small-btn" :to="{ name: 'Login'}">登录</router-link>
          <span>|</span>
          <router-link class="small-btn" :to="{ name: 'Register'}">注册</router-link>
        </div>
        <div class="user-btn-wrap" v-else>
          <a class="small-btn" @click="logout">登出</a>
        </div>

      </div>

    </div>
</template>

<script>
export default {
  name: 'Isinput',
  data () {
    return {
      input: sessionStorage.inputContent || ''

    }
  },
  methods: {
    keyUp () {
      sessionStorage.inputContent = this.input;
    },
    isLogin () {
      this.axios.get('/user/isLogin').then((response) => {
        let data = response.data;
        localStorage.isLogin = data.loginStatus
        if (data.loginStatus == true) {
          return this.$store.commit('isLogin');
        }
        this.$store.commit('logout');
      })
    },
    logout () {
      this.axios.get('/user/logout').then((response) => {
        let data = response.data;

        localStorage.isLogin = data.loginStatus;
        this.$store.commit('logout');
        // console.log(localStorage.isLogin)
      })
    },
    submit () {
      var _this = this
      if (this.input == '') {
        this.$toast('请输入内容');
        return

      }
      this.axios({
        method: 'post',
        url: '/api/submitpost',
        data: {
          content: _this.input
        }
      }).then(function (res) {
        console.log(res.data.status == true)
        let data = res.data.status;
        if (data) {
          sessionStorage.inputContent = '';
          _this.$router.push({path: '/SubmitSuccess'});
        }
      })
    }
  },
  created () {
    this.isLogin()
  },
  computed: {
    login () {
      return this.$store.state.isLogin
    }
  }
}
</script>

<style scoped>
  #is-input {
  }
  #is-input h1 {
    width: 100%;
    font-size: 100px;
    font-weight: 100;
    text-align: center;
    color: rgba(175, 47, 47, 0.15);
    -webkit-text-rendering: optimizeLegibility;
    -moz-text-rendering: optimizeLegibility;
    text-rendering: optimizeLegibility;
    margin: 0.5rem 0;
  }
  .input-wrap .van-hairline:after {
    border: none;
  }
  #submit {
    width: 9rem;
    margin-top:1rem;
  }
  a {
    color: #c8c8c8;
    font-size: 0.5rem;
    text-align: center;
    text-decoration: underline;
  }
  .small-btn-wrap {
    margin-top: 2rem;
  }
  .user-btn-wrap {
    margin-top: 0.6rem;
    font-size: 0.4rem;
  }
  .user-btn a {
    font-size: 0.4rem;
    padding: 0 0.3rem;
  }
</style>
