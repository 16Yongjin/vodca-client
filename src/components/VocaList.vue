<template lang="pug">
v-card
  v-list.pa-0(two-line)
    template(v-for="(voca, index) in vocas")
      v-divider(:key="index")
      v-layout(row :id="'list'+index" :class="{ selected: !review && voca[2] }" @click="selectWord(index)")
        v-flex.border(xs6)
          v-list-tile(:key="index")
            v-list-tile-content
              v-list-tile-title.title-text(v-text="voca[order]")
        v-flex(xs6)
            v-list-tile(:key="index")
              v-list-tile-content
                v-list-tile-title.title-text(v-text="voca[order ? 0 : 1]")
  v-divider
      
</template>

<script>
export default {
  props: ['vocas', 'review', 'order', 'selectWord']
}
</script>

<style scoped>
.border {
  border-right: 1px solid rgba(0,0,0,.12);
}

.title-text {
  height: auto;
  white-space: normal;
  word-break: keep-all;
}

.selected {
  background-color: #BBDEFB
}
</style>