<template>
  <div id="my-note-detail">
    <van-nav-bar
      title="note内容"
      left-text="返回"
      right-text="编辑"
      left-arrow
      @click-left="onClickLight"
      @click-right="editNote"
    />
    <div id="panel-wrap">
      <xt-panel :type="3" :listItem="noteData"></xt-panel>
    </div>
    <van-button id="delete" type="danger" size="large" @click="deleteNote">删除</van-button>

  </div>
</template>

<script>
import xtPanel from './elements/XtPanel.vue'
export default {
  name: 'MyNoteDetail',
  components: {xtPanel},
  data () {
    return {
      noteId: '',
      noteData: null,
      title: '',
      noteCon: ''
    }
  },
  methods: {
    onClickLight () {
      window.history.go(-1)
    },
    getTitle (content) {
      if (content.indexOf('\n') > -1) {
        return content.split('\n')[0];
      } else {
        return content;
      }
    },
    getNote () {
      this.axios({
        method: 'post',
        url: '/api/notedetail',
        data: {
          id: this.noteId
        }
      }).then((res) => {
        console.log(res.data)
        this.noteData = res.data;
        // this.title = this.getTitle(this.noteData.content);
        this.noteCon = this.noteData.content;
      })
    },
    deleteNote () {
      this.$dialog.confirm({
        message: '确认删除吗'
      }).then(() => {
        this.axios({
          method: 'post',
          url: '/api/deletenote',
          data: {
            id: this.noteId
          }
        }).then((response) => {
          if (response.data.ok === 1) {
            this.$router.go(-1)
          }
        })
      }).catch(() => {
        // on cancel
      });
      // this.axios({
      //   method: 'post',
      //   url: '/api/deletenote',
      //   data: {
      //     id: this.noteId
      //   }
      // }).then((response) => {
      //   if (response.data.ok === 1) {
      //     this.$router.push({path: '/allmynotes'})
      //   }
      // })
    },
    editNote () {
      if (this.noteCon) {
        this.$router.push({name: 'EditNote', params: {con: this.noteCon, id: this.noteId}});
        // sessionStorage.editInput = this.noteCon;
      }
    }
  },
  created () {
    this.noteId = this.$route.params.id;
    this.getNote();
  }
}
</script>

<style scoped lang="scss">
  .xt-panel {
    box-sizing: border-box;
    padding: 0.2rem 0.2rem 0.1rem;
    width: 9rem;
    /*height: 3rem;*/
    margin: 0.3rem auto 0;
    border-radius: 4px;
    background: #fff;
    box-shadow: 0.05rem 0.1rem 0.2rem #eee, -0.05rem 0rem 0.2rem #eee;
    font-weight: 200;
    text-align: left;
    .xt-panel-title {
      font-size: 0.45rem;
      line-height: 0.8rem;
      font-weight: 500;
      overflow: hidden;
    }
    .xt-panel-content {
      font-size: 0.35rem;
      line-height: 0.6rem;
      word-break: break-word;
    }
    .xt-panel-sub {
      height: 0.8rem;
      line-height: 0.8rem;
      font-size: 0.3rem;
      position: relative;
      color: #c4c4c4;
      .xt-panel-show {
        display: block;
        position: absolute;
        right: 0;
        top: 0;
        height: inherit;
        line-height: inherit;
        color: #38f;
      }
    }
  }

  #delete {
    width: 9rem;
    margin-top: 1rem;
  }
</style>
