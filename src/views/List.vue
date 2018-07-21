<template lang="pug">
v-layout(row)
  v-flex(xs12 offset-md1 md10)
    voca-head(:order="order")
    #mark
    voca-list(:vocas="items" :order="order" :review="review" :selectWord="selectWord")
    v-card(:id="'list' + items.length" height="60vh")
  bar(:voca-length="items.length")
  v-btn(color="blue" dark fab fixed bottom left @click="scrollTop")
    v-icon keyboard_arrow_up
    
</template>

<script>
import VocaHead from '@/components/VocaHead.vue'
import VocaList from '@/components/VocaList.vue'
import Bar from '@/components/Bar'

export default {
  props: ['id', 'voca', 'review'],
  computed: {
    order () {
      return this.$store.state.order
    },
    items () {
      return this.voca || this.$store.state.voca
    }
  },
  methods: {
    scrollTop () {
      this.$vuetify.goTo(0)
    },
    selectWord (index) {
      if (this.review) return

      const classList = document.getElementById(`list${index}`).classList

      if (classList.contains('selected')) {
        classList.remove('selected')
        this.items[index][2] = false
        this.$store.commit('removeSelected', index)
      } else {
        classList.add('selected')
        this.items[index][2] = true
        this.$store.commit('addSelected', index)
      }
    }
  },
  mounted () {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
    this.$store.commit('setTitle', this.review ? '단어 복습' : '단어')
  },
  components: {
    VocaHead,
    VocaList,
    Bar
  }
}
</script>