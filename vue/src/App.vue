<template lang="pug">
#app
  #nav
    router-link(to='/home') Home Pug2
    router-link(to='/about') About Pug
  router-view
</template>

<style lang="scss">
@import './assets/theme';
</style>
