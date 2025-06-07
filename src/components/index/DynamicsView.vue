<template>
  <div class="dynamics">
    <span class="tuijiang">推荐</span>
    <div class="content">
      <router-link v-for="(item, index) in texts" :key="index" :to="'/productDynamics/'" class="grid-item">
        <h3>{{ item.text }}</h3>
      </router-link>
    </div>
    <router-link to="/productDynamics" class="fenlei">
      分类
    </router-link>
  </div>
</template>

<script>
import data from '@/data/shop';
export default {
  name: 'DynamicsView',
  data() {
    return {
      texts: data.texts
    }
  },
  props: {
    dynamics: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
.dynamics {
  display: flex;
  justify-content: space-between;
  align-items: center; /* 垂直居中对齐 */
  height: 4vh;
}
.tuijiang {
  width: 10vw;
}
.content {
  display: flex;
  flex-direction: row;
  width: 80vw;
overflow-x: auto; /* 允许横向滚动 */
}
.grid-item {
  flex: 0 0 auto; /* 使项目不伸缩 */
  margin-right: 10px; /* 可根据需求调整间距 */
  color:black;
  padding-top: 0vh;
}
.fenlei {
  width: 10vw;
}
.tuijiang,.grid-item,.fenlei {
    font-size: 14px;
    font-weight: bold;
    color: black;
    display: flex;
    justify-content: center;
}
.grid-item:hover {
  color: #ff4040; /* 鼠标悬停时的颜色 */
}
</style>