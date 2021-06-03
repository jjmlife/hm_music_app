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
    box-shadow: 0 2px 6px #888;
    padding: 0 .6rem;
    .btn {
        height: .8rem;
        flex: 1;
    }
    .divide {

    }
}

</style>