<template>
    <van-grid>
      <van-grid-item icon="photo-o" to="/obligation" text="待付款" />
      <van-grid-item icon="photo-o" to="/shipments" text="待发货" />
      <van-grid-item icon="photo-o" to="/receipt" text="待收货" />
      <van-grid-item icon="photo-o" to="/refund" text="退款/售后" />
    </van-grid>
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