<template>
    <div id="home">
        <nav-bar class="home-nav">
            <div slot="center">购物街</div>
        </nav-bar>
        <home-swiper :banners="banners"></home-swiper>
        <recommend-view :recommends="recommends"></recommend-view>
        <feature-view></feature-view>
    </div>
</template>

<script>
    import NavBar from 'components/common/navbar/NavBar'
    import HomeSwiper from './childComps/HomeSwiper'
    import RecommendView from './childComps/RecommendView'
    import FeatureView from  './childComps/FeatureView'
    import {getHomeMultidata} from "network/home";

    export default {
        name: "Home",
        data() {
            return {
                banner:{},
                dKeyword:{},
                keywords:{},
                recommend:{},
                banners:[],
                recommends:[]
            };
        },
        methods: {},
        computed: {},
        created() {
            getHomeMultidata().then(res=>{
                this.banner=res.data.banner;
                this.dKeyword=res.data.dKeyword;
                this.keywords=res.data.keywords;
                this.recommend=res.data.recommend;
                this.banners=res.data.banner.list;
                this.recommends=res.data.recommend.list;
                console.log(res.data)
            })
        },
        mounted() {
        },
        components: {
            NavBar,HomeSwiper,RecommendView,FeatureView
        }
    };
</script>

<style>
.home-nav{
    background: #d81e06;
    color: #fff;
}
</style>
