<template>
    <div id="is-input">
      <h1 :style="{color: currentColor}">notes</h1>
      <div class="input-wrap">

        <xt-panel :inputContent="input" :type="1" @inputContent="getInput"></xt-panel>

        <!--<a class="xt-button-circle"  @click="submit">提交</a>-->
        <xt-button @click.native="submit"></xt-button>

        <!--<van-button id="submit" size="large" @click="submit">提交</van-button>-->

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

      <div class="color-switch">
        <div class="color-item" v-for="item in colorArr" :style="{background: item}" @click="colorSwitch(item)"></div>
      </div>

      <div class="user-btn-wrap fork-on-github">
        <a class="small-btn" href="https://github.com/txn513/xt-notes">Fork on Github</a>
      </div>

    </div>
</template>

<script>
import xtPanel from './elements/XtPanel'
import xtButton from './elements/XtButton'
export default {
  name: 'Isinput',
  components: {xtPanel, xtButton},
  data () {
    return {
      input: sessionStorage.inputContent || '',
      colorArr: ['#3C989E', '#5DB5A4', '#F4CDA5', '#F57A82', '#ED5276']
    }
  },
  methods: {
    getInput (con) {
      this.input = con;
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
        let data = res.data.status;
        if (data) {
          sessionStorage.inputContent = '';
          _this.$router.push({path: '/SubmitSuccess'});
        }
      })
    },
    colorSwitch (color) {
      this.$store.commit('changeColor', color)
    }
  },
  created () {
    this.isLogin()
  },
  computed: {
    login () {
      return this.$store.state.isLogin
    },
    currentColor () {
      return this.$store.state.currentColor
    }
  }
}
</script>

<style scoped lang="scss">
  #is-input {
  }
  #is-input h1 {
    width: 100%;
    font-size: 100px;
    font-weight: 100;
    text-align: center;
    color: $mainColor;
    -webkit-text-rendering: optimizeLegibility;
    -moz-text-rendering: optimizeLegibility;
    text-rendering: optimizeLegibility;
    margin: 0 0;
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
    font-size: 18px;
    text-align: center;
    text-decoration: underline;
    font-weight: 400;
  }
  .small-btn-wrap {
    margin-top: 60px;
  }
  .user-btn-wrap {
    margin-top: 24px;
    font-size: 14px;
    vertical-align: middle;
    font-weight: 200;
  }
  .user-btn a {
    font-size: 0.4rem;
    padding: 0 0.3rem;
  }

  .color-switch {
    margin: 40px auto;
    display: inline-block;
    zoom: 1;
    .color-item {
      height: 50px;
      width: 50px;
      float: left;
    }
    &:after {
      content: '.';
      display: block;
      visibility: hidden;
      clear: both;
      height: 0;
    }
  }

.fork-on-github {

}

</style>
