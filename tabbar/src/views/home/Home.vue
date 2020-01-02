<template>
    <div id="home">
        <nav-bar class="home-nav">
            <div slot="center">购物街</div>
        </nav-bar>
        <scroll class="content">
            <home-swiper :banners="banners"></home-swiper>
            <recommend-view :recommends="recommends"></recommend-view>
            <feature-view></feature-view>
            <tab-control class="home-tab" :titles="['流行','新款','精选']" @tabClick="tabClick"></tab-control>
            <goods-list :goodsList="goods[currentType].list"></goods-list>

        </scroll>
        <ul>
            <li>商品1</li>
            <li>商品2</li>
            <li>商品3</li>
            <li>商品4</li>
            <li>商品5</li>
            <li>商品6</li>
            <li>商品7</li>
            <li>商品8</li>
            <li>商品9</li>
            <li>商品10</li>
            <li>商品11</li>
            <li>商品12</li>
            <li>商品13</li>
            <li>商品14</li>
            <li>商品15</li>
            <li>商品16</li>
            <li>商品17</li>
            <li>商品18</li>
            <li>商品19</li>
            <li>商品20</li>
            <li>商品21</li>
            <li>商品22</li>
            <li>商品23</li>
            <li>商品24</li>
            <li>商品25</li>
            <li>商品26</li>
            <li>商品27</li>
            <li>商品28</li>
            <li>商品29</li>
            <li>商品30</li>
        </ul>
    </div>
</template>

<script>
    import HomeSwiper from './childComps/HomeSwiper'
    import RecommendView from './childComps/RecommendView'
    import FeatureView from './childComps/FeatureView'

    import NavBar from 'components/common/navbar/NavBar'
    import TabControl from 'components/content/tabControl/TabControl'
    import GoodsList from 'components/content/goods/GoodsList'
    import Scroll from 'components/common/scroll/Scroll'

    import {getHomeMultidata, getHomeGoods} from "network/home"

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
                currentType: 'pop'
            }
        },
        methods: {
            /**
             * 事件监听相关方法
             */
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
            },

            /**
             * 网络请求相关方法
             * @returns {Q.Promise<any> | * | Q.Promise<T | never> | PromiseLike<T | never> | Promise<T | never>}
             */
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
                })
            }
        }
        ,
        computed: {}
        ,
        created() {
            this.getHomeMultidata()
            this.getHomeGoods('pop')
            this.getHomeGoods('new')
            this.getHomeGoods('sell')
        }
        ,
        mounted() {
        }
        ,
        components: {
            NavBar, HomeSwiper, RecommendView, FeatureView, TabControl, GoodsList, Scroll
        }
    }
    ;
</script>

<style scoped>
    #home {
        padding-top: 44px;
        position: relative;
        height: 100vh;
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

    .content {
        overflow: hidden;
      position: absolute;
        top: 44px;
        bottom: 49px;
        left: 0;
        right: 0;
        background: white;
    }
</style>
