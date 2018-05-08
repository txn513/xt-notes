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
      colorArr: ['#3C989E', '#5DB5A4', '#F4CDA5', '#F57A82', '#ED5276']
    }
  },
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 46px;
}
h2 {
  font-size: 0.5rem;
}
p,h1,h2,h3,h4,h5,h6 {
  margin: 0;
}

.theme-1 .xt-button-circle {
  background: #3C989E !important;
}


@media screen and (min-width: 750px) {
  html {
    font-size: 73.5px !important;
  }
  #app {
    max-width: 750px;
    margin: 0 auto;
  }

}
</style>
