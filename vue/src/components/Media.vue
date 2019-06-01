<template lang='pug'>
router-link.col-4.image-card.d-flex.justify-content-center.align-items-center(v-if='displayImage'
    :to='link' :style="`background-image: url('${media}')`")
  fai(icon='play').font-25.py-2.px-4.bg-playcard.text-light.rounded(v-if='type === "video"')
router-link.col-4.no-hover.d-flex.justify-content-center(v-else
    :to='link' :class="getNoMediaAssets(type)[1]")
  fai(:icon='getNoMediaAssets(type)[0]').fa-lg.px-1.text-white.icon-card-md
</template>

<script>
export default {
  name: 'Media',
  props: {
    link: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    media: String
  },
  data () {
    return {
      displayImage: ['img', 'video', 'article'].includes(this.type)
    }
  },
  methods: {
    getNoMediaAssets (type) {
      let icon = 'alt'
      let bg = 'dark'

      if (type === 'pdf') {
        icon = 'pdf'
        bg = 'danger'
      } else if (type === 'doc') {
        icon = 'word'
        bg = 'info'
      } else if (type === 'ppt') {
        icon = 'powerpoint'
        bg = 'orange'
      }

      return [`file-${icon}`, `bg-${bg}`]
    }
  }
}
</script>

<style scoped lang="scss" >
.image-card {
  background: $lightgrey 50% 50%;
  background-origin: border-box;
  background-size: cover;
  height: 100%;
  width: 100%;
}

.bg-playcard {
  background-color: $lightblack;
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

.bg-orange {
  background-color: #ff6600;
}
</style>
