<template>
    <tab-bar class="tab-bar">
        <tab-bar-item path="/home" activeColor="#ff5777">
            <img src="~assets/image/tabbar/home.svg" slot="item-icon">
            <img src="~assets/image/tabbar/home_active.svg" alt="" slot="item-active-icon">
            <div slot="item-text">首页</div>
        </tab-bar-item>
        <tab-bar-item path="/category" activeColor="#ff5777">
            <img src="~assets/image/tabbar/category.svg" slot="item-icon">
            <img src="~assets/image/tabbar/category_active.svg" alt="" slot="item-active-icon">
            <div slot="item-text">分类</div>
        </tab-bar-item>
        <tab-bar-item path="/cart" activeColor="#ff5777">
            <img src="~assets/image/tabbar/shopcart.svg" slot="item-icon">
            <img src="~assets/image/tabbar/shopcart_active.svg" alt="" slot="item-active-icon">
            <div slot="item-text">购物车</div>
        </tab-bar-item>
        <tab-bar-item path="/profile" activeColor="#ff5777">
            <img src="~assets/image/tabbar/profile.svg" slot="item-icon">
            <img src="~assets/image/tabbar/profile_active.svg" alt="" slot="item-active-icon">
            <div slot="item-text">我的</div>
        </tab-bar-item>
    </tab-bar>
</template>

<script>
    import TabBar from 'components/common/tabbar/TabBar'
    import TabBarItem from 'components/common/tabbar/TabBarItem'

    export default {
        name: "MainTabBar",
        components: {
            TabBar, TabBarItem
        }
    }
</script>

<style scoped>
    .tab-bar {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 10;
    }
</style>