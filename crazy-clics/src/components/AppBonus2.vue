<script setup>
import { ref } from 'vue'

const colorsList = ref([
  'bleu',
  'vert',
  'rose',
  'orange',
  'violet',
  'marron',
  'jaune',
  'noir',
  'rouge',
  'gris',
])
const randomColor = () => {
  const randomIndex = Math.floor(Math.random() * colorsList.value.length)
  const color = colorsList.value[randomIndex]
  alert(`${color}`)
}
</script>

<template>
  <div class="position">
    <button @click="randomColor()">Couleur surprise</button>
  </div>
</template>

<style scoped>
.position {
  text-align: center;
}
button {
  padding: 15px 40px;
  border: 2px solid purple;
  border-radius: 50px;
  color: purple;
  background-color: var(--main-white);
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
}
</style>
