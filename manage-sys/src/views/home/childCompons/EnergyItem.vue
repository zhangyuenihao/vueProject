<template>
    <item-list>
        <h5 slot="title">{{energy.title}}</h5>
        <div slot="item-content" class="item-content">
            <div class="en-item">
                <p class="high"><span class="color-high">{{energy.electric.month}}</span>kw</p>
                <p class="s-text en-line">{{energy.year}}年{{energy.month}}月总用电量</p>
            </div>
            <div class="en-item">
                <p class="high"><span class="color-high color-high-y">{{energy.water.month}}</span>kw</p>
                <p class="s-text en-line">{{energy.year}}年{{energy.month}}月总用水量</p>
            </div>
            <div class="en-item">
                <p class="high"><span class="color-high">{{energy.electric.year}}</span>kw</p>
                <p class="s-text">{{energy.year}}年总用电量</p>
            </div>
            <div class="en-item">
                <p class="high"><span class="color-high color-high-y">{{energy.water.year}}</span>kw</p>
                <p class="s-text">{{energy.year}}年总用水量</p>
            </div>
        </div>
    </item-list>
</template>

<script>
    import ItemList from 'components/common/listItem/ListItem'

    export default {
        name: "EnergyItem",
        props: {
            energy: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        components: {
            ItemList
        }
    }
</script>

<style scoped>
    .item-content {
        width: 100%;
        height: 235px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center; /*x轴对齐方式*/
        align-items: center;
    }

    .en-item {
        width: 50%;
        height: 70px;
    }

    .s-text {
        font-size: 12px;
        line-height: 32px;
    }

    .color-high-y {
        color: #c59938;
    }
    .en-line{
        display: inline-block;
        padding:0 10px 20px 10px;
        border-bottom:1px solid var(--border-color);
    }
</style>