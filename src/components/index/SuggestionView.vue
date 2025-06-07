<template>
    <div class="root">
        <van-grid :column-num="4" square :gutter="4" >
            <van-grid-item 
            v-for="(item, index) in it" 
            :key="index"
            class="item">
                <van-image :src="item.src" class="img"/>
                <h3>{{ item.title }}</h3>
            </van-grid-item>
        </van-grid>
    </div>
    
</template>
<script>
import data from '@/data/shop'
    export default {
    name: 'SuggestionView',
    data() {
        return {
            it: data.index,
        }
    },
}
</script>
<style scoped>
.img{
    width: 40%;
    display: inline-block;
    transform: translateY(2vh);/*偏移*/
}
.root {
    height: 10vh;
    margin-top: 10px;
    margin-bottom: 5px;
}
</style>