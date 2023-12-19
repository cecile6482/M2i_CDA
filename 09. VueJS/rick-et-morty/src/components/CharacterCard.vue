<script setup>
import { useCharacterStore } from '../store/characterStore.js';

const { selectCharacter } = useCharacterStore();
// Props pour recevoir les données du personnage
const props = defineProps({
  character: Object
});   

</script>

<template>
  <div class="character-card" @click="selectCharacter(character)">
    <img :src="character.image" :alt="character.name" />
    <h3>{{ character.name }}</h3>
    <p>Species: {{ character.species }}</p>
  </div>
</template>

<style scoped>
.character-card {
  width: 180px;
  margin: 10px;
  padding: 10px;
  background-color: #2c876f;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(73, 243, 93, 0.761);
  text-align: center;
  font-family: 'Papyrus', fantasy;
}

.character-card img {
  width: 100%;
  border-radius: 10px;
}

.character-card h3 {
  margin: 10px 0 5px;
  font-size: 1.1em;
  color: #2aef86;
}

.character-card p {
  margin: 5px 0;
  font-size: 0.9em;
  color: #adbdbd;
}

</style>