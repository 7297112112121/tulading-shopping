<template>
  <RtTabBar :showRtTabBar="isTabRoute"/>
  <router-view></router-view>
</template>

<script>
import RtTabBar from "./components/bottom/RtTabBar.vue";

export default {
  name: 'App',
  components: {
    RtTabBar
  },
  computed: {
    // 获取当前路由底部导航栏布尔值
    isTabRoute() {
      return this.$route.meta.showTabBar
    }
  }
}
</script>

<style>

</style>
