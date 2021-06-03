<template>
  <div class="audio-player">
    <!-- navibar -->
    <navi-bar></navi-bar>
    <!-- content -->
    <div class="content">
        <lyric v-show="isLyricMode"></lyric>
        <play-icons v-show="!isLyricMode"></play-icons>
    </div>
    <!-- buttom-bar -->
    <bottom-bar></bottom-bar>

    <!-- audio -->
     <audio 
      ref="audio"
      :src="song.url"
      autoplay
      preload="auto"
      @canplay="audioReady"
      @error="audioError"
      @ended="audioEnd"
     >
     </audio>
  </div>
</template>

<script>
import NaviBar from './components/navibar'
import BottomBar from './components/bottom-bar'
import Lyric from './components/lyric'
import PlayIcons from './components/play-icons'
import {
  player_songUrl,
  player_checkSong,
  player_songLyric
} from '@/network/api/player'
export default {
  components: {
    NaviBar,
    BottomBar,
    Lyric,
    PlayIcons
  },
  data() {
    return {
      isLyricMode: false,
      readySong: false,
      playTime: '00:00',
      allTime: 0,

      song: {
        url: '',
        type: '',
        md5: '',
        size: null,
        id : null
      },
      lrc: {
        lyric: `[00:04.90]作词：张超然\n[00:06.05]作曲：张超然\n[00:07.19]编曲：小皮\n[00:09.05]和音编㝍：小皮\n[00:10.85]和音：小皮\n[00:13.27]录音工程师：靳金陵（上海时间音乐工作室）\n[00:15.20]混音工程师/母带后期处理：小皮（上海时间音乐工作室）\n[00:17.96]发行：音熹音乐（上海音熹文化传播有限公司）\n[00:23.68]孤单走在漫长的路上\n[00:27.94]满腔热血的胸膛\n[00:31.10]注定我向着远方\n[00:35.89]也许是我年少太轻狂\n[00:40.06]幻想总有双翅膀\n[00:43.00]总能带给我希望\n[00:47.39]每一次冷风吹透我\n[00:51.86]也曾想过要勇敢\n[00:54.81]但总是你给我力量\n[01:02.28]总想起到过的地方\n[01:05.83]曾经爱你的倔强\n[01:08.71]是我们的天堂\n[01:14.29]忘了心痛都不会去想\n[01:17.67]是否年少都一样\n[01:20.79]我们学会了坚强\n[01:49.45]依旧在这漫长的路上\n[01:54.33]满腔热血的胸膛\n[01:57.02]注定我向着远方\n[02:01.64]渴望时间变幻的无常\n[02:05.75]岁月轻狂的迷惘\n[02:05.69]誓言带给我希望\n[02:13.05]每一次冷风吹透我\n[02:17.50]也曾想过要勇敢\n[02:20.59]但总是你给我力量\n[02:27.86]总想起到过的地方\n[02:31.52]曾经爱你的倔强\n[02:34.30]是我们的天堂\n[02:39.91]忘了心痛都不会去想\n[02:42.96]是否年少都一样\n[02:45.83]我们学会了坚强\n[02:51.89]总想起到过的地方\n[02:55.26]曾经爱你的倔强\n[02:58.25]是我们的天堂\n[03:03.90]忘了心痛都不会去想\n[03:07.32]是否年少都一样\n[03:10.31]我们学会了坚强\n`,
        version: null
      }
    }
  },
  created() {
    this.getData()
  },
  methods: {
    audioReady() {

    },
    audioError() {

    },
    audioEnd() {

    },
    audioListener() {
      this.$refs.audio.addEventListener('timeupdate', this.audioTimeUpdate())
    },
    audioTimeUpdate() {
      // 根据时间， 计算当前索引， 显示对应歌词，
      
    },
    getData() {
      let id = '1845953188'
      player_checkSong(id).then(res => {
         if(!res.success) return;

         player_songUrl(id).then(res => {

          }, err => {
            
          })
          player_songLyric(id).then(res => {

          },err ={

          })
      }).catch(err => {

      })
    }
  }
}
</script>

<style scoped lang="scss">
.audio-player {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    background-color: skyblue;
    z-index: 66;
    .content {
      
    }
}

</style>