const todos = {
  state: {
    todos: [],
    filter:"all",
  },
  mutations: {
    addTodo(state, todo) {
      state.todos.push(todo)
    },
    removeTodo(state, id) {
      state.todos = state.todos.filter(todo => todo.id !== id)
    },
    checkTodo(state, todoItem) {
      state.todos = state.todos.map((todo) => {
        if (todo.id === todoItem.id) {
          return todoItem
        }
        return todo
      })
    },
    filterTodos(state, filter) {
      state.filter = filter
    },
    toggleCheckAll(state, isCheckedAll) {
      state.todos = state.todos.map((todo) => {
        isCheckedAll ? todo.checked = true : todo.checked = false
        return todo
      })
    },
    clearChecked(state) {
      state.todos = state.todos.filter(todo => todo.checked !== true)
    }
  },
  actions: {

  },
  getters: {

  }
}

export default todos
