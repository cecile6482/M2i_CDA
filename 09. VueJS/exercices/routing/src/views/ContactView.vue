<script setup>
import { inject } from 'vue';


const {contacts} = inject('contacts');

</script>

<template>
<div>
<h1>ContactView</h1>

<h3> - Liste contact - </h3>
<ul>
  <li v-for="c in contacts" :key="c.id">"><RouterLink :to="`/contact/${c.id}`">{{c.firstName + ' ' + c.lastName }}</RouterLink></li>
</ul>
</div>

</template>

<style scoped>

</style>