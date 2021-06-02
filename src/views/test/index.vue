<template>
  <div >
    <button @click="showClick">button</button>
    <transition name="mask">
      <div
        class="mask"
        @click.self="bgClick"
         v-show="loginPanelShow"
      ></div>
    </transition>
    <transition name="panel" mode="out-in">
      <div class="panel" v-show="loginPanelShow">
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
    showClick() {
      this.$store.dispatch("app/toggleLoginPanel");
    },
    bgClick() {
      this.$store.dispatch("app/toggleLoginPanel");
    },
  },
};
</script>

<style scoped  lang="scss">

.mask {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
}

.panel {
  background-color: skyblue;
  width: 6.5rem;
  height: 100vh;
  top: 0;
  z-index: 100;
}

.mask-enter-from,
.mask-leave-to {
  opacity: 0;
}

.mask-enter-active, 
.mask-leave-active {
  transition: opacity .25s ease-out;
}

.panel-enter-enter,
.panel-leave-to{
   transform: translateX(-6.5rem);
}

.panel-enter-active,
.panel-leave-active {
   transition: transform  .3s linear ;
}






</style>