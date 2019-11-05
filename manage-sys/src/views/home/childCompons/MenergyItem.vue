<template>
    <item-list>
        <h5 slot="title">{{mEnergy.title}}</h5>
        <div slot="item-content" class="item-content">
            <div v-for="(item,index) in mEnergy.electric.list" :key="item.id" class="radios">
                <input :id="index" type="radio" name="radios"
                       v-model="currentIndex" :value="index"
                       @click="getList(index)">
                <label :for="index">{{index+1+'月'}}</label>
            </div>
        </div>
        <div slot="item-chart" class="item-chart">
            <chart-item :options="getOptions"></chart-item>
        </div>
    </item-list>
</template>

<script>
    import ItemList from 'components/common/listItem/ListItem'
    import ChartItem from "components/common/chartItem/ChartItem";
    import echarts from 'echarts'

    export default {
        name: "MenergyItem",
        props: {
            mEnergy: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        data() {
            return {
                currentIndex:0
            }
        },
        methods: {
            getList(index) {
                this.currentIndex = index
                const result1 = this.mEnergy.electric.list[this.currentIndex]
                const result2 = this.mEnergy.water.list[this.currentIndex]
                window.console.log(result1);
                return {
                    result1, result2
                }
            }
        },
        created() {
            this.getList(this.mEnergy.electric.list.length-1);
        },
        computed: {
            getOptions: function () {
                const {legend, axisData} = this.mEnergy
                const options = {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                            crossStyle: {
                                color: '#999'
                            }
                        }
                    },
                    legend: {
                        left: 178,
                        top: 7,
                        textStyle: {
                            color: '#8ec7dc'
                        },
                    },
                    grid: {
                        left: 50,
                        top: 60,
                        bottom: 50,
                        right: 20
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: axisData,
                            axisPointer: {
                                type: 'shadow'
                            },
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
                            axisTick: {
                                show: false
                            }
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            min: 0,
                            max: 2500,
                            interval: 250,
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
                                show: true,
                                lineStyle: {
                                    type: 'dotted',
                                    color: '#023c7a'
                                }
                            },
                            axisTick: {
                                show: false
                            }
                        }
                    ],
                    series: [
                        {
                            name: legend[0] + '  (度)',
                            type: 'bar',
                            barWidth:20,
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                        {offset: 0, color: 'rgb(10,140,255)'},

                                        {offset: 1, color: 'rgb(100,150,250)'}
                                    ]),
                                    label: {
                                        show: true,		//开启显示
                                        position: 'top',	//在上方显示
                                        textStyle: {	    //数值样式
                                            color: 'white',
                                            fontSize: 12
                                        }
                                    }
                                }
                            },
                            data: this.getList(this.currentIndex).result1
                        },
                        {
                            name: legend[1] + '  (吨)',
                            type: 'line',
                            data: this.getList(this.currentIndex).result2,
                            itemStyle: {
                                normal: {
                                    color: "#6de9eb"
                                }
                            },
                            areaStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                        {offset: 0, color: 'rgba(69,240,234,1)'},
                                        {offset: 1, color: 'rgba(69,240,234,0.2)'}
                                    ]),
                                }
                            }
                        }
                    ]
                }
                return options
            }
        },
        components: {
            ChartItem,
            ItemList
        }
    }
</script>

<style scoped>
    .item-content {
        position: absolute;
        top: 20px;
        right: 0;
        z-index: 10;

    }

    .item-content input {
        vertical-align: middle;
    }

    .radios {
        float: right;
        margin: 0 10px;
        color: #8ec7dc;
        font-size: 14px;
        vertical-align: middle;
    }

</style>