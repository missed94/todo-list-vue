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
          @change="checkTodo"
          :checked="todo.checked"
        >
        <p class="todoName">{{todo.todoName}}</p>
      </label>
      <button
        class="remove"
        @click="removeTodo"
      >x</button>
    </div>
  </li>
</template>

<script>
  export default {
    name: 'todoItem',
    data() {
      return {}
    },
    props: {
      todo: Object,
    },
    methods: {
      removeTodo() {
        this.$emit('removeTodo', this.todo.id)
      },
      checkTodo(e) {
        const todoItem = {
          ...this.todo,
          checked: e.target.checked
        }
        this.$emit('checkTodo', todoItem)
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

  .checked .todoName{
    text-decoration: line-through;
    color: #dcdcdc;
  }

  .view {
    display: flex;
    align-items: center;
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
</style>
