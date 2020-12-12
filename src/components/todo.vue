<template>
  <div>
    <div class="todo">
      <todo-input/>
      <todo-list
        :defaultTodos="todos"
        :todos="filteredTodos"
      />
    </div>
  </div>

</template>

<script>
  import TodoInput from "./todoInput";
  import TodoList from "./todoList";
  import {mapState} from "vuex";

  export default {
    name: 'todo',
    components: {TodoList, TodoInput},
    data() {
      return {
      }
    },
    computed: {
      ...mapState({
        todos: state => state.todos.todos,
        filter: state => state.todos.filter
      }),
      filteredTodos() {
        switch (this.filter) {
          case "all": {
            return this.todos
          }
          case "active": {
            return this.todos.filter(todo => !todo.checked)
          }
          case "completed": {
            return this.todos.filter(todo => todo.checked)
          }
        }
      },
    },
  }
</script>

<style scoped>
  .todo {
    background: #fff;
    margin: 130px 0 40px 0;
    position: relative;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
  }
</style>
