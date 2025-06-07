<template>
    <van-grid class="all" :column-num="5" :border="false">
      <van-grid-item  to="/user" class="touxiang" >
                <van-image
                    round
                    width="10rem"
                    height="10rem"
                    :src="touxiang"
                    class="img"
                />
      </van-grid-item>
      <van-grid-item  to="/user" class="name" >
        <span>未登录</span>
      </van-grid-item>
      <van-grid-item  to="/user" class="name" >
        <div></div>
      </van-grid-item>
      <van-grid-item  to="/help" class="help" >
        <span>帮助</span>
      </van-grid-item>
      <van-grid-item  to="/set"  class="set" >
        <span>设置</span>
      </van-grid-item>
    </van-grid>
</template>

<script>
import touxiang from '@/assets/user/touxiang.png';
export default {
    name: "HeardersView",
    data() {
        return {
            touxiang,       // 用户头像
        };
    },
};

</script>

<style scoped>
.all {
    width: 100vw;
    height: 10vh;
    border: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
}
.touxiang {
    width: 20%;
    height: 100%;
    border: none;
    background-color: #ccc;
    float: left;
    background-color: #b30f0f85;
}
.name {
    width: 30%;
    height: 100%;
    text-align: center;
    font-size: 1.5em;
    float: left;
        background-color: #bebebe85;
}
.help {
    width: 10%;
    height: 100%;
    text-align: center;
    font-size: 1.2em;
    float: right;
        background-color: #2a62d485;
}
.set {
    width: 10%;
    height: 100%;
    text-align: center;
    font-size: 1.2em;
    float: right;
            background-color: #cc061685;
}
.img {
    width: 100%;
    height: 100%;
}
</style>