<template>
    <div class="home">
        <header-bar></header-bar>
        <list-bar :dataList="dataList"></list-bar>
    </div>
</template>

<script>
    import HeaderBar from '../../components/content/headerBar/HeaderBar'
    import ListBar from 'components/content/listBar/ListBar'

    export default {
        name: 'home',
        data() {
            return {
                dataList: {
                    business: {
                        title: '企业经营数据',
                        totalValue: 300000000,
                        list: [{
                            name: '实体类',
                            value: '40.64%'
                        }, {
                            name: '服务类',
                            value: '27.36%'
                        }, {
                            name: '科技类',
                            value: '32%'
                        }]
                    },
                    hydraulic: {
                        title: '水压检测',
                        average: '0.5',
                        list: [
                            {
                                name: '1',
                                value: 0.2
                            }, {
                                name: '2',
                                value: 0.5
                            }, {
                                name: '3',
                                value: 0.3
                            }, {
                                name: '4',
                                value: 0.7
                            }, {
                                name: '5',
                                value: 0.2
                            }, {
                                name: '6',
                                value: 0.5
                            }, {
                                name: '7',
                                value: 0.3
                            }, {
                                name: '8',
                                value: 0.7
                            }, {
                                name: '9',
                                value: 0.2
                            }, {
                                name: '10',
                                value: 0.5
                            }, {
                                name: '11',
                                value: 0.3
                            }, {
                                name: '12',
                                value: 0.7
                            }, {
                                name: '13',
                                value: 0.2
                            }, {
                                name: '14',
                                value: 0.5
                            }, {
                                name: '15',
                                value: 0.3
                            }, {
                                name: '16',
                                value: 0.7
                            }, {
                                name: '17',
                                value: 0.2
                            }, {
                                name: '18',
                                value: 0.5
                            }, {
                                name: '19',
                                value: 0.3
                            }
                        ]
                    },
                    Occupancy: {
                        title: '入驻率',
                        enterprise: 24,
                        Rental: '90%',
                        people: 470,
                        List: [{
                            name: '办公中的企业',
                            value: 24,
                            light: '#69fffd'
                        }, {
                            name: '暂无租户房间',
                            value: 2,
                            light: '#eb1c24'
                        }, {
                            name: '全部入驻企业',
                            value: 100,
                            light: '#eb1c24'
                        }]
                    },
                    energy: {
                        title: '能耗数据',
                        year: 19,
                        month: 2,
                        electric: {
                            month: 2.650,
                            year: 2.650
                        },
                        water: {
                            month: 265,
                            year: 265
                        }
                    },
                    Occupancy: {
                        title: '企业人员规模',
                        list: [{
                            name: '10人以下',
                            value: '32%'
                        }, {
                            name: '10~50人',
                            value: '40.64%'
                        }, {
                            name: '50人以上',
                            value: '27.36%'
                        }]
                    },
                    Occupancy: {
                        title: '当月能耗',
                        list: [
                            [
                                {
                                    name: '1号楼',
                                    value: 280
                                }, {
                                name: '2号楼',
                                value: 640
                            }, {
                                name: '3号楼',
                                value: 1120
                            }, {
                                name: '4号楼',
                                value: 260
                            }, {
                                name: '5号楼',
                                value: 500
                            }, {
                                name: '6号楼',
                                value: 570
                            }, {
                                name: '7号楼',
                                value: 280
                            }, {
                                name: '8号楼',
                                value: 640
                            }, {
                                name: '9号楼',
                                value: 1120
                            }, {
                                name: '10号楼',
                                value: 260
                            }, {
                                name: '11号楼',
                                value: 500
                            }, {
                                name: '12号楼',
                                value: 570
                            }, {
                                name: '13号楼',
                                value: 280
                            }, {
                                name: '14号楼',
                                value: 640
                            }, {
                                name: '15号楼',
                                value: 1120
                            }, {
                                name: '16号楼',
                                value: 260
                            }, {
                                name: '17号楼',
                                value: 500
                            }, {
                                name: '18号楼',
                                value: 570
                            }, {
                                name: '19号楼',
                                value: 280
                            }
                            ],
                            [
                                {
                                    name: '1号楼',
                                    value: 280
                                }, {
                                name: '2号楼',
                                value: 640
                            }, {
                                name: '3号楼',
                                value: 1120
                            }, {
                                name: '4号楼',
                                value: 260
                            }, {
                                name: '5号楼',
                                value: 500
                            }, {
                                name: '6号楼',
                                value: 570
                            }, {
                                name: '7号楼',
                                value: 280
                            }, {
                                name: '8号楼',
                                value: 640
                            }, {
                                name: '9号楼',
                                value: 1120
                            }, {
                                name: '10号楼',
                                value: 260
                            }, {
                                name: '11号楼',
                                value: 300
                            }, {
                                name: '12号楼',
                                value: 570
                            }, {
                                name: '13号楼',
                                value: 280
                            }, {
                                name: '14号楼',
                                value: 900
                            }, {
                                name: '15号楼',
                                value: 1120
                            }, {
                                name: '16号楼',
                                value: 260
                            }, {
                                name: '17号楼',
                                value: 500
                            }, {
                                name: '18号楼',
                                value: 800
                            }, {
                                name: '19号楼',
                                value: 280
                            }
                            ],
                            [
                                {
                                    name: '1号楼',
                                    value: 280
                                }, {
                                name: '2号楼',
                                value: 640
                            }, {
                                name: '3号楼',
                                value: 1120
                            }, {
                                name: '4号楼',
                                value: 700
                            }, {
                                name: '5号楼',
                                value: 500
                            }, {
                                name: '6号楼',
                                value: 570
                            }, {
                                name: '7号楼',
                                value: 500
                            }, {
                                name: '8号楼',
                                value: 640
                            }, {
                                name: '9号楼',
                                value: 600
                            }, {
                                name: '10号楼',
                                value: 260
                            }, {
                                name: '11号楼',
                                value: 500
                            }, {
                                name: '12号楼',
                                value: 570
                            }, {
                                name: '13号楼',
                                value: 280
                            }, {
                                name: '14号楼',
                                value: 640
                            }, {
                                name: '15号楼',
                                value: 1120
                            }, {
                                name: '16号楼',
                                value: 260
                            }, {
                                name: '17号楼',
                                value: 500
                            }, {
                                name: '18号楼',
                                value: 570
                            }, {
                                name: '19号楼',
                                value: 280
                            }
                            ]
                        ],
                    },
                    Occupancy: {
                        title: '入驻企业',
                        list:[{
                            name:'入住占比',
                            list:[
                                {name:'入住中',value:'21%'},
                                {name:'已入住',value:'39%'},
                                {name:'未入住',value:'11%'}

                            ]
                        },{
                            name:'类型占比',
                            list:[
                                {name:'外包',value:'21%'},
                                {name:'科技',value:'39%'},
                                {name:'软件',value:'11%'}

                            ]
                        },{
                            name:'来源占比 ',
                            list:[
                                {name:'本地',value:'21%'},
                                {name:'省内',value:'39%'},
                                {name:'外省',value:'11%'},
                                {name:'国外',value:'7%'}

                            ]
                        }]
                    }
                }
            }
        },
        components: {
            HeaderBar, ListBar
        }
    }
</script>
<style>
    .home{

    }
</style>
