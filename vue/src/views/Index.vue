<template lang='pug'>
div
  .bg-primary
    Header

    // middle search input and button
    .container-fluid
      .row
        .col.text-center.mt--4
          h2.display-3.d-md-none.text-light F
          h2.display-1.d-none.d-md-block.text-light F

      .row.pb-4
        .col-md-10.col-lg-7.mx-auto
         Search
      .pb-4

  Footer
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Search from '@/components/Search.vue'

export default {
  name: 'home',
  components: {
    Header,
    Footer,
    Search
  }
}
</script>
