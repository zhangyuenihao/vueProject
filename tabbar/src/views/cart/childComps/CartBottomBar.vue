<template>
    <div class="cart-bottom">
        <div class="left">
            <checked-btn class="checked" :is-checked="isSelectAll"
                         @click.native="checkClick"></checked-btn>
            <span>全选</span>
        </div>

        <div class="totalPrice">
            合计:{{totalPrice}}
        </div>
        <div class="right" @click="calcClick">去计算({{checkedLength}})</div>
    </div>
</template>

<script>
    import CheckedBtn from "components/content/checkedBtn/CheckedBtn";
    import {mapGetters} from 'vuex'

    export default {
        name: "CartBottomBar",
        components: {
            CheckedBtn
        },
        computed: {
            ...mapGetters(['cartList']),
            totalPrice() {
                return '￥' + this.cartList.filter(item => {
                    return item.isChecked
                }).reduce((previousValue, item) => {
                    return previousValue + item.currentPrice * item.count
                }, 0).toFixed(2)
            },
            checkedLength() {
                return this.cartList.filter(item => item.isChecked).length
            },
            isSelectAll() {
                if (this.cartList.length === 0) return false
                return !this.cartList.find(item => !item.isChecked)
            }
        },
        methods: {
            checkClick() {
                if (this.isSelectAll) {
                    this.cartList.forEach(item => item.isChecked = false)
                } else {
                    this.cartList.forEach(item => item.isChecked = true)
                }
            },
            calcClick(){
                if(!this.isSelectAll){
                    this.$toast.show('购物车是空的,快去添加商品吧')
                }

            }
        }
    }
</script>

<style scoped>
    .cart-bottom {
        position: absolute;
        height: 40px;
        background: #efefef;
        bottom: 49px;
        width: 100%;
        display: flex;
        align-items: center;
    }

    .left {
        height: 100%;
        display: flex;
        align-items: center;
        margin-right: 40px;
    }

    .checked {
        margin: 0 10px 0 20px;
    }

    .totalPrice {
        flex: 1;
    }

    .right {
        width: 100px;
        height: 100%;
        background-color: var(--color-high-text);
        text-align: center;
        line-height: 40px;
        color: #ffffff;
    }
</style>