import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/recommand'
  },
  {
    path: '/recommand',
    name: 'Recommand',
    meta: {
      tabbar: true,
      keepAlive: true
    },
    component: () => import('@/views/recommand/index.vue')
  },
  {
    path: '/podcast',
    name: 'Podcast',
    meta: {
      tabbar: true,
      keepAlive: true
    },
    component: () => import('@/views/podcast/index.vue')
  },
  {
    path: '/mine',
    name: 'Mine',
    meta: {
      tabbar: true,
      keepAlive: true
    },
    component: () => import('@/views/mine/index.vue')
  },
  {
    path: '/ksong',
    name: 'Ksong',
    meta: {
      tabbar: true,
      keepAlive: true
    },
    component: () => import('@/views/ksong/index.vue')
  },
  {
    path: '/cloud',
    name: 'Cloud',
    meta: {
      tabbar: true,
      keepAlive: true
    },
    component: () => import('@/views/cloud/index.vue')
  },
  {
    path: '/dayliReco',
    name: 'dayliReco',
    meta: {
      tabbar: false
    },
    component: () => import('@/views/app-module/dayli-recommand/index.vue')
  },
  {
    path: '/fm',
    name: 'fm',
    meta: {
      tabbar: false
    },
    component: () => import('@/views/app-module/fm/index.vue')
  },
  {
    path: '/liveplay',
    name: 'liveplay',
    meta: {
      tabbar: false
    },
    component: () => import('@/views/app-module/live-play/index.vue')
  },
  {
    path: '/songlist',
    name: 'songlist',
    meta: {
      tabbar: false
    },
    component: () => import('@/views/app-module/song-list/index.vue')
  },
  {
    path: '/songrank',
    name: 'songrank',
    meta: {
      tabbar: false
    },
    component: () => import('@/views/app-module/song-rank/index.vue')
  },
  {
    path: '/gedan',
    name: 'gedan',
    meta: {
      tabbar: false
    },
    component: () => import('@/views/app-module/gedan/index.vue')
  },
  {
    path: '/player',
    name: 'player',
    meta: {
      tabbar: false
    },
    component: () => import('@/views/player/index.vue')
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('@/views/test/index.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
