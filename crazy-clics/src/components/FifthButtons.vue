<script setup>
import { ref } from 'vue'
const convert = ref({
  10: '1000000',
  50: '5000000',
  145: '14500000',
  459: '45900000',
  1579: '157900000',
  3979: '397900000',
  5000: '500000000',
  7846: '784600000',
  10979: '1097900000',
})
/* Fonction déclenchée au clic sur une valeur en km */
const convertKmCm = (convertKm) => {
  alert(`${convertKm}km correspond à ${convert.value[convertKm]}cm`)
}
</script>

<template>
  <section class="bloc-buttons">
    <h2>Convertir des km en cm :</h2>
    <div class="fifth-buttons">
      <button v-for="(cm, km) in convert" :key="km" @click="convertKmCm(km)">{{ km }} km</button>
    </div>
  </section>
</template>

<style scoped>
/* -------- FIFTH BUTTONS ------- */
.bloc-buttons {
  margin: 0 15%;
  background-color: #23b8d3;
}
.bloc-buttons h2 {
  padding-top: 20px;
}
.fifth-buttons {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 colonnes */
  gap: 10px;
  padding: 20px;
}
.fifth-buttons button {
  max-width: 100%;
  min-width: 0;
  height: 80px;
  background-color: #23b8d3;
  border: 1px solid darkblue;
  color: white;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  text-align: center;
  /* Centrer le texte horizontlement et vetticalement */
  display: flex;
  align-items: center;
  justify-content: center;
  /* Empêcher le texte de déborder */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
