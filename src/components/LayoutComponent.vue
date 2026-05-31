<template>
  <div class="layout">
    <div class="container">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.layout {
  flex: 1;
  width: 100%;
}

.container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
}

@media (max-width: 640px) {
  .container {
    padding: 0 16px;
  }
}
</style>
