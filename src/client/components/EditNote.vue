<template>
    <div id="edit-note">
      <van-nav-bar
        title="编辑"
        left-text="取消"
        left-arrow
        @click-left="onClickLight"
      />

      <xt-panel :inputContent="input" :type="1" @inputContent="getInput"></xt-panel>

      <van-button id="submit" size="large" @click="submit">提交</van-button>
    </div>
</template>

<script>
  import xtPanel from './elements/XtPanel.vue'
export default {
  name: 'EditNote',
  components: {xtPanel},
  data () {
    return {
      input: '',
      noteId: ''
    }
  },
  methods: {
    onClickLight () {
      window.history.go(-1)
    },
    getInput (con) {
      this.input = con;
    },
    submit () {
      if (this.input == '') {
        this.$toast('请输入内容');
        return
      }
      this.axios({
        method: 'post',
        url: '/api/editnote',
        data: {
          id: this.noteId,
          content: this.input
        }
      }).then((res) => {
        console.log(res)
        if (res.data.ok == 1) {
          sessionStorage.inputContent = '';
          this.$router.go(-1)
        }
      })
    }
  },
  created () {
    this.input = this.$route.params.con;
    this.noteId = this.$route.params.id;

    console.log(this.noteId)
  }
}
</script>

<style scoped>
  #submit {
    width: 9rem;
    margin-top:1rem;
  }
</style>
