<template>
  <van-nav-bar
    title="会员"
    left-text="返回"
    left-arrow
    @click-left="onClickLeft"
  />
  <div class="points">
    <van-grid :column-num="3" :border="false">
      <van-grid-item icon="star-o" text="我的积分" />
    </van-grid>
  </div>
</template>

<script setup>
const onClickLeft = () => {
  history.back();
};
</script>
<style>
  
</style>
