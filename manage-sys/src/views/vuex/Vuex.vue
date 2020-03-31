<template>
    <div>
        <h1>你好</h1>
        <h2>{{$store.state.counter}}</h2>
        <button @click="addition"> +</button>&nbsp;
        <button @click="subtraction"> -</button>&nbsp;
        <button @click="addCount(5)"> +5</button>&nbsp;
        <button @click="addCount(10)"> +10</button>
        <h2>--------------app内容state相关信息------------------</h2>
        <h2>{{$store.state.info}}</h2>
        <h2>{{$store.state.a.name}}</h2>
        <button @click="updateInfo">修改信息</button>
        <h2>--------------app内容getters相关信息------------------</h2>
        <h2>{{$store.getters.powerCounter}}</h2>
        <h2>{{$store.getters.more20stu}}</h2>
        <h2>{{$store.getters.more20stuLength}}</h2>
        <h2>{{$store.getters.moreAgeStu(10)}}</h2>

        <h2>--------------hello-vuex相关内容------------------</h2>
        <hello-vuex></hello-vuex>
    </div>
</template>

<script>
    import HelloVuex from "./HelloVuex";
    import {
     INCREMENT
    } from '@/mutations-types'
    export default {
        name: "Vuex",
        components:{
            HelloVuex
        },
        methods:{
            addition(){
                this.$store.commit(INCREMENT)
            },
            subtraction() {
                this.$store.commit('decrement')
            },
            addCount(count){
                this.$store.commit({
                    type:'incrementCount',
                    count
                })
            },
            updateInfo(){
                /*this.$store.dispatch( 'aUpdateInfo',{
                    infoObj:{
                        height:1.88
                    },
                    success:()=>{
                        window.console.log('里面已经完成了');
                    }

                })*/
                this.$store.dispatch('aUpdateInfo', {infoObj:{
                    height:1.88
                }}).then(res=>{
                    window.console.log('里面已经完成了')
                        window.console.log(res)
                }
                )
            }
        }
    }
</script>

<style scoped>

</style>