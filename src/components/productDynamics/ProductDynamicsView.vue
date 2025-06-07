<template>
    <div class="top">
        <h3>分类</h3>
    </div>
    <div class="top" id="search">
        <SearchView />
    </div>
  <div>
    <div class="left-column">
        <SelectView />
    </div>
    <div class="right-column">
        <GridView />
    </div>
  </div>
</template>

<script>
import SelectView from '@/components/productDynamics/components/SelectView.vue';
import GridView from '@/components/productDynamics/components/GridView.vue';
import SearchView from '@/components/productDynamics/components/SearchView.vue';

export default {
    name: 'ProductDynamicsView',
    components: {
        SelectView,
        GridView,
        SearchView
    },

}

</script>
<style scoped>
    .left-column {  
        width: 26%;
        height: 100vh;
        float: left;
        /* background-color:blue; */
    }

    .right-column {
        margin-top: 10%;
        width: 74%;
        height: 100vh;
        float: right;
        /* background-color:rgb(27, 194, 127); */
    }
    .top {
        text-align: center;
        height: 3vh;
        width: 100vw;
    }
    .top h3 {
        font-weight: bold; /* 粗体 */
        font-size: 16px; /* 字体大小为16 */
    }
    #search {
        margin-bottom: 4vh;
    }
</style>