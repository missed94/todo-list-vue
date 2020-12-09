<template>
  <div class="todoFilter">
    <button type="button" class="button active">All</button>
    <button type="button" class="button">Active</button>
    <button type="button" class="button">Completed</button>
  </div>
</template>

<script>
  export default {
    name: 'todoFilter',
    data() {
      return {}
    }
  }
</script>

<style lang="scss" scoped>


  .button {
    cursor: pointer;
    margin-right: 20px;
    padding: 3px 7px;
    background: transparent;
    font-weight: 300;
    color: inherit;
    border: 1px solid transparent;
    border-radius: 3px;
    outline: none;

    &:hover {
      border: 1px solid rgba(175, 47, 47, 0.1);
    }

    &:last-child {
      margin-right: 0;

    }

    &.active {
      border-color: rgba(175, 47, 47, 0.2);
    }


  }
</style>
