<template>
    <div class="detail-params-info" v-if="Object.keys(paramsInfo).length!==0">
        <table class="rule" v-for="(item,index) in paramsInfo.tables" :key="index" width="100%">
            <tr v-for="(tr,indey) in item" :key="indey">
                <td v-for="(td,indez) in tr" :key="indez">{{td}}</td>
            </tr>
        </table>
        <table class="set" width="100%">
            <tr v-for="(item,index) in paramsInfo.set" :key="index">
                <td>{{item.key}}</td>
                <td class="setValue">{{item.value}}</td>
            </tr>
        </table>
        <div class="info-img" v-if="paramsInfo.images.length!==0">
            <img :src="paramsInfo.images[0]" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name: "DetailParamsInfo",
        props: {
            paramsInfo: {
                type: Object
            }
        }
    }
</script>

<style scoped>
    .detail-params-info {
        border-top: 3px solid #eeeeee;
        padding: 20px;
    }

    table {
        border-collapse: collapse;
    }

    tr {
        border-bottom: 1px solid rgba(204, 204, 204, .5);
    }

    td {
        line-height: 40px;
        padding-left: 10px;
    }

    .set {
        border-top: 2px solid rgba(204, 204, 204, .5);
    }

    .info-img img {
        width: 100%;
    }
    .setValue{
        color: var(--color-high-text);
        padding-left:40px ;
    }
</style>