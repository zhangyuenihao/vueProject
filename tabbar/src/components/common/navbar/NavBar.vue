<template>
    <div class="nav-item">
        <div class="left"><slot name="left"></slot></div>
        <div class="center"><slot name="center"></slot></div>
        <div class="right"><slot name="right"></slot></div>
    </div>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style scoped>
  .nav-item{
      display: flex;
      height: 44px;
      line-height: 44px;
      box-shadow: 0 1px 0 1px rgba(100,100,100,.3);
      text-align: center;
  }
    .left,.right{
        width: 60px;
    }
    .center{
        flex: 1;
    }
</style>