import Vue from 'vue'
import App from './App.vue'
import './css/base.css'
import store from './store'

new Vue({
    el:'#app',
    components:{
        App
    },
    template:'<App/>',
    store // 所有的组件对象都多了一个属性：$store
})