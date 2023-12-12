<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
});

const emit = defineEmits(['edit-user', 'remove-user']);


const editUser = (index) => {
  emit('edit-user', index);
};

</script>

<template>
    <tr>
      <td>{{ user.name }}</td>
      <td>{{ user.email }}</td>
      <td>
        <button class="btn btn-warning mx-2" @click="$emit('edit-user', index)">Edit</button>
        <button class="btn btn-danger mx-2" @click="$emit('remove-user', index)">Remove</button>
      </td>
    </tr>
</template>
  

<style scoped>

</style>

