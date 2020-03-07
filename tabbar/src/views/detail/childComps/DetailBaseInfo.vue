<template>
    <div class="itemInfo" v-if="Object.keys(goods).length!==0">
        <div class="info-title">
            {{goods.title}}
        </div>
        <div class="info-price">
            <span class="n-price">{{goods.newPrice}}</span>
            <span class="o-price">{{goods.oldPrice}}</span>
            <span class="discount" v-if="goods.discount" :style="{backgroundColor:goods.discountBgColor}">{{goods.discount}}</span>
        </div>
        <div class="info-others">
            <span>{{goods.columns[0]}}</span>
            <span>{{goods.columns[1]}}</span>
            <span>{{goods.services[goods.services.length-1].name}}</span>
        </div>
        <div class="info-sevice">
            <span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
                <img :src="goods.services[index-1].icon" alt="">
                <span>{{goods.services[index-1].name}}</span>
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "detailBaseInfo",
        props: {
            goods: {
                type: Object,
                default() {
                    return {}
                }
            }
        }
    }
</script>

<style scoped>
    .itemInfo{
        padding:0 10px;
    }
 .info-title{
     margin:20px 0;
     font-size: 14px;
     line-height: 20px;
 }
    .n-price{
        color: var(--color-high-text);
        font-size: 20px;
    }
    .o-price{
        text-decoration: line-through;
        font-size: 12px;
        color: #ccc;
        margin: 0 10px;
    }
    .discount{
        background: var(--color-high-text);
        color: #ffffff;
        font-size: 12px;
        vertical-align: top;
        border-radius: 5px;
        padding: 2px 5px;
    }
    .info-others{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        font-size: 12px;
        color: #cccccc;
        line-height: 40px;
        border-bottom:1px solid #dddddd ;
        margin-top: 10px;
    }

    .info-sevice{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        font-size: 14px;
        line-height: 60px;
    }

    .info-service-item img{
       width: 14px;
        height: 14px;
       vertical-align: middle;
    }
</style>