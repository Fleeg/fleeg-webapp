<template lang='pug'>
router-link.image-card.d-flex.justify-content-center.align-items-center(v-if='displayImage'
    :to='link' :class='columnClass' :style="`background-image: url('${media}')`")
  fai.font-25.py-2.px-4.bg-playcard.text-light.rounded(v-if='type === "video"' icon='play')
router-link.no-hover.d-flex.justify-content-center(v-else
    :to='link' :class="[columnClass, mediaAssets[1]]")
  fai.fa-lg.px-1.text-white(:icon='mediaAssets[0]' :class='mediaIconSize')
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
    card: {
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
  computed: {
    columnClass () {
      let cls = 'col-'
      if (this.card === 'top') {
        cls += '4'
      } else if (this.card === 'regular') {
        if (['img', 'video'].includes(this.type)) {
          cls += '7'
        } else {
          cls += '5'
        }
      }
      return cls
    },
    mediaIconSize () {
      let cls = 'icon-card'
      if (this.card === 'top') {
        cls += '-md'
      }
      return cls
    },
    mediaAssets () {
      let icon = 'alt'
      let bg = 'dark'

      if (this.type === 'pdf') {
        icon = 'pdf'
        bg = 'danger'
      } else if (this.type === 'doc') {
        icon = 'word'
        bg = 'info'
      } else if (this.type === 'ppt') {
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

.icon-card {
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
