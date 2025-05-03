<script setup>
import { ref } from 'vue'
const counter = ref(0)
const incrementCounter = () => {
  counter.value++
}
</script>

<template>
  <main>
    <div>
      <h1>Mon compteur</h1>
      <p>{{ counter }}</p>
      <button @click="incrementCounter">Incrémenter</button>
    </div>
  </main>
</template>

<style scoped>
main {
  width: 100vw;
  height: 100px;
  margin-top: 15rem;
  text-align: center;
  line-height: 3rem;
  cursor: default;
}
h1 {
  color: purple;
  font-weight: bold;
  font-size: 2.5rem;
}
p {
  font-size: 2rem;
}
button {
  padding: 1rem 3rem;
  border-radius: 4px;
  border: none;
  font-size: 1rem;
  color: white;
  background-color: darkmagenta;
  letter-spacing: 0.2em;
  cursor: pointer;
}
</style>
