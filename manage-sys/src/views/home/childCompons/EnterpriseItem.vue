<template>
    <item-list>
        <h5 slot="title">{{enterprise.title}}</h5>
        <div slot="item-chart" class="item-chart">
            <chart-item :options="getOptions"></chart-item>
        </div>
    </item-list>
</template>

<script>
    import ItemList from 'components/common/listItem/ListItem'
    import ChartItem from "components/common/chartItem/ChartItem";

    export default {
        name: "EnterpriseItem",
        props: {
            enterprise: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        computed: {
            getOptions: function () {
                const {lists} = this.enterprise
                const option = {
                    title: [{
                        text: lists[0].name,
                        x: '15%',
                        y:'20%',
                        textStyle: {
                            color: '#8ec7dc'
                        }
                    }, {
                        text: lists[1].name,
                        y:'20%',
                        x: 'center',
                        textStyle: {
                            color: '#8ec7dc'
                        }
                    }, {
                        text: lists[2].name,
                        y:'20%',
                        right: '15%',
                        textStyle: {
                            color: '#8ec7dc'
                        }
                    }],
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: [{
                        x: '5%',
                        bottom: 20,
                        textStyle: {
                            color:'#8ec7dc'
                        },
                        data: lists[0].list.map(v => v.name)
                    }, {
                        x: 'center',
                        bottom: 20,
                        textStyle: {
                            color:'#8ec7dc'
                        },
                        data: lists[1].list.map(v => v.name)
                    }, {
                        right: '5%',
                        bottom: 20,
                        textStyle: {
                            color:'#8ec7dc'
                        },
                        data: lists[2].list.map(v => v.name)
                    }],
                    series: [
                        {
                            name: lists[0].name,
                            type: 'pie',
                            radius: 70,
                            center: ['20%', '55%'],
                            roseType: 'radius',

                            data: lists[0].list.sort(function (a, b) { return a.value - b.value; })
                        }, {
                            name: lists[1].name,
                            type: 'pie',
                            radius: 70,
                            center: ['50%', '55%'],
                            roseType: 'radius',
                            data: lists[1].list.sort(function (a, b) { return a.value - b.value; })
                        },{
                            name: lists[2].name,
                            type: 'pie',
                            radius: 70,
                            center: ['80%', '55%'],
                            roseType: 'radius',

                            data: lists[2].list.sort(function (a, b) { return a.value - b.value; })
                        }
                    ]
                };

                return option
            }
        },
        components: {
            ChartItem,
            ItemList
        }
    }
</script>

<style scoped>

</style>