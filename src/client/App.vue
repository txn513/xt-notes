<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      // isLogin () {
      //   this.axios.get('/api/isLogin').then((response) => {
      //     console.log(response.data)
      //     let data = response.data
      //     sessionStorage.isLogin = data.loginStatus;
      //   })
      // }
    }
  },
  created () {
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
h2 {
  font-size: 0.5rem;
}
</style>
