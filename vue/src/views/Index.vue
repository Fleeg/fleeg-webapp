<template lang="pug">
.bg-primary
  //+header(true) add header component

  // middle search input and button
  .container-fluid
    .row
      .col.text-center.mt--4
        h2.display-3.d-md-none.text-light F
        h2.display-1.d-none.d-md-block.text-light F

    .row.pb-4
      .col-md-10.col-lg-7.mx-auto
       // +searchbar(false, false) add search component
    .pb-4

  // +footerbar() add footer component
</template>
