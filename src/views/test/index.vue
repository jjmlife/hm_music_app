<template>
  <div class="test">

      <div class="title" :style="{color: activeColor, fontSize: font+'px'}">bind class style</div>
      <div class="title" :style="styleObj">bind class style</div>
      <div class="title" :style="[styleObj,fontStyle]">bind class style 3 </div>

      <button @click="click">button</button>
  </div>

 
</template>



<script>
/**
 * v-bind:class
 * 对象语法: {active: isActive}
 *          isActive ? active : ""
 *          {active: isActive, clip: isClip}
 *          :class="classObj"
 *     
 * classObj: {
                isActive: false,
                isClip: true
    }

 * 数组语法： 
 *          :class="[activeClass, clipClass]"
 *          :class="[isActive?"active":"", clipClass]"           
 *          :class="[{active: isActive}, clipClass]"
 * 
 * 
 * 
 * v-bind:style 内联样式, fontSize 驼峰命名
 * 对象语法： :style="{color: activeColor, fontSize:}"
 * 
 * 
 * 数组语法： 里面是对象
 *          :style="[]"
 * 
 * 
 */

export default {
    data() {
        return {
            isActive: false, 
            classObj: {
                isActive: false,
                isClip: true
            },
            activeClass: "active",
            clipClass: "clip",

            font: 20,
            activeColor: 'red',

            styleObj: {
                'font-size': '20px',
                color: 'red',
            },

            fontStyle: {
                'font-weight': 500
            }
        }
    },
    methods: {
        click() {
            this.isActive = true
            this.activeColor = 'green'
            this.font = 30
            this.styleObj = {
                'font-size': '30px',
                color: 'yellow',
            }
        }
    }
}
</script>

<style scoped lang="scss">

</style>