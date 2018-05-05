<template>
  <div id="all-my-notes">
    <van-nav-bar
      title="我的notes"
      left-text="返回"
      left-arrow
      @click-left="onClickLight"
    />
    <div class="xt-content-wrap">
      <div id="panel-wrap" v-for="item in listOfNotes">
        <xt-panel :type="2" :listItem="item"></xt-panel>
      </div>
    </div>
  </div>
</template>

<script>
import xtPanel from './XtPanel.vue'
export default {
  name: 'AllMyNots',
  components: {xtPanel},
  data () {
    return {
      listOfNotes: []
    }
  },
  methods: {
    // getTitle (content){
    //   if (content.indexOf('\n') > -1) {
    //     return content.split('\n')[0]
    //   } else {
    //     return content;
    //   }
    //
    // },
    // ifDot (content) {
    //   var num = content.split('\n').length - 1;
    //   if (num > 2) {
    //     return true;
    //   }
    //   return false;
    //   // console.log(content.split('\n').length-1);
    //   // if (/\n/g.search(content)) {
    //   //
    //   // } else {
    //   //   return content;
    //   // }
    // },
    getAllNotes () {
      this.axios.get('/api/listallnotes').then((response) => {
        console.log(response.data)
        this.listOfNotes = response.data
      })
    },
    onClickLight () {
      window.history.go(-1)
    },

    // deleteNote (id) {
    //   this.axios({
    //     method: 'post',
    //     url: '/api/deletenote',
    //     data: {
    //       id: id
    //     }
    //   }).then((response) => {
    //     if (response.data.ok === 1) {
    //       this.getAllNotes()
    //     }
    //   })
    // }
  },
  created () {
    this.getAllNotes();
    // this.ifDot('fefefefe\nfefefefe\nfefefefefefe');
  }
}
</script>

<style scoped lang="scss">
#all-my-notes {
  text-align: left;
}
.xt-content-wrap {
  padding-bottom: 1rem;
}
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
    pre {
      overflow: hidden;
      max-height: 1.2rem;
      margin: 0;
    }
    p {
      margin: 0;
    }
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

.panel {
  margin-top: 0.3rem;
  font-size: 1rem;
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
