<template>
  <transition name="toast">
    <div v-if="visible" class="toast">
      <i class="fi fi-rr-check-circle"></i>
      <span>{{ message }}</span>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    message: { type: String, default: '' },
    visible: { type: Boolean, default: false }
  }
}
</script>

<style scoped>
.toast {
  position: fixed;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 10px;
  background: var(--color-text);
  color: white;
  padding: 14px 24px;
  border-radius: var(--radius-full);
  font-size: 0.875rem;
  font-weight: 500;
  box-shadow: var(--shadow-lg);
  z-index: 300;
}

.toast i {
  color: #4ade80;
  font-size: 1.125rem;
}

.toast-enter-active,
.toast-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.toast-enter,
.toast-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(12px);
}
</style>
