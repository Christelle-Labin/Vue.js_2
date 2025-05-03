<script setup>
import { ref } from 'vue'

const colorsList = ref([
  { name: 'bleu', hexa: '#0B71BA' },
  { name: 'vert', hexa: '#39B639' },
  { name: 'orange', hexa: '#EA8512' },
  { name: 'violet', hexa: '#721D7D' },
  { name: 'marron', hexa: '#713928' },
  { name: 'jaune', hexa: '#DED94B' },
  { name: 'noir', hexa: '#1C1C18' },
  { name: 'rouge', hexa: '#F11919' },
  { name: 'gris', hexa: '#9C9696' },
])
const randomColorBis = () => {
  const index = Math.floor(Math.random() * colorsList.value.length)
  const color = colorsList.value[index]
  alert(`Vous obtenez du ${color.name} dont le code hexadécimal est ${color.hexa}`)
}
</script>

<template>
  <div class="degraded">
    <button class="rainbow-button" @click="randomColorBis(name, hexa)">
      Couleur surprise version bis
    </button>
  </div>
</template>

<style scoped>
.degraded {
  margin-top: 20px;
  text-align: center;
}
button {
  padding: 15px 40px;
  color: var(--main-black);
  background-color: var(--main-white);
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
}
.rainbow-button {
  padding: 15px 40px;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  color: var(--main-black);
  background: white;

  border: 4px solid transparent;
  border-radius: 50px;

  /* Superposition du dégradé sur la bordure */
  background-image:
    linear-gradient(white, white),
    linear-gradient(to right, red, orange, yellow, green, blue, indigo);
  background-origin: border-box;
  background-clip: padding-box, border-box;
}
</style>
