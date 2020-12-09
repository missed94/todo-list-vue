<template>
  <div id="todo-app">
    <div class="container">
      <todo/>
    </div>
  </div>
</template>

<script>


import Todo from "./components/todo";
export default {

  name: 'todo-app',
  components: {Todo},
  data () {
    return {

    }
  }
}
</script>

<style  lang="scss">
  * {
    box-sizing: border-box;
  }
body {
  font: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;
}
.todo-app {
  background: #f5f5f5;
}
.container {
  width: 600px;
  margin: 0 auto;
}

</style>
