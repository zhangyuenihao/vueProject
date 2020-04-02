<template>
    <div class="cartList" v-if="Object(cartList).length!==0">
    <cart-list-item v-for="(item,index) in cartList" :key="index" :item="item" :index="index"></cart-list-item>
    </div>
</template>

<script>
    import CartListItem from "./CartListItem";
    export default {
        name: "CartList",
        props:{
            cartList:{
                type:Array,
               default(){
                    return []
               }
            }
        },
        components:{
            CartListItem
        }
    }
</script>

<style scoped>

</style>