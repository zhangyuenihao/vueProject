<template>
    <div class="addToCart" v-if="Object.keys(skuInfo).length!==0">
        <div class="addToCart-content">
            <div class="close-btn" @click="closeHandler">x</div>
            <div class="top">
                <img class="product-img" :src="nowImage" alt="">
                <div class="product-info">
                    <span class="price" ref="price">{{nowPrice ==skuInfo.defaultPrice?'':'￥'}}{{nowPrice}}</span>
                    <p class="total-stock">
                        库存{{skuInfo.totalStock}}件
                    </p>
                    <p v-if="currentStyle&&currentSize" class="select">
                        已选 "{{currentSize}}" "{{currentStyle}}"
                    </p>
                    <p v-else class="select">
                        选择 {{skuInfo.styleKey}},{{skuInfo.sizeKey}}
                    </p>

                </div>
            </div>
            <scroll class="content">
                <div class="middle">
                    <div v-if="Object.keys(skuInfo.props).length!==0">
                        <div class="props-item" v-for="(item,index) in skuInfo.props" :key="index">
                            <div class="props-label">{{item.label}}</div>
                            <ul class="sub-item">
                                <li class="item2"
                                    :class="{active:item2.isDefault}"
                                    v-for="(item2,indey) in item.list" :key="indey"
                                    @click="selectHandler(item.list,indey)">
                                    <img v-if="item==skuInfo.props[0]" class="image"
                                         :src="skuInfo.skus|getImage(item2.styleId)"
                                         alt="">
                                    {{item2.name}}
                                </li>
                            </ul>

                        </div>
                    </div>
                    <div class="count">
                        <span>购买数量</span>
                        <count-btn class="count-btn" :count="count" @subClick="subClick(count)"
                                   @addClick="addClick(count)">
                        </count-btn>
                    </div>
                </div>
            </scroll>

            <div class="bottom">
                <span class="confirm" @click="confirmClick">确定</span>
            </div>
        </div>
    </div>
</template>

<script>
    import Scroll from "components/common/scroll/Scroll";
    import CountBtn from "components/content/countBtn/CountBtn";

    export default {
        name: "DetailAddToCart",
        components: {
            Scroll, CountBtn
        },
        props: {
            skuInfo: {
                type: Object,
                default() {
                    return {}
                }
            },
            iid: {
                type: String,
                default() {
                    return '';
                }
            }
        },
        data() {
            return {
                defaultImage: 0,
                nowPrice: '',
                nowImage: '',
                currentIndex: -1,
                current: {},
                count: 1,
                currentSize: '',
                currentStyle: ''
            }
        },
        methods: {
            selectHandler(list, indey) {
                if (list[indey].isDefault == true) {
                    list[indey].isDefault = false
                } else {
                    list.map(item => {
                        return item.isDefault = false
                    });
                    list[indey].isDefault = true;
                }
                let _this = this
                this.$nextTick(() => {
                    if (list[indey].isDefault == true) {
                        list.forEach(item => {
                            if (item.styleId) {
                                list.map(item => item.styleId)
                                _this.$set(_this.current, "currentStyleId", list[indey].styleId);
                            } else if (item.sizeId) {
                                list.map(item => item.sizeId)
                                _this.$set(_this.current, "currentSizeId", list[indey].sizeId);
                            }
                        })
                    } else {
                        list.forEach(item => {
                            if (item.styleId) {
                                _this.$set(_this.current, "currentStyleId", '');
                            } else if (item.sizeId) {
                                _this.$set(_this.current, "currentSizeId", '');
                            }
                        })
                    }

                })
            },

            closeHandler() {
                this.$emit('cartClick')
            },
            addToCart() {
                const product = {}
                product.image = this.nowImage
                product.title = this.skuInfo.title
                product.currentStyle = this.currentStyle
                product.currentSize = this.currentSize
                product.currentPrice = this.nowPrice
                product.iid = this.iid
                product.count = this.count
                product.isChecked = true
                this.$store.dispatch('addCart', product).then(res => {
                    this.$toast.show(res,1500,this.closeHandler)
                })
            },
            confirmClick() {
                if (this.currentStyle && this.currentSize) {
                    this.addToCart()
                }
            },
            getPrice(str, n, m) {
                if (!n || !m) {
                    this.nowPrice = str.defaultPrice
                    this.nowImage = str.skus[0].img
                    this.currentStyle = ''
                    this.currentSize = ''
                    return
                }
                let priceArr = []
                let imgArr = str.skus.filter(item => {
                    return item.styleId == n
                })
                this.nowImage = imgArr[0].img
                if (n && m) {
                    priceArr = str.skus.filter(item => {
                        return item.styleId == n && item.sizeId == m
                    })
                    this.nowPrice = (priceArr[0].nowprice / 100).toFixed(2)
                    this.currentStyle = priceArr[0].style
                    this.currentSize = priceArr[0].size
                }

            },
            subClick(count) {
                if (count < 2) {
                    return
                }
                count--
                this.count = count
            },
            addClick(count) {
                count++
                this.count = count
            }
        },
        filters: {
            getImage(str, n) {
                let product = []
                product = str.filter(item => {
                    return item.styleId == n
                })
                return product[0].img
            },

        },
        watch: {
            skuInfo(value) {
                this.skuInfo = value
                let that = this
                this.$nextTick(() => {
                    that.getPrice(that.skuInfo, that.current.currentStyleId, that.current.currentSizeId)
                })

            },
            current: {
                handler(newValue) {
                    this.current = newValue
                    this.getPrice(this.skuInfo, this.current.currentStyleId, this.current.currentSizeId)
                },
                deep: true
            }
        }
    }
