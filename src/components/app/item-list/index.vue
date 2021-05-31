<template>
  <div class="item-list">
      <div class="top">
          <div class="title">{{title}}</div>
          <div class="right"><slot name="right-button" /></div>
      </div>
      <div class="list">
          <item-cell v-for="(item) in items" :key="item.title" :title="item.name" :imageUrl="item.coverImgUrl"></item-cell>
      </div>
  </div>
</template>

<script>
import ItemCell from './cell'
export default {
    components:{
      ItemCell
    },
    props: {
      items: {
        type: Array,
        required: true
      },
      title: {
        type: String,
        required: true
      }
    }
}
</script>

<style scoped  lang="scss">
.item-list {
  margin-top: 15px;
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 .32rem;
    .title {
      font-size: 16px;
      color: black;
    }
  }
  .list{
    white-space: nowrap;
  }
}

</style>