<!-- 上传头像，若用户没有上传头像，使用系统默认头像 -->
<template>
  <div class="image-container" >
    <!-- 系统默认头像 -->
    <van-image
      @click="'isUpload'" 
      round
      width="10rem"
      height="10rem"
      fit="cover"
      position="left"
      src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
    />
    <!-- 用户头像上传 -->

  </div>

</template>

<style scoped>
.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20vh; /* 这将使容器的高度等于视口的高度，你可以根据需要调整这个值 */
}
</style>
<script>
export default {
    name: 'ImgView',

    methods: {
        afterRead(file) {
      // 此时可以自行将文件上传至服务器
        console.log(file);
        }
    }
}
</script>
