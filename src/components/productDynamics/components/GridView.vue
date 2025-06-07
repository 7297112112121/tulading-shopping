<template>
    <div >
        <van-grid :column-num="2" class="prod-grid" v-for="item, index in prods" :key="index">
             <van-grid-item  v-if="item.classId == this.$store.state.GlobalId && 
                (item.classSubid1 == this.$store.state.GlobalSubid || item.classSubid2 == this.$store.state.GlobalSubid)"
                @click="saveClickShop(item.id)">
                <van-image :src="item.src" /> 
                <h3>{{ item.title }}</h3>
                <p>{{ item.price }}</p>
                <div class="price">&yen;{{ item.price }}</div>
             </van-grid-item>
        </van-grid>

    </div>
</template>

<script>
    import data from '@/data/shop'
    export default {
        name: 'ListView',
        data() {
            return {
                prods: data.prods
            }
        },
    }
</script>
<style scoped>
.prod-grid {
    margin-bottom: 20px;
}


</style>