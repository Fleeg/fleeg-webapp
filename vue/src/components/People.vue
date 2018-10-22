<template lang='pug'>
.col-12(:class='cardClass')
  .d-flex.flex-row
    .pr-3
      router-link(:to='toProfile')
        img.rounded-circle.avatar-card-medium.bg-lightergrey(:src='avatar')
    .px-0.crop-text-block
      .h4.text-dark(:class='h4Class')
        router-link.crop-text.crop-text-2(:to='toProfile') {{ fullName }}
      .d-block(:class='spaceClass')
        small.text-body {{ userFollowers | shortNumber }} Followers
      .d-block.mb-3(v-if='!top4')
        small
          router-link(:to='toProfile') @{{ username }}
          span.text-body  joined in {{ userJoined | dateMMYYYY }}
      .d-block
        button.btn.btn-sm.btn-success(v-show='isFollowing' @click='follow') Following
        button.btn.btn-sm.btn-outline-success(v-show='!isFollowing' @click='follow') Follow

</template>

<script>
import { shortNumber, dateMMYYYY } from '../filters'

export default {
  name: 'People',
  props: {
    top4: Boolean,
    following: Boolean,
    avatar: String,
    username: String,
    fullName: String,
    userJoined: Date,
    userFollowers: Number
  },
  filters: {
    shortNumber,
    dateMMYYYY
  },
  methods: {
    follow () {
      this.isFollowing = !this.isFollowing
    }
  },
  data () {
    return {
      toProfile: `/@${this.username}`,
      cardClass: !this.top4 ? 'col-md-6 col-lg-4 p-3' : 'py-3 px-0',
      spaceClass: this.top4 ? 'mb-2' : '',
      h4Class: !this.top4 ? 'mb-1' : '',
      isFollowing: this.following
    }
  }
}

</script>

<style scoped lang='scss'>

.avatar-card-medium {
  height: 70px;
  width: 70px;
}

</style>
