<template>
  <div class="recommand">
      <navigation @click-left="onClickLeft" @click-right="onClickRight"></navigation>
      <div class="content">
        <!-- top-banner -->
        <top-banner :images="banners"></top-banner>
        <!-- menu -->
        <menu-list></menu-list>
        <!-- song recommand list -->

        <!-- music rank -->

        <!-- cloud tv -->

        <!-- brandcast   -->
      </div>
  </div>
</template>

<script>
import Navigation from './components/navigation'
import TopBanner from './components/top-banner'
import MenuList from './components/menu-list'
import {
  reco_bannerSwiper
} from '@/network/api/recommand'
export default {
  components: {
    Navigation,
    TopBanner,
    MenuList
  },
  data() {
    return {
      banners:[]
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    onClickLeft() {
      console.log('left click');
    },
    onClickRight() {
      console.log('left right');
    },
    getData() {
      reco_bannerSwiper().then(
        res => {
          if(!res.code === 200)  return;
          this.banners = res.banners;
        }
      ).catch(err => {
      })


    }
  }
}
</script>

<style scoped lang="scss">
.recommand {
  .content {
    margin-top: 0.88rem;
    overflow: hidden;
  }
}
</style>