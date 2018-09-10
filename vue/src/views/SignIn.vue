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
              h2.display-5 Sign In

          .row.mb-3
            .col
              input.form-control.mb-2(type='text' placeholder='Username or email' v-model='login')
              .input-group
                input.form-control.border-0(:type='typePasswordField' placeholder='Password'
                                            v-model='password')
                .input-group-append
                  button.btn.bg-none.text-dark(@click='showPassword')
                    fai(:icon='eyeIcon')

          .row.text-center.mb-3
            .col-12.col-md-7
              router-link.btn.align-text-bottom(to='/reset-password') Forgot password?
            .col-12.col-md-5
              button.btn.btn-block.btn-success(@click='signIn') Sign In
          .row.text-center.my-4.my-md-5
            .col
              router-link(to='/signup') Don't have an account? Sign up here!

  Footer
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'signin',
  components: {
    Header,
    Footer
  },
  data () {
    return {
      login: '',
      password: '',
      typePasswordField: 'password',
      eyeIcon: 'eye'
    }
  },
  methods: {
    signIn () {
      console.log(this.login, this.password)
      this.$router.push({ path: '/home' })
    },
    showPassword () {
      this.typePasswordField = (this.typePasswordField === 'password' ? 'text' : 'password')
      this.eyeIcon = (this.eyeIcon === 'eye' ? 'eye-slash' : 'eye')
    }
  }
}
</script>
