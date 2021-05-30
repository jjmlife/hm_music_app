<template>
  <div class="main-tabar">
      <tab-bar>
        <tab-bar-item v-for="(item) in tabbarData" :key="item.link" :link="item.link" :icon="item.icon" :iconSelect="item.activeIcon">
         <template v-slot:text>
                {{item.title}}
          </template>
        </tab-bar-item>
      </tab-bar>
  </div>
</template>

<script>
import TabBar from '@/components/common/tab-bar'
import TabBarItem from '@/components/common/tab-bar/tab-bar-item'

export default {
  components: {
    TabBar,
    TabBarItem
  },
  data() {
    return {
      tabbarData: [
        {
            title: '发现',
            icon: 'logo',
            activeIcon: 'logo_select',
            link: '/recommand'
        },
        {
            title: '播客',
            icon: 'boke',
            activeIcon: 'boke_select',
            link: '/podcast'
        },
        {
            title: '我的',
            icon: 'music',
            activeIcon: 'music_select',
            link: '/mine'
        },
        {
            title: 'k歌',
            icon: 'ksong',
            activeIcon: 'ksong_select',
            link: '/ksong'
        },
        {
            title: '云村',
            icon: 'pepole',
            activeIcon: 'pepole_select',
            link: '/cloud'
        }
      ]
    }
  },
  mounted() {

  },
  methods: {
    
  }
}
</script>

<style scoped lang="scss">

</style>