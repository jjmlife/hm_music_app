<template>
  <div class="container">
      <div class="content">
          <div class="content-left">
              <img :src="imageUrl" alt="" class="img">
          </div>
          <div class="content-right">
              <div class="top textEllipsis">
                  {{title}}
              </div>
              <div class="bottom multiEllipsis">
                  {{detailText}}
              </div>
          </div>
      </div>
      <button-bar class="bar"></button-bar>
  </div>
</template>

<script>
import ButtonBar from '../button-bar'
export default {
    components: {
        ButtonBar
    },
    props: {
        imageUrl: {
            type: String,
            default: 'http://p1.music.126.net/o2o8w3fNGLyLXghtpq2nCA==/109951165926666028.jpg'
        },
        title: {
            type: String,
            default: '快乐有很多种，其中听歌算一种'
        },
        detailText: {
            type: String,
            default: '幸好世界上有音乐，不然在这糟糕...'
        }
    }
}
</script>

<style scoped lang="scss">
@import "styles/global.scss";

.container {
    position: relative;
    background-color: white;
    .content {
        background-image: linear-gradient(to bottom,rgba(100,100,100,1), rgba(70,70,78,1) ); 
        height: 3.5rem;
        display: flex;
        align-items: center;
        padding: 0 .4rem;
        &-left {
            height: 2rem;
            width: 2rem;
            .img {
                height: 100%;
                width: 100%;
                object-fit: cover;
                border-radius: 8px;
            }
        }
        &-right {
            margin-left: .3rem;
            width: calc(100% - 2.4rem);
            .top {
                font-size: .34rem;
                font-weight: 500;
                color:white;
                margin-top: .2rem;
                margin-bottom: .8rem;
            }
            .bottom {
                color: #aaa;
                font-size: .24rem;
            }
        }
    }
    .bar {
        position: absolute;
        bottom: -.5rem;
    }
}

</style>