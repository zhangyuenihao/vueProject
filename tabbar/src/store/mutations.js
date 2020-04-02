import {ADD_COUNT, ADD_PRODUCT} from "./mutation-types";

export default {
    // 做单一的事情
    [ADD_COUNT](state, payLoad) {
        payLoad.oldProduct.count += payLoad.payLoad.count
    },
    [ADD_PRODUCT](state, payLoad) {
        state.cartList.unshift(payLoad)
    }

}