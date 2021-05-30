<template>
  <div class="recommand">
     recommand
  </div>
</template>

<script>
import {reco_bannerSwiper} from "@/network/api/recommand"
export default {
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      reco_bannerSwiper().then(res => {

      }).catch(err => {

      })
    }
  }
}
</script>

<style scoped lang="scss">


</style>