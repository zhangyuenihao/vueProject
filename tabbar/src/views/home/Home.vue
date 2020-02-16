<template>
    <div id="home">
        <nav-bar class="home-nav">
            <div slot="center">购物街</div>
        </nav-bar>
        <tab-control class=" tabControl"
                     :titles="['流行','新款','精选']"
                     @tabClick="tabClick"
                     ref="tabControl1"
                     v-show="isTabFixed">
        </tab-control>
        <scroll class="content" ref="scroll"
                :probe-type="3"
                @scroll="contentScroll"
                :pull-up-load="true"
                @pullingUp="loadMore">
            <home-swiper :banners="banners"
                         @swiperImageLoad="swiperImageLoad">
            </home-swiper>
            <recommend-view :recommends="recommends"></recommend-view>
            <feature-view></feature-view>
            <tab-control class="home-tab"
                         :titles="['流行','新款','精选']"
                         @tabClick="tabClick"
                         ref="tabControl2">
            </tab-control>
            <goods-list :goodsList="goods[currentType].list"></goods-list>
        </scroll>
        <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
    </div>
</template>

<script>
    import HomeSwiper from './childComps/HomeSwiper'
    import RecommendView from './childComps/RecommendView'
    import FeatureView from './childComps/FeatureView'

    import NavBar from 'components/common/navbar/NavBar'
    import Scroll from 'components/common/scroll/Scroll'
    import TabControl from 'components/content/tabControl/TabControl'
    import GoodsList from 'components/content/goods/GoodsList'
    import BackTop from "components/content/backTop/BackTop"

    import {getHomeMultidata, getHomeGoods} from "network/home"
    import {debounce} from "common/utils";

    export default {
        name: "Home",
        data() {
            return {
                banners: [],
                recommends: [],
                goods: {
                    pop: {page: 0, list: []},
                    new: {page: 0, list: []},
                    sell: {page: 0, list: []}
                },
                currentType: 'pop',
                isShowBackTop: false,
                tabOffsetTop: 0,
                isTabFixed: false,
                saveY:0
            }
        },
        methods: {

            /**
             * 事件监听相关方法
             *F
             * */
            tabClick(index) {
                switch (index) {
                    case 0:
                        this.currentType = 'pop'
                        break
                    case 1:
                        this.currentType = 'new'
                        break
                    case 2:
                        this.currentType = 'sell'
                        break
                }
                this.$refs.tabControl1.currentIndex = index
                this.$refs.tabControl2.currentIndex = index
            },
            /**
             * 返回顶部 scroll是获取的组件元素
             **/
            backClick() {
                this.$refs.scroll.scrollTo(0, 0, 600)
            },

            contentScroll(position) {
                this.isShowBackTop = (-position.y) > 1000
                this.isTabFixed = (-position.y) > this.tabOffsetTop
            },
            loadMore() {
                this.getHomeGoods(this.currentType)
            },
            swiperImageLoad() {
                this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
            },
            /**
             * 网络请求相关方法
             * @returns {Q.Promise<any> | * | Q.Promise<T | never> | PromiseLike<T | never> | Promise<T | never>}
             **/
            getHomeMultidata() {
                return getHomeMultidata().then(res => {
                    console.log(res)
                    this.banners = res.data.banner.list;
                    this.recommends = res.data.recommend.list;
                    console.log(res.data)
                })
            },
            getHomeGoods(type) {

                const page = this.goods[type].page + 1
                return getHomeGoods(type, page).then(res => {
                    console.log(res)
                    this.goods[type].list.push(...res.data.list)
                    this.goods[type].page += 1
                    this.$refs.scroll.finishPullUp();
                })
            }

        },
        computed: {},

        activated() {
            this.$refs.scroll.refresh()
            this.$refs.scroll.scrollTo(0,this.saveY,0)
        },
        deactivated() {
        this.saveY=this.$refs.scroll.getScrollY()
        },
        created() {
            this.getHomeMultidata()
            this.getHomeGoods('pop')
            this.getHomeGoods('new')
            this.getHomeGoods('sell')
        },
        mounted() {
            const refresh = debounce(this.$refs.scroll.refresh, 200)
            //图片加载事件
            this.$bus.$on('itemImageLoad', () => {
                refresh()
            })

        },
        components: {
            NavBar, HomeSwiper, Scroll, RecommendView, FeatureView, TabControl, GoodsList,
            BackTop
        }
    };
</script>

<style scoped>
    #home {
        padding-top: 44px;
        height: 100vh;
        position: relative;
    }

    .home-nav {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background: var(--color-tint);
        color: #fff;
        z-index: 10;
    }

    .home-tab {
        position: sticky;
        top: 44px;
        background: white;
    }

    .tabControl {
        position: relative;
        z-index: 99;
        background: #ffffff;
    }

    .content {
        position: absolute;
        top: 44px;
        right: 0;
        bottom: 49px;
        left: 0;
        overflow: hidden;
    }
</style>
