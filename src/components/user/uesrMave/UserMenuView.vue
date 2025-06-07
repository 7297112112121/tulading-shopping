<template>
    <div>
        <van-grid :column-num="5"  class="custom-grid">
            <!-- <van-grid-item class="custom-grid-item" to="/" text="全部" /> -->
            <van-grid-item class="custom-grid-item" to="/" text="待付款" />
            <van-grid-item class="custom-grid-item" to="/pending-shipping" text="待发货" />
            <van-grid-item class="custom-grid-item" to="/pending-receipt" text="待收货" />
            <van-grid-item class="custom-grid-item" to="/pending-review" text="待评价" />
            <van-grid-item class="custom-grid-item" to="/refund-after-sales" text="退款/售后" />
        </van-grid>
    </div>
</template>

<script>
export default {
    name: 'UserMenuView',
}
</script>
<style scoped>

</style>
