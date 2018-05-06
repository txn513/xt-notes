<template>
    <div class="loading" :class="{'loading-1': type==1, 'loading-2': type==2}">
      <van-loading color="black" class="inner-loading"/>
    </div>
</template>

<script>
export default {
  name: 'Loding',
  props: {
    type: {
      type: Number,
      default: 1
    }
  }
}
</script>

<style scoped lang="scss">
  .loading-1 {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    text-align: center;
  }
  .loading-2 {
    text-align: center;
    margin-top: -0.05rem;
    .inner-loading {
      margin: 0 auto;
    }
  }
</style>
