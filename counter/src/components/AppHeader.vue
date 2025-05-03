<script setup></script>

<template>
  <header>
    <div class="position">
      <font-awesome-icon :icon="['fas', 'calculator']" />
    </div>
    <h1>Counter</h1>
    <div class="line"></div>
  </header>
</template>

<style scoped>
.position {
  position: absolute;
  top: 26px;
  left: 200px;
}
#app > header > div.position > svg {
  width: 30px;
  height: 30px;
  position: relative;
  color: var(--main-color);
  z-index: 100;
}
h1 {
  font-size: 2.625rem;
  font-weight: bold;
  margin: 20px 250px;
}
.line {
  border: 1px solid var(--main-color);
}
</style>
