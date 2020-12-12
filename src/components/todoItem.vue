<template>
  <li
    class="todoItem"
    :class="{checked: todo.checked}"
  >
    <div class="view">
      <label class="label">
        <input
          type="checkbox"
          class="toggle"
          @change="handleCheckTodo"
          :checked="todo.checked"
        >
        <p class="todoName">{{todo.todoName}}</p>
      </label>
      <router-link
        class="viewButton"
        tag="button"
        :to="`/view/${todo.todoName}`"
      >&#10132</router-link>
      <button
        class="remove"
        @click="handleRemoveTodo"
      >&#10006
      </button>
    </div>
  </li>
</template>

<script>
  import {mapMutations} from "vuex";

  export default {
    name: 'todoItem',
    data() {
      return {}
    },
    props: {
      todo: Object,
    },
    methods: {
      ...mapMutations(['removeTodo', 'checkTodo']),
      handleRemoveTodo() {
        this.removeTodo(this.todo.id)
      },
      handleCheckTodo(e) {
        const todoItem = {
          ...this.todo,
          checked: e.target.checked
        }
        this.checkTodo(todoItem)
      }
    }


  }
</script>

<style lang="scss" scoped>
  .todoItem {
    position: relative;
    border-bottom: 1px solid #ededed;

    &:last-child {
      border-bottom: none;

    }

    &:hover {
      .remove {
        visibility: visible;
      }
    }
  }

  .checked .todoName {
    text-decoration: line-through;
    color: #dcdcdc;
  }

  .view {
    display: flex;
    align-items: center;

    &:hover {
      .viewButton {
        visibility: visible;
      }
    }
  }

  .label {
    padding-left: 10px;
    display: flex;
    align-items: center;
    flex: 1;
  }

  .todoName {
    margin-left: 40px;
  }

  .remove {
    visibility: hidden;
    display: block;
    width: 40px;
    height: 40px;
    color: #cc9a9a;
    transition: color 0.2s ease-out;
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 20px;

    &:focus {
      outline: none;
    }

    &:hover {
      color: #af5b5e;
    }
  }

  .viewButton {
    visibility: hidden;
    cursor: pointer;
    background: transparent;
    border: none;
    outline: none;
    font-size: 18px;
    color: #e6e6e6;
    transition: color 0.2s ease-out;

    &:hover {
      color: #737373;
    }
  }
</style>
