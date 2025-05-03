<script setup>
import { ref } from 'vue'
/* Variable réactive qui stocke le nombre généré */
const randomNumber = ref(0)
/* Fonction qui génère un nombre aléatoire et l'affiche dans une alerte */
const generateRandomNumber = () => {
  const number = Math.floor(Math.random() * 100) + 1
  randomNumber.value = number
  alert(`${number}`)
}
</script>

<template>
  <section class="fourth-button">
    <button @click="generateRandomNumber">
      <span class="inner-circle"></span>
      Chiffre surprise
    </button>
  </section>
</template>

<style scoped>
/* -------- FOURTH BUTTONS ------- */
.fourth-button {
  margin-top: 50px;
  text-align: center;
}
.fourth-button button {
  position: relative;
  width: 200px;
  height: 200px;
  border: none;
  color: var(--main-white);
  background-color: var(--main-orange);
  border-radius: 50%;
  cursor: pointer;
  font-size: 1rem;
}
.inner-circle {
  position: absolute;
  width: 180px;
  height: 180px;
  border: 1px solid var(--main-white);
  border-radius: 50%;
  opacity: 0.4;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 0;
}
</style>
