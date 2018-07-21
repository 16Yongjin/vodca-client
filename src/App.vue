<template lang="pug">
v-app
  v-toolbar(app height="56")
    v-btn(icon to="/")
      v-icon home
    v-toolbar-title(v-if="!searchBar" v-text="title")
    v-spacer(v-if="!searchBar")
    v-text-field(v-if="searchBar" color="gray" v-model="query" ref="searchBar" single-line hide-details label="고장")

    v-btn(v-if="adding" icon @click="toggleSearchBar")
      v-icon search
    v-btn(v-if="adding || make" icon @click="back")
      v-icon close
    v-btn(v-show="home" icon to="/add")
      v-icon add
    
    template(v-if="list")
      v-btn(v-if="reviewing" icon @click="review(false)")
        v-icon done
      v-btn(v-else :disabled="noSelected" icon @click="review(true)")
        v-icon spellcheck
      v-btn(icon @click="$store.commit('changeOrder')")
        v-icon compare_arrows

  v-content
    transition(name="fade" mode="out-in")
      router-view
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      query: '',
      search: false
    }
  },
  computed: {
    home () {
      return this.$route.name === 'Home'
    },
    list () {
      return this.$route.name.startsWith('List')
    },
    noSelected () {
      return !this.$store.state.selected.length
    },
    reviewing () {
      // return this.$store.state.review
      return this.$route.name === 'ListReview'
    },
    make () {
      return this.$route.name.startsWith('Make')
    },
    adding () {
      return this.$route.name.startsWith('Add')
    },
    searchBar () {
      return this.adding && this.search
    },
    title () {
      return this.$store.state.title
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
      this.search = false
    },
    toggleSearchBar () {
      this.search = !this.search
      if (this.search) {
        this.$refs.searchBar.$refs.input.focus()
      }
    },
    review (value) {
      // this.$store.commit('setReview', value)
      if (this.reviewing) {
        this.back()
      } else {
        this.$router.push(this.$route.path + '/review')
      }
    }
  },
  name: 'App'
}
</script>

<style>
*, html, body {
  box-sizing: border-box
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
