# Événements de composant

## Émettre un événement

Un composant peut émettre des événements personnalisés
directement à partir du template à l'aide de la méthode native  $emit  :

<button @click="$emit('someEvent')">click me</button>

Le composant peut l'écouter avec  v-on :

<MyComponent @some-event="callback" />

Il est recommandé d'utiliser le kebab-case pour les écouteurs d'évents. 

## Arguments d'événement

Il est parfois utile d'émettre une valeur spécifique avec un événement.

Pour cela il suffit de l'ajouter en second argument à  $emit()  :

Dans le composant:

<button @click="$emit('increaseBy', 1)">
  Increase by 1
</button>

Dans le parent:

<MyButton @increase-by="(n) => count += n" />

## Déclarer les événements émis

Dans  <script setup> :

import { defineEmits } from "vue";
const emit = defineEmits(["inFocus", "submit"]);
const buttonClick = () => emit("submit");

<template>
  <div>
    <button @click="buttonClick">Cliquez ici</button>
  </div>
</template>



