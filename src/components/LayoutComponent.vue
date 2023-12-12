<template>
  <div class="layout">
    <div class="container">
      <slot></slot>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.layout {
  background-color: #fff;
  color: #0a283e;
  align-items: center;
  display: flex;
  flex-direction: column;
}
.container {
  width: 1200px;
}
</style>
