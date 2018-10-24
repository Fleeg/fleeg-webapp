<template lang='pug'>
div
  b-btn.no-hover.btn.float-right.btn.p-0(:id='"more-card-" + id')
    fai(icon='angle-down').fa-2x.px-1.text-body
  b-popover(placement='bottom' triggers='focus' tabindex='0' :ref='id' :target='"more-card-" + id')
    .small
      span.btn.p-2.text-dark(@click='remove') Remove
    .small
      a.btn.p-2.text-dark(@click='block') Block
    .small
      a.btn.p-2.text-dark(@click='report') Report
</template>

<script>
export default {
  name: 'MoreMenu',
  props: {
    id: String,
    type: String
  },
  methods: {
    remove () {
      console.log('remove ' + this.type + ' id: ' + this.id)
      this.close()
    },
    block () {
      console.log('block ' + this.type + ' id: ' + this.id)
      this.close()
    },
    report () {
      console.log('report ' + this.type + ' id: ' + this.id)
      this.close()
    },
    close () {
      this.$refs[this.id].$emit('close')
    }
  },
  data () {
    return {
      show: false
    }
  }
}
</script>
