<template>
    <div id="detail">
        <detail-nav-bar></detail-nav-bar>
        <detail-swiper :banners="topImages"></detail-swiper>
        详情页 {{iid}}
    </div>
</template>

<script>
    import detailNavBar from "./childComps/detailNavBar";
    import detailSwiper from "./childComps/detailSwiper";

    import {getDetailData} from "network/detail";

    export default {
        name: "Detail",
        data(){
            return{
                iid:null,
                detailData:null,
                topImages:[]
            }
        },
        created() {
            this.iid=this.$route.params.iid
            this.getDetailData(this.iid)
        },
        methods:{
          getDetailData(iid){
                return getDetailData(iid).then(res=>{
                    console.log(res.result.itemInfo.topImages);
                    this.topImages=res.result.itemInfo.topImages
                })
            }
        },
        components:{
            detailNavBar,detailSwiper
        }
    }
</script>

<style scoped>

</style>