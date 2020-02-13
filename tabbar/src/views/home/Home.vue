<template>
    <div id="home">
        <nav-bar class="home-nav">
            <div slot="center">购物街</div>
        </nav-bar>
<<<<<<< HEAD
        <Scroll class="content" ref="scroll">
=======
        <scroll class="content">
>>>>>>> origin/dev
            <home-swiper :banners="banners"></home-swiper>
            <recommend-view :recommends="recommends"></recommend-view>
            <feature-view></feature-view>
            <tab-control class="home-tab" :titles="['流行','新款','精选']" @tabClick="tabClick"></tab-control>
            <goods-list :goodsList="goods[currentType].list"></goods-list>
<<<<<<< HEAD
        </Scroll>
        <back-top @click.native="backClick"></back-top>
=======

        </scroll>
>>>>>>> origin/dev
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
    import Scroll from 'components/common/scroll/Scroll'
    import TabControl from 'components/content/tabControl/TabControl'
    import GoodsList from 'components/content/goods/GoodsList'
<<<<<<< HEAD
    import BackTop from "components/content/backTop/BackTop"
=======
    import Scroll from 'components/common/scroll/Scroll'
>>>>>>> origin/dev

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
<<<<<<< HEAD
            },
            /**
             * 返回顶部 scroll是获取的组件元素
             */
            backClick(x,y,time){
                console.log('1')
              this.$refs.scroll.scrollTo(0,0,600)

=======
>>>>>>> origin/dev
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
<<<<<<< HEAD

                const page = this.goods[type].page + 1
                return getHomeGoods(type, page).then(res => {
                    console.log(res)
                    this.goods[type].list = res.data.list
=======
                const page = this.goods[type].page + 1
                return getHomeGoods(type, page).then(res => {
                    console.log(res)
                    this.goods[type].list.push(...res.data.list)
>>>>>>> origin/dev
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
<<<<<<< HEAD
            NavBar, HomeSwiper, Scroll, RecommendView, FeatureView, TabControl, GoodsList,
            BackTop
=======
            NavBar, HomeSwiper, RecommendView, FeatureView, TabControl, GoodsList, Scroll
>>>>>>> origin/dev
        }
    }
    ;
</script>

<style scoped>
    #home {
<<<<<<< HEAD
      padding-top: 44px;
      height: 100vh;
        position: relative;
=======
        padding-top: 44px;
        position: relative;
        height: 100vh;
>>>>>>> origin/dev
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
<<<<<<< HEAD
        position: absolute;
        top: 44px;
        right: 0;
        bottom: 49px;
        left: 0;
        background-color: white;
=======
        overflow: hidden;
      position: absolute;
        top: 44px;
        bottom: 49px;
        left: 0;
        right: 0;
        background: white;
>>>>>>> origin/dev
    }
</style>
