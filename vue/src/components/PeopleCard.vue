<template lang='pug'>
.d-flex
  .pr-2
    router-link(:to='toProfile')
      .rounded-circle.avatar-card-small(:style="`background-image: url('${avatar}')`")
  .px-0.crop-text-block
    .small.text-truncate
      router-link(:to='toProfile') {{ fullName }}
    .small.text-body.crop-text.crop-text-2(v-if='!isMedia') {{ published | dateMMDD }}
      fai(icon='circle').px-1.dotsmall.align-middle
      | {{ bookmarks | shortNumber }} bookmarks
    .small.text-body.text-truncate(v-if='isMedia') {{ published | dateMMYYYY }}
</template>

<script>
import { dateMMDD, dateMMYYYY, shortNumber } from '../filters'

export default {
  name: 'PeopleCard',
  props: {
    isMedia: Boolean,
    bookmarks: Number,
    published: Date,
    username: String,
    fullName: String,
    avatar: String
  },
  filters: {
    dateMMDD,
    dateMMYYYY,
    shortNumber
  },
  data () {
    return {
      toProfile: `@${this.username}`
    }
  }
}
</script>

<style scoped lang='scss'>
.avatar-card-small {
  background: /*$lightgrey*/ #d3d3d3 50% 50%;
  background-origin: border-box;
  background-size: cover;
  height: 40px;
  width: 40px;
}
</style>
