<template>
    <tab-bar>
        <div class="tab-bar-item service">
            <span class="icon"></span>
            <p class="item-text">客服</p>
        </div>
        <div class="tab-bar-item shop">
            <span class="icon"></span>
            <p class="item-text">店铺</p>
        </div>
        <div class="tab-bar-item select" :class="{active:isSelected}">
            <span class="icon"></span>
            <p class="item-text">收藏</p>
        </div>
        <div class="tab-bar-item cart">
            加入购物车
        </div>
        <div class="tab-bar-item buy">
            购买
        </div>
    </tab-bar>
</template>

<script>
    import TabBar from "components/common/tabbar/TabBar";
    export default {
        name: "detailBottomBar",
        components: {
            TabBar
        },
        props: {
            isSelected: {
                type: Boolean,
                default() {
                    return false
                }
            }
        },
        data() {
            return {}
        }
    }
</script>

<style scoped>
    .tab-bar-item {
        flex: 1;
        text-align: center;
        background: #ffffff;
    }

    .icon {
        display: inline-block;
        width: 24px;
        height: 24px;
        margin-top: 5px;
        background-image: url("~assets/image/detail/detail_bottom.png");
        background-repeat: no-repeat;
        background-size: cover;
    }

    .service .icon {
        background-position: center -57px;
    }

    .shop .icon {
        background-position: center -107px;
    }

    .select.active .icon {
        background-position: center -27px;
    }

    .item-text {
        font-size: 12px;
    }

    .cart, .buy {
        text-align: center;
        line-height: 49px;
        flex: 1.5;
    }
    .cart{
        background-color:#FFCC00;
    }
    .buy{
        background-color: var(--color-tint);
        color: #ffffff;
    }
</style>