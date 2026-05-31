<template>
  <div class="qty-control">
    <button
      :disabled="total === 0"
      class="qty-btn"
      @click="add(-1)"
      aria-label="Disminuir cantidad"
    >−</button>
    <span class="qty-value">{{ total }}</span>
    <button class="qty-btn" @click="add(1)" aria-label="Aumentar cantidad">+</button>
  </div>
</template>

<script>
export default {
  props: ['styles', 'cantidad', 'enCarro'],
  data () {
    return {
      total: 1
    }
  },
  methods: {
    add (x) {
      if (this.total + x < 0) return
      this.total += x
      this.$emit('take', this.total)
    }
  },
  mounted () {
    if (this.enCarro) {
      this.total = this.cantidad
    }
  }
}
</script>

<style scoped>
.qty-control {
  display: flex;
  align-items: center;
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  overflow: hidden;
  flex-shrink: 0;
}

.qty-btn {
  width: 36px;
  height: 36px;
  border: none;
  background: transparent;
  color: var(--color-text);
  font-size: 1.125rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background var(--transition), color var(--transition);
}

.qty-btn:hover:not(:disabled) {
  background: var(--color-primary-light);
  color: var(--color-primary);
}

.qty-btn:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.qty-value {
  min-width: 32px;
  text-align: center;
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--color-text);
}
</style>
