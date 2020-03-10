<template>
    <div class="detailNavBar">
        <nav-bar>
            <div slot="left">
                <img class="back" @click="backClick" src="~assets/image/common/back.svg" alt="">
            </div>
            <div slot="center" class="title">
                <div v-for="(item,index) in titles"
                     @click="titleClick(index)"
                     :key="item" class="title-item"
                     :class="{active:index===currentIndex}"  >
                    {{item}}
                </div>
            </div>
        </nav-bar>
    </div>
</template>

<script>
    import NavBar from "components/common/navbar/NavBar";

    export default {
        name: "detailNavBar",
        data() {
            return {
                titles: ['商品', '参数', '评论', '推荐'],
                currentIndex: 0
            }
        },
        methods: {
            backClick(){
                this.$router.go(-1)
            },
            titleClick(index) {
                this.currentIndex = index
                this.$emit('titleClick',index)
            }
        },
        components: {
            NavBar
        }
    }
</script>

<style scoped>
    .title{
        display: flex;
    }
    .title-item{
        flex: 1;
    }
    .back{
        margin-top: 12px;
    }
    .active{
        color: var(--color-high-text);
    }
</style>