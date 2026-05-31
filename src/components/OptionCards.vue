<template>
  <div class="option-cards">
    <label v-if="label" class="cards-label">{{ label }}</label>
    <div class="cards-grid" :class="`cols-${columns}`">
      <button
        v-for="opt in options"
        :key="opt.value"
        type="button"
        class="option-card"
        :class="{ active: value === opt.value }"
        @click="$emit('input', opt.value)"
      >
        <i v-if="opt.icon" :class="opt.icon"></i>
        <div class="option-text">
          <span class="option-title">{{ opt.title }}</span>
          <span v-if="opt.description" class="option-desc">{{ opt.description }}</span>
        </div>
        <span class="option-check">
          <i v-if="value === opt.value" class="fi fi-rr-check"></i>
        </span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: { type: String, default: '' },
    options: { type: Array, required: true },
    label: { type: String, default: '' },
    columns: { type: Number, default: 2 }
  }
}
</script>

<style scoped>
.option-cards {
  margin-bottom: 18px;
}

.cards-label {
  display: block;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 10px;
}

.cards-grid {
  display: grid;
  gap: 10px;
}

.cols-2 {
  grid-template-columns: 1fr 1fr;
}

.option-card {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 14px;
  border: 2px solid var(--color-border);
  border-radius: var(--radius-md);
  background: var(--color-bg);
  cursor: pointer;
  text-align: left;
  font-family: inherit;
  transition: all var(--transition);
}

.option-card:hover {
  border-color: var(--color-primary);
}

.option-card.active {
  border-color: var(--color-primary);
  background: var(--color-primary-light);
}

.option-card > i {
  font-size: 1.25rem;
  color: var(--color-primary);
  margin-top: 2px;
}

.option-text {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.option-title {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-text);
}

.option-desc {
  font-size: 0.75rem;
  color: var(--color-text-muted);
  line-height: 1.4;
}

.option-check {
  width: 20px;
  height: 20px;
  border-radius: var(--radius-full);
  border: 2px solid var(--color-border);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.option-card.active .option-check {
  background: var(--color-primary);
  border-color: var(--color-primary);
  color: white;
  font-size: 0.625rem;
}

@media (max-width: 480px) {
  .cols-2 {
    grid-template-columns: 1fr;
  }
}
</style>
