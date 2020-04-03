<template>
    <div class="toast" v-show="isShow">
        <span class="message">
           {{message}}
        </span>
    </div>
</template>

<script>
    export default {
        name: "Toast",
        data(){
            return{
                message:'',
                isShow:false
            }
        },
        methods:{
            show(message='默认文字',duration=2000,callBack=function () {
                
            }){
                this.message=message
                this.isShow=true
                setTimeout(()=>{
                    this.message=''
                    this.isShow=false
                    callBack();
                },duration)
            }
        }


    }
</script>

<style scoped>
.toast{
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    z-index: 999;
    padding:10px 20px;
    background-color: rgba(0,0,0,.8);
    border-radius: 5px;
    text-align: center;
    line-height: 24px;
    color: #ffffff;
}
</style>