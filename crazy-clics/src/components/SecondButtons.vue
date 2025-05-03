<script setup>
const displayName = () => {
  console.log("Je m'appelle Christelle")
}
const displayName2 = (name) => {
  alert(`Je m'appelle ${name}`)
}
</script>

<template>
  <section class="second-buttons">
    <button @click="displayName()">Comment t'appelles-tu ?</button>
    <button @click="displayName2('Christelle')">Comment t'appelles-tu ?</button>
  </section>
</template>

<style scoped>
/* -------- SECOND BUTTONS ------- */
.second-buttons {
  margin-top: 100px;
  display: flex;
  justify-content: center;
  gap: 500px;
}
.second-buttons button {
  border: none;
  color: var(--main-white);
  background: var(--second-buttons);
  border-radius: 20px;
  padding: 10px;
  cursor: pointer;
}
</style>
