<template>
  <div class="todo-app">
    <h1>To Do List</h1>
    <todo-form/>
    <todo-list/>
  </div>
</template>

<script setup>

import TodoForm from "@/components/TodoForm.vue";
import TodoList from "@/components/TodoList.vue";
</script>

<style scoped>
.todo-app {
  padding: 5vh;
  min-height: 100vh;
  width: 30vw;
  background-color: #f7f9fc;
}

</style>