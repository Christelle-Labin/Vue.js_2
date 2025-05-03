<script setup>
const handleClick = () => {
  console.log('Hello World !')
}
const handleClick2 = () => {
  console.log('Bienvenue au Reacteur !')
}
</script>

<template>
  <h1>Crazy Clics</h1>
  <section class="first-buttons">
    <!-- Premier boutton: v-on syntaxe complète-->
    <button v-on:click="handleClick">Affiche un message dans la console</button>
    <!-- 2nd boutton: v-on syntaxe raccourcie-->
    <button @click="handleClick2">Affiche un autre message dans la console</button>
  </section>
</template>

<style scoped>
/* -------- FIRST BUTTONS ------- */
.first-buttons {
  display: flex;
  justify-content: center;
  gap: 60px;
}
.first-buttons button {
  margin-top: 100px;
  background: var(--main-white);
  color: var(--main-orange);
  border: 1px solid var(--main-orange);
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
}
</style>
