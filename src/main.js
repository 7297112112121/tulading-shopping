import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { Button, Tabbar, TabbarItem } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import { Search } from 'vant';
import { Icon } from 'vant';
import { Grid, GridItem } from 'vant';
import { Col, Row } from 'vant';
import { NavBar } from 'vant';//NavBar 导航栏
import { Uploader } from 'vant';//Uploader 文件上传
import { Empty } from 'vant';
import { Form, Field, CellGroup } from 'vant';//Form 表单
import { Image as VanImage } from 'vant';//图片
import { RadioGroup, Radio } from 'vant';//Radio 单选框
import { TreeSelect } from 'vant';
import 'vant/lib/index.css';
import { createPinia } from 'pinia'
import store from './store/vuexStore'
import { Skeleton } from 'vant';

const app = createApp(App);
app.use(router);
app.use(Swipe);
app.use(SwipeItem);
app.use(Button);
app.use(Search);
app.use(Icon);
app.use(Tabbar);
app.use(TabbarItem);
app.use(Grid);
app.use(GridItem);
app.use(Col);
app.use(Row);
app.use(NavBar);//NavBar 导航栏
// //Uploader 文件上传
app.use(Uploader);
app.use(Empty);
//Form 表单
app.use(Form);
app.use(Field);
app.use(CellGroup);
//图片
app.use(VanImage);
//Radio 单选框
app.use(RadioGroup);
app.use(Radio);
app.use(TreeSelect);
app.use(createPinia());
app.use(store);
app.use(Skeleton);



app.mount('#app');
