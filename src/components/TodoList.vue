<template>
  <div class="todo-main">
    <todo-item
      v-for="(todo, index) in todos"
      :key="index"
      :todo="todo"
      :index="index"
    />
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";
export default {
  props: ["todos","deleteTodo"],
  components: {
    TodoItem,
  },
};
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>