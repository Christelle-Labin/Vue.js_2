<script setup>
import AppHeader from './components/AppHeader.vue'
import SecondButtons from './components/SecondButtons.vue'
import ThirdButtons from './components/ThirdButtons.vue'
import FourthButtons from './components/FourthButtons.vue'
import FifthButtons from './components/FifthButtons.vue'
import AppBonus1 from './components/AppBonus1.vue'
import AppBonus2 from './components/AppBonus2.vue'
import AppBonus3 from './components/AppBonus3.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
  <AppHeader />

  <main>
    <SecondButtons />
    <ThirdButtons />
    <FourthButtons />
    <FifthButtons />

    <AppBonus1 />
    <AppBonus2 />
    <AppBonus3 />
  </main>
  <AppFooter />
</template>
