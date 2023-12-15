<script setup>
import { defineProps } from 'vue';
import { useTodoStore } from '../stores/todoStore';

const props = defineProps({
  todo: Object
});
const store = useTodoStore();

const toggleFav = () => {
  store.toggleFavorite(props.todo.id);
};

const remove = () => {
  store.removeTodo(props.todo.id);
};
</script>

<template>
  <div class="todo-item">
    <span class="todo-title">{{ todo.title }}</span>

    <div class="todo-actions">
    <button @click="remove">🚮</button>
    <button @click="toggleFav">{{ todo.isFavorite ? '💕' : '🤍' }}</button>
    </div>

  </div>
</template>

<style scoped>
.todo-item {
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 1rem;
  background-color: white;
  box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06);
  border-radius: 0.5rem;
  width: 100%; 
}

.todo-title {
  font-weight: bold;
  margin-right: 15rem;
  min-width: 10rem;
}

.todo-actions button {
  background: none;
  border: none;
  cursor: pointer;
  margin-left: 0.5rem; 
}

.todo-actions button:hover {
  opacity: 0.7;
}
</style>