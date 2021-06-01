<template>
  <div class="login-wrapper">
    <transition name="mask">
      <div
        class="login-mask"
        @click.self="bgClick"
        v-show="loginPanelShow"
      ></div>
    </transition>
    <!-- <transition>
      <div class="login-panel" :class="{ opened: loginPanelShow }">
        <div class="header">login</div>
        <div class="vip-card"></div>
        <div class="content"></div>
        <div class="footer"></div>
      </div>
    </transition> -->
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
.login-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
}

.login-mask {
  width: 100%;
  height: 100%;
  background-color: rgba(100, 100, 100, 0.5);
}

.login-panel {
  background-color: skyblue;
  height: 100%;
  width: 6.5rem;
  margin-left: -6.5rem;
  transition: none;
}

.opened  {
  margin-left: 0;
}


.mask-enter,
.mask-leave-to {
  opacity: 0;
}

.mask-enter-active, 
.mask-leave-active {
  transition: opacity .5s;
}






</style>