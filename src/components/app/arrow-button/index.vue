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
    font-size: 12px;
    border: 1px solid rgba(100, 100, 100, .3);
    border-radius: .2rem;
    padding: 0 .2rem;
    height: .4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    .arrow {
      margin-left: 2px;
      display: inline-block;
      width: 6px;
      height: 6px;
      border-top: 1px solid #000;
      border-right: 1px solid #000;
      transform: rotate(45deg);
    }
}

</style>