import {debounce} from "./utils";
export const itemListenerMixin={
    data(){
        return{
            itemImgListener:null,
            newRefresh:null
        }
    },
    mounted(){
        //防抖刷新better-scroll
        this.newRefresh = debounce(this.$refs.scroll.refresh, 200)
        //图片加载事件,当图片加载完成
        this.itemImgListener=() => {
            this.newRefresh()
        }
        this.$bus.$on('itemImageLoad',this.itemImgListener )
    }
}