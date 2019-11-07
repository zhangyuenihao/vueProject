<template>
    <div class="home">
        <header-bar></header-bar>
        <list-bar v-bind="dataList" v-if="dataList!==null"></list-bar>
    </div>
</template>

<script>
    import HeaderBar from '../../components/content/headerBar/HeaderBar'
    import ListBar from 'components/content/listBar/ListBar'
    import {getDataList} from "network/home";

    "network/home"
    export default {
        name: 'home',
        data() {
            return {
               dataList:null
            }
        },
        methods: {
            async getDataList() {
                try{
                    const res=await getDataList()
                    this.$nextTick(()=>{
                        this.dataList=res.dataList
                    })

                }catch (err) {
                    console.log(err)
                }
            }
        },
        created() {
            this.getDataList();
        },
        components: {
            HeaderBar, ListBar
        }
    }
</script>
<style>
    .home {
        position: relative;
        width: 1920px;
        height: 1080px;
        background: url("~assets/image/bg.png") no-repeat center center;
        background-size: cover;
    }
</style>
