import {ADD_COUNT, ADD_PRODUCT} from "./mutation-types";

export default {
    addCart(context, payLoad) {
        let oldProduct = null
        let index = -1
        for (let i in context.state.cartList) {
            let item = context.state.cartList[i]
            if (item.iid == payLoad.iid && item.currentStyle == payLoad.currentStyle && item.currentSize == payLoad.currentSize) {
                oldProduct = item
                index = i
            }
        }
        if (oldProduct) {
            oldProduct = context.state.cartList.splice(index, 1)[0]
            context.commit('ADD_COUNT', {oldProduct, payLoad})
            context.commit('ADD_PRODUCT', payLoad)
        } else {
            context.commit('ADD_PRODUCT', payLoad)
        }
        console.log(context.state.cartList);
    }
}