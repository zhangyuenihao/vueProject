<template>
    <div id="detail">
        <detail-nav-bar class="detail-nav"></detail-nav-bar>
        <scroll class="content" ref="scroll">
            <detail-swiper :banners="topImages"></detail-swiper>
            <detail-base-info :goods="goods"></detail-base-info>
            <detail-shop-info :shop="shop"></detail-shop-info>
            <detail-goods-info :detailInfo="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
        </scroll>

    </div>
</template>

<script>
    import Scroll from "components/common/scroll/Scroll";
    import DetailNavBar from "./childComps/DetailNavBar";
    import DetailSwiper from "./childComps/DetailSwiper";
    import DetailBaseInfo from "./childComps/DetailBaseInfo";
    import DetailShopInfo from "./childComps/DetailShopInfo";
    import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
    import {getDetailData,Goods,Shop} from "network/detail";

    export default {
        name: "Detail",
        data(){
            return{
                iid:null,
                detailData:null,
                topImages:[],
                goods:{},
                shop:{},
                detailInfo:{}
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
                    //获取商品详细信息
                    this.detailInfo=data.detailInfo
                    console.log(data)
                    console.log(this.detailInfo);
                }).catch(err=>{
                    console.log(JSON.stringify(err))
                })
            },
            imageLoad(){
                this.$refs.scroll.refresh()
            }
        },
        components:{
            DetailNavBar,DetailSwiper,DetailBaseInfo,DetailShopInfo,Scroll,DetailGoodsInfo
        }
    }
</script>

<style scoped>
  #detail{
      position: relative;
      z-index: 99;
      background: #ffffff;
      height: 100vh;
  }
 .detail-nav{
     position: relative;
     z-index: 2;
     background: #ffffff;
 }
    .content{
        position: absolute;
        top:44px;
        left: 0;
        right: 0;
        bottom: 0;
    }
</style>