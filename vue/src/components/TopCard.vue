<template lang='pug'>
.col-12.p-0
  .row.height-card-md.mt-3.mt-md-4
    .col-8.col-md-7.pl-1
      .d-block.height-card-block-md.mb-1
        .height-card-title-md
          .d-flex.flex-row
            router-link.no-hover.card-title.h4.text-dark.crop-text.crop-text-2.mb-1.mb-md-2(
              :to='toPreview') {{ title }}
            .pr-2.pr-lg-3.pl-1.flex-fill
              MoreMenu(type='post', :id='id')
          .card-text
            .small.text-success.text-truncate.mb-1.mb-md-2 {{ url }}
            .text-body.crop-text.crop-text-2(v-if='!isMedia') {{ description }}
        .d-flex.flex-row(v-if='isMedia')
          Bookmark(:bookmarkColor='bookmarkColor')
          .small.text-body.p-1 {{ bookmarks | shortNumber }} bookmarks
      .d-flex.flex-row
        PeopleCard(:isMedia='isMedia', :bookmarks='bookmarks', :published='published',
                   :username='username', :fullName='fullName', :avatar='avatar')
        .pr-2.pr-lg-3.pl-1.flex-fill
          Bookmark(v-if='!isMedia' :bookmarkColor='bookmarkColor')
    Media(:link='toPreview' :type='type' :media='media')
</template>

<script>
import { shortNumber } from '@/filters'
import MoreMenu from '@/components/MoreMenu.vue'
import PeopleCard from '@/components/PeopleCard.vue'
import Bookmark from '@/components/Bookmark.vue'
import Media from '@/components/Media.vue'

export default {
  name: 'TopCard',
  components: {
    PeopleCard,
    MoreMenu,
    Bookmark,
    Media
  },
  props: {
    id: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    },
    published: {
      type: Date,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    fullName: {
      type: String,
      required: true
    },
    avatar: {
      type: String,
      required: true
    },
    bookmarks: {
      type: Number,
      default: 0
    },
    description: {
      type: String,
      default: undefined
    },
    media: {
      type: String,
      default: undefined
    },
    bookmarkColor: {
      type: String,
      default: undefined
    }
  },
  filters: {
    shortNumber
  },
  data () {
    return {
      isMedia: ['img', 'video'].includes(this.type),
      toPreview: `@${this.username}/${this.id}`
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

.height-card-title-md {
  height: 90px;
}
</style>
