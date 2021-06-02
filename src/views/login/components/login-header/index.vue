<template>
  <div class="login-header" style="height: 100px;background:red;">
    <div class="user-info">
      <!-- <img :src="avatarUrl" alt="" class="img" /> -->
      <div class="user">
        <div class="name">{{nickName}}</div>
        <div class="arrow"></div>
      </div>
    </div>
    <div class="right"></div>
  </div>
</template>

<script>
export default {
    props: {
        avatarUrl: {
            type: String,
            default: ''
        },
        nickName: {
            type: String,
            default: '立即登录'
        }
    }
};
</script>

<style scoped lang="scss">
.login-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: red;
  height: 100px;
  .user-info {
      .img {
          object-fit: cover;
          height: 0.4rem;
          width: 0.4rem;
          border-radius: 50%;
      }
      .user {
          margin-left: .1rem;
          .name {
              
          }
          .arrow {

          }
      }
  }
}


</style>