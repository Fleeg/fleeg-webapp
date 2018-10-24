<template lang='pug'>
.col-12.p-0
  .row.height-card-md.mt-3.mt-md-4
    .col-8.col-md-7.pl-1
      .d-block.height-card-block-md.mb-1
        .d-flex.flex-row
          router-link.no-hover.card-title.h4.text-dark.crop-text.crop-text-2.mb-1.mb-md-2(
            :to='toPreview') {{ title }}
          .pr-2.pr-lg-3.pl-1.flex-fill
            MoreMenu(type='post', :id='id')
        .card-text
          .small.text-success.text-truncate.mb-1.mb-md-2 {{ url }}
          .text-body.crop-text.crop-text-2 {{ description }}
      .d-flex.flex-row
        .pr-2
          router-link(:to='toProfile')
            .rounded-circle.avatar-card-small(:style="`background-image: url('${avatar}')`")
        .px-0.crop-text-block
          .small.text-truncate
            router-link(:to='toProfile') {{ fullName }}
          // TODO: Change data filter based on type
          .small.text-body.crop-text.crop-text-2 {{ published | dateMMDD }}
            fai(icon='circle').px-1.dotsmall.align-middle
            | {{ bookmarks | shortNumber }} bookmarks
        .pr-2.pr-lg-3.pl-1.flex-fill
          // TODO: Create a component to do it
          a.btn.float-right.text-body.p-0(@click='bookmark')
            fai(:icon=['far', 'bookmark'] v-show='!bookmarkedColor').font-17.px-1
            fai(icon='bookmark' v-show='bookmarkedColor'
                :style="{ color: bookmarkedColor }").font-17.px-1

    router-link.col-4.image-card.d-flex.justify-content-center.align-items-center(
                                        v-if='type === "img" || type === "video"' :to='toPreview'
                                        :style="`background-image: url('${media}')`")
      fai(icon='play').font-25.py-2.px-4.bg-playcard.text-light.rounded(v-if='type === "video"')
    // TODO: Fix bg-info to change by type
    router-link.col-4.no-hover.d-flex.justify-content-center.bg-info(:to='toPreview'
                                              v-if='type !== "img" && type !== "video"')
      fai(:icon='type | typeIcon').fa-lg.px-1.text-white.icon-card-md
</template>

<script>
import { shortNumber, dateMMDD, typeIcon } from '../filters'
import MoreMenu from '@/components/MoreMenu.vue'

export default {
  name: 'TopCard',
  components: {
    MoreMenu
  },
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
      bookmarkedColor: this.bookmarkColor
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
  background: /*$lightgrey*/ #d3d3d3 50% 50%;
  background-origin: border-box;
  background-size: cover;
  height: 100%;
  width: 100%;
}

.avatar-card-small {
  background: /*$lightgrey*/ #d3d3d3 50% 50%;
  background-origin: border-box;
  background-size: cover;
  height: 40px;
  width: 40px;
}

.bg-playcard {
  background-color: rgba(0, 0, 0, .7) /*$lightblack*/;
  &.fa-w-14 {
    width: 70px;
  }
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
