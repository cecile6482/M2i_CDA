<script setup>
import { ref } from 'vue';
import { useTodoStore } from '../stores/todoStore';

const newTodo = ref('');
const store = useTodoStore();

const add = () => {
  if (newTodo.value.trim()) {
    store.addTodo(newTodo.value);
    newTodo.value = '';
  }
};
</script>

<template>
  <div class="add-todo">
    <input v-model="newTodo" @keyup.enter="add" placeholder="I need to ...">
    <button @click="add">Add</button>
  </div>
</template>

<style scoped>
.add-todo {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}

.add-todo input {
  padding: 0.5rem;
  font-size: 1rem;
  border: 2px solid #E8BD2E;
  border-radius: 0.5rem;
  margin-right: 0.5rem;
}

.add-todo button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #E8BD2E; 
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
}

.add-todo button:hover {
  background-color: #e6b800;
}
</style>