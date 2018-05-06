<template>
    <div id="xt-nav">
      <div class="van-nav-bar van-hairline--bottom" style="z-index: 1;">
        <div class="van-nav-bar__left" @click="leftClick" v-if="leftText !== ''">
          <i class="van-icon van-nav-bar__arrow van-icon-arrow" :style="{color: currentColor}"></i>
          <span class="van-nav-bar__text" :style="{color: currentColor}">{{leftText}}</span>
        </div>
        <div class="van-nav-bar__title van-ellipsis" :style="{color: currentColor}">{{title}}</div>
        <div class="van-nav-bar__right">
          <span @click="rightClick" class="van-nav-bar__text" :style="{color: currentColor}">{{rightText}}</span>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Nav',
  props: {
    title: [String],
    leftText: {
      type: String,
      default: '',
    },
    rightText: {
      type: String,
      default: ''
    },
    leftClick: {
      type: Function,
      default: () => {}
    },
    rightClick: {
      type: Function,
      default: () => {}
    }
  },
  computed: {
    currentColor () {
      return this.$store.state.currentColor
    }
  },
}
</script>

<style scoped>
  #xt-nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index:1000;
  }
</style>
