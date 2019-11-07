<template>
    <item-list>
        <div slot="item-content">
            <div class="tip">
                <div class="tipItem">
                    <p class="tipText">入驻企业</p>
                    <p class="tipText"><span class="color-high">{{occupancy.enterprise}}</span>家</p>
                </div>
                <div class="tipItem">
                    <p class="tipText">总出租率</p>
                    <p class="tipText"><span class="color-high">{{occupancy.Rental}}</span>%</p>
                </div>
                <div class="tipItem">
                    <p class="tipText">入住人数</p>
                    <p class="tipText"><span class="color-high">{{occupancy.people}}</span>人</p>
                </div>
            </div>
            <div class="radios-warp">
                <div class="lightTip" :style="{color:color}">
                   <span class="lightColor" :style="{backgroundColor:color}"></span>
                    <span>亮灯提示</span>
                </div>
                <div v-for="(item,index) in getList" :key="item.id" class="radios"
                     :class="{active:index===currentIndex}"  @click="chose(index)">
                    <span class="radios-text">{{item}}</span>
                </div>
            </div>
        </div>
        <div slot="item-chart" class="image-warp">
                <img v-show="currentIndex==0" src="~assets/image/light.png" alt="">
            <img v-show="currentIndex==1" src="~assets/image/light2.png" alt="">
            <img v-show="currentIndex==2" src="~assets/image/light2.png" alt="">
        </div>

    </item-list>
</template>

<script>
    import ItemList from 'components/common/listItem/ListItem'

    export default {
        name: "OccupancyItem",
        props: {
            occupancy: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        data(){
            return{
                currentIndex:null,
                color:null
            }
        },
        methods:{
          chose(index){
              const colors=['#58c2d9','#eb1c24','#979797']
              this.color=colors[index];
              return this.currentIndex=index
          }
        },
        computed: {
            getList(){
                return this.occupancy.list.map(v=>v.name)
            }
        },
        created(){
            this.chose(0)
        },
        components: {
            ItemList
        }
    }
</script>

<style scoped>
    .tip {
        width: 80px;
        height: 240px;
        margin: 50px;
        text-align: left;
        font-size: 18px;
        font-weight: bold;
        color: #fff;
        line-height: 1.5em;
    }

    .tipItem {
        margin-bottom: 28px;
    }
    .image-warp{
       position: absolute;
        width: 835px;
        height: 551px;
        top:40px;
        right: 20px;
    }
    .radios-warp{
        position: absolute;
        left: 30px;
        bottom: 20px;
        z-index: 10;
    }
    .radios {
        float: left;
        color: #8ec7dc;
        font-size: 14px;

        margin-right: 36px;
    }
    .regular-radio{
        vertical-align: middle;
    }
    .lightTip{
        text-align: left;
        margin-bottom: 20px;
        font-size: 12px;
    }
    .lightColor{
        display: inline-block;
        width: 20px;
        height: 10px;
        background:red ;
        margin-right: 5px;

    }
</style>