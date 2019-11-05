<template>
    <div class="goods">
        <goods-list-item v-for="(item,index) in goodsList" :goodsListItem="item" :key="index"></goods-list-item>
    </div>
</template>

<script>
    import GoodsListItem from './GoodsListItem'
    export default {
        name: "GoodsList",
        props:{
          goodsList:{
              type:Array,
              default(){
                  return []
              }
          }
        },
        components:{
            GoodsListItem
        }
    }
</script>

<style scoped>
    .goods{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 2%;
    }
</style>