<template>
  <div class="navigation">
      <nav-bar>
          <template v-slot:nav-left >
              <span @click="leftClick"><svg-icon icon-class="navbar_left" class-name="bar-icon"></svg-icon></span>
          </template>
          <template v-slot:nav-center>
             <div>发现</div>
          </template>
          <template v-slot:nav-right>
               <span @click="rightClick"><svg-icon icon-class="navbar_audio" class-name="bar-icon"></svg-icon></span>
          </template>
      </nav-bar>
  </div>
</template>

<script>
import NavBar from '@/components/common/nav-bar'

export default {
    components: {
        NavBar
    },
    methods: {
        leftClick() {
            this.$emit('click-left')
        },
        rightClick() {
            this.$emit('click-right')
        }
    }
}
</script>

<style>
.bar-icon {
    font-size: 22px;
}
</style>