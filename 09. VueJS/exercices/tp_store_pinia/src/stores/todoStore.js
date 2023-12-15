import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useTodoStore = defineStore('todos', () => {
  const todos = ref([]);

  // Ajouter une nouvelle tâche
  function addTodo(todo) {
    todos.value.push({ id: Date.now(), title: todo, isFavorite: false });
  }

  // Marquer une tâche comme favorite
  function toggleFavorite(todoId) {
    const todo = todos.value.find(t => t.id === todoId);
    if (todo) {
      todo.isFavorite = true;
    }
  }

  // Supprimer une tâche
  function removeTodo(todoId) {
    todos.value = todos.value.filter(t => t.id !== todoId);
  }

  // Filtre pour afficher all ou favorites
  const filter = ref('all'); 

  const filteredTasks = computed(() => {
    if (filter.value === 'favorites') {
      return todos.value.filter(todo => todo.isFavorite);
    }
    return todos.value;
  });

  function setFilter(newFilter) {
    filter.value = newFilter;
  }

  return { todos, addTodo, toggleFavorite, removeTodo, filteredTasks, setFilter };

});
