<template>
  <div class="main-tabar">
      <tab-bar>
        <tab-bar-item v-for="(item) in tabbarData" :key="item.link" :link="item.link">
          <div slot="text">{{item.title}}</div>
          <template v-slot:icon>
                <svg-icon :icon-class="item.icon" class-name="icon" />
          </template>
          <div slot="active-icon">{{item.activeIcon}}</div>
        </tab-bar-item>
      </tab-bar>
  </div>
</template>

<script>
import TabBar from '@/components/tab-bar'
import TabBarItem from '@/components/tab-bar/tab-bar-item'

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
            activeIcon: '',
            link: '/recommand'
        },
        {
            title: '播客',
            icon: 'boke',
            activeIcon: '',
            link: '/podcast'
        },
        {
            title: '我的',
            icon: 'music',
            activeIcon: '',
            link: '/mine'
        },
        {
            title: 'k歌',
            icon: 'ksong',
            activeIcon: '',
            link: '/ksong'
        },
        {
            title: '云村',
            icon: 'pepole',
            activeIcon: '',
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
.icon {
  font-size: 25px;
}

</style>