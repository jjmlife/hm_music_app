<template>
  <div class="arrow-wrapper" @click="buttonClick">
      {{title}}
      <div class="arrow"></div>
  </div>
</template>

<script>
export default {
    props: {
      title: {
        type: String,
        required: true
      }
    },
    methods: {
      buttonClick() {
        this.$emit('arrow-click')
      }
    }
} 
</script>

<style scoped lang="scss">
.arrow-wrapper {
    background-color: rgba(100, 100, 100, .3);
    padding: 2px 20px;
    font-size: 12px;
    line-height: 25px;
    height: 24px;
    border-radius: 12px;
    height: 24px;
    .arrow {
      margin-left: -4px;
      display: inline-block;
      width: 6px;
      height: 6px;
      border-top: 1px solid #000;
      border-right: 1px solid #000;
      transform: rotate(45deg);
    }
}

</style>