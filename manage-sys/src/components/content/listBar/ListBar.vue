<template>
    <div class="dataList">
        <div class="top">
            <div class="left">
                <div class="left-top">
                    <business-item :business="business"  ref="aaa"></business-item>
                </div>
                <div class="left-bottom">
                    <hydraulic-item :hydraulic="hydraulic"></hydraulic-item>
                </div>
            </div>
            <div class="center">
                <occupancy-item :occupancy="occupancy"></occupancy-item>
            </div>
            <div class="right">
                <div class="right-top">
                    <energy-item :energy="energy"></energy-item>
                </div>
                <div class="right-bottom">
                    <scale-item :scale="scale"></scale-item>
                </div>
            </div>
        </div>

        <div class="bottom">
            <div class="left-bottom">
                <menergy-item :mEnergy="mEnergy"></menergy-item>
            </div>
            <div class="right-bottom">
                <enterprise-item :enterprise="enterprise"></enterprise-item>
            </div>
        </div>
    </div>
</template>

<script>
    import BusinessItem from 'views/home/childCompons/BusinessItem'
    import HydraulicItem from 'views/home/childCompons/HydraulicItem'
    import OccupancyItem from 'views/home/childCompons/OccupancyItem'
    import EnergyItem from 'views/home/childCompons/EnergyItem'
    import ScaleItem from 'views/home/childCompons/ScaleItem'
    import MenergyItem from 'views/home/childCompons/MenergyItem'
    import EnterpriseItem from 'views/home/childCompons/EnterpriseItem'

    export default {
        name: "ListBar",
        props: [
            'business',
            'hydraulic',
            'occupancy',
            'energy',
            'scale',
            'mEnergy',
            'enterprise'],
        data() {
            return {
                orgOptions: {},
                polar: {}
            }
        },
        methods:{

        },
        computed:{

        },
        mounted() {
            this.orgOptions = {
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: [820, 932, 901, 934, 1290, 1330, 1320],
                    type: 'line',
                    smooth: true
                }]
            }
        },
        components: {
          BusinessItem,HydraulicItem,OccupancyItem,EnergyItem,ScaleItem,MenergyItem,EnterpriseItem
        }
    }
</script>

<style scoped>
    .dataList {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 76px;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 0 14px 14px 14px;
    }

    .top {
        height: 595px;
        display: flex;
    }

    .left, .right {
       width: 495px;
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    .left-top {
        height: 373px;
    }

    .left-bottom, .right-top, .right-bottom {
        flex: 1;
    }

    .center {
        width: 903px;
        height: 100%;
    }

    .bottom {
        flex: 2;
        display: flex;
    }

    .left-bottom, .right-bottom {
        flex: 1;
    }
     .echarts{
         width: 100%;
         height: 100%;
     }
</style>