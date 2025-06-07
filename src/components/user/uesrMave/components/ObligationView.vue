<template>
        <div>
            <van-nav-bar
            title="待付款"
            left-text="返回"
            right-text="按钮"
            left-arrow
            @click-left="onClickLeft"
            @click-right="onClickRight"
            />
        <van-empty description="空空如也" />
    </div>
</template>
<script>

export default {
    name:'LookView',
    data(){
        return{
            
        }
    },
    methods: {
        onClickLeft() {
            // 返回上一页
            this.$router.push("/user");
        },
        onClickRight() {
            // 执行右侧按钮的操作
            console.log('右侧按钮被点击');
        }
    }
    
}
</script>