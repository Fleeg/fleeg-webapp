<template lang='pug'>

// nav menu filters
.bg-white.px-2.sticky-top.border-bottom
  .col.col-lg-10.offset-lg-2.px-0
    .nav.nav-pills.nav-scroll.pb-2
      router-link.btn.nav-link.pb-0(
        v-for='item in items()' :key='item.path' :to='item.path'
        :class='active === item.title ? clsActive : ""') {{ item.title }}

</template>

<script>
export default {
  name: 'Nav',
  props: {
    type: String,
    active: String,
    param: String
  },
  data () {
    return {
      clsActive: 'text-success nav-selected-item'
    }
  },
  methods: {
    items () {
      if (this.type === 'profile') {
        return [
          { path: `/${this.param}`, title: 'profile' },
          { path: `/${this.param}/bookmarks`, title: 'bookmarks' },
          { path: `/${this.param}/following`, title: 'following' },
          { path: `/${this.param}/followers`, title: 'followers' }
        ]
      } else if (this.type === 'search') {
        return [
          { path: `/search?q=${this.param}`, title: 'all' },
          { path: `/search?q=${this.param}&t=articles`, title: 'articles' },
          { path: `/search?q=${this.param}&t=images`, title: 'images' },
          { path: `/search?q=${this.param}&t=videos`, title: 'videos' },
          { path: `/search?q=${this.param}&t=documents`, title: 'documents' },
          { path: `/search?q=${this.param}&t=people`, title: 'people' }
        ]
      } else if (this.type === 'home') {
        return [
          { path: '/', title: 'for you' },
          { path: '/articles', title: 'articles' },
          { path: '/images', title: 'images' },
          { path: '/videos', title: 'videos' },
          { path: '/documents', title: 'documents' },
          { path: '/people', title: 'people' }
        ]
      }
    }
  }
}
</script>

<style scoped lang='scss'>

.nav-selected-item {
  border-bottom: solid;
}

.nav-scroll {
  flex-flow: nowrap;
  -webkit-overflow-scrolling: touch;
  overflow-x: auto;
  white-space: nowrap;
}

</style>
