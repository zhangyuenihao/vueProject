<template>
    <div class="detail-goods-info" v-if="Object.keys(detailInfo).length!==0">
        <div class="info-desc clear-fix">
            <div class="start"></div>
            <div class="desc">{{detailInfo.desc}}</div>
            <div class="end"></div>
        </div>
        <div class="detailImage" v-for="(item,index) in detailInfo.detailImage" :key="index">
            <div class="info-key">
                {{item.key}}
            </div>
            <div class="info-list">
                <img v-for="(items,index) in item.list" :key="index" :src="items" @load="imgLoad" alt="">
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "DetailGoodsInfo",
        props: {
            detailInfo: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        data() {
            return {
                counter: 0,
                imageLength: 0
            }
        },
        methods: {
            imgLoad() {
                this.counter += 1
                if (this.counter == this.imageLength) {
                    this.$emit('imgLoad')
                }
            }
        },
        watch: {
            detailInfo() {

                //获取图片的个数
                this.imageLength = this.detailInfo.detailImage[0].list.length
            }

        }

    }
</script>

<style scoped>
    .detail-goods-info{
        border-top: 3px solid #cccccc;
    }
.info-list img{
    width: 100%;
}
.info-desc{
    padding: 10px;
}
.desc{
    margin: 10px 0;
}
    .start,.end{
        position: relative;
        width: 5px ;
        height: 5px;
        background: #000000;
    }
    .start{
        margin-top: 10px;
    }
    .end{
      float: right;
        margin-right:10px ;
    }
    .start:before,.end:after{
        display: inline-block;
        content: '';
        position: absolute;
        width: 100px;
        height: 1px;
        background: #666666;
    }
    .start:before{
        bottom: 0;
        left: 0;
    }
    .end:after{
        bottom: 0;
        right: 0;
    }
    .info-key{
        padding: 10px 0 10px 10px;
        font-size: 18px;
    }
</style>