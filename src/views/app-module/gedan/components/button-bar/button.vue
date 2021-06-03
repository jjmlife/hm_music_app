<template>
  <div class="button">
      <van-icon :name="icon"></van-icon>
      <span class="title">{{title}}</span>
  </div>
</template>

<script>
export default {
    props: {
        icon: {
            type: String,
            default: ''
        },
        title:{
           type: String,
            default: ''
        }
    }
}
</script>

<style scoped>
.ttile {
    margin-left: .1rem;
}
</style>