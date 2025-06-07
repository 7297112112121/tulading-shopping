<template>
    <div>
        <van-radio-group v-model="checked" direction="horizontal">
            <van-radio name="1">
              <span :class="'fondXieyi'">{{ message1 }}</span>
              <a :class="'fondXieyi1'" href="https://cn.bing.com/">{{ message2 }}</a>
              <a :class="'fondXieyi1'" href="https://cn.bing.com/">{{ message3 }}</a>
              <a :class="'fondXieyi1'" href="https://cn.bing.com/">{{ message4 }}</a>
            </van-radio>
        </van-radio-group>

    </div>
</template>
<script>
export default {
  data() {
    return {
      checked: '1',
      message1: '您以阅读并同意',
      message2: '《图拉丁二手社区用户服务协议》',
      message3: '《隐私权政策》',
      message4: '《软件许可使用协议》',
    };
  }
};
</script>
<style>
.fondXieyi {
  font-family: "微软黑体";
  font-size: 14px;
}
.fondXieyi1 {
  font-family: "微软黑体";
  font-size: 16px;
  font-weight: bold;
  color: black;
}
  
</style>