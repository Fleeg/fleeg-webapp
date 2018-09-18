<template lang='pug'>
div
  .bg-primary
    Header(bg-dark=true)

  .container
    .row.my-md-5
      .col-md-6.mx-auto
        div
          .row.my-3
            .col
              h2.display-5
                span(v-if='type === "signup"') Sign Up
                span(v-if='type === "signin"') Sign In
                span(v-if='type === "reset"')  Reset Password
          .row.mb-3
            .col
              input.form-control.mb-2(type='text' placeholder='Username or email'
                                      v-model='login' v-if='type === "signin"')
              input.form-control.mb-2(type='text' placeholder='Username'
                                      v-model='username' v-if='type === "signup"')
              input.form-control.mb-2(type='email' placeholder='Email'
                                      v-model='email' v-if='["signup", "reset"].includes(type)')
              .input-group(v-if='type !== "reset"')
                input.form-control.border-0(:type='typePasswordField' placeholder='Password'
                                            v-model='password')
                .input-group-append
                  button.btn.bg-none.text-dark(@click='showPassword')
                    fai(:icon='eyeIcon')
          .row.text-center.mb-3
            .col-12.col-md-7.float-right(v-if='["signup", "signin"].includes(type)')
              router-link.btn.align-text-bottom(to='/reset-password') Forgot password?
            .col-12.col-md-5(v-if='type === "signin"')
              button.btn.btn-block.btn-success(@click='signIn') Sign In
            .col-12.col-md-5(v-if='type === "signup"')
              button.btn.btn-block.btn-success(@click='signUp') Sign Up
            .col-12.col-md-6.offset-md-3(v-if='type === "reset"')
              button.btn.btn-block.btn-success(@click='resetPassword') Reset Password
          .row.text-center.my-4.my-md-5
            .col
              router-link(to='/signin' v-if='type === "signup"')
                |Do you have an account? Sign in here!
              router-link(to='/signup' v-if='["reset", "signin"].includes(type)')
                |Don't have an account? Sign up here!

  Footer
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Sign',
  components: {
    Header,
    Footer
  },
  props: {
    type: String
  },
  data () {
    return {
      login: '',
      username: '',
      email: '',
      password: '',
      typePasswordField: 'password',
      eyeIcon: 'eye'
    }
  },
  methods: {
    signUp () {
      console.log(this.username, this.email, this.password)
    },
    signIn () {
      console.log(this.login, this.password)
      this.$router.push({ path: '/home' })
    },
    resetPassword () {
      console.log(this.email)
    },
    showPassword () {
      this.typePasswordField = (this.typePasswordField === 'password' ? 'text' : 'password')
      this.eyeIcon = (this.eyeIcon === 'eye' ? 'eye-slash' : 'eye')
    }
  }
}
</script>
