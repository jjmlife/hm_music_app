<template>
  <div class="list-item">
      <div class="index">{{index}}</div>
      <div class="list-item-content">
          <div class="title">{{title}}</div>
          <div class="author">{{author}}</div>
      </div>
      <div class="list-item-right">
          <van-icon name="play-circle-o" size="20" @click="playClick"></van-icon>
          <van-icon name="ellipsis" size="20" style="margin-left:.2rem"></van-icon>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        },
        index: {
            type: Number,
            default: 0
        }
    },
    methods: {
        playClick() {
            
        }
    }
}
</script>

<style scoped lang="scss">
.list-item  {
    color:#333;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 1rem;
    text-align: center;
    .index {
        color: #aaa;
        width: 1rem;
    }
    &-content{
        text-align: left;
        flex : 1;
        margin: 0 .2rem;
        .title {
            color: #333;
            font-size: .32rem;
        }
        .author {
            color: #aaa;
            font-size: .24rem;
        }
    }
    &-right {
        width: 2rem;
    }
}

</style>