<template lang='pug'>
  //- var activeclass = internal ? 'd-none d-lg-block' : 'd-block'

  // navbar footer
    if internal
      .d-lg-none.height-footer.mt-2

  nav.navbar.navbar-expand(class='d-block')
    .navbar-collapse.justify-content-center
      .navbar-nav
        .nav-item.small.mr-3
          p.nav-link {{ currYear }} Fleeg
        .nav-item.small.mr-1
          router-link.nav-link(to='/about') About
        .nav-item.small.mr-1
          a.nav-link(href='#') Terms
        .nav-item.small.mr-1
          a.nav-link(href='#') Privacy

  //if internal
    .fixed-bottom.height-footer.bg-dark.mt-2.d-lg-none
    nav.navbar.navbar-expand.fixed-bottom.p-0.d-lg-none
      .navbar-collapse.justify-content-between
        .px-1.pt-3
          a.nav-link.py-2(href='sec-home.html')
            i.fas.fa-home.font-15(class=active == 0 ? 'text-light' : 'text-black')
        .px-1.pt-3
          a.nav-link.py-2(href='my-bookmarks.html')
            i.fas.fa-bookmark.font-15(class=active == 1 ? 'text-light' : 'text-black')
        .px-1.pb-2
          a.nav-link.rounded-circle.bg-success.link-icon.d-flex.justify-content-center.align-items-center.pb-055(href='#')
            i.fas.fa-plus.text-black.font-15
        .px-1.pt-3
          a.nav-link.py-2.pr-1.d-inline-block(href='#')
            i.fas.fa-bell.font-15(class=active == 2 ? 'text-light' : 'text-black')
            i.fas.fa-circle.text-success.font-05.dot-alert-footer
        .px-1.pt-3
          a.nav-link.py-2(href='settings.html')
            i.fas.fa-bars.font-15(class=active == 3 ? 'text-light' : 'text-black')
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    currYear: () => new Date().getFullYear()
  }
}
</script>

<style scoped lang='scss'>

.height-footer {
  height: 50px;
  width: 100%;
}

.dot-alert-footer {
  position: relative;
  right: 7px;
  top: 1px;
}

.pb-055 {
  padding-bottom: .55rem;
}

</style>
