<template lang="pug">
list(:voca="items" :review="true")
</template>

<script>
import List from '@/views/List.vue'

export default {
  computed: {
    items () {
      return this.$store.getters.selectedVoca
    }
  },
  components: {
    List
  }
}
</script>

<style scoped>

</style>