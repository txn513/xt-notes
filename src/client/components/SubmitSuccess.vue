<template>
  <div id="submit-success">
    <van-icon name="success" />
    <p>提交成功</p>
    <van-button id="see-my-notes" size="large" @click="seeMyNotes">查看我的notes</van-button>
    <van-button id="go-to-home" size="large" @click="goToHome">再写一条note</van-button>
  </div>
</template>

<script>
export default {
  name: 'LoginSuccess',
  methods: {
    seeMyNotes () {
      this.$router.push({path: '/allmynotes'})
    },
    goToHome () {
      this.$router.push({path: '/'})
    }
  }
}
</script>

<style scoped >
  #submit-success {
    padding-top: 2rem;
  }
  p {
    font-size: 0.5rem;
    margin-bottom: 1rem;
  }
  #see-my-notes,
  #go-to-home{
    margin-bottom: 0.4rem;
  }
</style>
