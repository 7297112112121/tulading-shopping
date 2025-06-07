<template>
    <div>
<van-form @submit="onSubmit" class="form">
  <van-cell-group inset class="flex-column container">
    <label>用户名：</label>
    <van-field 
      class="inputForm form_style"
      v-model="username"
      name="用户名"
      :label-width="45"
      placeholder="请输入"
      :rules="[{ required: true }]"
    />
    <label>密码：</label>
    <van-field
      class="inputForm form_style"
      v-model="password"
      type="password"
      name="密码"
      placeholder="请输入"
      :rules="[{ required: true }]"
    />
  </van-cell-group>
  <div  >
    <van-button round block type="primary" native-type="submit" class="button-submit">
      登录
    </van-button>
  </div>
</van-form>

    </div>
</template>
<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    onSubmit() {
      console.log('submit', { username: this.username, password: this.password });
    }
  }
};
</script>
<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #ffffff;
  padding: 15px;
  width: 90%;
  border-radius: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.flex-column > label {
  color: #151717;
  font-weight: 600;
}
.inputForm {
  border: 1.5px solid #ecedec;
  border-radius: 10px;
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  transition: 0.2s ease-in-out;
}
.inputForm:focus-within {
  border: 3px solid #01040b;
}
.button-submit {
  margin: 20px 0 10px 0;
  background-color:rgb(240, 217, 3);
  border: none;
  color:#ffffff;
  font-size: 20px;
  font-weight: 500;
  border-radius: 10px;
  height: 50px;
  width: 100%;
  cursor: pointer;
}
.button-submit:hover {
  background-color:rgb(240, 217, 3) ;
}
body {
  /* 设置背景为线性渐变，从上到下，顶部为白色，底部为黄色 */
  background: linear-gradient(to bottom, #ffffff 70%, yellow 150%);
  /* 设置背景大小为覆盖整个页面 */
  background-size: cover;
  /* 设置背景位置为页面中心 */
  background-position: center;
  /* 设置背景不重复 */
  background-repeat: no-repeat;
  /* 设置背景固定，不随页面滚动 */
  background-attachment: fixed;
  /* 设置锐化效果 */
  filter: contrast(120%);
}
.container {
  /* max-width: 350px; */
  background: #F8F9FD;
  background: linear-gradient(0deg, rgb(255, 255, 255) 0%, rgb(244, 247, 251) 100%);
  /* border-radius: 40px; */
  /* padding: 25px 35px; */
  border: 5px solid rgb(255, 255, 255);
  /* margin: 20px; */
}
.form_style {
  outline: none;
  border: 2px solid #264143;
  padding: 12px 10px;
  border-radius: 4px;
  font-size: 15px;
}
</style>