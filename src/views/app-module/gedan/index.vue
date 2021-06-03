<template>
  <div class="container">
      gedan 
      <!-- navbar -->
      <navi-bar></navi-bar>
      <!-- header -->
      <page-header></page-header>
      <!-- content -->
      <div class="content">

      </div>
  </div>
</template>

<script>
import NaviBar from './components/navibar'
import PageHeader from './components/header'

export default {
    components: {
        NaviBar,
        PageHeader
    },
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>

<style scoped lang="scss">
.container {

}

</style>