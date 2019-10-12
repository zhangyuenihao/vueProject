<template>
    <tab-bar>
        <tab-bar-item path="/home" activeColor="#d81e06">
            <img src="../assets/image/tabbar/home.svg" alt=""　slot="item-icon">
            <img src="../assets/image/tabbar/home_active.svg" alt="" slot="item-active-icon">
            <div slot="item-text">首页</div>
        </tab-bar-item>
        <tab-bar-item path="/category" activeColor="#d81e06">
            <img src="../assets/image/tabbar/category.svg" alt=""　slot="item-icon">
            <img src="../assets/image/tabbar/category_active.svg" alt="" slot="item-active-icon">
            <div slot="item-text">分类</div>
        </tab-bar-item>
        <tab-bar-item path="/cart" activeColor="#d81e06">
            <img src="../assets/image/tabbar/shopcart.svg" alt=""　slot="item-icon">
            <img src="../assets/image/tabbar/shopcart_active.svg" alt="" slot="item-active-icon">
            <div slot="item-text">购物车</div>
        </tab-bar-item>
        <tab-bar-item path="/profile" activeColor="#d81e06">
            <img src="../assets/image/tabbar/profile.svg" alt=""　slot="item-icon">
            <img src="../assets/image/tabbar/profile_active.svg" alt="" slot="item-active-icon">
            <div slot="item-text">我的</div>
        </tab-bar-item>
    </tab-bar>
</template>

<script>
    import TabBar from './tabbar/TabBar'
    import TabBarItem from './tabbar/TabBarItem'
    export default {
        name: "MainTabBar",
        components:{
            TabBar,TabBarItem
        }
    }
</script>

<style scoped>

</style>