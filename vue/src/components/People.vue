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
        small.text-body {{ userFollowers | short }} Followers
      .d-block.mb-3(v-if='!top4')
        small
          router-link(:to='toProfile') @{{ username }}
          span.text-body  joined in {{ userJoined | date }}
      .d-block
        button.btn.btn-sm.btn-success(v-show='isFollowing' @click='follow') Following
        button.btn.btn-sm.btn-outline-success(v-show='!isFollowing' @click='follow') Follow

</template>

<script>

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
    short (value) {
      let valueStr = value.toString()
      const valueSize = valueStr.length

      if (valueSize > 4) {
        valueStr = `${valueStr.slice(0, -3)}k`
      } else if (valueSize > 3) {
        valueStr = `${valueStr[0]}.${valueStr[1]}k`
      }

      return valueStr
    },
    date (value) {
      const formatter = new Intl.DateTimeFormat('en-us', { month: 'short', year: 'numeric' })
      return formatter.format(value).replace(' ', ', ')
    }
  },
  methods: {
    follow () {
      this.isFollowing = !this.isFollowing
    }
  },
  data () {
    return {
      toProfile: `/${this.username}`,
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
