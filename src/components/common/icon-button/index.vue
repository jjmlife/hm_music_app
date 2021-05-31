<template>
  <div class="icon-button">
    <svg-icon :icon-class="icon" class-name="icon"></svg-icon>
    <div class="title">{{ title }}</div>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.icon-button {
  height: 1rem;
  width: 0.8rem;
  .title {
    color: black;
    font-size: 0.12rem;
  }
  .icon {
    font-size: 0.6rem;
  }
}
</style>