<template>
  <div class="tree-select-container">
    <div class="sidebar">
      <div
        v-for="(item, index) in items"
        :key="index"
        :class="['sidebar-item', { active: activeIndex === index }]"
        @click="activeIndex = index"
      >
        {{ item.text }}
      </div>
    </div>
    <div class="content">
      <div
        v-for="child in items[activeIndex].children"
        :key="child.id"
        class="content-item"
        @click="clickChild(child.id,child.subid)"
      >
        {{ child.text }}
      </div>
    </div>
  </div>
</template>

<script>



export default {
  data() {
    return {
      activeIndex: 0,
      items: [
        {
          text: '电脑办公',
          children: [
            { text: '热门推荐', id: 1 ,subid: 1 },
            { text: '热度趋势', id: 1 ,subid: 2 },
            { text: '电脑整机', id: 1 ,subid: 3 },
            { text: '外设产品', id: 1 ,subid: 4 },
          ],
        },
        {
          text: '手机',
          children: [
            { text: '热门推荐', id: 2 ,subid: 1 },
            { text: '热度趋势', id: 2 ,subid: 2 },
            { text: '手机亲民', id: 2 ,subid: 3 },
            { text: '手机高端', id: 2 ,subid: 4 },
          ],
        },
        {
          text: '图书',
          children: [
            { text: '热门推荐', id: 3 ,subid: 1 },
            { text: '热度趋势', id: 3 ,subid: 2 },
            { text: '教材', id: 3 ,subid: 3 },
            { text: '儿童读物', id: 3 ,subid: 4 },
          ],
        },
                {
          text: '游戏',
          children: [
            { text: '热门推荐', id: 4 ,subid: 1 },
            { text: '热度趋势', id: 4 ,subid: 2 },
            { text: '游戏道具', id: 4 ,subid: 3 },
            { text: '游戏周边', id: 4 ,subid: 4 },
          ],
        },
      ],
    };
  },
  methods:{
    clickChild(id,subid){
      this.$store.commit('GlobalModificationGlobalId',id)
      this.$store.commit('GlobalModificationGlobalSubid',subid)
    }
  }
};
</script>

<style scoped>
.tree-select-container {
  width: 100%;
  height: 100%;

}

.sidebar {
  width: 100%; /* 一级菜单宽度 */
  background-color: #f8f8f8;
}

.sidebar-item {
  padding: 10px;
  cursor: pointer;
  height: 35%;
}

/*一级菜单点击显示*/ 
.sidebar-item.active {
  background-color: #faf219;
  color: rgb(0, 0, 0);
  font-weight: bold;
}

.content {
  display: flex;
  position: absolute;
  margin-left: 28%;
  overflow-x: auto;
  white-space: nowrap;
  background-color: #fff;
 width: 70vw;
 margin-top: -20vh;
}

.content-item {
  margin-right: 20px;
  padding: 5px;
  background-color: #eee;
  border-radius: 4px;
}
/*二级菜单点击显示*/ 
.content-item:hover {
  background-color: #1567cc;
  cursor: pointer;
  font-weight: bold;
  color: black;
}
</style>
