<template>
    <swiper :banners="banners" class="detail-swiper"></swiper>
</template>

<script>
    import Swiper from "components/common/swiper/Swiper";
    export default {
        name: "detailSwiper",
        props:{
          banners:{
              type:Array,
              default(){
                  return []
              }
          }
        },
        components:{
            Swiper
        }
    }
</script>

<style scoped>
.detail-swiper{
    height: 300px;
}
</style>