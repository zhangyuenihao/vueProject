<template>
    <div id="detail">
        <detail-nav-bar></detail-nav-bar>
        详情页 {{iid}}
    </div>
</template>

<script>
    import detailNavBar from "./childComps/detailNavBar";
    export default {
        name: "Detail",
        data(){
            return{
                iid:null
            }
        },
        created() {
            console.log(this.$route.params.iid);
            this.iid=this.$route.params.iid
        },
        components:{
            detailNavBar
        }
    }
</script>

<style scoped>

</style>