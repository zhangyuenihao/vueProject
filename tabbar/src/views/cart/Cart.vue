<template>
    <div id="cart">
        <nav-bar class="navBar">
            <div slot="center">购物车({{cartLength}})</div>
        </nav-bar>
        <scroll class="content" ref="scroll">
            <div>{{$store.state.cartList}}</div>
            <div class="cartList">
                <div class="item">

                    <img src="" alt="">
                    <div class="info">
                        <p class="title"></p>
                        <p class="current"></p>
                        <div class="curretPrice">
                            <span class="price"></span>
                            <div class="count"></div>
                        </div>

                    </div>


                </div>
            </div>
        </scroll>

    </div>

</template>

<script>
    import NavBar from "components/common/navbar/NavBar";
    import Scroll from "components/common/scroll/Scroll";
    import {mapGetters} from 'vuex'

    export default {
        name: "Cart",
        data() {
            return {};
        },
        methods: {},
        computed: {
            ...mapGetters(['cartList', 'cartLength'])
        },
        created() {
        },
        mounted() {
            console.log(this.$store.state.cartList);
        },
        components: {
            NavBar, Scroll
        }
    };
</script>

<style scoped>
    #cart {
        position: relative;
        height: 100Vh;
    }

    .navBar {
        background-color: var(--color-tint);
        color: #ffffff;
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
