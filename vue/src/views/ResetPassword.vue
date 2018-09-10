<template lang='pug'>
div
  .bg-primary
    Header

  .container
    .row.my-md-5
      .col-md-6.mx-auto
        div
          .row.my-3
            .col
              h2.display-5 Reset Password
          .row.mb-3
            .col
              input.form-control.mb-2(type='email' placeholder='Email' v-model='email')
          .row.text-center.mb-3
            .col-12.col-md-6.offset-md-3
              button.btn.btn-block.btn-success(@click='resetPassword') Reset Password
          .row.text-center.my-4.my-md-5
            .col-12
               router-link(to='/signup') Don't have an account? Sign up here!

  Footer
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'reset-password',
  components: {
    Header,
    Footer
  },
  data () {
    return {
      email: ''
    }
  },
  methods: {
    resetPassword () {
      console.log(this.email)
    }
  }
}
</script>
