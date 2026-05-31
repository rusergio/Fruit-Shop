<template>
  <span class="badge">{{ displayValue }}</span>
</template>

<script>
export default {
  props: ['value'],
  computed: {
    displayValue () {
      if (!this.value) return ''
      return this.value > 99 ? '99+' : this.value
    }
  }
}
</script>

<style scoped>
.badge {
  position: absolute;
  top: 2px;
  right: 2px;
  min-width: 18px;
  height: 18px;
  padding: 0 5px;
  background: var(--color-accent);
  color: white;
  border-radius: var(--radius-full);
  font-size: 0.6875rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  border: 2px solid white;
}
</style>
