<template>
  <div class="todoList">
    <ul class="list" >
      <todo-item
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        @removeTodo="removeTodo"
      />
    </ul>
    <div v-if="!!todos.length" class="footer">
      <div class="footer-content">
        <div class="counter">
          {{todos.length}} items left
        </div>
        <div class="filter">
          <todo-filter/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import TodoFilter from "./todoFilter";
  import TodoItem from "./todoItem";
  export default {
    name: 'todoList',
    components: {TodoItem, TodoFilter},
    data() {
      return {
      }
    },
    props: {
      todos: Array,
    },
    methods: {
      removeTodo(id) {
        this.$emit('removeTodo', id)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .list {
    font-size: 24px;
  }



  .footer {
    color: #777;
    padding: 10px 15px;
    text-align: center;
    border-top: 1px solid #e6e6e6;
    font-size: 14px;

    &:before {
      content: '';
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      height: 50px;
      overflow: hidden;
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6, 0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6, 0 17px 2px -6px rgba(0, 0, 0, 0.2);
    }
  }

  .footer-content {
    display: flex;
    align-items: center;
  }

  .filter {
    position: relative;
    flex: 1;
  }
</style>
