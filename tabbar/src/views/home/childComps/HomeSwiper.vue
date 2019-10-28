<template>
    <div>
        <swiper :options="swiperOption"
                v-if="banners.length>0"
                ref="mySwiper"
                @mouseenter.native="onEnter"
                @mouseleave.native="onLeave">
            <swiper-slide v-for="item in banners" :key="item.title">
                <a :href="item.link">
                    <img :src="item.image" class="swiper-img" >
                </a>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>

</template>

<script>
    import {swiper, swiperSlide} from 'vue-awesome-swiper'

    export default {
        name: "HomeSwiper",
        components: {
            swiper, swiperSlide
        },
        props: {
            banners: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        data() {
            return {
                swiperOption: {
                    notNextTick: true,
                    observer: true,
                    observeParents: true,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    },
                    loop: true,
                    autoplay: {
                        disableOnInteraction: false,
                    },
                }
            }
        },
        methods: {
            onEnter() {
                this.mySwiper.autoplay.stop()

            },
            onLeave() {
                this.mySwiper.autoplay.start()
            }
        },
        computed: {
            //获取可以操作的swiper
            mySwiper() {
                return this.$refs.mySwiper.swiper
            }
        }
    }
</script>

<style>
 .swiper-slide img{
     width: 100%;
 }
</style>