import {debounce} from "./utils";
export const itemListenerMixin={
    data(){
        return{
            itemImgListener:null
        }
    },
    mounted(){
        console.log(1);
        //防抖刷新better-scroll
        const refresh = debounce(this.$refs.scroll.refresh, 200)
        //图片加载事件,当图片加载完成
        this.itemImgListener=() => {
            refresh()
        }
        this.$bus.$on('itemImageLoad',this.itemImgListener )
    }
}