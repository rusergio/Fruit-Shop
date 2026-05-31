<template>
  <router-link to="/" class="logo">
    <div class="logo-icon">
      <i class="fi fi-rr-apple-whole"></i>
    </div>
    <div class="logo-text">
      <span class="logo-name">Fruit Shop</span>
      <span class="logo-tagline">Frescas & naturales</span>
    </div>
  </router-link>
</template>

<style scoped>
.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none !important;
  transition: opacity var(--transition);
}

.logo:hover,
.logo:focus,
.logo:active {
  opacity: 0.85;
  text-decoration: none !important;
  outline: none;
}

.logo-icon {
  width: 44px;
  height: 44px;
  background: linear-gradient(135deg, var(--color-primary) 0%, #22c55e 100%);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.25rem;
  box-shadow: 0 4px 12px rgba(22, 163, 74, 0.3);
}

.logo-text {
  display: flex;
  flex-direction: column;
  line-height: 1.2;
}

.logo-name {
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--color-text);
  letter-spacing: -0.02em;
}

.logo-tagline {
  font-size: 0.7rem;
  font-weight: 500;
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

@media (max-width: 480px) {
  .logo-tagline {
    display: none;
  }
}
</style>
