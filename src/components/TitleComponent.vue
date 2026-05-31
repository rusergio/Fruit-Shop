<template>
  <section class="hero">
    <div class="hero-content">
      <span class="hero-badge">
        <i class="fi fi-rr-leaf"></i>
        100% natural
      </span>
      <h1 class="hero-title">
        Frutas frescas,<br>
        <span class="hero-highlight">directo a tu mesa</span>
      </h1>
      <p class="hero-subtitle">
        Selecciona tus favoritas, agrégalas al carrito y recíbelas en la puerta de tu casa.
      </p>
      <div class="hero-stats">
        <div class="stat">
          <span class="stat-value">{{ totalProductos }}+</span>
          <span class="stat-label">Variedades</span>
        </div>
        <div class="stat-divider"></div>
        <div class="stat">
          <span class="stat-value">24h</span>
          <span class="stat-label">Entrega rápida</span>
        </div>
        <div class="stat-divider"></div>
        <div class="stat">
          <span class="stat-value">★ 4.9</span>
          <span class="stat-label">Valoración</span>
        </div>
      </div>
    </div>
    <div class="hero-decoration">
      <div class="deco-circle deco-1"></div>
      <div class="deco-circle deco-2"></div>
      <div class="deco-circle deco-3"></div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    totalProductos: {
      type: Number,
      default: 16
    }
  }
}
</script>

<style scoped>
.hero {
  position: relative;
  padding: 48px 0 40px;
  overflow: hidden;
}

.hero-content {
  position: relative;
  z-index: 1;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: var(--color-primary-light);
  color: var(--color-primary-dark);
  font-size: 0.8125rem;
  font-weight: 600;
  padding: 6px 14px;
  border-radius: var(--radius-full);
  margin-bottom: 20px;
}

.hero-title {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.03em;
  color: var(--color-text);
  margin: 0 0 16px;
}

.hero-highlight {
  background: linear-gradient(135deg, var(--color-primary) 0%, #22c55e 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.0625rem;
  color: var(--color-text-muted);
  line-height: 1.6;
  max-width: 520px;
  margin: 0 0 32px;
}

.hero-stats {
  display: flex;
  align-items: center;
  gap: 24px;
}

.stat {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.stat-value {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-text);
}

.stat-label {
  font-size: 0.8125rem;
  color: var(--color-text-muted);
}

.stat-divider {
  width: 1px;
  height: 36px;
  background: var(--color-border);
}

.hero-decoration {
  position: absolute;
  top: 0;
  right: 0;
  width: 300px;
  height: 100%;
  pointer-events: none;
}

.deco-circle {
  position: absolute;
  border-radius: 50%;
  opacity: 0.5;
}

.deco-1 {
  width: 200px;
  height: 200px;
  background: linear-gradient(135deg, #dcfce7, #fef9c3);
  top: -40px;
  right: -20px;
}

.deco-2 {
  width: 120px;
  height: 120px;
  background: linear-gradient(135deg, #ffedd5, #fce7f3);
  top: 60px;
  right: 80px;
}

.deco-3 {
  width: 80px;
  height: 80px;
  background: var(--color-primary-light);
  bottom: 20px;
  right: 40px;
}

@media (max-width: 768px) {
  .hero {
    padding: 32px 0 24px;
  }

  .hero-decoration {
    display: none;
  }

  .hero-stats {
    gap: 16px;
  }
}
</style>
