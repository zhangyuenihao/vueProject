<template>
    <div id="cart">
        <nav-bar class="navBar">
            <div slot="center">购物车({{cartLength}})</div>
        </nav-bar>

        <scroll class="content" ref="scroll">

            <cart-list :cartList="cartList" v-if="Object(cartList).length!==0"></cart-list>
            <div class="empty-content" v-else>
                <div>购物车是空的！快来添点东西吧！</div>
            </div>
        </scroll>
        <cart-bottom-bar></cart-bottom-bar>

    </div>

</template>

<script>
    import NavBar from "components/common/navbar/NavBar";
    import Scroll from "components/common/scroll/Scroll";
    import {mapGetters} from 'vuex'

    import CartList from "./childComps/CartList";
    import CartBottomBar from "./childComps/CartBottomBar";

    export default {
        name: "Cart",
        data() {
            return {};
        },
        methods: {

        },
        computed: {
            ...mapGetters(['cartList', 'cartLength'])
        },
        created() {
        },
        mounted() {

        },
        activated() {
            this.$refs.scroll.refresh()
        },
        components: {
            NavBar, Scroll, CartList,CartBottomBar
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

    .content, .empty-content {
        position: absolute;
        top: 44px;
        right: 0;
        bottom: 49px;
        left: 0;
        overflow: hidden;
    }


    .empty-content div {
        color: #cccccc;
        margin: 300px auto;
        text-align: center;
    }


</style>
