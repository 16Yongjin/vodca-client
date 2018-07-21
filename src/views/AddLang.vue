<template lang="pug">
v-container(grid-list-md fluid)
  v-layout(row wrap)
    v-flex(xs12 md10 offset-md1)
      v-card
        v-list
          v-list-tile(v-for="lang in langs" :key="lang" :to="`/add/${lang}`")
            v-list-tile-avatar.text-xs-center {{ flags[lang] }} 
            v-list-tile-content(v-text="lang")
          v-list-tile(to="/make")
            v-list-tile-avatar
              v-icon add
            v-list-tile-content 단어장 만들기 
</template>

<script>
export default {
  data () {
    return {
      langs: ['영어', '프랑스어', '스페인어', '독일어', '포르투갈어'],
      flags: {
        '영어': '🇺🇸',
        '프랑스어': '🇫🇷',
        '스페인어': '🇪🇸',
        '독일어': '🇩🇪',
        '포르투갈어': '🇧🇷'
      }
    }
  },
  created () {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  },
  mounted () {
    this.$store.commit('setTitle', '단어장 추가')
  }
}
</script>
