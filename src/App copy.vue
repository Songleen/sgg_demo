<template>
  <div>
    <div class="todo-container">
      <div class="todo-wrap">
        <!-- 父组件向子组件传递函数 -->
        <!-- <todo-header :addTodo="addTodo" /> -->

        <!-- 2、在父组件中给标签对象绑定addTodo的事件监听，并指定其对应的函数 -->
        <!-- <todo-header @addTodo="addOne" /> -->

        <!-- 2、通过ref给标签对象指定唯一标识 -->
        <todo-header ref="header" />

        <todo-list :todos="todos" />
        
        <todo-footer>
          <!-- 这是在父组件中运行好了之后，再插到子组件中去 -->
          <!-- 这里通过slot属性，指定插入到哪个子组件中去 -->
          <input slot="checkAll" type="checkbox" v-model="isAllSelected" />
          <span slot="count">已完成{{ getSelectedNum }} / 全部{{ todos.length }}</span>
          <button slot="delete" class="btn btn-danger" v-show="getSelectedNum" 
          @click="deleteCompleteTodo">清除已完成任务</button>
        </todo-footer>

      </div>
    </div>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoFooter from "./components/TodoFooter.vue";
import TodoList from "./components/TodoList.vue";
// 引入
import PubSub from "pubsub-js";
export default {
  data() {
    return {
      /* todos: [
        { title: "guanyu", completed: false },
        { title: "zhangfei", completed: false },
        { title: "zhaoyun", completed: false },
      ], */
      // 从localStorage读取todos,localStorage存的是json格式文本字符串
      todos: JSON.parse(window.localStorage.getItem("todos_key") || "[]"),
    };
  },
  computed: {
    getSelectedNum() {
      return this.todos.reduce(
        (total, todo) => total + (todo.completed ? 1 : 0),
        0
      );
    },
    isAllSelected: {
      get() {
        // 这个就是用来实现，当其它三个都被选中，则自己也显示被选中状态
        return this.getSelectedNum === this.todos.length;
      },
      set(value) {
        this.selectAllTodos(value);
      },
    },
  },
  // 深度监视，该回调会在任何被侦听的对象的 property 改变时被调用，不论其被嵌套多深
  watch: {
    todos: {
      deep: true, // 代表深度监视
      handler: function (newValue, oldValue) {
        // 将todos最新值的json数据，保存到localStorage
        window.localStorage.setItem("todos_key", JSON.stringify(newValue));
      },
    },
  },
  components: {
    TodoHeader,
    TodoFooter,
    TodoList,
  },
  methods: {
    // 1、父组件中定义功能函数
    addOne(todo) {
      this.todos.unshift(todo);
    },

    // 1、定义功能函数
    deleteTodo(index) {
      this.todos.splice(index, 1);
    },

    // 删除所有选中的todo,这里用过滤间接实现
    deleteCompleteTodo() {
      this.todos = this.todos.filter((todo) => !todo.completed);
    },
    selectAllTodos(check) {
      this.todos.forEach((todo) => (todo.completed = check));
    },
  },

  // 3、在mounted为标签对象绑定事件监听
  mounted() {
    // 执行异步代码
    // 给<TodoHeader/>绑定addTodo事件监听
    this.$refs.header.$on("addTodo", this.addOne);

    // 2、订阅消息 参数一：订阅的事件监听；回调函数最好用匿名函数，
    // 里面的第一个参数是绑定的事件名，这里就是deleteOne，第二个参数是要传的数据
    PubSub.subscribe("deleteOne", (msg, index) => {
      console.log(msg);
      this.deleteTodo(index);
    });
  },
};
</script>

<style scoped>
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

/*app*/
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>