<template>
  <div class="item-cell" @click="itemClick">
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
      },
      id: {
        type: Number,
        required: true
      }
    },
    methods: {
      itemClick() {
          this.$router.push({path: '/gedan', query:{id: this.id}})
      }
    }
}
</script>

<style scoped lang="scss">
.item-cell {
  width: 2rem;
  .img {
    border-radius: 8px;
    object-fit: cover;
    width: 2rem;
    height: 2rem;
  }
  .title {
    font-size: 12px;
    line-height: 1.2;
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2; 
  }
}

</style>