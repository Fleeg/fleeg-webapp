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
        PeopleCard(:isMedia='isMedia', :bookmarks='bookmarks', :published='published',
                   :username='username', :fullName='fullName', :avatar='avatar')
        .pr-2.pr-lg-3.pl-1.flex-fill
          // TODO: Create a component to do it
          a.btn.float-right.text-body.p-0(@click='bookmark')
            fai(:icon=['far', 'bookmark'] v-show='!bookmarkedColor').font-17.px-1
            fai(icon='bookmark' v-show='bookmarkedColor'
                :style="{ color: bookmarkedColor }").font-17.px-1

    router-link.col-4.image-card.d-flex.justify-content-center.align-items-center(v-if='displayImage' :to='toPreview'
                                                                        :style="`background-image: url('${media}')`")
      fai(icon='play').font-25.py-2.px-4.bg-playcard.text-light.rounded(v-if='type === "video"')
    // TODO: Fix bg-info to change by type
    router-link.col-4.no-hover.d-flex.justify-content-center.bg-info(v-if='!displayImage' :to='toPreview')
      fai(:icon='type | typeIcon').fa-lg.px-1.text-white.icon-card-md
</template>

<script>
import { typeIcon } from '../filters'
import MoreMenu from '@/components/MoreMenu.vue'
import PeopleCard from '@/components/PeopleCard.vue'

export default {
  name: 'TopCard',
  components: {
    PeopleCard,
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
    typeIcon
  },
  methods: {
    bookmark () {
      this.bookmarkedColor = !this.bookmarkedColor ? '#4bbf73' : undefined
    }
  },
  data () {
    return {
      isMedia: (this.type === 'img' || this.type === 'video'),
      displayImage: (this.type === 'img' || this.type === 'video' || this.type === 'article'),
      toPreview: `@${this.username}/${this.id}`,
      bookmarkedColor: this.bookmarkColor
    }
  }
}
</script>

<style scoped lang='scss'>
.height-card { /* TODO: not used yet */
  height: 245px;
  margin-left: -5px;
  margin-right: -5px;
}

.height-card-md {
  height: 185px;
  margin-left: -5px;
  margin-right: -5px;
}

.height-card-sm { /* TODO: not used yet */
  height: 125px;
  margin-left: -5px;
  margin-right: -5px;
}

.height-card-block { /* TODO: not used yet */
  height: 155px;
}

.height-card-block-md {
  height: 130px;
}

.height-card-block-sm { /* TODO: not used yet */
  height: 50px;
}

.height-card-title { /* TODO: not used yet */
  height: 115px;
}

.height-card-title-md { /* TODO: not used yet */
  height: 90px;
}

.image-card {
  background: /*$lightgrey*/ #d3d3d3 50% 50%;
  background-origin: border-box;
  background-size: cover;
  height: 100%;
  width: 100%;
}

.bg-playcard {
  background-color: rgba(0, 0, 0, .7) /*$lightblack*/;
  &.fa-w-14 {
    width: 70px;
  }
}

.icon-card { /* TODO: not used yet */
  font-size: 112px;
  margin-top: 65px;
}

.icon-card-md {
  font-size: 102px;
  margin-top: 40px;
}

.icon-card-sm { /* TODO: not used yet */
  font-size: 62px;
  margin-top: 30px;
}
</style>
