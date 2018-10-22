<template lang='pug'>
.col-12.p-0
  .row.height-card-md.mt-3.mt-md-4
    .col-8.col-md-7.pl-1
      .d-block.height-card-block-md.mb-1
        .d-flex.flex-row
          router-link.no-hover.card-title.h4.text-dark.crop-text.crop-text-2.mb-1.mb-md-2(:to='toPreview')
            |{{ title }}
          .pr-2.pr-lg-3.pl-1.flex-fill
            a.btn.float-right.btn.p-0#more-card
              fai(icon='angle-down').fa-2x.px-1.text-body
            b-popover(:show.sync='moreCard' target='more-card')
              div
                button.btn Remove
              div
                button.btn Report
        .card-text
          .small.text-success.text-truncate.mb-1.mb-md-2 {{ url }}
          .text-body.crop-text.crop-text-2 {{ description }}
      .d-flex.flex-row
        .pr-2
          router-link(:to='toProfile')
            img.rounded-circle.avatar-card-small(:src='avatar')
        .px-0.crop-text-block
          .small.text-truncate
            router-link(:to='toProfile') {{ fullName }}
          .small.text-body.crop-text.crop-text-2 {{ published | dateMMDD }}
            fai(icon='circle').px-1.dotsmall.align-middle
            | {{ bookmarks | shortNumber }} bookmarks
        .pr-2.pr-lg-3.pl-1.flex-fill
          a.btn.float-right.text-body.p-0(@click='bookmark')
            fai(:icon=['far', 'bookmark'] v-show='!bookmarkedColor').font-17.px-1
            fai(icon='bookmark' v-show='bookmarkedColor'
                :style="{ color: bookmarkedColor }").font-17.px-1

    router-link.col-4.image-card(v-if='type === "img"' :to='toPreview'
                                 :style="`background-image: url('${media}')`")
    router-link.col-4.no-hover.d-flex.justify-content-center.bg-info(v-if='type !== "img"'
                                                                     :to='toPreview')
      fai(:icon='type | typeIcon').fa-lg.px-1.text-white.icon-card-md
</template>

<script>
import { shortNumber, dateMMDD, typeIcon } from '../filters'

export default {
  name: 'TextCard',
  props: {
    id: String,
    type: String,
    title: String,
    url: String,
    description: String,
    media: String,
    published: Date,
    bookmarks: Number,
    bookmarkColor: String,
    username: String,
    fullName: String,
    avatar: String
  },
  filters: {
    shortNumber,
    dateMMDD,
    typeIcon
  },
  methods: {
    bookmark () {
      this.bookmarkedColor = !this.bookmarkedColor ? '#4bbf73' : undefined
    }
  },
  data () {
    return {
      toProfile: `@${this.username}`,
      toPreview: `@${this.username}/${this.id}`,
      bookmarkedColor: this.bookmarkColor,
      moreCard: false
    }
  }
}
</script>

<style scoped lang='scss'>
.height-card {
  height: 245px;
  margin-left: -5px;
  margin-right: -5px;
}

.height-card-md {
  height: 185px;
  margin-left: -5px;
  margin-right: -5px;
}

.height-card-sm {
  height: 125px;
  margin-left: -5px;
  margin-right: -5px;
}

.height-card-block {
  height: 155px;
}

.height-card-block-md {
  height: 130px;
}

.height-card-block-sm {
  height: 50px;
}

.height-card-title {
  height: 115px;
}

.height-card-title-md {
  height: 90px;
}

.image-card {
  background: /*$lightgrey*/ 50% 50%;
  background-origin: border-box;
  background-size: cover;
  height: 100%;
  width: 100%;
}

.avatar-card-small {
  /*background-color: $lightgrey;*/
  height: 40px;
  width: 40px;
}

.title-card-list {
  border-bottom: 3px solid #000000/*$black*/;
}

.bg-playcard {
  /*background: $lightblack;*/
}

.icon-card {
  font-size: 112px;
  margin-top: 65px;
}

.icon-card-md {
  font-size: 102px;
  margin-top: 40px;
}

.icon-card-sm {
  font-size: 62px;
  margin-top: 30px;
}
</style>
