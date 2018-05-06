<template>
    <div id="button">
      <a class="xt-button-circle">提交</a>
    </div>
</template>

<script>
export default {
    name: 'xtbutton'
}
</script>

<style scoped lang="scss">
  .xt-button-circle {
    display: block;
    margin: 0 auto;
    margin-top:1rem;
    height: 70px;
    width: 70px;
    border-radius: 35px;
    background: rgba(175, 47, 47, 0.15);
    box-shadow: 4px 6px 10px #eee, -4px 6px 10px #eee;
    text-align: center;
    line-height: 70px;
    font-size: 14px;
    text-shadow:1px 1px 1px #fff;
    color: #a29d99;
    text-decoration: none;
    user-select: none;
    &:active {
      box-shadow: 1px 2px 4px #eee, -1px 2px 4px #eee;
    }
  }
</style>
