<template lang="pug">
v-container(grid-list-md fluid)
  v-layout(row wrap)
    v-flex.rel(xs12 sm6 md4 v-for="id in 10" :key="id")
      v-card(tile)
        v-card-title.pb-0.headline(v-text="lang")
        v-card-text.pb-0 설명
        v-card-actions
          v-spacer
          v-btn(flat color="green" :to="'/voca'") 보기
          v-btn(flat color="blue") 추가
</template>

<script>
export default {
  props: ['lang'],
  created () {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  },
  mounted () {
    this.$store.commit('setTitle', `${this.lang} 단어장 추가`)
  }
}
</script>

<style scoped>

</style>