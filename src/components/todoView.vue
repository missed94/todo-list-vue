<template>
  <div>
    <h1>todo item {{$route.params.todoName}}</h1>
    <button
      @click="goBack"
    >
      go back
    </button>
  </div>
</template>

<script>

  export default {
    name: 'todoView',
    data() {
      return {}
    },
    methods: {
      goBack() {
        this.$router.go(-1)
      }
    }
  }
</script>

<style lang="scss" scoped>


</style>
