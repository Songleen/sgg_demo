<template>
  <div>
    <p>click {{ $store.state.count }} times,count is {{ evenOrOdd }}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">increment if odd</button>
    <button @click="incrementAsync">increment async</button>
  </div>
</template>
<script>
import {mapState,mapActions, mapGetters} from 'vuex'
export default {
  computed: {
    /* evenOrOdd() {
      return this.$store.getters.evenOrOdd;
    }, 
      count(){
        return this.$store.state.count
      }
    */
    ...mapState(['count']), // mapState()返回值：{count(){return this.$store.state['count']}}
    //...mapGetters([evenOrOdd]), // mapGetters返回值：{evenOrOdd(){return this.$store.getters.[evenOrOdd]}}
    ...mapGetters({evenOrOdd: 'evenOrOdd2'}) // 可以映射成不同的名称，但推介用一样的名字。第一个evenOrOdd对应本页面展示的
  },
  methods: {

    ...mapActions(['increment','decrement','incrementIfOdd','incrementAsync'])
    /* // 增加
    increment() {
      // 1、通知vuex去增加,消息名，数据（如果需要）。
      // 触发store对象中对应的action调用
      this.$store.dispatch("increment");
    },
    // 1、减少
    decrement() {
      this.$store.dispatch("decrement");
    },
    // 如果是奇数才增加
    incrementIfOdd() {
      this.$store.dispatch("incrementIfOdd");
    },
    // 过1s才增加
    incrementAsync() {
      this.$store.dispatch("incrementAsync");
    }, */
  },
};
</script>

<style scoped>
</style>