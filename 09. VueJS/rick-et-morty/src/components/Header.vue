<script setup>
import { ref, computed, onMounted } from 'vue';
import { useCharacterStore } from '../store/characterStore';
import { useAuthStore } from '../store/authStore';
import { useRouter } from 'vue-router';

const store = useCharacterStore();
const filtersVisible = ref(false);

const authStore = useAuthStore();
const router = useRouter();

onMounted(() => {
  if (store.characters.length === 0) {
    store.fetchCharacters();
  }
});

const randomCharacterImage = computed(() => {
  if (store.characters.length > 0) {
    const randomIndex = Math.floor(Math.random() * store.characters.length);
    return store.characters[randomIndex].image;
  }
  return null; // Ou une image par défaut
});

const username = computed(() => authStore.user?.username || 'Invité');

function logout() {
  authStore.logout();
  // Redirection vers HomeView après déconnexion
  router.push('/');
}

const toggleFilters = () => {
  filtersVisible.value = !filtersVisible.value;
};

const updateSearch = (event) => {
  store.setSearchQuery(event.target.value);
};

const updateStatusFilter = (event) => {
  store.setStatusFilter(event.target.value);
};

const updateGenderFilter = (event) => {
  store.setGenderFilter(event.target.value);
};

const updateSpeciesFilter = (event) => {
  store.setSpeciesFilter(event.target.value);
};

const updateTypeFilter = (event) => {
  store.setTypeFilter(event.target.value);
};   

const clearFilters = () => {
  store.clearFilters();
};
</script>

<template>
  <div class="top-header">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <img :src="randomCharacterImage" alt="Character Image" class="rounded-circle" style="width: 50px; height: 50px;">
          <span class="profil">{{ username }}</span>
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li><a class="dropdown-item" href="#">Compte</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item" href="#" @click="logout">Se déconnecter</a></li>
        </ul>
      </li>
    </ul>
  </nav>

  <h1>Rick & Morty</h1>  
  <button @click="toggleFilters">⩔</button>
  </div>

  <div class="header" v-if="filtersVisible">

    <!-- Barre de recherche -->
    <input type="text" placeholder="Search By Name" @input="updateSearch" />
    
    <div class="dropdown">

    <div class="filter">
    <!-- Dropdown pour le statut -->
    <span>Status</span>
    <select @change="updateStatusFilter" v-model="statusFilter">
      <option value=""></option>
      <option value="alive">Alive</option>
      <option value="dead">Dead</option>
      <option value="unknown">Unknown</option>
    </select>
    </div>

    <!-- Dropdown pour l'espèce -->
    <div class="filter">
    <span>Species</span>
    <select @change="updateSpeciesFilter">
      <option value=""></option>
      <option value="human">Human</option>
      <option value="alien">Alien</option>
      <option value="humanoid">Humanoide</option>
      <option value="unknown">Unknown</option>
      <option value="poopybutthole">Poopybutthole</option>
      <option value="mythological creature">Mythological Creature</option>
      <option value="animal">Animal</option>
      <option value="robot">Robot</option>
      <option value="cronenberg">Cronenberg</option>
      <option value="disease">Disease</option>
    </select>
    </div>

    <!-- Dropdown pour le type (vide pour l'instant) -->
    <div class="filter">
    <span>Types  </span>
    <select @change="updateTypeFilter">
      <option value="">-</option>
    </select>
    </div>

    <!-- Dropdown pour le genre -->
    <div class="filter">
    <span>Gender</span>
    <select @change="updateGenderFilter">
      <option value=""></option>
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="unknown">Unknown</option>
      <option value="genderless">Genderless</option>
    </select>
    </div>

    </div>

    <!-- Bouton Clear Filter -->
    <div class="clear">
  <button @click="clearFilters">Clear Filters</button>
    </div>

  </div>
</template>

<style scoped>
.profil {
  color: #0b140e;
  font-family: 'Papyrus', fantasy;
  font-size: 1.2rem;
  margin-left: 15px;
}

.top-header {
  background-color: #76d626;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px;
}

.top-header h1 {
  color: #0b140e;
  font-family: 'Papyrus', fantasy;
  font-size: 3em;
  text-align: center;
  padding-top: 20px;
}

.top-header button {
  margin: 10px;
  font-size: 2em;
  cursor: pointer;
  width: 200px;
  border: none;
  background: none;
  color: #0b140e;
}

nav {
  background-color: #CED626;
  color: #0b140e;
  width: 0%;
  padding: 0;
  margin: 0;
  cursor: pointer;
}

a.nav-link {
  background-color: #CED626;
  color: #0b140e;
  border-radius: 50px;
  width: 100%;
  margin-left: 30vw;
  cursor: pointer;
}

ul.dropdown-menu {
  background-color: #CED626;
  color: #76d626;
  width: 50%;
  margin-left: 30vw;
  cursor: pointer;
}

.dropdown-item {
  background-color: #CED626;
  color: #0b140e;;
  width: 70%;
  cursor: pointer;
}

.header {
  background-color: #91E04F;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px;
}

.header h1 {
  color: #0b140e;
  font-family: 'Papyrus', fantasy;
  font-size: 2em;
}

.header input {
  padding: 5px 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: none;
  font-size: 1em;
  width: 300px;
  background-color: #e8f2ed;
}

.header .dropdown {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px;
  max-width: 600px;
}

.header .dropdown span {
  color: #0b140e;
  font-family: 'Papyrus', fantasy;
  font-size: 1.1em;
  margin-right: 50px;
}

.header .dropdown select {
  padding: 5px 10px;
  margin: 0 15px;
  border-radius: 5px;
  border: none;
  font-size: 1em;
  cursor: pointer;
  width: 120px;
  background-color: #e8f2ed;
}

.header .dropdown select option {
  background-color: #e8f2ed;
}

.header .clear button {
  margin-top: 20px;
  color: brown;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 1.1em;
  text-decoration: underline;
  font-family: 'Papyrus', fantasy;
}

</style>