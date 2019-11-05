<template>
    <item-list>
        <h5 slot="title">{{hydraulic.title}}</h5>
        <div slot="item-chart" class="item-chart">
            <chart-item :options="getOptions"></chart-item>
        </div>
    </item-list>
</template>

<script>
    import ItemList from 'components/common/listItem/ListItem'
    import ChartItem from 'components/common/chartItem/ChartItem'
    import echarts from 'echarts'
    export default {
        name: "HydraulicItem",
        props: {
            hydraulic: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        methods: {},
        computed: {
            getOptions: function () {
                const {average, list} = this.hydraulic
                const option = {
                    title: {
                        subtext: '平均水压:' + average + 'MPa',
                        x: '23%',
                        subtextStyle:{
                            color:'#8ec7dc',
                            fontSize:12,
                            fontWeight:'bold'
                        }
                    },
                    tooltip: {
                        trigger: 'axis',
                        formatter: "{b}号楼<br/>{c}MPa",
                        textStyle: {
                            color: '#8ec7dc' , //这里用参数代替了
                            fontSize:14,
                            fontWeight:'bold'
                        },
                        axisPointer: {
                            type: 'cross',
                            crossStyle: {
                                color: '#999'
                            }
                        }
                    },
                    grid:{
                        left:40,
                        top:60,
                        width:'420px',
                        height:'110px'
                    },
                    xAxis: {
                        type: 'category',
                        axisLine: {
                            lineStyle: {
                                color: '#023c7a'
                            }
                        },
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#8ec7dc'  //这里用参数代替了
                            }
                        },
                        splitLine: {
                            show:true,
                            lineStyle: {
                                type: 'dotted',
                                color:'#023c7a'
                            }
                        },
                        axisTick: {
                            show:false
                        },
                        min:0,
                        data: list.map(v => v.name)
                    },
                    yAxis: {
                        name:'MPa  ',
                        nameLocation: 'end',
                        nameGap:'10',
                        nameTextStyle:{
                          color:'#8ec7dc',
                            align: 'right'
                        },

                        type: 'value',
                        show:true,
                        axisLine: {//
                            symbol:['none','arrow'],
                            lineStyle: {
                                color: '#023c7a' // 颜色
                            }
                        },
                        axisLabel: {//字体
                            show: true,
                            textStyle: {
                                color: '#8ec7dc'
                            }
                        },
                        min: 0,
                        max:0.8,
                        splitNumber: 4,
                        splitLine: {//分割线
                            lineStyle: {
                                type: 'dotted',
                                color:'#023c7a'
                            }
                        },
                        axisTick: {
                            show:false
                        },
                    },

                    series: [{
                        data: list.map(v => v.value),
                        type: 'line',
                        areaStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {offset:0,color:'rgba(3,66,153,1)'},
                                    {offset:1,color:'rgba(3,66,153,0.2)'}
                                ])
                            }
                        },
                        itemStyle: {
                            normal: {
                                color:'#45f0ea',
                                label: {
                                    show: false,		//开启显示
                                    textStyle: {	    //数值样式
                                        color: '#45f0ea',
                                        fontSize: 12
                                    }
                                },
                                lineStyle: {
                                    color: "#034299"
                                }
                            }
                        },
                        showSymbol:false,
                        smooth: true
                    }]
                }
                return option
            }
        },
        components: {
            ItemList, ChartItem
        }
    }
</script>

<style scoped>

</style>