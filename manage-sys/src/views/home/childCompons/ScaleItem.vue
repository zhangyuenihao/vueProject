<template>
    <item-list>
        <h5 slot="title">{{scale.title}}</h5>
        <div slot="item-chart" class="item-chart">
            <chart-item :options="getOptions"></chart-item>
        </div>
    </item-list>
</template>

<script>
    import ItemList from 'components/common/listItem/ListItem'
    import ChartItem from 'components/common/chartItem/ChartItem'
    export default {
        name: "ScaleItem",
        props:{
            scale:{
                type:Object,
                default(){
                    return {}
                }
            }
        },
        computed:{
            getOptions: function () {
                const options={
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b}: {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        textStyle: {
                            color:'#8ec7dc'
                        },
                        right: 43,
                        bottom:25,
                        data:this.scale.list.map(v => v.name)
                    },
                    graphic: [{
                        type: 'image',
                        top: '110px',
                        left: '165px',
                        style: {
                            image:require('assets/image/people.png'),
                            fill: '#fff'
                        }
                    },{
                        type: 'text',
                        top: '165px',
                        left: '165px',
                        style: {
                            text:this.scale.sTitle,
                            fill: '#fff'
                        }
                    }],
                    series: [
                        {
                            type: 'pie',
                            radius: ['50px', '70px'],
                            center:['190px', '150px'],
                            avoidLabelOverlap: false,
                            label: {
                                formatter: '{d}%',
                                lineHeight: 20,
                            },
                            labelLine: {
                                normal: {
                                    smooth: 0.2,
                                    length: 10,
                                    length2: 20
                                }
                            },
                            tooltip: {
                                trigger: 'item',
                                formatter: "{b}: {c} ({d}%)"
                            },
                            data: this.scale.list
                        }
                    ]
                }
                return options
            }
        },
        components:{
            ItemList,ChartItem
        }
    }
</script>

<style scoped>

</style>