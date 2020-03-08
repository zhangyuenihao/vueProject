<template>
    <div id="detail">
        <detail-nav-bar class="detail-nav"></detail-nav-bar>
        <scroll class="content" ref="scroll">
            <detail-swiper :banners="topImages"></detail-swiper>
            <detail-base-info :goods="goods"></detail-base-info>
            <detail-shop-info :shop="shop"></detail-shop-info>
            <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
            <detail-params-info :params-info="paramsInfo"></detail-params-info>
            <detail-comment-info :comment-info="commentInfo"></detail-comment-info>
            <goods-list class="detail-recommend" :goods-list="recommend"></goods-list>
        </scroll>

    </div>
</template>

<script>
    import Scroll from "components/common/scroll/Scroll";
    import GoodsList from "components/content/goods/GoodsList";
    import DetailNavBar from "./childComps/DetailNavBar";
    import DetailSwiper from "./childComps/DetailSwiper";
    import DetailBaseInfo from "./childComps/DetailBaseInfo";
    import DetailShopInfo from "./childComps/DetailShopInfo";
    import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
    import DetailParamsInfo from "./childComps/DetailParamsInfo";
    import DetailCommentInfo from "./childComps/DetailCommentInfo";
    import {getDetailData,getRecommend, Goods, Shop,Params} from "network/detail";
    import {itemListenerMixin} from "common/mixin";

    export default {
        name: "Detail",
        data() {
            return {
                iid: null,
                detailData: null,
                topImages: [],
                goods: {},
                shop: {},
                detailInfo: {},
                paramsInfo: {},
                commentInfo:{},
                recommend:[]
            }
        },
        mixins:[itemListenerMixin],
        created() {
            this.iid = this.$route.params.iid
            this.getDetailData(this.iid)
            this.getRecommend()
        },
        methods: {
            //获取详情页信息
            getDetailData(iid) {
                return getDetailData(iid).then(res => {

                    let data = res.result
                    //根据id获取轮播图信息
                    this.topImages = data.itemInfo.topImages
                    //获取商品信息
                    this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
                    //获取商家信息
                    this.shop = new Shop(data.shopInfo)
                    //获取商品详细信息
                    this.detailInfo = data.detailInfo
                    //获取商品参数信息
                    this.paramsInfo=new Params(data.itemParams)
                    //获取商品评论信息,如果评论信息不为零才展示
                    if(data.rate.cRate!==0){
                        this.commentInfo=data.rate.list[0]
                    }
                }).catch(err => {
                    console.log(JSON.stringify(err))
                })
            },
            //获取推荐信息
            getRecommend(){
                return getRecommend().then(res=>{
                    console.log(res);
                    this.recommend=res.data.list
                })
            },
            imageLoad() {
                this.$refs.scroll.refresh()
            }
        },
        destroyed(){
            this.$bus.$off('itemImageLoad',this.itemImgListener)
        },
        components: {
            DetailNavBar, DetailSwiper, DetailBaseInfo, DetailShopInfo, Scroll, DetailGoodsInfo,
            DetailParamsInfo,DetailCommentInfo,GoodsList
        }
    }
</script>

<style scoped>
    #detail {
        position: relative;
        z-index: 99;
        background: #ffffff;
        height: 100vh;
    }

    .detail-nav {
        position: relative;
        z-index: 2;
        background: #ffffff;
    }

    .content {
        position: absolute;
        top: 44px;
        left: 0;
        right: 0;
        bottom: 0;
    }
    .detail-recommend{
        border-top: 3px solid #eeeeee;
    }
</style>