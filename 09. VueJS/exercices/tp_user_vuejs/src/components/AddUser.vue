<script setup>
import { ref, defineEmits } from 'vue'; 

const userName = ref('');
const userEmail = ref('');
const emit = defineEmits(['add-user']);

const errors = ref([]);

const checkForm = () => {
  errors.value = false;

  if (!userName.value) {
    errors.value = true;
  }

  if (!userEmail.value) {
    errors.value = true;
  }

  if (!errors.value) {
    emit('add-user', { name: userName.value, email: userEmail.value });
    console.log(userName.value);
    console.log(userEmail.value);
    userName.value = '';
    userEmail.value = '';
  } 
};

</script>

<template>
    <form @submit.prevent="checkForm">
    
    <p>
      <label for="name">Name</label>
      <input type="text" id="name" placeholder="Name" class="form-control my-2" v-model="userName"> 
    </p>

    <p>
      <label for="email">Email</label>
      <input type="email" id="email" placeholder="Email" class="form-control my-2" v-model="userEmail">
    </p>

    <p v-if="errors" class="alert alert-danger" role="alert">
      Please fill out all required fields !
    </p>

    <p>
      <button type="submit" value="Add User" class="btn btn-primary my-2" @click="emitAddUser">Add User</button> 
    </p>

    </form>
  </template>
  

<style scoped>

</style>