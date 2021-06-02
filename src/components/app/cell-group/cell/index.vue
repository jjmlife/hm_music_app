<template>
  <div class="cell" >
    <div class="content">
      <svg-icon :icon-class="icon" class-name="icon"></svg-icon>
      <span class="title">{{ title }}</span>
    </div>
    <div class="right">
      <span class="text" v-if="arrowText.length">{{arrowText}}</span>
      <div class="arrow" v-if="isArrow"></div>
      <div class="switch" v-else>
        <van-switch v-model="checked" active-color="#dd001b" size="15"></van-switch>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    isArrow: {
      type: Boolean,
      default: true
    },
    arrowText: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      checked: false
    }
  },
  methods: {
    itemClick() {},
  },
};
</script>

<style scoped lang="scss">
.cell {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: .8rem;
  color: #333;
  font-size: .28rem;
  .icon {
    font-size: .34rem;
  }
  .title {
    margin-left: .2rem;
  }
  .right {
    display: flex;
    justify-content: center;
    align-items: center;
    .text {
      font-size: .24rem;
      color: #aaa;
    }
    .arrow {
      margin-left: .08rem;
      display: inline-block;
      height: .12rem;
      width: .12rem;
      border-top: 1px solid #333;
      border-right: 1px solid #333;
      transform: rotate(45deg);
    }
  }
}
</style>