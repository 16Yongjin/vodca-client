<template lang="pug">
v-form(v-model="valid")
  v-layout.pa-3(row wrap)
    v-flex(xs12)
      v-select(:items="languages" v-model="language" color="gray" single-line label="분류")
    v-flex(xs12)
      v-text-field(v-model="title" :rules="rules('제목을')" color="gray" single-line label="제목")
    v-flex(xs12)
      v-text-field(v-model="description" :rules="rules('설명을')" color="gray" single-line label="설명")

    v-flex.title(xs12) 단어

    template(v-for="voca, index in vocas")
      v-flex(xs5).pr-2
        v-text-field(v-model="voca[0]" :rules="rules('단어를')" color="gray" single-line label="단어")
      v-flex(xs5).pr-2
        v-text-field(v-model="voca[1]" :rules="rules('뜻을')" color="gray" single-line label="뜻")
      v-flex(xs2)
        v-btn(icon flat top @click.stop="removeVoca(index)")
          v-icon close
    v-flex(xs12).mb-3
      v-btn(block color="gray" @click.stop="addVoca")
        v-icon add
        | 단어 추가
    v-flex(xs12)
      v-btn(block color="blue" dark @click="make") 단어장 만들기
      v-snackbar(:timeout="3000" color="info" v-model="snackbar") 단어장이 추가됐습니다.
        v-btn(dark flat @click.native="snackbar = false") Close

</template>

<script>
export default {
  data () {
    return {
      snackbar: false,
      valid: false,
      languages: ['영어', '독일어', '프랑스어', '포르투갈어'],
      language: null,
      title: '',
      description: '',
      vocas: [['', '']],
      rules: (label) => [ v => !!v || `${label} 입력해주세요.` ]
    }
  },
  methods: {
    addVoca () {
      this.vocas.push(['', ''])
    },
    removeVoca (index) {
      this.vocas.splice(index, 1)
    },
    make () {
      console.log('valid', this.valid)
      const { language, title, description, vocas } = this
      const vocabulary = {
        language,
        title,
        description,
        vocas: vocas.map(v => [v[0], v[1]])
      }
      console.log(vocabulary)
      this.snackbar = true
    }
  },
  mounted () {
    this.$store.commit('setTitle', '단어장 만들기')
  }
}
</script>

<style scoped>
</style>