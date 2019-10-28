<template>
    <div class="swiper-container">
        <slot name="parallax-bg"></slot>
        <div :class="classes.wrapperClass">
            <slot></slot>
        </div>
        <slot name="pagination"></slot>
        <slot name="button-prev"></slot>
        <slot name="button-next"></slot>
        <slot name="scrollbar"></slot>
    </div>
</template>

<script>
    import {swiper,swiperSlide} from 'vue-awesome-swiper'

    export default {
        name: "Swiper",
        components:{
            swiper,swiperSlide
        }
    }
</script>

<style scoped>

</style>