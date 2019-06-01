<template lang='pug'>
a.btn.float-right.text-body.p-0(@click='bookmark')
  fai(:icon=['far', 'bookmark'] v-show='!bookmarkedColor').font-17.px-1
  fai(icon='bookmark' v-show='bookmarkedColor' :style="{ color: bookmarkedColor }").font-17.px-1
</template>

<script>
export default {
  name: 'Bookmark',
  props: {
    bookmarkColor: String
  },
  data () {
    return {
      bookmarkedColor: this.bookmarkColor
    }
  },
  methods: {
    bookmark () {
      // TODO: Implement selection of bucket/color
      this.bookmarkedColor = !this.bookmarkedColor ? '#4bbf73' : undefined
    }
  }
}
</script>
