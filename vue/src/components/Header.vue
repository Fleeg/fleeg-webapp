<template lang='pug'>
//- var logolink = external ? 'index.html' : 'sec-home.html'

// navbar top
nav.navbar.navbar-expand.d-flex-wrap(:class='navClass')
  .col-6.col-md-2.pl-0.pl-md-3
    router-link.navbar-brand(to='/')
      h1(:class='h1Class') Fleeg
        small
          small
            small
              small
                small.text-muted Beta

  .col-5.d-none.d-lg-inline.p-0(v-if='withSearch')
    Search

  //if external
  // external right menu
  .navbar-collapse.justify-content-end
    .navbar-nav
      .nav-item.d-none.d-md-block
        router-link.nav-link(to='/about') About
      .nav-item.mr-2.mr-lg-5
        router-link.nav-link(to='/signin') Sign in
  //else
    // internal right menu
    .navbar-collapse.justify-content-end
      .navbar-nav
        .nav-item.d-none.d-lg-flex.align-items-center.mr-3.mr-lg-4
          a.btn.p-0
            i.fa.fa-plus.align-middle.text-body.font-13
        .nav-item.d-none.d-lg-flex.align-items-center.mr-3.mr-lg-3
          a.btn.p-0(tabindex='0' role='button' data-toggle='popover' data-trigger='focus' data-placement='bottom'
                    data-animation='false' data-content='Notification items')
            i.far.fa-bell.align-middle.text-body.font-13
            i.fas.fa-circle.text-success.font-05.dot-alert-header
        .nav-item.mr-1.mr-md-3
          a.btn.d-lg-none.p-0(href='profile.html')
            img.rounded-circle.avatar-loggedin-header(src='https://avatars3.githubusercontent.com/u/742808')
          a.btn.d-none.d-lg-flex.p-0(tabindex='0' role='button' data-toggle='popover' data-html='true' data-placement='bottom'
                    data-animation='false' data-content='<div>Profile items</div>' +
                    '<div><a href="my-bookmarks.html">My Bookmarks</a></div><a href="settings.html">Settings</a>')
            img.rounded-circle.avatar-loggedin-header(src='https://avatars3.githubusercontent.com/u/742808')

  .col-12.d-block.d-lg-none.p-0(v-if='withSearch')
    Search

</template>

<script>
// @ is an alias to /src
import Search from '@/components/Search.vue'

export default {
  name: 'Header',
  components: {
    Search
  },
  props: {
    bgDark: Boolean,
    withSearch: Boolean
  },
  data () {
    return {
      h1Class: this.bgDark ? 'text-light' : '',
      navClass: this.bgDark ? 'navbar-dark' : 'border-bottom py-2'
    }
  }
}
</script>

<style scoped lang='scss'>
.d-flex-wrap {
  flex-flow: wrap;
}

.avatar-loggedin-header {
  //background-color: $lightgrey;
  height: 37px;
  width: 37px;
}

.dot-alert-header {
  position: relative;
  right: 7px;
  top: 5px;
}
</style>
