<template>
  <div class="todoInput">
    <input
      class="input"
      type="text"
      placeholder="What needs to be done?"
      autofocus="autofocus"
      v-model="todo.todoName"
      @keydown.enter="addTodo"
    >
  </div>
</template>

<script>
 let uniqId = 0

  export default {
    name: 'todoInput',
    data() {
      return {
        todo: {
          id: 0,
          todoName: "",
          checked: false
        }
      }
    },
    methods: {
      addTodo() {
        uniqId++
        this.todo.id = uniqId
        this.$emit('addTodo', {...this.todo})
        this.todo.todoName = ""
      }
    }
  }
</script>

<style lang="scss" scoped>

  .input {
    width: 100%;
    padding: 16px 16px 16px 60px;
    border: none;
    background: rgba(0, 0, 0, 0.003);
    box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
    line-height: 1.4rem;
    outline: 0;
    color: inherit;
    font-size: 24px;

    &::placeholder {
      font-size: 24px;
      color: #dcdcdc;
      font-style: italic;
    }
  }
</style>
