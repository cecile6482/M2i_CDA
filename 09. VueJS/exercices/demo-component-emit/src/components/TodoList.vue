<script setup>
import { ref } from 'vue';
import AddTodo from './AddTodo.vue';
import TodoItem from './TodoItem.vue';

const todos = ref([]);

const addTodo = newTodoText => {
  todos.value.push(newTodoText);
  console.log(newTodoText);
}; 



const removeTodo = index => {
  todos.value.splice(index, 1);
};

// const modifyTodo = index => {
//   const newTodoText = prompt('Edit task:', todos.value[index]);
//   if (newTodoText !== null && newTodoText.trim() !== '') {
//     todos.value[index] = newTodoText;
//   }
// };

const modifyTodo = index => {
  const newTodoText = prompt('Edit task:', todos.value[index]);
  if (newTodoText !== null && newTodoText.trim() !== '') {
    todos.value.splice(index, 1, newTodoText);
    console.log(newTodoText);
  }
};



</script>

<template>
  <div>
    <AddTodo @add-todo="addTodo"></AddTodo>
    <h3 v-if="todos.length" class="mt-4"> Task List : </h3>
    <ul>
      <TodoItem v-for="(todo, index) in todos"
      :key="index"
      :todo="todo"
      :index="index"
      @remove-todo="removeTodo"
      @edit-todo="modifyTodo" />
    </ul>
  </div>
  
</template>

<style scoped>

</style>
