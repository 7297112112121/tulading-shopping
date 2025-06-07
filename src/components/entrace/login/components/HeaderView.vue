<template>
    <div>
        <van-nav-bar
  title=""
  right-text="更多"
  left-arrow
  @click-left="onClickLeft"
  @click-right="onClickRight"
/>

    </div>
</template>
<script>
export default {
  methods: {
    onClickLeft() {
      history.back();
    },
    onClickRight() {
      this.showToast('按钮');
    },
    // showToast(message) {
    //   // 这里是showToast函数的实现
    // }
  }
};
</script>