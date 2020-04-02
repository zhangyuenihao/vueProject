import {debounce} from "./utils";
import BackTop from "components/content/backTop/BackTop"


export const itemListenerMixin = {
    data() {
        return {
            itemImgListener: null,
            newRefresh: null
        }
    },
    mounted() {
        //防抖刷新better-scroll
        this.newRefresh = debounce(this.$refs.scroll.refresh, 200)
        //图片加载事件,当图片加载完成
        this.itemImgListener = () => {
            this.newRefresh()
        }
        this.$bus.$on('itemImageLoad', this.itemImgListener)
    }
}
export const backTopMixin = {
    components: {
        BackTop
    },
    data() {
        return {
            isShowBackTop: false,
            offsetHeight: Number
        }
    },
    mounted() {
        this.offsetHeight = this.$refs.scroll.scroll.wrapper.offsetHeight
    },
    methods: {
        /**
         * 返回顶部 scroll是获取的组件元素
         **/
        backClick() {
            this.$refs.scroll.scrollTo(0, 0, 600)
        },
        listenShowBackTop(position) {
            this.isShowBackTop = (-position.y) > this.offsetHeight
        }
    }
}
