<template lang='pug'>
// search bar
div
  .input-group.input-group(v-if='!large')
    input.form-control.p-2.px-md-3.border-0.font-1(type='text' autocomplete='off'
                                                   placeholder='Search for any link or people'
                                                   v-model='queryStr' @keyup.enter='callSearch')

    //if secret
      .input-group-append
        button.btn.p-2.bg-none.text-dark(type='button' title='Anonymous search')
          i.fas.fa-user-secret.font-09

    .input-group-append
      button.btn.p-2.px-md-3.bg-white.text-success(@click='callSearch' title='Search')
        fai(icon='search')

  .input-group.input-group-lg.border-0(v-if='large')
    input.form-control.p-3.font-1(type='text' placeholder='Search for any link or people'
                                  autocomplete='off' v-model='queryStr' @keyup.enter='callSearch')
    .input-group-append
      button.btn.btn-success.p-3(@click='callSearch' title='Search')
        fai(icon='search').fa-lg.px-1.d-md-none
        span.d-none.d-md-inline Search

</template>

<script>
export default {
  name: 'Search',
  props: {
    large: Boolean
  },
  methods: {
    onLoad () {
      this.queryStr = this.$route.query.q
    },
    callSearch () {
      if (this.queryStr) {
        this.$router.push({ path: '/search', query: { q: this.queryStr, t: this.$route.query.t } })
      }
    }
  },
  data () {
    return {
      queryStr: '',
      queryType: ''
    }
  },
  created () {
    this.onLoad()
  }
}
</script>
