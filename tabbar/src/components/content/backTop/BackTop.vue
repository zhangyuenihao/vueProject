<template>
    <div class="backTop">
        <img src="~assets/image/common/top.png" alt="">
    </div>
</template>

<script>
    export default {
        name: "BackTop"
    }
</script>

<style scoped>
   .backTop{
       position: fixed;
       bottom: 49px;
       right: 5px;
       z-index: 10;
   }
    .backTop img{
        width: 43px;
        height: 43px;
    }
</style>