<template>
  <div>
    <li
      @mouseenter="enter"
      @mouseleave="leave"
      :style="{ background: bgColor }"
    >
      <label>
        <input type="checkbox" v-model="todo.completed" />
        <span>{{ todo.title }}</span>
      </label>
      <button
        class="btn btn-danger"
        v-if="isShow"
        style="background: red"
        @click="deleteItem"
      >
        删除
      </button>
    </li>
  </div>
</template>

<script>
import PubSub from "pubsub-js"
export default {
  data() {
    return {
      bgColor: "white",
      isShow: false,
    };
  },
  methods: {
    enter() {
      this.bgColor = "grey";
      this.isShow = true;
    },
    leave() {
      this.bgColor = "white";
      this.isShow = false;
    },
    deleteItem(index) {
      if (window.confirm("确认删除" + this.todo.title + "的评论吗？")) {
        // this.deleteTodo(this.index);

        // 发布消息，会触发订阅消息的回调函数调用
        PubSub.publish('deleteOne',index)
      }
      
    },
  },
  props: ["todo", "index", "deleteTodo"],
};
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>