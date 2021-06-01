<template>
  <div class="recommand">
      <navigation @click-left="onClickLeft" @click-right="onClickRight"></navigation>
      <div class="content">
        <!-- top-banner -->
        <top-banner :images="banners"></top-banner>
        <!-- menu -->
        <menu-list @click="menuItemClick"></menu-list>
        <!-- song recommand list -->
        <item-list :items="recoSongs" title="推介歌单">
          <template v-slot:right-button>
              <arrow-button title="更多"></arrow-button>
          </template>
        </item-list>
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
import ItemList from '@/components/app/item-list'
import ArrowButton from '@/components/app/arrow-button'
import {
  reco_bannerSwiper,
  reco_recSongList
} from '@/network/api/recommand'
export default {
  components: {
    Navigation,
    TopBanner,
    MenuList,
    ItemList,
    ArrowButton
  },
  data() {
    return {
      banners:[],
      recoSongs: [],
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
    menuItemClick(item) {
        console.log(item);
    },
    getData() {
      reco_bannerSwiper().then(
        res => {
          if(!res.code === 200)  return;
          this.banners = res.banners;coverImgUrl
        }
      ).catch(err => {

      })

      reco_recSongList().then(res => {
          if(!res.code === 200)  return;
          this.recoSongs = res.playlists
      }).catch(err => {

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