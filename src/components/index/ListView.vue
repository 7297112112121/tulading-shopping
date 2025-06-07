<template>
    <div >
        <van-grid :column-num="2" class="prod-grid">
             <van-grid-item v-for="item, index in prods" 
             :key="index" 
             @click="saveClickShop(item.id),goToDetails(item.id)" 
             to="/productDetails" 
             class="prod-item">

                <van-image :src="item.src" /> 
                <h3>{{ item.title }}</h3>
                <p>{{ item.price }}</p>
                <div class="price">&yen;{{ item.price }}</div>
                
             </van-grid-item>
        </van-grid>

    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useShopStore } from '@/store/shopStore';
import { useRouter } from 'vue-router';
import data from '@/data/shop';

// 定义响应式数据
const prods = ref(data.prods);

// 获取存储实例
const shopStore = useShopStore();

// 定义保存点击过的商品id的方法
const saveClickShop = (id) => {
  // 保存点击过的商品id
  shopStore.saveClickShop(id);
};

//传参
const router = useRouter();
const goToDetails = (id) => {
  router.push({ name: 'productDetails', params: { id: id } });
};
</script>



<style scoped>
.prod-grid {
    margin-bottom: 50px;
}


</style>