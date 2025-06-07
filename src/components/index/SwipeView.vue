<template>
    <div>
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="(image, index) in filterShowImages" :key="index">
              <van-image 
              :src="image.src" 
              :alt="image.title || '加载失败'"
              class="swipe-img"
              @click="saveClickShop(image.id),goToDetails(image.id)"  
              />
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import data from '@/data/shop';
import { useShopStore } from '@/store/shopStore';
import { useRouter } from 'vue-router';

// 实例化
const prods = ref(data.prods); 
const router = useRouter();
const shopStore = useShopStore();

// 显示id在5到8之间的商品（包含5和8）
const filterShowImages = computed(() => {
  return prods.value.filter(item => item.id >= 5 && item.id <= 8);
});

// 定义保存点击过的商品id的方法
const saveClickShop = (id) => {
  // 保存点击过的商品id
  shopStore.saveClickShop(id);
};

// 传参
const goToDetails = (id) => {
  router.push({ name: 'productDetails', params: { id: id } });
};
</script>

<style scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #fff;
}

.my-swipe {
  height: 250px; /* 设置滑块的高度 */
  width: 100%; /* 设置滑块的宽度，可以根据需要调整 */
}

.swipe-img {
  height: 100%;
  width: 100%;
  object-fit: cover; /* 使图片覆盖整个滑块区域，同时保持宽高比 */
}
</style>