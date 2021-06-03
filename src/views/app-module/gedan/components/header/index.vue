<template>
  <div class="container">
      <!-- bg -->
        
      <button-bar class="bar"></button-bar>
  </div>
</template>

<script>
import ButtonBar from '../button-bar'
export default {
    components: {
        ButtonBar
    }
}
</script>

<style scoped lang="scss">
.container {
    position: relative;
    .bar {
        position: absolute;

    }
}

</style>