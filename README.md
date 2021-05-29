# hm_music_app

### 简介
```
vue + vant + docker 仿网易云音乐

网易云音乐Api: 来源于 https://binaryify.github.io/NeteaseCloudMusicApi/#/
             打包通过docker 部署在 ECS 上

api请求原则： 1.统一在有route 的组件中请求数据，类iOS Controller; 
            2.store 数据中心可以管理 api数据请求
            所有组件数据，通过props、emit 交互
```


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
