<template>
  <div>
    <div class="todo-header">
      <input
        type="text"
        placeholder="请输入你的任务名称，按回车键确认"
        v-model="title"
        @keyup.enter="add"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title:'',
      completed: false
    };
  },
  methods: {
    add() {
      const { title, completed, addTodo } = this;
      if(!title){
        alert('请输入数据!')
        return;
      };
      const todo = {
        title,
        completed,
      };
      // addTodo(todo);

      // 3、在子组件中通过$emit触发父组件中的自定义事件，并传递需要数据
      this.$emit('addTodo',todo)

      this.title = '';
    },
  },
  props: {
    addTodo: Function,
  },
};
</script>

<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>