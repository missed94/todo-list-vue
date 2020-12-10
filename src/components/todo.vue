<template>
  <div>
    <!--<pre>{{todos}}</pre>-->
    <div class="todo">
      <todo-input
        @addTodo="addTodo"
      />
      <todo-list
        :defaultTodos="todos"
        :todos="filteredTodos"
        @removeTodo="removeTodo"
        @checkTodo="checkTodo"
        @filterTodos="filterTodos"
        @checkAll="checkAll"
        @clearChecked="clearChecked"
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
        filter:"all",
        checkedAll: false,
      }
    },
    computed: {
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
    methods: {
      addTodo(todo) {
        this.todos.push(todo)
      },
      removeTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id)
      },
      checkTodo(todoItem) {
        this.todos = this.todos.map((todo) => {
          if (todo.id === todoItem.id) {
            return todoItem
          }
          return todo
        })
      },
      filterTodos(filter) {
        this.filter = filter
      },
      checkAll() {
        this.checkedAll = !this.checkedAll
        this.todos = this.todos.map((todo) => {
          this.checkedAll ? todo.checked = true : todo.checked = false
          return todo
        })
      },
      clearChecked() {
        this.todos = this.todos.filter(todo => todo.checked !== true)
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
