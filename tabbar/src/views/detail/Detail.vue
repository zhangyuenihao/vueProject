<template>
    <div id="detail">
        <detail-nav-bar></detail-nav-bar>
        <detail-swiper :banners="topImages"></detail-swiper>
        <detail-base-info :goods="goods"></detail-base-info>
        <detail-shop-info :shop="shop"></detail-shop-info>
        详情页 {{iid}}
    </div>
</template>

<script>
    import detailNavBar from "./childComps/detailNavBar";
    import detailSwiper from "./childComps/detailSwiper";
    import detailBaseInfo from "./childComps/detailBaseInfo";
    import detailShopInfo from "./childComps/detailShopInfo";
    import {getDetailData,Goods,Shop} from "network/detail";

    export default {
        name: "Detail",
        data(){
            return{
                iid:null,
                detailData:null,
                topImages:[],
                goods:{},
                shop:{}
            }
        },
        created() {
            this.iid=this.$route.params.iid
            this.getDetailData(this.iid)
        },
        methods:{
          getDetailData(iid){
                return getDetailData(iid).then(res=>{

                    let data=res.result
                    //根据id获取轮播图信息
                    this.topImages=data.itemInfo.topImages
                    //获取商品信息
                    this.goods=new Goods(data.itemInfo,data.columns,data.shopInfo.services)
                    //获取商家信息
                    this.shop=new Shop(data.shopInfo)
                    console.log(data)
                    console.log(this.shop);
                }).catch(err=>{
                    console.log(JSON.stringify(err))
                })
            }
        },
        components:{
            detailNavBar,detailSwiper,detailBaseInfo,detailShopInfo
        }
    }
</script>

<style scoped>

</style>