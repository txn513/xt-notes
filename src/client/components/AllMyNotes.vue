<template>
  <div id="all-my-notes">
    <van-nav-bar
      title="登录"
      left-text="返回"
      left-arrow
      @click-left="onClickLight"
    />
    <div id="panel-wrap" v-for="item in listOfNotes">
      <van-panel class="panel" :title="item.date">
        <div class="panel-content">{{item.content}}</div>
      </van-panel>
    </div>

  </div>
</template>

<script>
export default {
  name: 'AllMyNots',
  data () {
    return {
      listOfNotes: []
    }
  },
  methods: {
    getAllNotes () {
      this.axios.get('/api/listallnotes').then((response) => {
        console.log(response.data)
        this.listOfNotes = response.data
      })
    },
    onClickLight () {
      window.history.go(-1)
    }
  },
  created () {
    this.getAllNotes()
  }
}
</script>

<style scoped>
#all-my-notes {
  text-align: left;
}
.panel {
  margin-top: 0.3rem;
}
.panel-content {
  padding: 0.5rem;
  font-size: 0.3rem;
}
</style>
