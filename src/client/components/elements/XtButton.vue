<template>
    <div id="button">
      <a class="xt-button-circle" :class="typeObj" :style="{background: currentColor}">{{content}}</a>
    </div>
</template>

<script>
export default {
  name: 'xtbutton',
  props: {
    content: {
      type: String,
      default: '提交',
    },
    type: {
      type: String,
      default: 'one'
    }
  },
  data () {
    return {
      typeObj: {
        'type-two': this.type == 'two'
      }
    }
  },
  computed: {
    currentColor () {
      return this.$store.state.currentColor
    }
  }
}
</script>

<style lang="scss">
  .xt-button-circle {
    display: block;
    margin: 0 auto;
    margin-top:1rem;
    height: 70px;
    width: 70px;
    border-radius: 35px;
    background: $mainColor;
    box-shadow: 4px 6px 10px #eee, -4px 6px 10px #eee;
    text-align: center;
    line-height: 70px;
    font-size: 14px;
    /*text-shadow:1px 1px 1px #fff;*/
    color: #fff; /* #a29d99; */
    text-decoration: none;
    user-select: none;
    &:active {
      box-shadow: 1px 2px 4px #eee, -1px 2px 4px #eee;
    }
    &.type-two {
      background: #f44;
      color: #fff;
    }
  }
</style>
