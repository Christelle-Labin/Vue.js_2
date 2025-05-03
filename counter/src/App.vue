<script setup>
import { ref } from 'vue'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'

const counter = ref(0)
const decrementCounter = () => {
  counter.value--
}
const incrementCounter = () => {
  counter.value++
}
const resetCounter = () => {
  counter.value = 0
}
</script>

<template>
  <div id="app">
    <AppHeader />

    <main>
      <div class="bloc">
        <div class="counter">
          <button class="sign" @click="decrementCounter" aria-label="Décrémenter">-</button>
          <p>{{ counter }}</p>
          <button class="sign" @click="incrementCounter" aria-label="Incrémenter">+</button>
        </div>
        <button class="resetButton" @click="resetCounter" aria-label="Réinitialiser le compteur">
          Reset counter
        </button>
      </div>
    </main>

    <AppFooter />
  </div>
</template>

<style scoped>
/* ---- #app ET main ---- permettent au main de prendre tout l’espace restant, ce qui pousse naturellement le footer tout en bas */
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
main {
  flex-grow: 1;
}

.bloc {
  display: flex;
  flex-direction: column;
}
.counter {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 250px;
}
.sign {
  border: none;
  background: none;
  font-weight: bold;
  font-size: 2rem;
  color: var(--main-color);
  cursor: pointer;
}
/* 4ch = environ la largeur de 4 caractères, parfait pour gérer proprement -99 ou 100.*/
p {
  font-size: 4rem;
  cursor: default;
  width: 4ch; /* largeur fixe pour 3-4 caractères */
  text-align: center;
  transition: all 0.2s ease-in-out;
}

.resetButton {
  font-weight: bold;
  border: 1px solid var(--main-color);
  color: var(--main-color);
  background: var(--main-white);
  border-radius: 20px;
  padding: 10px 30px;
  margin: 50px auto;
  cursor: pointer;
}
</style>
