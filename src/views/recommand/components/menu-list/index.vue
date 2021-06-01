<template>
  <div class="menu">
    <icon-button
      class="button"
      v-for="(item, idx) in items"
      :key="item.title"
      :index="idx"
      :title="item.title"
      :icon="item.icon"
      @item-click="buttonClick"
    ></icon-button>
  </div>
</template>

<script>
import IconButton from "@/components/common/icon-button";
import appInfo from "@/network/appInfo";
export default {
  components: {
    IconButton,
  },
  data() {
    return {
      items: appInfo.menulist,
    };
  },
  methods: {
    buttonClick(index) {
        let obj = this.items[index];
        this.$router.push(obj.url)
    },
  },
};
</script>

<style scoped lang="scss">
.menu {
  margin-top: 0.2rem;
  white-space: nowrap;
  overflow-x: auto;
  display: flex;
  flex-direction: row;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  .button {
    margin: 0 0.2rem;
    &:last-child {
      margin: 0 0.32rem;
    }
    &:first-child {
      margin: 0 0.32rem;
    }
  }
}
</style>