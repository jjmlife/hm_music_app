<template>
  <div class="list">
      <cell-group v-for="(item,idx) in dataList" :key="idx" :title="item.title" :items="item.items">
      </cell-group>
  </div>
</template>

<script>
import CellGroup from '@/components/app/cell-group'

export default {
    props: {
        dataList: {
            type: Array,
            default: []
        }
    },
    components: {
        CellGroup
    },
    mounted() {

    }
}
</script>

<style scoped lang="scss">

</style>