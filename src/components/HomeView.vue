
<template>
    <div>
    <LoginView />
    <Dynamics />
    <Suggestion />
    <SwipeView />
    <ListView />
    </div>
</template>
<script>
import LoginView from './index/TopView.vue'
import SwipeView from './index/SwipeView.vue'
import ListView from './index/ListView.vue'
import Suggestion from './index/SuggestionView.vue'
import Dynamics from './index/DynamicsView.vue'
export default {
    name: 'HomeView',
    components: {
        LoginView,
        SwipeView,
        ListView,
        Suggestion,
        Dynamics
    }
}
</script>