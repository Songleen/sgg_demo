// vuex的核心管理模块

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)



// 状态对象
const state = {
    count:0
}

// 包含多个更新state函数的对象
const mutations = {
    // 增加的mutaion和减少的mutation
    INCREMENT(state){
        state.count++
    },

    DECREMENT(state){
        state.count--
    }
    
}

// 包含多个对应事件回调函数的对象
const actions = {
    // 增加的action
    increment({commit}){
        // 2、commit导致某个mutation调用,具体哪个mutation就通过参数指定
        commit('INCREMENT')
    },
    // 减少的action
    decrement({commit}){
        // 2、commit导致某个mutation调用,具体哪个mutation就通过参数指定
        commit('DECREMENT')
    },
    // 如果是奇数才增加
    incrementIfOdd({commit,state}){
        if(state.count%2 === 1){
            commit('INCREMENT')
        }
    },
    // 异步的action
    incrementAsync({commit}){
        // 在action中直接就可以执行异步代码
        setTimeout(()=>{
            commit('INCREMENT')
        },1000)
    }
}

// 包含多个getter计算属性函数的对象
const getters = {
    evenOrOdd2(state) {
        return state.count % 2 === 0 ? "偶数" : "奇数";
      },
}

export default new Vuex.Store({
    state,  
    mutations,
    actions,
    getters
})


