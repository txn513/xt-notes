<template>
  <div id="all-my-notes">
    <van-nav-bar
      title="登录"
      left-text="返回"
      left-arrow
      @click-left="onClickLight"
    />


    <div id="panel-wrap" v-for="item in listOfNotes">
      <van-cell-swipe :right-width="65">
        <van-cell-group>
          <van-panel class="panel" :title="new Date(item.date).toLocaleString()">
            <div class="panel-content">{{item.content}}</div>
          </van-panel>
        </van-cell-group>

        <span slot="right" class="cell-swipe-wrap" :data-id="item._id" @click="deleteNote(item._id)">
          <span class="cell-swipe">删除</span>
        </span>


      </van-cell-swipe>

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
    },
    deleteNote (id) {
      this.axios({
        method: 'post',
        url: '/api/deletenote',
        data: {
          id: id
        }
      }).then((response) => {
        if (response.data.ok === 1) {
          this.getAllNotes()
        }
      })
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
.van-cell-swipe__right {
  background-color: #F44;
}
.cell-swipe-wrap {
  display: flex;
  align-items: center;
  background-color: #F44;
  height: 100%;
}
.cell-swipe {
  color: #FFFFFF;
  font-size: 15px;
  width: 65px;
  height: 44px;
  line-height: 44px;
  display: block;
  text-align: center;
  background-color: #F44;
}
</style>
