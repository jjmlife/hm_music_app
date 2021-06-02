<template>
  <div >
    <transition name="mask">
      <div
        class="login-mask"
        @click.self="bgClick"
         v-show="loginPanelShow"
      ></div>
    </transition>
    <transition name="panel">
      <div class="login-panel" v-if="loginPanelShow">
        <div class="header">login</div>
        <div class="vip-card"></div>
        <div class="content"></div>
        <div class="footer"></div>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["loginPanelShow"]),
  },
  mounted() {
    console.log(this.loginPanelShow);
  },
  methods: {
    bgClick() {
      this.$store.dispatch("app/toggleLoginPanel", !this.loginPanelShow);
    },
  },
};
</script>

<style scoped lang="scss">
.login-mask {
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(100, 100, 100, .5);
}

.login-panel {
  background-color: skyblue;
  width: 6.5rem;
  top:0;
  bottom: 0;
  position: fixed;
  z-index: 1000;
}

.mask-enter-from,
.mask-leave-to {
  opacity: 0;
}

.mask-enter-active, 
.mask-leave-active {
  transition: opacity .25s ease-out;
}

.panel-enter-from,
.panel-leave-to{
   left: -6.5rem;
}

.panel-enter-to,
.panel-leave-from
  {
  left: 0;
}

.panel-enter-active,
.panel-leave-active {
   transition: left .35s ease-out;
}






</style>