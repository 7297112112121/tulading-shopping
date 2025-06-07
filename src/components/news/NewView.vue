<template>
    <div>
        <HeaderView />
        <SkeletonView />
    </div>
</template>

<script>
import SkeletonView from './components/SkeletonView.vue';
import HeaderView from '@/components/news/components/HearderView.vue'

export default {
    components: {
        SkeletonView,
        HeaderView
    }
}
</script>