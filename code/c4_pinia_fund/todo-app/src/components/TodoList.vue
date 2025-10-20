<template>
  <div v-for="todo in todoList" :key="todo.id" class="item">
    <div class="content">
      <span :class="{completed: todo.completed}">{{ todo.item }}</span>
      <span @click.stop="toggleCompleted(todo.id)">&#10004;</span>
    </div>
  </div>
</template>

<script setup>
import {useTodoListStore} from "@/stores/todoList.js";
import {storeToRefs} from "pinia";

const store = useTodoListStore();
const {todoList} = storeToRefs(store);
const {toggleCompleted} = store
</script>

<style scoped>
.completed {
  text-decoration: line-through;
}

</style>