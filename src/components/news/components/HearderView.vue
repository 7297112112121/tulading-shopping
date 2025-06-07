<template>
        <van-nav-bar
            title="消息"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
            @click-right="onClickRight"
        />
</template>
<script setup>
import { useRouter } from 'vue-router';

const router = useRouter(); // 路由实例

const onClickLeft = () => {
    // 返回上一页
    router.back();
};


</script>