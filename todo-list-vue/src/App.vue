<template>
  <div id="app">
    <h3>Todo List</h3>
    <label>New Todo Item</label>
    <input v-model="newTodoItem" type="text">
    <button v-on:click="addTodo">Submit Todo</button>
    <h3 v-if="todoList.length === 0">You don't have any todos! </h3>
    <div v-else>
      <h3>Current Todos</h3>
      <ol>
        <li v-for="todo in todoList" :key="todo">
          {{ todo }}
        </li>
      </ol>
    </div>
    
  </div>
</template>

<script>

export default {
  name: 'App',
  data: function() {
    return {
      todoList: [],
      newTodoItem: ''
    }
  },
  methods: {
    addTodo: function() {
      this.todoList = [...this.todoList, this.newTodoItem]
      this.newTodoItem = ''
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 60px;
}
</style>
