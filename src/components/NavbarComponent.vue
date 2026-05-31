<template>
  <nav class="navbar">
    <Logo />
    <div class="nav-actions">
      <CurrencySelector />
      <Carro
        :carro="carro"
        :esCarroVisible="esCarroVisible"
        :mostrarCarro="mostrarCarro"
        :vaciarCarro="vaciarCarro"
        :eliminarProducto="eliminarProducto"
        :agregarAlCarro="agregarAlCarro"
      />
      <router-link to="/login" class="nav-btn" title="Iniciar sesión">
        <i class="fi fi-rr-user"></i>
      </router-link>
    </div>
  </nav>
</template>

<script>
import Logo from './LogoComponents.vue'
import Carro from './CarroComponent.vue'
import CurrencySelector from './CurrencySelector.vue'

export default {
  components: {
    Logo,
    Carro,
    CurrencySelector
  },
  props: [
    'carro',
    'esCarroVisible',
    'mostrarCarro',
    'vaciarCarro',
    'eliminarProducto',
    'agregarAlCarro',
    'showLogin'
  ]
}
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--nav-height);
  padding: 0 24px;
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--color-border);
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.nav-btn {
  width: 44px;
  height: 44px;
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text);
  font-size: 1.25rem;
  text-decoration: none !important;
  transition: background var(--transition), color var(--transition);
}

.nav-btn:hover,
.nav-btn:focus,
.nav-btn:active {
  background: var(--color-primary-light);
  color: var(--color-primary);
  text-decoration: none !important;
  outline: none;
}

@media (max-width: 640px) {
  .navbar {
    padding: 0 16px;
  }
}
</style>
