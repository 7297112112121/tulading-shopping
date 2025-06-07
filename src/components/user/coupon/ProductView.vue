<template>
    <div>
        <van-nav-bar
            title="优惠券"
            left-text="返回"
            right-text="按钮"
            left-arrow
            @click-left="onClickLeft"
            @click-right="onClickRight"
        />
        
        <!-- 使用 van-empty 显示空状态 -->
        <van-empty v-if="coupons.length === 0" description="暂无可用优惠券" />
        
        <!-- 优惠券列表 -->
        <van-grid :column-num="1" :border="false" v-else >
            <van-grid-item v-for="coupon in coupons" :key="coupon.id" class="coupon-item">
                <div class="coupon-card">
                    <div class="coupon-discount">{{ coupon.title }}</div>
                    <div class="coupon-condition">{{ coupon.desc }}</div>
                    <div class="coupon-info">{{ coupon.text }}</div>
                </div>
            </van-grid-item>
        </van-grid>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { dataCoupon } from '@/data/shop'; // 确保导入路径正确

const router = useRouter();

const coupons = ref(dataCoupon.product || []);

const onClickLeft = () => {
    router.back(); // 返回上一页
};

const onClickRight = () => {
    router.push('/user'); // 跳转到首页
};
</script>

<style scoped>
.coupon-item ::deep .van-grid-item {
    width: 100vw;
}
.coupon-card {
    padding: 12px;
    margin: 8px 0;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.coupon-discount {
    color: #ff4400;
    font-size: 18px;
    font-weight: bold;
}

.coupon-condition {
    color: #666;
    font-size: 14px;
    margin-top: 4px;
}

.coupon-info {
    color: #999;
    font-size: 12px;
    margin-top: 4px;
}
</style>