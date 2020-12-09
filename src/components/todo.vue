<template>
  <div>
    <pre>{{todos}}</pre>
    <div class="todo">
      <todo-input
        @addTodo="addTodo"
      />
      <todo-list
        :todos="todos"
        @removeTodo="removeTodo"
      />
    </div>
  </div>

</template>

<script>
  import TodoInput from "./todoInput";
  import TodoList from "./todoList";

  export default {
    name: 'todo',
    components: {TodoList, TodoInput},
    data() {
      return {
        todos: [],
      }
    },
    methods: {
      addTodo(todo) {
        this.todos.push(todo)
      },
      removeTodo(id) {
        console.log(id);
        this.todos = this.todos.filter(todo => todo.id !== id)
      }
    }
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
