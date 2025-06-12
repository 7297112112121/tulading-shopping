<template>
  <div class="login-view">
      <div class="left">
        <router-link class="router" to="/member"><h3>签到<br>领积分</h3></router-link>
      </div>
    <van-search placeholder="请输入搜索关键词" class="right" />
  </div>
</template>

<script>
import touxiang from '@/assets/touxiang.png';

export default {
  name: "LoginView",
  data() {
    return {
      touxiang,
    };
  },
};
</script>

<style scoped>
.login-view {
  height: 5vh;
  margin-top: 2vh;
  margin-bottom: 2vh;
  display: flex;
  flex-direction: row;
  background-color: aliceblue;
  z-index: 1000;
  position: sticky;
  top: 0;
  justify-content: flex-start; 
  align-items: center;
}
.left {
  background-color: #fff;
  margin-left: 4vw;
  width: 10vw;
  height: 100%;
  font-size: 10px;
  /* width: auto; 
  height: 100%;
  display: flex;
  align-items: center; */
}
.right {
  width: calc(100% - 50px);
  height: 100%; 
}
.img {
  width: 100%;
  height: 100%;
  background-color: #fff;
}
.router {
  width: 100%;
  height: 100%
}
</style>