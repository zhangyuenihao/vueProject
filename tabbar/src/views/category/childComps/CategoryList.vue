<template>
        <div class="category-list" v-if="Object.keys(categoryList).length!==0">
            <div class="category-list-item"
                 :class="{active:currentIndex==index}"
                 @click="listClick(index)"
                 v-for="(item,index) in categoryList"
                 :key="index">{{item}}
            </div>
        </div>

</template>

<script>

    export default {
        name: "CategoryList",
        components:{},
        props: {
            categoryList: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        data() {
            return {
                currentIndex: 0
            }
        },
        methods: {
            listClick(index) {
                this.currentIndex = index
                this.$emit('listClick',index)
            }
        }

    }
</script>

<style scoped>
    .category-list{
        height: 100vh;
    }
    .category-list-item {
        height: 46px;
        line-height: 46px;
        background-color: #efefef;
        text-align: center;
        color: #777777;
    }

    .category-list-item.active {
        font-weight: bold;
        color: var(--color-tint);
        border-left: 2px solid var(--color-tint);
        background: white;
    }

</style>