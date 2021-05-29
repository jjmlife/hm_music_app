<template>
  <div id="app">
    <router-view/>

    <main-tabbar></main-tabbar>
  </div>
</template>

<script>
import MainTabbar from '@/layout/main-tabbar'
export default {
  components: {
    MainTabbar
  }
}
</script>

<style lang="scss">
#app {
  height: 100vh;
  width: 100vw;
  position: relative;
}

</style>
