<script setup>
import { inject } from 'vue';
import { useRoute, useRouter } from 'vue-router';


const contactsdetails = inject('contactsdetails');

const route = useRoute();
const router = useRouter();

const userId = parseInt(route.params.userId, 10);
const contactFound = contactsdetails.value.find(c => c.id === userId);

</script>

<template>
<div>
<h1>Details Client</h1>

  <ul class="list-group">
    <li class="list-group-item">Name : {{ contactFound?.name }}</li>
    <li class="list-group-item">Email :{{ contactFound?.email }} </li>
    <li class="list-group-item">Phone :{{ contactFound?.phone }} </li>
    <li class="list-group-item">City :{{ contactFound?.city }} </li>
    <li class="list-group-item">State :{{ contactFound?.state }} </li>
    <li class="list-group-item">Country :{{ contactFound?.country }} </li>
    <li class="list-group-item">Organization :{{ contactFound?.organization }} </li>
    <li class="list-group-item">Job Profile :{{ contactFound?.jobProfile }} </li>
    <li class="list-group-item">Additional Info :{{ contactFound?.additionalInfo }} </li>
  </ul>

  <button class="btn btn-primary mt-3" @click="router.back()">Go Back</button>
</div>


</template>

<style scoped>

</style>