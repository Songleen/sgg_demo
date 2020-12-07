<template>
  <div>
    <div class="todo-footer">
      <label>
        <!-- 通过slot标签在子组件中，设置标签放置的位置 -->
        <slot name="checkAll"></slot>
      </label>
      <span>
        <slot name="count"></slot>
      </span>
      <!-- 这个地方的v-show设置当有条目被选中时才显示，否则不显示 -->
      <slot name="delete"></slot>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>