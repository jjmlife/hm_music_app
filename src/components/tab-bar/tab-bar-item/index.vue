<template>
  <div class="tab-bar-item" @click="itemClick">
    <div class="icon-bg" :class="isActive ? 'active' : ''">
      <svg-icon
        :icon-class="iconClass"
        :class-name="isActive ? 'icon-select' : 'icon-normal'"
      />
    </div>
    <div class="item-text" :style="{ color: isActive ? '#ff5a4c' : '#aaaaaa' }">
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    link: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    iconSelect: {
      type: String,
      required: true,
    },
  },
  computed: {
    isActive: {
      get() {
        return this.$route.path.indexOf(this.link) !== -1;
      },
    },
    iconClass() {
      return this.isActive ? this.iconSelect : this.icon;
    },
  },
  methods: {
    itemClick() {
      if (this.link === this.$route.path) return;
      this.$router.replace(this.link);
    },
  },
};
</script>

<style scoped lang="scss">
$iconSize:28px;
.icon-normal {
  font-size: 20px;
}
.icon-select {
  font-size: 12px;
}

.tab-bar-item {
  flex: 1;

  .icon-bg {
    height: $iconSize;
    width: $iconSize;
    margin: 2px auto;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .active {
    background-color: #ff5a4c;
  }
}

.item-text {
  font-size: 10px !important;
  margin-top: 3px;
}
</style>