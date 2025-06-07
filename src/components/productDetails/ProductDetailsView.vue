<template>
    <div>传递过来的参数：{{ productId }}</div>
</template>
<script setup>
import { useRoute } from 'vue-router';

// 使用useRoute获取当前路由信息
const route = useRoute();

// 从路由参数中获取id
const productId = route.params.id;
console.log(productId);
</script>