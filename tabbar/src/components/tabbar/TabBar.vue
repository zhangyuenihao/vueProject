<template>
    <div class="table-bar">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "TabBar"
    }
</script>

<style scoped>
    .table-bar{
        display: flex;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        height: 49px;
        background: #f2f2f2;
        box-shadow: -1px 0 2px rgba(100,100,100,.3);
    }

</style>