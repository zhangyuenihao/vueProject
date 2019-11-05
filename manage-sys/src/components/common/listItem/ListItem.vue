<template>
    <div class="listItem">
        <div class="item">
            <span class="corner cornerlt"></span><span class="corner cornerrt"></span>
            <span class="corner cornerrb"></span><span class="corner cornerlb"></span>
            <div class="title">
                <slot name="title" class="item-title"></slot>
            </div>
            <div>
                <slot name="item-content"></slot>
            </div>
            <div class="item-chart">
                <slot name="item-chart"></slot>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "ListItem"
    }
</script>

<style scoped>
    .listItem {
        width: 100%;
        height: 100%;
        padding: 10px;
        font-size: 16px;
    }

    .item {
        position: relative;
        background: url("~assets/image/bg-item.png");
        border: 2px solid var(--border-color);
        width: 100%;
        height: 100%;
        color: var(--color-text);
        padding: 10px;
    }
    .corner{
        position: absolute;
        width: 24px;
        height: 24px;
    }
    .cornerlt{
        top: -2px;
        left: -2px;
        background: url("~assets/image/lt-icon.png") no-repeat center center;
    }
    .cornerrt{
        top:-2px;
        right: 0;
        background: url("~assets/image/rt-icon.png") no-repeat center center;
    }
    .cornerrb{
        bottom: -2px;
        right: -2px;
        background: url("~assets/image/rb-icon.png") no-repeat center center;
    }
    .cornerlb{
        bottom: -2px;
        left: -2px;
        background: url("~assets/image/lb-icon.png") no-repeat center center;
    }
    .title {
        text-align: left;
        padding-left: 28px;
        line-height: 20px;
        position: relative;
        font-size: 18px;
    }
    .title h5:before {
        position: absolute;
        top: 0;
        left: 0;
        content: '';
        display: inline-block;
        width: 18px;
        height: 21px;
        background: url("~assets/image/icon.png") no-repeat center center;
    }
    .item-chart{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
</style>