<template>
    <div class="table-bar-item" @click="itemClick" >
        <div v-if="!isActive"><slot name="item-icon"></slot></div>
        <div v-else><slot name="item-active-icon"></slot></div>
        <div :style="activeStyle"><slot name="item-text"></slot></div>
    </div>
</template>

<script>
    export default {
        name: "TabBarItem",
        props:{
            path:String,
            activeColor:{
                type:String,
                default:'red'
            }
        },
        data(){
            return{

            }
        },
        methods:{
            itemClick(){
               this.$router.push(this.path)
            }
        },
        computed:{
            isActive(){
                return this.$route.path.indexOf(this.path)!==-1
            },
            activeStyle(){
                return this.isActive?{color:this.activeColor}:{}
            }
        }
    }
</script>

<style scoped>
    .table-bar-item{
        flex: 1;
        text-align: center;
        font-size: 12px;
    }
.table-bar-item img{
    width:24px;
    height: 24px;
    vertical-align: middle;
    margin-top: 5px;
}
</style>