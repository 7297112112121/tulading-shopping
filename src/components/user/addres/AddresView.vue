<template>
    <div>
        <van-address v-model="address" v-model:show="show" :get-province-list="province" :get-city-list="city"
            :get-county-list="county" :get-town-list="town" />
    </div>
</template>

<script>
export default {
  data() {
    return {
      address: {
        provinceCode: '110000000000',
        provinceName: '北京市',
        cityCode: '110100000000',
        cityName: '市辖区',
        countyCode: '110114000000',
        countyName: '昌平区',
        townCode: '110114113000',
        townName: '百善镇',
      },
      show: false
    }
  },
  methods: {
    // 添加对 payload 参数的使用，并定义模拟数据
    province(payload) {
      console.log('加载省级地址，参数:', payload);
      // 这里应该从API获取数据，暂时使用模拟数据
      const mockProvinceList = [
        { code: '110000000000', name: '北京市' },
        { code: '120000000000', name: '天津市' },
        // 更多省份...
      ];
      return new Promise((resolve) => {
        setTimeout(() => resolve(mockProvinceList), 300);
      });
    },
    
    city(payload) {
      console.log('加载市级地址，参数:', payload);
      // 根据省份代码筛选城市数据
      const mockCityList = [
        { code: '110100000000', name: '市辖区', parentCode: '110000000000' },
        { code: '120100000000', name: '市辖区', parentCode: '120000000000' },
        // 更多城市...
      ];
      return new Promise((resolve) => {
        setTimeout(() => {
          // 筛选属于当前省份的城市
          const filtered = mockCityList.filter(item => item.parentCode === payload);
          resolve(filtered);
        }, 300);
      });
    },
    
    county(payload) {
      console.log('加载县级地址，参数:', payload);
      // 根据城市代码筛选区县数据
      const mockCountyList = [
        { code: '110114000000', name: '昌平区', parentCode: '110100000000' },
        { code: '110105010000', name: '朝阳区', parentCode: '110100000000' },
        // 更多区县...
      ];
      return new Promise((resolve) => {
        setTimeout(() => {
          const filtered = mockCountyList.filter(item => item.parentCode === payload);
          resolve(filtered);
        }, 300);
      });
    },
    
    town(payload) {
      console.log('加载镇级地址，参数:', payload);
      // 根据区县代码筛选乡镇数据
      const mockTownList = [
        { code: '110114113000', name: '百善镇', parentCode: '110114000000' },
        { code: '110114100000', name: '城北街道', parentCode: '110114000000' },
        // 更多乡镇...
      ];
      return new Promise((resolve) => {
        setTimeout(() => {
          const filtered = mockTownList.filter(item => item.parentCode === payload);
          resolve(filtered);
        }, 300);
      });
    }
  }
}

</script>
