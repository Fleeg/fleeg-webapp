<template lang='pug'>
// search bar
div
  //if header
    .input-group.input-group
      input.form-control.p-2.px-md-3.border-0.font-1(type='text' name='q' placeholder='Search for any link or people' autocomplete='off')

      if secret
        .input-group-append
          button.btn.p-2.bg-none.text-dark(type='button' title='Anonymous search')
            i.fas.fa-user-secret.font-09

      .input-group-append
        button.btn.p-2.px-md-3.bg-white.text-success(type='submit' title='Search')
          i.fas.fa-search.font-09

  //else
  .input-group.input-group-lg.border-0
    input.form-control.p-3.font-1(type='text' placeholder='Search for any link or people'
                                  autocomplete='off' v-model='queryStr' @keyup.enter='callSearch')
    .input-group-append
      button.btn.btn-success.p-3(@click='callSearch')
        fai(icon='search').fa-lg.px-1.d-md-none
        span.d-none.d-md-inline Search
</template>

<script>
export default {
  name: 'Search',
  data () {
    return { queryStr: this.query }
  },
  props: {
    query: String
  },
  methods: {
    callSearch () {
      if (this.queryStr) {
        this.$router.push({ path: '/search', query: { q: this.queryStr } })
      }
    }
  }
}
</script>

<style scoped lang='scss'>

</style>
