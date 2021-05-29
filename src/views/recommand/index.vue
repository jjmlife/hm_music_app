<template>
  <div class="recommand">
      <navigation @click-left="onClickLeft" @click-right="onClickRight"></navigation>
      <div class="btn">jmm</div>
  </div>
</template>

<script>
import Navigation from './components/navigation'
export default {
  components: {
    Navigation
  },
  mounted() {

  },
  methods: {
    onClickLeft() {
      console.log('left click');
    },
    onClickRight() {
      console.log('left right');
    }
  }
}
</script>

<style scoped lang="scss">
.recommand {
  .btn {
    height: 10rem;
    width: 7.5rem;
    background-color: skyblue;
  }
}

</style>