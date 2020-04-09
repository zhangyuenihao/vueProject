<template>
    <div class="goods-item" @click="itemClick">
        <img class="goodsListItem-img" v-lazy="goodsListItem.img" alt="" @load="itemImageLoad">
        <div class="goodsListItem-info">
            <p class="goodListItem-title">{{goodsListItem.title}}</p>
            <span class="goodsListItem-price">￥{{goodsListItem.price}}</span>
            <span class="goodsListItem-cfav">{{goodsListItem.cfav}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "GoodsListItem",
        props: {
            goodsListItem: {
                type: Object,
                default() {
                    return {

                    }
                }
            }
        },
        data() {
            return {
                iid: ''
            }
        },
        methods: {
            itemImageLoad() {
                this.$bus.$emit('itemImageLoad')
            },
            itemClick() {
                this.iid = this.goodsListItem.iid ? this.goodsListItem.iid : this.goodsListItem.item_id
                this.$router.push('/detail/' + this.iid)
            }

        },
        computed: {


        }
    }
</script>

<style scoped>
    .goods-item {
        width: 49%;
        font-size: 12px;
        line-height: 20px;
        text-align: center;
        margin-bottom: 5px;
    }

    .goodsListItem-img {
        width: 100%;
        border-radius: 5px;
    }

    .goodListItem-title {
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .goodsListItem-price {
        color: var(--color-high-text);
        margin-right: 10px;
    }

    .goodsListItem-cfav {

    }

    .goodsListItem-cfav:before {
        content: '';
        display: inline-block;
        width: 14px;
        height: 14px;
        background: url("~assets/image/common/collect.svg") center center;
        background-size: cover;
        vertical-align: middle;
        margin-top: -1px;
    }
</style>