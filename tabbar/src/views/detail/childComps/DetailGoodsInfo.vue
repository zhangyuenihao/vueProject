<template>
    <div class="detail-goods-info" v-if="Object.keys(detailInfo).length!==0">
        <div class="info-desc clear-fix">
            <div class="start"></div>
            <div class="desc">{{detailInfo.desc}}</div>
            <div class="end"></div>
        </div>
        <div class="info-key">
            {{detailInfo.detailImage[0].key}}
        </div>
        <div class="info-list">
            <img v-for="(item,index) in detailInfo.detailImage[0].list" :key="index" :src="item" @load="imgLoad" alt="">
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
.info-list img{
    width: 100%;
}
</style>