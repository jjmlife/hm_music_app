<template>
<div >
    <transition name="mask" mode="out-in">
      <div
        class="mask"
        @click.self="bgClick"
         v-show="loginPanelShow"
      ></div>
    </transition>
    <transition name="panel" mode="out-in">
      <div class="panel" v-show="loginPanelShow">
          <login-header></login-header>
          <vip-card></vip-card>
          <list :dataList="cellData"></list>
          <div class="footer" @click="closeClick">
              关闭云音乐
          </div>
      </div>
    </transition>
</div>
</template>

<script>
import { mapGetters } from "vuex";
import LoginHeader from './components/login-header/index.vue'
import VipCard from './components/vip-card'
import List from './components/list'
import cellItems from '@/network/appInfo/login-cell-item.js'
export default {
  components: {
    LoginHeader,
    VipCard,
    List
  },
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters(["loginPanelShow"]),
  },
  created() {
    this.cellData = cellItems;
  },
  mounted() {
    
  },
  methods: {
    bgClick() {
      this.$store.dispatch("app/hiddenLoginPanel");
    },
    touchStart() {
      console.log('touchStart');
    },
    touchEnd() {
      console.log('touchEnd');
    },
    closeClick() {
      this.bgClick()
    }
  },
};
</script>

<style scoped lang="scss">
.mask {
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  bottom: 0;
  right:0;
  background-color: rgba(0, 0, 0, 0.5);
}

.panel {
  background-color: rgba(230, 230, 230, 1);
  width: 6.5rem;
  bottom: 0;
  top: 0;
  position: fixed;
  z-index: 1200;
  overflow-y: scroll;
  overflow-x: hidden;
  .footer {
    text-align: center;
    height: .8rem;
    margin: .2rem;
    font-size: .3rem;
    color: #ff5a4c;
    background-color: #fff;
    line-height: .8rem;
    border-radius: 8px;
  }
}



.mask-enter-from,
.mask-leave-to {
  opacity: 0;
}

.mask-enter-active, 
.mask-leave-active {
  transition: opacity .25s;
}

.panel-enter,
.panel-leave-to{
   transform: translateX(-6.5rem);
}

.panel-enter-active,
.panel-leave-active {
   transition: transform  .3s;
}


</style>