<template>
  <div class="todoList">
    <button
      class="checkAllbtn"
      :class="{
      checkAllbtn_active: todos.every(todo => todo.checked === true),
      checkAllbtn_visibly: defaultTodos.length
    }"
      @click="handleToggleCheckAll"
    >❯
    </button>
    <ul class="list">
      <todo-item
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
      />
    </ul>
    <div class="footer" v-if="defaultTodos.length">
      <div class="footer-content">
        <div class="counter">
          {{todosLeft.length}} items left
        </div>
        <div class="filter">
          <todo-filter/>
        </div>
        <button
          class="clearCheckedBtn"
          :class="{clearCheckedBtn_active: todos.some(todo => todo.checked === true)}"
          @click="handleClearChecked"
        >Clear completed
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  import TodoFilter from "./todoFilter";
  import TodoItem from "./todoItem";
  import {mapMutations} from "vuex";

  export default {
    name: 'todoList',
    components: {TodoItem, TodoFilter},
    data() {
      return {
        isCheckedAll: false,
      }
    },
    props: {
      todos: Array,
      defaultTodos: Array,
    },
    computed: {
      todosLeft() {
        return this.todos.filter(todo => !todo.checked)
      }
    },
    methods: {
      ...mapMutations(['toggleCheckAll', 'clearChecked']),
      handleToggleCheckAll() {
        this.isCheckedAll = !this.isCheckedAll
        this.toggleCheckAll(this.isCheckedAll)
      },
      handleClearChecked() {
        this.clearChecked()
      }
    }
  }
</script>

<style lang="scss" scoped>
  .todoList {
    position: relative;
  }

  .checkAllbtn {
    display: none;
    font-size: 16px;
    position: absolute;
    color: #e6e6e6;
    bottom: calc(100% + 20px);
    left: 10px;
    border: none;
    background: transparent;
    cursor: pointer;
    transform: rotate(90deg);;

    &:focus {
      outline: none
    }
  }

  .checkAllbtn_active {
    color: #737373;
  }

  .checkAllbtn_visibly {
    display: block;
  }

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

  .clearCheckedBtn {
    display: none;
    position: relative;
    cursor: pointer;
    border: none;
    background: transparent;
    color: inherit;

    &:hover {
      text-decoration: underline;
    }
  }

  .clearCheckedBtn_active {
    display: block;
  }
</style>
