<template>
    <div class="good-item">
        <img src="goodItem.show.img" alt="">
    </div>
</template>

<script>
    export default {
        name: "GoodsItem",
        props:{
          goodItem:{
              type:Object,
              default(){
                  return {}
              }
          }
        }
    }
</script>

<style scoped>

</style>