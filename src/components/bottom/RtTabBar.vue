<template>
    <div>
        <van-tabbar v-model="active" v-if="showRtTabBar">
           <van-tabbar-item replace to="/" icon="home-o" class="large-font">首页</van-tabbar-item>
            <van-tabbar-item replace to="/news" icon="chat-o">消息</van-tabbar-item>
            <van-tabbar-item replace to="/cart" icon="cart-o">购物车</van-tabbar-item>
            <van-tabbar-item replace to="/user" icon="manager-o">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>

export default {
    props: {
        //接受APP.vue 中传入的值， 控制是否显示底部底部导航栏目
        //请在新添加的路由信息中添加showTabBar属性，布尔型
        showRtTabBar: {
            type: Boolean,
            required: true,
            default: true
        }
    },
    data() {
        return {
            active: 0
        }
    },
};

</script>