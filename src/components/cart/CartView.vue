<template>
  <div id="app" class="shopping-cart">
    <!-- 顶部提示栏，可根据需求决定是否保留及功能 -->
    <div class="cart-notice">
      <span>您有5元消费券待领取</span>
      <button class="notice-btn">去领取</button>
    </div>
    <h2>我的购物车</h2>
    <table class="cart-table">
      <thead>
        <tr>
          <th>商品名称</th>
          <th>价格</th>
          <th>数量</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in cartItems" :key="index">
          <td>{{ item.name }}</td>
          <td>¥{{ item.price }}</td>
          <td>
            <button @click="decreaseQuantity(index)">-</button>
            {{ item.quantity }}
            <button @click="increaseQuantity(index)">+</button>
          </td>
          <td><button @click="removeItem(index)">移除</button></td>
        </tr>
      </tbody>
    </table>
    <p class="total">总计：¥{{ totalPrice }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cartItems: [
        { name: '黑尾大勾抢食鱼饲料高蛋白不浑', price: 25.3, quantity: 1 },
        { name: '美的4.5公斤全自动洗衣机', price: 539, quantity: 1 }
        // 可继续添加更多商品数据，模拟真实购物车
      ]
    };
  },
  computed: {
    totalPrice() {
      return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    }
  },
  methods: {
    decreaseQuantity(index) {
      if (this.cartItems[index].quantity > 1) {
        this.cartItems[index].quantity--;
      }
    },
    increaseQuantity(index) {
      this.cartItems[index].quantity++;
    },
    removeItem(index) {
      this.cartItems.splice(index, 1);
    }
  }
};
</script>

<style scoped>
/* 购物车整体容器样式 */
.shopping-cart {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  color: #333;
}
/* 顶部提示栏样式 */
.cart-notice {
  background-color: #fef5f5;
  border: 1px solid #fde2e2;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.cart-notice span {
  color: #e60012;
}
.notice-btn {
  background-color: #e60012;
  color: #fff;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
}
/* 表格样式 */
.cart-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 15px;
}
.cart-table thead {
  background-color: #f5f5f5;
}
.cart-table th,
.cart-table td {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: left;
}
/* 按钮通用样式 */
.cart-table button {
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  padding: 4px 8px;
  cursor: pointer;
  margin: 0 4px;
  border-radius: 4px;
}
.cart-table button:hover {
  background-color: #eaeaea;
}
/* 总计样式 */
.total {
  text-align: right;
  font-weight: bold;
  color: #e60012;
}
</style>