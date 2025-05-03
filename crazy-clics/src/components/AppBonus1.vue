<script setup>
const word1 = 'aLigaTOR'
const word2 = 'CHAMOIS'
const word3 = 'ElEpHaNt'
const word4 = 'wombaT'

const correctTheWord = (word) => {
  const corrected = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  alert(corrected)
}
</script>

<template>
  <section class="bonus1">
    <button @click="correctTheWord(word1)">{{ word1 }}</button>
    <button @click="correctTheWord(word2)">{{ word2 }}</button>
    <button @click="correctTheWord(word3)">{{ word3 }}</button>
    <button @click="correctTheWord(word4)">{{ word4 }}</button>
  </section>
</template>

<style scoped>
.bonus1 {
  text-align: center;
}
.bonus1 button {
  padding: 20px 60px;
  border: none;
  background-color: #5cd8aa;
  margin: 60px 20px;
  cursor: pointer;
}
</style>
