<script setup>
import { ref } from 'vue';
import AddUser from './AddUser.vue';
import UserItem from './UserItem.vue';
  
const users = ref([]);

const addUser = user => {
  users.value.push(user);
};

  
// const addUser = newUser => {
//   users.value.push(newUser);
//   console.log(newUser);
// };
  
const removeUser = index => {
  users.value.splice(index, 1);
};
  
const modifyUser = index => {
  const userName = prompt('Edit user name:', users.value[index].name);
  const userEmail = prompt('Edit user email:', users.value[index].email);
  if (userName !== null && userName.trim() !== '' && userEmail !== null && userEmail.trim() !== '') {
    users.value.splice(index, 1, { name: userName, email: userEmail });
    console.log(userName);
    console.log(userEmail);
  }
};
</script>

<template>
    <div>
      <AddUser @add-user="addUser"></AddUser>
      
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          <UserItem v-for="(user, index) in users"
                    :key="index"
                    :user="user"
                    :index="index"
                    @remove-user="removeUser"
                    @edit-user="modifyUser" />
        </tbody>
      </table>
    </div>
  </template>
  

  
<style scoped>
  
</style>
  