<template>
    <div id="detail">
        <detail-nav-bar class="detail-nav"
                        @titleClick="titleClick"
                        ref="detaiNav"></detail-nav-bar>
        <detail-add-to-cart v-show="isShowSku" :sku-info="skuInfo" :iid="iid" class="addToCart"
                            @cartClick="cartClick"></detail-add-to-cart>

        <scroll class="content" ref="scroll"
                :probe-type="3"
                @scroll="contentScroll">

            <detail-swiper ref="detailSwiper" :banners="topImages"></detail-swiper>
            <detail-base-info :goods="goods"></detail-base-info>
            <detail-shop-info :shop="shop"></detail-shop-info>
            <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
            <detail-params-info ref="params" :params-info="paramsInfo"></detail-params-info>
            <detail-comment-info ref="comment" :comment-info="commentInfo"></detail-comment-info>
            <goods-list ref="recommend" class="detail-recommend" :goods-list="recommend"></goods-list>
        </scroll>
        <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
        <detail-bottom-bar @cartClick="cartClick"></detail-bottom-bar>

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
    import DetailBottomBar from "./childComps/DetailBottomBar";
    import DetailAddToCart from "./childComps/DetailAddToCart";
    import {getDetailData, getRecommend, Goods, Shop, Params} from "network/detail";
    import {debounce} from "common/utils";
    import {itemListenerMixin, backTopMixin} from "common/mixin";

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
                commentInfo: {},
                skuInfo: {},
                recommend: [],
                themeTopYs: [],
                getThemeTopY: null,
                currentIndex: 0,
                isShowSku: false
            }
        },
        mixins: [itemListenerMixin, backTopMixin],
        created() {
            this.iid = this.$route.params.iid
            this.getDetailData(this.iid)
            this.getRecommend()

            this.getThemeTopY = debounce(() => {
                //每次获取先清空
                this.themeTopYs = []
                this.themeTopYs.push(this.$refs.detailSwiper.$el.offsetTop)
                this.themeTopYs.push(this.$refs.params.$el.offsetTop)
                this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
                this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
                this.themeTopYs.push(Number.MAX_VALUE)
            }, 200)
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
                    this.paramsInfo = new Params(data.itemParams)
                    //获取商品评论信息,如果评论信息不为零才展示
                    if (data.rate.cRate !== 0) {
                        this.commentInfo = data.rate.list[0]
                    }
                    //获取商品购物车信息
                    this.skuInfo = data.skuInfo
                }).catch(err => {
                    console.log(JSON.stringify(err))
                })
            },
            //获取推荐信息
            getRecommend() {
                return getRecommend().then(res => {
                    this.recommend = res.data.list
                })
            },
            imageLoad() {
                this.newRefresh()
                this.getThemeTopY()
            },
            titleClick(index) {
                this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 200)
            },
            contentScroll(position) {
                const positionY = -position.y
                const length = this.themeTopYs.length
                for (var i = 0; i < length; i++) {
                    if (this.currentIndex !== i) {
                        if (positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i + 1]) {
                            this.currentIndex = i
                        }
                    }
                }
                this.$refs.detaiNav.currentIndex = this.currentIndex
                this.listenShowBackTop(position)
            },
            cartClick() {
                this.isShowSku = !this.isShowSku
            }
        },
        destroyed() {
            this.$bus.$off('itemImageLoad', this.itemImgListener)
        },
        components: {
            DetailNavBar, DetailSwiper, DetailBaseInfo, DetailShopInfo, Scroll, DetailGoodsInfo,
            DetailParamsInfo, DetailCommentInfo, GoodsList, DetailBottomBar, DetailAddToCart
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

    .content, .addToCart {
        position: absolute;
        top: 44px;
        left: 0;
        right: 0;
        bottom: 49px;
        overflow: hidden;
    }

    .addToCart {
        bottom: 0;
        z-index: 20;
    }

    .detail-recommend {
        border-top: 3px solid #eeeeee;
    }
</style>