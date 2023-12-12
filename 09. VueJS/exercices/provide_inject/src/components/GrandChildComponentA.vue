<script setup>
import { inject } from 'vue';

const updateNickname = inject('nickname').updateNickname;

</script>

<template>
    <div class="sub-component">
        <h1>GrandChildComponentA</h1>

        <div>
            <label>Nickname :</label>
            <input type="text" id="nickname" @input="updateNickname($event.target.value)"/>
        </div>

    </div>


</template>

<style scoped>
.component {
    background-color: #f1f1f1;
    padding: 10px;
    border-radius: 5px;
    width: 100%;
    height: 100%;
    text-align: center;
}
</style>
