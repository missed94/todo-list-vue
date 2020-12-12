<template>
  <div class="todoFilter">
    <button
      v-for="filter in filters"
      type="button"
      class="button"
      :class="{active: currentFilter === filter}"
      @click="handleFilterTodos(filter)"
    >
      {{filter}}
    </button>
  </div>
</template>

<script>
  import {mapMutations} from "vuex";

  export default {
    name: 'todoFilter',
    data() {
      return {
        filters: ['all', 'active', 'completed'],
        currentFilter: 'all',
      }
    },
    methods: {
      ...mapMutations(['filterTodos']),
      handleFilterTodos(filter) {
        this.currentFilter = filter
        this.filterTodos(filter)
      }
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
