<template>
  <div class="modern-select" :class="{ open: isOpen, disabled }" v-click-outside="close">
    <label v-if="label" :for="inputId" class="select-label">{{ label }}</label>
    <button
      :id="inputId"
      type="button"
      class="select-trigger"
      :class="{ placeholder: !value }"
      :disabled="disabled"
      @click="toggle"
    >
      <span>{{ value || placeholder }}</span>
      <i class="fi fi-rr-angle-small-down chevron" :class="{ rotated: isOpen }"></i>
    </button>
    <transition name="dropdown">
      <ul v-if="isOpen" class="select-dropdown" role="listbox">
        <li
          v-for="option in options"
          :key="option"
          class="select-option"
          :class="{ selected: option === value }"
          role="option"
          @click="select(option)"
        >
          {{ option }}
          <i v-if="option === value" class="fi fi-rr-check"></i>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
let idCounter = 0

export default {
  props: {
    value: { type: String, default: '' },
    options: { type: Array, required: true },
    placeholder: { type: String, default: 'Seleccionar...' },
    label: { type: String, default: '' },
    disabled: { type: Boolean, default: false }
  },
  data () {
    return {
      isOpen: false,
      inputId: `modern-select-${++idCounter}`
    }
  },
  directives: {
    clickOutside: {
      bind (el, binding) {
        el._clickOutside = (e) => {
          if (!el.contains(e.target)) binding.value()
        }
        document.addEventListener('click', el._clickOutside)
      },
      unbind (el) {
        document.removeEventListener('click', el._clickOutside)
      }
    }
  },
  methods: {
    toggle () {
      if (!this.disabled) this.isOpen = !this.isOpen
    },
    close () {
      this.isOpen = false
    },
    select (option) {
      this.$emit('input', option)
      this.isOpen = false
    }
  }
}
</script>

<style scoped>
.modern-select {
  position: relative;
  width: 100%;
  margin-bottom: 18px;
}

.select-label {
  display: block;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 8px;
}

.select-trigger {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: var(--color-bg);
  font-size: 0.9375rem;
  font-family: inherit;
  color: var(--color-text);
  cursor: pointer;
  transition: border-color var(--transition), box-shadow var(--transition);
  text-align: left;
}

.select-trigger.placeholder span {
  color: var(--color-text-muted);
}

.select-trigger:hover:not(:disabled) {
  border-color: var(--color-primary);
}

.modern-select.open .select-trigger {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(22, 163, 74, 0.12);
  background: white;
}

.select-trigger:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.chevron {
  font-size: 1.125rem;
  color: var(--color-text-muted);
  transition: transform var(--transition);
}

.chevron.rotated {
  transform: rotate(180deg);
}

.select-dropdown {
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  right: 0;
  margin: 0;
  padding: 6px;
  list-style: none;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-lg);
  max-height: 220px;
  overflow-y: auto;
  z-index: 50;
}

.select-option {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px;
  border-radius: var(--radius-sm);
  font-size: 0.9375rem;
  color: var(--color-text);
  cursor: pointer;
  transition: background var(--transition);
}

.select-option:hover {
  background: var(--color-primary-light);
}

.select-option.selected {
  background: var(--color-primary-light);
  color: var(--color-primary-dark);
  font-weight: 600;
}

.select-option i {
  color: var(--color-primary);
  font-size: 0.875rem;
}

.dropdown-enter-active,
.dropdown-leave-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
}

.dropdown-enter,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>
