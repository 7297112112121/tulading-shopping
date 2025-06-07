<template>
    <div>
        <van-nav-bar
            title="历史记录"
            left-text="返回"
            left-arrow
            right-text="清空记录"
            @click-left="onClickLeft"
            @click-right="onClickRight"
        />
        
        <!-- 使用v-if根据过滤结果决定显示内容 -->
        <div v-if="filterClickShop.length > 0">
            <van-grid :column-num="3" class="prod-grid">
                <van-grid-item 
                    v-for="item in filterClickShop" 
                    :key="item.id"
                    @click="goToDetails(item.id)"
                >
                    <van-image :src="item.src" fit="contain" /> 
                    <h3 class="mt-1 text-center text-sm">{{ item.title }}</h3>
                </van-grid-item>
            </van-grid>
        </div>
        
        <!-- 只在无数据时显示空状态 -->
        <van-empty v-else description="还没有游览过哦~亲" />
    </div>
</template>

<script setup>
import data from '@/data/shop'
import { ref, computed } from 'vue';
import { useShopStore } from '@/store/shopStore';
import { useRouter } from 'vue-router'  

// 获得Pinia实例
const shopStore = useShopStore();
const router = useRouter(); // 路由实例

const prods = ref(data.prods); // 获取商品数据

const filterClickShop = computed(() => {
    return prods.value.filter(item => shopStore.clickShop.includes(item.id));
});

const onClickLeft = () => {
    // 返回上一页
    router.back();
};

const onClickRight = () => {
    // 清空历史记录
    shopStore.$patch({
        clickShop: []
    });
};

const goToDetails = (id) => {
    // 保存点击记录并跳转
    shopStore.saveClickShop(id);
    router.push({ name: 'productDetails', params: { id } });
};

</script>

<style scoped>
.prod-grid .van-grid-item__content {
    padding: 10px 0;
}

h3 {
    margin: 0;
    font-weight: normal;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>