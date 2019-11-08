<template>
    <div class="header">
        <div class="hd-item date">
            <span>{{getDate.date}}</span>
            <span>{{getDate.week}}</span>
            <span>{{getDate.time}}</span>
        </div>
        <div class="title">
            <h3>XX科技产业园智慧园区</h3>
        </div>
        <div class="hd-item weather">
            <span class="sky">多云</span>
            <span>27度</span>
            <span>微风3级</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HeaderBar",
        methods:{
          toTwo(str){
              return str<10?'0'+str:str
          }
        },
        computed: {
            getDate() {
                const now = new Date()
                const date = now.getFullYear() + '年' + (now.getMonth() + 1) + '月' + now.getDate() + '日'
                const week = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'][now.getDay()]
                const time=now.getHours()+':'+this.toTwo(now.getMinutes())+':'+this.toTwo(now.getSeconds())
                return {
                    date,
                    week,
                    time
                }
            }
        },
    }
</script>

<style scoped>
    .header {
        width: 100%;
        padding: 0 40px;
        height: 76px;
        line-height: 76px;
        display: flex;
        color: white;
        background: url("~assets/image/bg-hd.png") no-repeat center center;
        background-size: 100% 100%;
        font-size: 20px;
        overflow: hidden;
    }

    .hd-item {
        flex: 1;
    }
    .date {
        text-align: left;
        height: 48px;
        line-height: 48px;
    }
    .title{
        flex: 2;
        text-align: center;
    }
    .title h3{
        font-size: 32px;
        font-weight: normal;

    }
    .header span{
        margin-right:20px;
    }
    .weather {
        text-align: right;
        height: 48px;
        line-height: 1px;
    }
    .weather span:nth-last-child(1){
        margin-right: 0;
    }
    .sky:before{
        content: '';
        display: inline-block;
        width: 29px;
        height: 48px;
        background: url("~assets/image/cloud.png") no-repeat center center;
        vertical-align: middle;
        margin-right: 10px;
    }
    .sky{
        vertical-align: middle;
    }
</style>