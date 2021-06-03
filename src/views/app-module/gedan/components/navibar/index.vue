<template>
  <div class="navibar">
      <div class="navibar-left" @click="backClick">
        <svg-icon icon-class="back-arrow"></svg-icon>
        <span style="margin-left:.1rem">歌单</span>
      </div>
      <div class="navibar-center"></div>
      <div class="navibar-right">
        <svg-icon icon-class="search" class-name="search"></svg-icon>
        <van-icon name="ellipsis" style="margin-left:.2rem"></van-icon>
      </div>
  </div>
</template>

<script>
export default {
  methods: {
    backClick() {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped lang="scss">
$NaviHeight:.6rem;
.navibar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  /* background-color: rgba(100,100,100,1);
  background-image: linear-gradient(to bottom,rgba(100,100,100,1), rgba(70,70,78,1) ); */
  height: $NaviHeight;
  line-height: $NaviHeight;
  padding: 0 .32rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  &-left {
    font-size: .30rem;
  }
  &-center {

  }
  &-right {
    .search {
      color: black;
    }
  }
}
</style>