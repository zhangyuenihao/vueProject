<template>
    <div class="cartItem" v-if="Object(item).length!==0">
        <checked-btn :is-checked="item.isChecked" @click.native="checkClick"></checked-btn>
        <img class="cartImage" :src="item.image" alt="">
        <div class="cart-info">
            <p class="title">{{item.title}}</p>
            <p class="current">{{item.currentStyle}};{{item.currentSize}}</p>
            <div class="curretPrice">
                <span class="cart-price">￥{{item.currentPrice}}</span>
                <count-btn class="count-btn" :count="item.count" @subClick="subClick(item.count)"
                           @addClick="addClick(item.count)"></count-btn>
            </div>
        </div>
    </div>

</template>

<script>
    import CountBtn from "components/content/countBtn/CountBtn";
    import CheckedBtn from "components/content/checkedBtn/CheckedBtn";

    export default {
        name: "CartListItem",
        props: {
            item: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        components: {
            CountBtn, CheckedBtn
        },
        methods: {
            subClick(count) {
                if (count < 2) {
                    return
                }
                count--
                this.item.count = count

            },
            addClick(count) {
                count++
                this.item.count = count
            },
            checkClick() {
                console.log(this.item.isChecked);
                this.item.isChecked = !this.item.isChecked
            }
        }
    }
</script>

<style scoped>
    .cartItem {
        display: flex;
        align-items: center;
        overflow: hidden;
        padding: 10px 20px;
        border-bottom: 1px solid #cccccc;
        line-height: 24px;
    }


    .cartImage {
        width: 100px;
        height: 100px;
        vertical-align: middle;
        margin: 0 10px;
    }

    .cart-info {
        flex: 1;
    }

    .title {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    .current {
        color: #aaaaaa;
        background: #eeeeee;
        padding-left: 10px;
        margin: 10px 0;
    }

    .cart-price {
        color: var(--color-high-text);
    }
</style>