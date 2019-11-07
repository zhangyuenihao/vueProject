<template>
        <chart :options="getOptions" autoresize></chart>
</template>

<script>
    export default {
        name: "ChartItem",
        props:{
            options:{
                type:Object,
                defaul(){
                    return {}
                }
            }
        },
        data(){
            return{
                color: ['#0a8cff', '#45f0ea', '#9b04f9', '#c59938']
            }
        },
        computed:{
            getOptions:function () {
                this.$set(this.options,'color',this.color)
                return this.options
            }
        }
    }
</script>

<style scoped>
    .echarts,.chartItem{
          width: 100%;
          height: 100%;
      }
</style>