<script setup>
import { inject } from 'vue';

const nickname = inject('nickname').nickname;

</script>

<template>
    <div class="component">
        <h1>ChildComponentA</h1>

        <p><b>Valeur du Nickname : </b> {{ nickname }} </p>
    </div>

</template>

<style scoped>
.component {
    background-color: #f1f1f1;
    color: #000;
    padding: 10px;
    border-radius: 5px;
    width: 100%;
    height: 100%;
    text-align: center;
}
</style>
