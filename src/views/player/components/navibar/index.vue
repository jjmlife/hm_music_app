<template>
  <div class="container">
      <div class="container-left" @click="leftClick">
        <van-icon name="arrow-down" color="#fff" size="25px"></van-icon>
      </div>
      <div class="container-center">
        {{title}}
      </div>
      <div class="container-right">
        <svg-icon icon-class="menu-share" class-name="icon"></svg-icon>
      </div>
  </div>
</template>

<script>
export default {
    props: {
      title: {
        type: String,
        default: '你把快乐告诉全世界'
      },
      isShare: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      leftClick() {
          this.$store.dispatch('player/togglePlayerShow',true)
      }
    }
}
</script>

<style scoped lang="scss">
.container {
  display: flex;
  padding: 0 .32rem;
  justify-content: space-between;
  align-items: center;
  height: .6rem;
  background-color: green;
  .icon {
    font-size: .4rem;
  }
  /* &-left {
    
  }
  &-center{
  }
  &-right {
    
  } */
}
</style>
