<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    todo: {
        type: String,
        required: true,
    },
    index: {
        type: Number,
        required: true,
    },
});

const editTodo = () => {
  $emit('edit-todo', index);
};


</script>

<template>
  
   <li class="d-flex flex-row justify-content-between my-2">
    <div> 
{{ todo }}
    </div>
    <div>
      <button class="btn btn-success mx-2" @click="$emit('editTodo', index)">Edit</button>
    </div>
    <div>
      <button class="btn btn-danger mx-2" @click="$emit('remove-todo', index)">Remove</button>
    </div>
   </li>
  
  
</template>

<style scoped>

</style>
