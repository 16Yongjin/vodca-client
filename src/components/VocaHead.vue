<template lang="pug">
v-layout
  v-flex.pad-up(xs6)
    v-card.display-3.text-bottom(height="100%") {{ order ? '뜻' : '단어' }}
  v-flex.pad-up(xs6)  
    v-card.display-3.text-bottom(height="100%") {{ order ? '단어' : '뜻' }}
</template>

<script>
export default {
  props: ['order']
}
</script>

<style scoped>
.pad-up {
  height: calc(40vh - 56px);
}

.text-bottom {
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

</style>