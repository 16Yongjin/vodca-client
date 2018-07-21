<template lang="pug">
v-card#bar.left(color="blue" height="60vh" @click.native="scroll")

</template>

<script>
export default {
  props: ['vocaLength'],
  methods: {
    minMax (min, value, max) {
      return Math.min(Math.max(value, min), max)
    },
    scroll () {
      const h = document.getElementById('list0').scrollHeight
      const bar = document.getElementById('bar').getBoundingClientRect()
      const target = document.elementsFromPoint(bar.x, bar.y + 2 * h - h / 2)[1]
      this.$vuetify.goTo(target.offsetTop, { duration: 200, offset: 0, easing: 'linear' })
    }
  }
}
</script>

<style scoped>
#bar {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  user-select: none;
  position: fixed;
  width: 50%;
  top: 40vh;
 }
 
 @media screen and (min-width: 960px) {
  #bar {
    width: 41.7%;
  }
}

.left {
  left: 50%;
}
</style>