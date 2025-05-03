<script setup>
import { ref } from 'vue'

const colors = ref({
  bleue: '#23b8d3',
  violette: '#a519a5',
  orange: '#ffa500',
  verte: '#44f178',
})
/* Fonction déclenchée au clic sur une couleur */
const displayColor = (colorName) => {
  alert(
    `Il s'agit de la couleur ${colorName} dont le code hexadécimal est ${colors.value[colorName]}`,
  )
}
</script>

<template>
  <section>
    <h2>De quelle couleur s'agit-il ?</h2>
    <div class="third-buttons">
      <button
        v-for="(hex, name) in colors"
        :key="name"
        :style="{ backgroundColor: hex }"
        @click="displayColor(name)"
      ></button>
      <!-- displaycolor correspond à : -->
      <!-- <div @click="displayColor('bleue')">{{ colors.bleue }}</div>
        <div @click="displayColor('violette')">{{ colors.violette }}</div>
        <div @click="displayColor('orange')">{{ colors.orange }}</div>
        <div @click="displayColor('verte')">{{ colors.verte }}</div> -->
    </div>
  </section>
</template>

<style scoped>
/* -------- THIRD BUTTONS ------- */
.third-buttons {
  margin-top: 50px;
  display: flex;
  justify-content: center;
  gap: 50px;
}
.third-buttons button {
  border: none;
  border-radius: 100px 5px;
  padding: 80px;
  cursor: pointer;
}
</style>
