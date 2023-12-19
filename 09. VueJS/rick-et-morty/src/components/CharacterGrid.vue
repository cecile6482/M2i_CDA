<script setup>
import { watchEffect, computed} from 'vue';
import { useCharacterStore } from '../store/characterStore.js';
import CharacterCard from './CharacterCard.vue';
import CharacterDetails from './CharacterDetails.vue';

const store = useCharacterStore();
const characters = computed(() => store.characters);

function showCharacterDetails(character) {
  store.selectCharacter(character); // Met à jour le personnage sélectionné dans le store
}

// Utiliser watchEffect pour réagir aux changements dans le store
watchEffect(() => {
  console.log('Characters:', characters.value);
});
</script>

<template>
  <div class="character-grid">
    <CharacterCard 
      v-for="character in characters"
      :key="character.id"
      :character="character"
      @click="showCharacterDetails(character)"
    />
    <!-- Pas besoin de slot ici, juste passer la prop character -->
    <CharacterDetails 
      v-if="store.selectedCharacter"
      :character="store.selectedCharacter" />
  </div>
</template>

<style scoped>
.character-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 30px;
}

</style>