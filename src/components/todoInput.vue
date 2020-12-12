<template>

  <div class="todoInput">
    <div class="error">
      {{ validation.firstError('todo.todoName') }}
    </div>
    <label>
      <input
        class="input"
        type="text"
        placeholder="What needs to be done?"
        autofocus="autofocus"
        v-model="todo.todoName"
        @keydown.enter="addNewTodo"
      >
    </label>
  </div>
</template>

<script>
  import {Validator} from 'simple-vue-validator'
  import SimpleVueValidator from 'simple-vue-validator';
  import {mapMutations} from "vuex";
  let uniqId = 0
  export default {
    name: 'todoInput',
    mixins:[SimpleVueValidator.mixin],
    validators: {
  'todo.todoName'(name) {
    return Validator.value(name).required('Cannot be empty');
  }
    },
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
      ...mapMutations(['addTodo']),
      addNewTodo() {
        this.$validate().then(success => {
          if (!success) return;
          uniqId++
          this.todo.id = uniqId
          this.addTodo({...this.todo})
          this.todo.todoName = ""
          this.validation.reset()
        })
      }
    }
  }
</script>

<style lang="scss" scoped>

  .input {
    position: relative;
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

  .error {
    position: absolute;
    bottom: 100%;
    color: #af5b5e;
  }
</style>
