<template>
   <swiper :banners="banners"></swiper>
</template>

<script>
    import Swiper from 'components/common/swiper/Swiper'

    export default {
        name: "HomeSwiper",
        props: {
            banners: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        components: {
            Swiper
        }
    }
</script>

<style>

</style>