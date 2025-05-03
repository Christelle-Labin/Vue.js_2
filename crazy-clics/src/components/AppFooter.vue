<script setup>
const displayNetwork = (network) => {
  alert(`Il s'agit du réseau ${network}`)
}
</script>

<template>
  <section class="sixth-buttons">
    <font-awesome-icon
      :icon="['fab', 'github']"
      @click="displayNetwork('Github')"
      class="icon-network"
    />
    <font-awesome-icon
      :icon="['fab', 'linkedin']"
      @click="displayNetwork('Linkedin')"
      class="icon-network"
    />
    <font-awesome-icon
      :icon="['fab', 'square-instagram']"
      @click="displayNetwork('Instagram')"
      class="icon-network"
    />
  </section>
</template>

<style scoped>
.sixth-buttons {
  margin: 40px;
  display: flex;
  justify-content: center;
  gap: 20px;
}
.sixth-buttons .icon-network {
  width: 52px;
  height: 52px;
}
</style>
