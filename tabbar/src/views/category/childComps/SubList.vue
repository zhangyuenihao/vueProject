<template>
    <div class="subList" v-if="Object(subcategories).length!==0">
        <div class="sub-item" v-for="(item,index) in subcategories" :key="index">
            <a :href="item.link">
                <img :src="item.image" alt="" class="">
                <span class="title">{{item.title}}</span>
            </a>

        </div>
    </div>
</template>

<script>
    export default {
        name: "SubList",
        props: {
            subcategories: {
                type: Array,
                default() {
                    return []
                }
            }
        },
    }
</script>

<style scoped>
    .subList {
        display: flex;
        flex-wrap: wrap;
        padding: 5% 10%;
    }

    .sub-item {
        width: 35%;
        text-align: center;
        margin-right: 20px;
    }

    img {
        width: 100%;
    }

    .title {
        line-height: 44px;
        font-size: 14px;
    }
</style>