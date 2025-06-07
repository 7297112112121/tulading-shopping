
<template>
  <div>
    <van-grid :column-num="1">
      <van-grid-item icon="photo-o" to="/obligation" text="会员" />
    </van-grid>
    <van-grid :column-num="4">
      <van-grid-item  to="/obligation" text="我的收藏" />
      <van-grid-item  to="/lookshophistory" text="历史记录" />
      <van-grid-item  to="/receipt" text="我的关注" />
      <van-grid-item  to="/ProductCoupons" text="优惠卷" />
    </van-grid>

  </div>
</template>

<script>

export default {
  data() {
    return {
      active: 0
    }
  }
};

</script>