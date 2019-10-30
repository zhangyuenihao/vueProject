<template>
    <div class="tab-control">
        <div class="tabcontrol-item" v-for="(item,index) in titles" :key="index">
          <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TabControl",
        props:{
            titles:{
                type:Array,
                default(){
                    return []
                }
            }
        }
    }
</script>

<style scoped>

</style>