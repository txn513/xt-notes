<template>
  <div class="xt-panel" :class="{'focus': ifFocus}">
    <template v-if="type==1">
      <van-cell-group class="xt-field xt-panel-1">
        <van-field
          v-model.trim="input"
          type="textarea"
          placeholder="请输入内容"
          rows="4"
          autosize
          @keyup = keyUp
          @focus = focus
          @blur = blur
        />
      </van-cell-group>
    </template>

    <template v-if="type==2 || type==3">
      <loading :type="2" v-if="!listItem"></loading>
        <div v-else :class="{'xt-panel-2': type == 2}" @click="goToDetail(listItem._id)">
          <div class="xt-panel-title" :style="{color: currentColor}">{{getTitle(listItem.content)}}</div>
          <div class="xt-panel-content"><pre>{{listItem.content}}</pre><p v-if="type==2&&ifDot(listItem.content)">....</p></div>
          <div class="xt-panel-sub">{{new Date(listItem.date).toLocaleString()}}</div>
        </div>
    </template>
  </div>
</template>

<script>
import Loading from './Loding'
export default {
  name: 'XtPanel',
  components: {Loading},
  props: {
    type: Number,
    listItem: Object,
    inputContent: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      input: this.inputContent,
      ifFocus: false
    }
  },
  methods: {
    keyUp () {
      sessionStorage.inputContent = this.input
      this.$emit('inputContent', this.input);
    },
    focus () {
      this.ifFocus = true;
    },
    blur () {
      this.ifFocus = false;
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
    },
    goToDetail (id) {
      this.$router.push({name: 'MyNoteDetail', params: {id: id}});
    }
  },
  computed: {
    currentColor () {
      return this.$store.state.currentColor;
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
    margin: 14px auto 0;
    border-radius: 4px;
    background: #fff;
    box-shadow: 0.05rem 0.1rem 0.2rem #eee, -0.05rem 0rem 0.2rem #eee;
    font-weight: 200;
    text-align: left;
    transition: all 0.5s;
    &.focus {
      box-shadow: 0.05rem 0.1rem 0.2rem #cecece, -0.05rem 0rem 0.2rem #CECECE;
    }
    .xt-panel-title {
      font-size: 18px;
      line-height: 32px;
      height: 32px;
      overflow: hidden;
      font-weight: 500;
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
    }
    .xt-panel-content {
      font-size: 14px;
      line-height: 24px;
      word-break: break-word;
      pre {
        white-space: pre-wrap;
        overflow: hidden;
      }
    }
    .xt-panel-2 .xt-panel-content {
      pre {
        max-height: 48px;
        margin: 0;
      }
      p {
        margin: 0;
      }
    }
    .xt-panel-sub {
      height: 32px;
      line-height: 32px;
      font-size: 12px;
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
      border-width: 0;
    }
  }


  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }
  .list-enter, .list-leave-to
    /* .list-leave-active for below version 2.1.8 */ {
    opacity: 0;
    transform: translateY(-30px);
  }
</style>
