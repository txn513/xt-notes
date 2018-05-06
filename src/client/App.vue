<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
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
