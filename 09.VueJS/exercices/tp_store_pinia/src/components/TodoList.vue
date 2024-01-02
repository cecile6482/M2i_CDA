<script setup>
import { computed } from 'vue';
import TodoItem from './TodoItem.vue';
import { useTodoStore } from '../stores/todoStore';

const store = useTodoStore();
const filteredTasks = computed(() => store.filteredTasks);

</script>

<template>
  <div class="todo-list">
    <div v-for="todo in filteredTasks" :key="todo.id">
      <TodoItem :todo="todo" />
    </div>
  </div>
</template>

<style scoped>
.todo-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
}
</style>