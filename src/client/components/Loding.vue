<template>
    <div id="loading">
      <van-loading color="black" />
    </div>
</template>

<script>
export default {
  name: 'Loding'
}
</script>

<style scoped>
  #loading {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    text-align: center;
  }
</style>
