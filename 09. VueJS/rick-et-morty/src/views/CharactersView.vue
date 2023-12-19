<script setup>
import { onMounted, computed } from 'vue';
import { useCharacterStore } from '../store/characterStore.js';
import Header from '../components/Header.vue';
import CharacterGrid from '../components/CharacterGrid.vue';

const store = useCharacterStore();

const currentPage = computed(() => store.currentPage);
const totalPages = computed(() => store.totalPages);

onMounted(() => {
  store.fetchCharacters();
});

const changePage = (page) => {
  if (page > 0 && page <= totalPages.value) { 
    store.changePage(page);
  }
};

</script>

<template>
  <Header />

  <div class="page">
    <div class="pagination-controls">
      <button @click="changePage(currentPage - 1)" :disabled="currentPage <= 1">⟪</button>
      <span>Page {{ currentPage }} sur {{ totalPages }}</span>
      <button @click="changePage(currentPage + 1)" :disabled="currentPage >= totalPages">⟫</button>
    </div>

    <CharacterGrid 
    />

    <div class="pagination-controls">
      <button @click="changePage(currentPage - 1)" :disabled="currentPage <= 1">⟪</button>
      <span>Page {{ currentPage }} sur {{ totalPages }}</span>
      <button @click="changePage(currentPage + 1)" :disabled="currentPage >= totalPages">⟫</button>
    </div>
  </div>
</template>

<style scoped>
.page {
  background-color: #0b140e;
  height: 230vh;
}

.pagination-controls {
  display: flex;
  justify-content: center;
  padding: 20px;
}

.pagination-controls button {
  padding: 5px 5px;
  margin: 0 15px;
  background-color: #76d626;
  border-color: #2c876f;
  border-radius: 5px;
  cursor: pointer;
}

.pagination-controls button:disabled {
  background-color: #ccc;
  border: none;
  cursor: default;
}

.pagination-controls span {
  color: #76d626;
  font-family: 'Papyrus', fantasy;
}

</style>