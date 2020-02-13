import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutations-types'

Vue.use(Vuex)
//创建模块对象
const moduleA={
    state:{
        name:'zhangsan'
    },
    mutations:{
        //state,payload
    },
    actions:{
        //context
    },
    getters:{
        //state,getters,rootState
    }
}
export default new Vuex.Store({
    state: {
        counter: 1000,
        student: [
            {id: 1, name: 'why', age: 18},
            {id: 2, name: 'kobe', age: 24},
            {id: 3, name: 'james', age: 30},
            {id: 4, name: 'curry', age: 10}
        ],
        info: {
            name: 'xiaoxiao',
            age: 18,
            height: 1.98
        }
    },
    mutations: {
        [types.INCREMENT](state) {
            state.counter++
        },
        decrement(state) {
            state.counter--
        },
        incrementCount(state, payload) {
            // state.counter+= count
            state.counter += payload.count
        },
        updateInfo(state, payload) {
            Vue.set(state.info, 'height', payload.height)
            Vue.delete(state.info, 'age')
        }
    },

    actions: {
        //context上下文$store
        aUpdateInfo(context,payload){
         /* setTimeout(()=>{
             context.commit('updateInfo',payload.infoObj)
              window.console.log(payload.infoObj)
             payload.success();
          },1000)*/
         return new Promise((resolve, reject) => {
             setTimeout(()=>{
                 context.commit('updateInfo',payload.infoObj)
                 window.console.log(payload.infoObj)
                 console.log(1);
                 resolve('1111')
                 reject()
             },1000)
         })
        }
    },
    getters: {
        powerCounter(state) {
            return state.counter * state.counter
        },
        more20stu(state) {
            return state.student.filter(s => s.age > 20)
        },
        more20stuLength(state, getters) {
            return getters.more20stu.length
        },
        moreAgeStu(state) {
            return age => {
                return state.student.filter(s => s.age > age)
            }
        }
    },
    modules: {
        a:moduleA
    }
})
