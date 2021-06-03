<template>
  <div id="app">
    <keep-alive>
        <router-view v-if="$route.meta.keepAlive" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" />
    <!-- login -->
    <login></login>
    <main-tabbar v-show="$route.meta.tabbar"></main-tabbar>
    <!-- audio -->
    <player v-show="true"></player>
  </div>
</template>

<script>
import MainTabbar from '@/components/app/main-tabbar'
import Login from '@/views/login'
import Player from '@/views/player'
export default {
  components: {
    MainTabbar,
    Login,
    Player
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
