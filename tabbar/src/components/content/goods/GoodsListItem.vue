<template>
    <div class="goods-item">
        <a :href="goodsListItem.link">
            <img class="goodsListItem-img" :src="goodsListItem.show.img" alt="">
            <div>
                <p class="goodListItem-title">{{goodsListItem.title}}</p>
                <span class="goodsListItem-price">￥{{goodsListItem.price}}</span>
                <span class="goodsListItem-cfav">{{goodsListItem.cfav}}</span>
            </div>
        </a>
    </div>
</template>

<script>
    export default {
        name: "GoodsListItem",
        props:{
          goodsListItem:{
              type:Object,
              default(){
                  return {}
              }
          }
        }
    }
</script>

<style scoped>
   .goods-item{
       width: 49%;
       font-size: 12px;
       line-height: 20px;
       text-align: center;
       margin-bottom: 5px;
   }
   .goodsListItem-img{
       width: 100%;
       border-radius: 5px;
   }
    .goodListItem-title{
        width: 100%;
        white-space:nowrap;
        overflow:hidden;
        text-overflow:ellipsis;
    }
    .goodsListItem-price{
        color: var(--color-high-text);
        vertical-align: middle;
        margin-right: 10px;
    }
    .goodsListItem-cfav{
        vertical-align: middle;
    }
   .goodsListItem-cfav:before{
       content: '';
       display: inline-block;
       width: 14px;
       height:14px;
       background: url("~assets/image/common/collect.svg") left center;
       background-size: cover;
       vertical-align: middle;
   }
</style>