<template>
  <div class="container">
      <van-button icon="comment-o"  class="btn">11235</van-button>
      <span class="divide"></span>
      <van-button icon="chat-o"  class="btn">87</van-button>
      <span class="divide"></span>
      <van-button icon="share-o"  class="btn">178</van-button>
  </div>
</template>

<script>
export default {
    
}
</script>

<style scoped lang="scss">
.container {
    background-color: #fff;
    box-sizing: border-box;
    height: 1rem;
    margin: 0 .6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: .6rem;
    box-shadow: 1px 2px 6px #aaa;
    padding: 0 .6rem;
    .btn {
        height: .8rem;
        width: calc(100%/3);
    }
    .divide {
        background-color: #aaa;
        height: 100%;
    }
}

</style>