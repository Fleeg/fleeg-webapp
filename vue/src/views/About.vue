<template lang='pug'>
div
  .bg-primary
    Header(bg-dark=true)

  .container
    .row.my-md-5
      .col
        .row.my-3
          .col-8
            h2.display-5 About
          .col-4
            router-link.float-right.btn.btn-outline-success(to='/signup') Get Started
        .row.my-5
          .container
            .row.mb-3
              .col-md-8.offset-md-2
                .h2.display-4 Welcome to Fleeg,
                  .small
                    small
                      small.text-muted Find, save and share links that matter to you.

            .row.mb-5
              .col-md-8.offset-md-2
                .embed-responsive.embed-responsive-16by9
                    iframe.embed-responsive-item(src='https://player.vimeo.com/video/223138612')

            .row.mb-3
              .col-md-10.offset-md-1
                p.blockquote.text-justify.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu nibh
                  consequat, sollicitudin metus in, posuere sem. Nam bibendum turpis eget lobortis
                  euismod. Maecenas lorem elit, efficitur et convallis id, pellentesque vehicula
                  quam. Etiam euismod felis sed mauris vehicula, bibendum imperdiet libero luctus.
                  Quisque sit amet nibh viverra, aliquam purus et, dignissim magna. Nullam in
                  malesuada mi. Maecenas sed lectus leo.

            .row.m-5
              .col.text-center
                .h1 Built for People like you

            .row
              .col-md-4.mb-2
                .card
                  img.img-fluid(src='../assets/imgs/features.png')
                  .card-body
                    p.blockquote.text-justify.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu nibh
                      consequat, sollicitudin metus in, posuere sem.

              .col-md-4.mb-2
                .card
                  img.img-fluid(src='../assets/imgs/community.png')
                  .card-body
                    p.blockquote.text-justify.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu nibh
                      consequat, sollicitudin metus in, posuere sem.

              .col-md-4.mb-2
                .card
                  img.img-fluid(src='../assets/imgs/legal.png')
                  .card-body
                    p.blockquote.text-justify.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu nibh
                      consequat, sollicitudin metus in, posuere sem. Etiam euismod felis
                      sed mauris vehicula,

  Footer
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'About',
  components: {
    Header,
    Footer
  }
}
</script>
