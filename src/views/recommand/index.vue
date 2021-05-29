<template>
  <div class="recommand">
      <navigation @click-left="onClickLeft" @click-right="onClickRight"></navigation>
      <!-- top-banner -->

      <!-- menu -->

      <!-- song recommand list -->

      <!-- music rank -->

      <!-- cloud tv -->

      <!-- brandcast   -->
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
 
}

</style>