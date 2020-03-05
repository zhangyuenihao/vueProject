<template>
    <div>
        <swiper :options="swiperOption"
                v-if="banners.length>0"
                ref="mySwiper"
                @mouseenter.native="onEnter"
                @mouseleave.native="onLeave">
            <swiper-slide v-for="item in banners" :key="item.title">
                <a >
                    <img :src="item" class="swiper-img" @load="imageLoad" >
                </a>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>

</template>

<script>
    import {swiper, swiperSlide} from 'vue-awesome-swiper'

    export default {
        name: "Swiper",
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
                },
                isLoad:false
            }
        },
        methods: {
            onEnter() {
                this.mySwiper.autoplay.stop()

            },
            onLeave() {
                this.mySwiper.autoplay.start()
            },
            imageLoad(){
                if(!this.isLoad){
                    this.$emit('swiperImageLoad')
                    this.isLoad=true
                    console.log(this.isLoad);
                }

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
    .swiper-container{
        width: 100%;
        height: 100%;
    }
    .swiper-slide img{
        width: 100%;

    }
    .swiper-pagination-bullet-active{
        background: var(--color-high-text) !important;
    }
</style>