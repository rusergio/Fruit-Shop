<template>
  <div class="currency-selector" role="group" aria-label="Seleccionar moneda">
    <button
      v-for="opt in options"
      :key="opt.code"
      class="currency-btn"
      :class="{ active: currency === opt.code }"
      :title="opt.label"
      @click="setCurrency(opt.code)"
    >
      {{ opt.symbol }} {{ opt.code }}
    </button>
  </div>
</template>

<script>
import currencyMixin from '@/mixins/currencyMixin'

export default {
  mixins: [currencyMixin],
  data () {
    return {
      options: [
        { code: 'USD', symbol: '$', label: 'Dólar estadounidense' },
        { code: 'EUR', symbol: '€', label: 'Euro' }
      ]
    }
  }
}
</script>

<style scoped>
.currency-selector {
  display: flex;
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: 3px;
  gap: 2px;
}

.currency-btn {
  padding: 6px 12px;
  border: none;
  background: transparent;
  border-radius: calc(var(--radius-md) - 3px);
  font-size: 0.75rem;
  font-weight: 600;
  font-family: inherit;
  color: var(--color-text-muted);
  cursor: pointer;
  transition: all var(--transition);
  white-space: nowrap;
}

.currency-btn:hover:not(.active) {
  color: var(--color-text);
  background: rgba(255, 255, 255, 0.6);
}

.currency-btn.active {
  background: var(--color-surface);
  color: var(--color-primary-dark);
  box-shadow: var(--shadow-sm);
}

@media (max-width: 480px) {
  .currency-btn {
    padding: 6px 8px;
    font-size: 0.6875rem;
  }
}
</style>
