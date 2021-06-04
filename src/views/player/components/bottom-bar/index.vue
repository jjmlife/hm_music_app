<template>
  <div class="container">
      <div class="bar-top">
          <van-icon name="like-o" color="#fff" size="30px"></van-icon>
          <van-icon name="down" color="#fff" size="30px"></van-icon>
          <van-icon name="chat-o" color="#fff" size="30px"></van-icon>
          <van-icon name="music-o" color="#fff" size="30px"></van-icon>
          <van-icon name="more-o" color="#fff" size="30px"></van-icon>
      </div>
      <div class="bar-slide">
        <span class="time">{{currentTime}}</span>
        <van-slider class="slide" v-model="value" bar-height="4px" active-color="#ccc" button-size="15px" />
        <span class="time">{{allTime}}</span>
      </div>
      <div class="bar-bottom">
          <svg-icon icon-class="recovery" class-name="icon"></svg-icon>
          <svg-icon icon-class="play-pre" class-name="icon"></svg-icon>
          <svg-icon icon-class="playing" class-name="icon-play"></svg-icon>
          <!-- <svg-icon icon-class="play-pause" class-name="icon-play"></svg-icon> -->
          <svg-icon icon-class="play-next" class-name="icon"></svg-icon>
          <svg-icon icon-class="menu" class-name="icon"></svg-icon>
      </div>
  </div>
</template>

<script>
export default {
    props: {
      
    },
    data() {
      return {
          currentTime: '00:03',
          allTime: '04:13',
          value: 0.5
      }
    },

}
</script>

<style scoped lang="scss">
.container {
  position: fixed;
  z-index: 20;
  bottom: 0;
  right: 0;
  left: 0;
  color: #ddd;
  .bar {
    &-top {
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 1rem;
    }
    &-slide {
      margin: 0 .32rem;
      font-size: .24rem;
      height: .6rem;
      .time {
        width: .6rem;
      }
      display: flex;
      justify-content: space-around;
      align-items: center;
      .slide {
        margin: 0 .3rem;
      }
    }
    &-bottom {
      margin: 0 .32rem;
      height: 1.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .icon {
        font-size: .6rem;
        &-play{
          font-size: 1rem;
        }
      }
    }
  }
}
</style>