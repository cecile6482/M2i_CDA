<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';



const contacts = ref([{
	"id": 1,
	"name": "John Smith",
	"email": "jsmith@test.com",
	"phone": "123456789"
}, {
	"id": 2,
	"name":"Thomas Pierre",
	"email": "thomas@test.com",
	"phone": "987654321"
}, {
	"id": 3,
	"name": "Tyrion",
	"email": "tyrion@test.com",
	"phone": "123412345"
}
]);
    
</script>

<template>
    <div>
    <h2>Cette page affiche la liste des clients</h2>
    <div class="container">
      <div class="column">
        <div class="col-md-12" v-for="user in contacts" :key="user.id">
          <div class="card mb-3">
            <div class="card-body">
              <h5 class="card-title">{{ user.name }}</h5>
              <p class="card-text">{{ user.email }}</p>
              <p class="card-text">{{ user.phone }}</p>
              <RouterLink :to="{ name: 'contacts', params: { userId: user.id }}">
                <button class="btn btn-primary">Cliquer pour plus de détails</button>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
</template>
  

<style scoped>

</style>