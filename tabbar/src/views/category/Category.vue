<template>
    <div id="category">
        <nav-bar class="category-nav">
            <div slot="center">商品分类</div>
        </nav-bar>
        <div class="category-content" v-if="Object(categoryData).length!==0">
            <div class="category-list">
                <scroll class="content">
                    <category-list :category-list="categoryList" @listClick="listClick"></category-list>
                </scroll>
            </div>
            <div class="category-info" >
                <scroll class="content" ref="scroll">
                    <sub-list :subcategories="showSubcategories"></sub-list>
                    <tab-control class="home-tab"
                                 :titles="['综合','新品','销量']"
                                 @tabClick="tabClick"
                                 ref="tabControl2">
                    </tab-control>
                    <goods-list :goodsList="showCategoryDeatil"></goods-list>
                </scroll>
            </div>
        </div>
    </div>
</template>

<script>
    import {getCategory, getSubcategory, getCategoryDetail} from "network/category";
    import NavBar from "components/common/navbar/NavBar";
    import Scroll from "components/common/scroll/Scroll";
    import CategoryList from "./childComps/CategoryList";
    import SubList from "./childComps/SubList";
    import TabControl from 'components/content/tabControl/TabControl'
    import GoodsList from 'components/content/goods/GoodsList'

    export default {
        name: "Category",
        data() {
            return {
                categoryData: [],
                currentIndex: -1,
                categoryList: [],
                currentType: 'pop',
            };
        },
        methods: {
            tabClick(index) {
                switch (index) {
                    case 0:
                        this.currentType = 'pop'
                        break
                    case 1:
                        this.currentType = 'new'
                        break
                    case 2:
                        this.currentType = 'sell'
                        break
                }
            },
            getCategory() {
                return getCategory().then(res => {
                    const data = res.data.category.list
                    this.categoryList = data.map(item => item.title)
                    for (var i = 0; i < data.length; i++) {
                        this.categoryData[i] = {
                            maitKey: data[i].maitKey,
                            miniWallkey: data[i].miniWallkey,
                            subcategories: [],
                            goods: {
                                pop: [],
                                new: [],
                                sell: []
                            }
                        }
                    }
                    this.getSubcategory(0)
                })
            },
            getSubcategory(index) {
                this.currentIndex = index
                const maitKey = this.categoryData[this.currentIndex].maitKey
                return getSubcategory(maitKey).then(res => {
                    this.categoryData[index].subcategories = res.data.list
                    this.getCategoryDetail('pop')
                    this.getCategoryDetail('new')
                    this.getCategoryDetail('sell')
                })
            },
            getCategoryDetail(type) {
                const miniWallkey = this.categoryData[this.currentIndex].miniWallkey
                return getCategoryDetail(miniWallkey, type).then(res => {
                    this.categoryData[this.currentIndex].goods[type]=res
                    this.categoryData = {...this.categoryData}
                }).catch(err => {
                    console.log(JSON.stringify(err))
                })
            },
            listClick(index) {
                this.getSubcategory(index)
            }
        },
        computed: {
            showSubcategories(){
                if(this.currentIndex==-1) return []
                return this.categoryData[this.currentIndex].subcategories
            },
            showCategoryDeatil(){
                if(this.currentIndex==-1) return []
                return this.categoryData[this.currentIndex].goods[this.currentType]
            }
        },
        created() {
            this.getCategory()
        },
        mounted() {
        },
        components: {NavBar, CategoryList, Scroll, SubList, TabControl, GoodsList}
    };
</script>

<style scoped>
    #category {
        padding-top: 44px;
        height: 100vh;
        position: relative;
    }

    .category-nav {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background: var(--color-tint);
        color: #fff;
        z-index: 10;
    }

    .category-content {
        display: flex;
        position: absolute;
        top: 44px;
        right: 0;
        bottom: 49px;
        left: 0;
    }

    .category-list {
        width: 100px;
        height: 100%;
        position: relative;
    }

    .category-info {
        flex: 1;
        height: 100%;
        position: relative;
    }

    .content {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        overflow: hidden;
    }
</style>
