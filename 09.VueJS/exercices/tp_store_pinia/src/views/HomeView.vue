<script setup>
import AddTodo from '../components/AddTodo.vue';
import TodoList from '../components/TodoList.vue';
import { useTodoStore } from '../stores/todoStore';

const store = useTodoStore();

const showAll = () => {
  store.setFilter('all');
};

const showFavorites = () => {
  store.setFilter('favorites');
};
</script>

<template>
    <div class="home-view">
      <header>
        <h1><img src="../assets/pinia.png" alt="pinia">To Do</h1>
        <AddTodo />
      </header>
    <div class="filters">
      <button @click="showAll">All Tasks</button>
      <button @click="showFavorites">Favorite Tasks</button>
    </div>
    <TodoList />
  </div>
</template>

<style scoped>
.home-view {
  width: 100vw;
  min-height: 100vh;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #FFCA10;
}

.home-view header {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  background-color: #053737;
  padding: 1rem;
  color: #E6A228;
}

.filters {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

.filters button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #053737;
  color: #E6A228; 
  border: solid 2px #E8BD2E;
  border-radius: 0.25rem;
  cursor: pointer;
}
</style>