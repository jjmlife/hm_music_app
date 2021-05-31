<template>
  <div class="item-cell">
     <div class="img-box">
       <div class="desc">
         <svg-icon icon-class="" class-name=""></svg-icon>
         <span class="count">{{playCount}}</span>
       </div>
       <img :src="imageUrl" alt="" class="img">
     </div>
     <div class="title">{{title}}</div>
  </div>
</template>

<script>
export default {
    props: {
      title: {
        type: String,
        required: true
      },
      imageUrl: {
        type: String,
        required: true
      },
      width: {
        type: String,
        default: '1rem'
      },
      imageHeight: {
        type: String,
        default: '1rem'
      },
      playCount: {
        type:String
      }
    }
}
</script>

<style scoped lang="scss">
.item-cell {
  .img {
    border-radius: 5px;
    object-fit: cover;
  }
  .title {
    text-align: center;
    font-size: 12px;
    line-height: 1.2;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
}

</style>