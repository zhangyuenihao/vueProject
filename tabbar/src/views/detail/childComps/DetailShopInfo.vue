<template>
    <div class="shop-info">
        <div class="top">
            <span class="logo"><img :src="shop.logo" alt=""></span>
            <span class="name">{{shop.name}}</span>
        </div>
        <div class="content">
            <div class="left">
                <span class="left-item sell">
                    <span class="number">{{shop.sells|sellCountFilter}}</span>
                    <span class="text">总销量</span>
                </span>
                <span class="left-item all">
                    <span class="number">{{shop.goodsCount}}</span>
                    <span class="text">全部宝贝</span>
                </span>
            </div>
            <div class="right">
                <div class="score-item" v-for="(item,index) in shop.score" :key="index">
                    <span class="score-name">{{item.name}}</span>
                    <span class="score" :class="{scoreMore:item.isBetter}">{{item.score}}</span>
                    <span class="better" :class="{betterMore:item.isBetter}"><em>{{item.isBetter?'高':'低'}}</em></span>
                </div>
            </div>
        </div>
        <div class="bottom">
            <span class="enter-shop">
                进店逛逛
            </span>

        </div>
    </div>
</template>

<script>
    export default {
        name: "detailShopInfo",
        props: {
            shop: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        filters: {
            sellCountFilter: function (value) {
                if (value < 10000) return value;
                return (value / 10000).toFixed(1) + '万'
            }
        }
    }
</script>

<style scoped>
    .shop-info {
        border-top: 3px solid #ddd;
        border-bottom: 3px solid #ddd;
        overflow: hidden;
        margin-bottom: 40px;
        font-size: 14px;
    }

    .logo {
        display: inline-block;
        width: 40px;
        height: 40px;
        border: 1px solid #ccc;
        border-radius: 50%;
        overflow: hidden;
        vertical-align: middle;
        margin: 20px 10px;
    }

    .logo img {
        width: 100%;
        height: 100%;
    }

    .name {
        display: inline-block;
        line-height: 40px;
    }

    .content {
        display: flex;
        overflow: hidden;
    }

    .left {
       flex: 1;
        display: flex;
        align-items:center;
    }



    .left-item {
        flex: 1;
        text-align: center;
        line-height: 24px;
        vertical-align: middle;
    }
    .all{
        border-right:1px solid #cccccc ;
    }
    .left-item .number{
        font-size: 20px;
    }
    .left-item .text{
        display: block;
    }
    .right{
        flex: 1;
    }

    .score-item{
        padding: 0 10px 0 20px;
        display: flex;
        justify-content: space-between;
        line-height: 40px;
    }

    .score{
        width: 20px;
        margin: 0 10px;
        color: #5ea732;
    }


    .better em{
        font-style: normal;
        background:  #5ea732;
        color:#ffffff;
    }
    .scoreMore{
        color: #f13e3a;
    }
    .betterMore em{
        background: #f13e3a;
    }
    .bottom{
        text-align: center;
        margin: 10px 0 20px 0;
    }
    .enter-shop{
        display: inline-block;
       padding: 10px 40px;
        border-radius: 10px;
        background: #f2f2f2;
    }
</style>