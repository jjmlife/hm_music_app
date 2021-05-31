<template>
  <div class="menu">
    <icon-button class="button" v-for="(item) in items" :key="item.title" :title="item.title" :icon="item.icon"></icon-button>
  </div>
</template>

<script>
import IconButton from '@/components/common/icon-button'
import appInfo from '@/network/appInfo'
export default {
  components: {
    IconButton
  },
  data() {
    return {
      items: appInfo.menulist
    }
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
.menu {
  margin-top: .2rem;
  white-space: nowrap;
  display: flex;
  flex-direction: row;
  .button {
    margin: 0 .2rem;
  }
}
</style>