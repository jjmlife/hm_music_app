<template>
  <div class="nav-bar">
      <div class="nav-bar-left" @click="leftClick"><slot name="nav-left"></slot></div>
      <div class="nav-bar-center"><slot name="nav-center"></slot></div>
      <div class="nav-bar-right"><slot name="nav-right"></slot></div>
  </div>
</template>

<script>
export default {
    name: 'NavBar',
    methods: {
        leftClick() {
            this.$store.dispatch('app/showLoginPanel')
        }
    }
}
</script>

<style scoped lang="scss">
// 44px
$itemWidth: 44px;
.nav-bar {
    position: fixed;
    left: 0;
    right: 0;
    top:0;
    z-index: 199;
    height: 44px;
    line-height: 44px;
    padding: 0 .32rem;
    background-color: #ffffff;
    display: flex;
    justify-content: space-between;
    &-left {
        width: $itemWidth;
        margin: 0 auto;
    }
    &-right {
        width: $itemWidth;
        margin: 0 auto;
        text-align: right;
    }
    &-center {
        flex: 1;
        text-align: center;
    }
}

</style>

