<template>
  <div class="xt-panel">
    <template v-if="type==1">
      <van-cell-group class="xt-field xt-panel-1">
        <van-field
          v-model.trim="input"
          type="textarea"
          placeholder="请输入内容"
          rows="4"
          autosize
          @keyup = keyUp
        />
      </van-cell-group>
    </template>

    <template v-if="listItem && type==2 || listItem && type==3">
      <div :class="{'xt-panel-2': type == 2}" @click="goToDetail(listItem._id)">
        <div class="xt-panel-title">{{getTitle(listItem.content)}}</div>
        <div class="xt-panel-content"><pre>{{listItem.content}}</pre><p v-if="type==2&&ifDot(listItem.content)">....</p></div>
        <div class="xt-panel-sub">{{new Date(listItem.date).toLocaleString()}}
          <!--<span class="xt-panel-show">展开</span>-->
        </div>
      </div>

    </template>
  </div>
</template>

<script>
export default {
  name: 'XtPanel',
  props: {
    type: Number,
    listItem: Object
  },
  data () {
    return {
      input: sessionStorage.inputContent || ''
    }
  },
  methods: {
    keyUp () {
      sessionStorage.inputContent = this.input
      this.$emit('inputContent', this.input);
    },
    getTitle (content){
      if (content.indexOf('\n') > -1) {
        return content.split('\n')[0]
      } else {
        return content;
      }

    },
    ifDot (content) {
      var num = content.split('\n').length - 1;
      if (num > 2) {
        return true;
      }
      return false;
      // console.log(content.split('\n').length-1);
      // if (/\n/g.search(content)) {
      //
      // } else {
      //   return content;
      // }
    },
    goToDetail (id) {
      this.$router.push({name: 'MyNoteDetail', params: {id: id}});
    }
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
    pre {
      white-space: pre-wrap;
      overflow: hidden;
    }
  }
  .xt-panel-2 .xt-panel-content {
    pre {
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

  .xt-field {
    &:after {
      border: 0 solid red;
    }
  }
</style>
