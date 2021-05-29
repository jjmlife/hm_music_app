<template>
  <div class="top-banner">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item) in images" :key="item.imageUrl">
            <div class="item">
                <van-image
                    :src="item.imageUrl"
                    fit="cover"
                    radius="8px"
                    class="img"
                ></van-image>
            </div>
        </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
    props: {
        images: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped lang="scss">
.item {
    height: 3rem;
    margin: 0 16px;
    border-radius: 8px;
    background-color: skyblue;
    .img {
        height: 100%;
        width: 100%;
    }
}


</style>