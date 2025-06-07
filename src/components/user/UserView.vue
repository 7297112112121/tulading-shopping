<template>
    <div>
        <HeardersView />
        <ExchangeView />
        <MenuView />
        <ReleaseView />
    </div>
</template>
<script>
import ReleaseView from './components/ReleaseView.vue';
import MenuView from './components/MemuView.vue';
import HeardersView from './components/HeardersView.vue';
import ExchangeView from './components/ExchangeView.vue';

export default {
    name:'UserView',
    components:{
        ReleaseView,
        ExchangeView,
        MenuView,
        HeardersView,
    }
}
</script>