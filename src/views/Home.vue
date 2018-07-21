<template lang="pug">
v-container(grid-list-md fluid)
  v-layout(row wrap)
    v-flex(xs6 md3)
      v-card
        v-card-title.title
          div 🇧🇷 포한번역 기말
        v-card-text 한포번역 기말 어휘
        v-card-actions
          v-spacer
          v-btn(flat color="orange" :to="`/voca/1`") 외우기

</template>

<script>
export default {
  methods: {
    log: console.log
  },
  created () {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  },
  mounted () {
    this.$store.commit('setTitle', '단어장')
  }
}
</script>

<style scoped>

</style>