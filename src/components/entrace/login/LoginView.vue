<template>
    <HeaderView />
    <ImgView />
    <FormView />
    <InforView />
</template>
<script>
import FormView from './components/FormView.vue';
import HeaderView from './components/HeaderView.vue';
import ImgView from './components/ImgView.vue';
import InforView from './components/InforView.vue';

export default {
  name: 'LoginView',
  components: {
    FormView,
    HeaderView,
    ImgView,
    InforView
  }
}
</script>