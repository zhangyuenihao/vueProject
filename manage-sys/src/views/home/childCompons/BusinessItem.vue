<template>
    <item-list>
        <h5 slot="title">{{business.title}}</h5>
        <div slot="item-content">
            <div class="total">
                <p class="mt24">园区年度产值</p>
                <p class="high">￥<span class="color-high">{{business.totalValue}}</span>元</p>
            </div>
        </div>
        <div slot="item-chart" class="item-chart">
            <chart-item :options="getOptions"></chart-item>
        </div>
    </item-list>
</template>

<script>
    import ItemList from 'components/common/listItem/ListItem'
    import ChartItem from 'components/common/chartItem/ChartItem'

    export default {
        name: "BusinessItem",
        props: {
            business: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        data() {
            return {}
        },
        methods: {
            getStr(str, length) {
                length = parseInt(length)
                const str1 = str.substring(0, length)
                const str2 = str.substring(length)
                return {
                    str1, str2
                }
            }
        },
        computed: {
            getOptions: function () {
                const sTitle = this.business.sTitle
                const obj = this.getStr(sTitle, sTitle.length / 2)
                const options={
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b}: {c} ({d}%)"
                    },
                    graphic: [{
                        type: 'text',
                        top: '60%',
                        left: 'center',
                        style: {
                            text: obj.str1 + '\n' + obj.str2,
                            fill: '#fff',
                            fontSize: 16,
                            fontWeight: 'bold',
                            width: 30,
                            height: 30
                        }
                    }],
                    series: [
                        {
                            type: 'pie',
                            radius: ['50px', '70px'],
                            center:['50%', '65%'],
                            avoidLabelOverlap: false,
                            label: {
                                formatter: '{b}\n{d}%',
                                lineHeight: 20,
                            },
                            labelLine: {
                                normal: {
                                    smooth: 0.2,
                                    length: 10,
                                    length2: 20
                                }
                            },
                            data: this.business.list
                        }
                    ]
                }
                return options
            }

        },
        mounted() {
        },
        components: {
            ItemList, ChartItem
        }
    }
</script>

<style scoped>
    .echarts {
        width: 100%;
        height: 100%;
    }
    .total{
        font-weight: bold;
    }
</style>