</script>

<style scoped>
    .addToCart {
        background-color: rgba(0, 0, 0, .5);
        padding-top: 150px;
        overflow: hidden;
    }

    .addToCart-content {
        height: 100%;
        position: relative;
        background-color: #ffffff;
    }

    .close-btn {
        position: absolute;
        width: 20px;
        height: 20px;
        top: 10px;
        right: 10px;
        border: 1px solid #666666;
        border-radius: 50%;
        z-index: 3;
        text-align: center;
    }

    .top {
        padding: 20px;
        background: #ffffff;
        position: relative;
        z-index: 2;
        display: flex;
    }



    .product-img {
        width: 100px;
        height: 100px;
        border-radius: 5px;
        vertical-align: top;
    }

    .product-info {
        display: inline-block;
        margin-left: 20px;
        line-height: 30px;
        overflow: hidden;

    }

    .price {
        color: var(--color-high-text);
    }
    .content {
        min-height: 200px;
        max-height: 320px;
        overflow: hidden;
    }
    .props-label {
        line-height: 24px;
        margin-left: 10px;
    }

    .image {
        width: 24px;
        height: 24px;
        vertical-align: middle;
    }

    .sub-item {
        overflow: hidden;
        border-bottom: 1px solid #eeeeee;
    }

    .item2 {
        list-style: none;
        line-height: 24px;
        padding: 5px 10px;
        float: left;
        background-color: #eeeeee;
        margin: 5px 10px;
        border-radius: 5px;
        border: 1px solid #ffffff;
    }

    .item2.active {
        border: 1px solid var(--color-high-text);
        background-color: LavenderBlush;
        box-sizing: border-box;
    }

    .bottom {
        position: absolute;
        width: 100%;
        bottom: 10px;
        text-align: center;
        padding-top: 10px;
        border-top: 1px solid #eeeeee;
    }

    .count {
        border-bottom: 1px solid #eeeeee;
        padding: 10px;
    }
.bottom{
    background-color: white;
}

    .confirm {
        display: inline-block;
        width: 98%;
        background-color: orangered;
        padding: 5px 0;
        border-radius: 10px;
        color: #ffffff;
    }
</style>