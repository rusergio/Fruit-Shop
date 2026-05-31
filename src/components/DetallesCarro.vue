<template>
  <aside class="cart-drawer">
    <div class="cart-header">
      <div class="cart-header-info">
        <h2 class="cart-title">Mi carrito</h2>
        <span class="cart-count">{{ carro.length }} {{ carro.length === 1 ? 'producto' : 'productos' }}</span>
      </div>
      <button class="btn-close" @click="cerrarCarro()" aria-label="Cerrar carrito">
        <i class="fi fi-rr-cross-small"></i>
      </button>
    </div>

    <div v-if="carro.length === 0" class="cart-empty">
      <div class="empty-icon">
        <i class="fi fi-rr-shopping-cart"></i>
      </div>
      <p class="empty-title">Tu carrito está vacío</p>
      <p class="empty-text">Agrega frutas frescas para empezar</p>
    </div>

    <ul v-else class="cart-list">
      <DetalleCarroProducto
        v-for="producto in carro"
        :producto="producto"
        :key="producto.name"
        :eliminarProducto="eliminarProducto"
        @updateCant="updateCant"
      />
    </ul>

    <div class="cart-footer">
      <button
        @click="vaciarCarro()"
        class="btn-clear"
        :disabled="carro.length === 0"
      >
        <i class="fi fi-rr-trash"></i>
        Vaciar carrito
      </button>
      <router-link
        :to="carro.length > 0 ? '/payment' : '/'"
        class="btn-checkout"
        :class="{ disabled: carro.length === 0 }"
        @click.native="carro.length > 0 && cerrarCarro()"
      >
        <span>Proceder al pago</span>
        <span class="checkout-total">{{ formatPrice(calcTotalToPay()) }}</span>
      </router-link>
    </div>
  </aside>
</template>

<script>
import DetalleCarroProducto from './DetallesCarroProducto.vue'
import currencyMixin from '@/mixins/currencyMixin'

export default {
  components: { DetalleCarroProducto },
  mixins: [currencyMixin],
  props: ['carro', 'vaciarCarro', 'eliminarProducto', 'cerrarCarro'],
  methods: {
    calcTotalToPay () {
      return this.carro.reduce((acc, el) => acc + el.price * el.cantidad, 0)
    },
    updateCant (cant, producto) {
      this.$emit('updateCant', cant, producto)
    }
  }
}
</script>

<style scoped>
.cart-drawer {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  max-width: 420px;
  height: 100vh;
  background: var(--color-surface);
  z-index: 201;
  display: flex;
  flex-direction: column;
  box-shadow: var(--shadow-xl);
}

.cart-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 24px;
  border-bottom: 1px solid var(--color-border);
}

.cart-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0 0 4px;
  color: var(--color-text);
}

.cart-count {
  font-size: 0.8125rem;
  color: var(--color-text-muted);
}

.btn-close {
  width: 36px;
  height: 36px;
  border: none;
  background: var(--color-bg);
  border-radius: var(--radius-full);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  color: var(--color-text-muted);
  transition: background var(--transition);
}

.btn-close:hover {
  background: var(--color-border);
}

.cart-empty {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 24px;
  text-align: center;
}

.empty-icon {
  width: 72px;
  height: 72px;
  background: var(--color-bg);
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.75rem;
  color: var(--color-text-muted);
  margin-bottom: 16px;
}

.empty-title {
  font-size: 1.0625rem;
  font-weight: 600;
  color: var(--color-text);
  margin: 0 0 8px;
}

.empty-text {
  font-size: 0.875rem;
  color: var(--color-text-muted);
  margin: 0;
}

.cart-list {
  flex: 1;
  overflow-y: auto;
  margin: 0;
  padding: 0;
  list-style: none;
}

.cart-footer {
  padding: 20px 24px;
  border-top: 1px solid var(--color-border);
  display: flex;
  flex-direction: column;
  gap: 12px;
  background: var(--color-bg);
}

.btn-clear {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px;
  background: transparent;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  color: var(--color-text-muted);
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: background var(--transition), color var(--transition);
}

.btn-clear:hover:not(:disabled) {
  background: var(--color-danger-light);
  color: var(--color-danger);
  border-color: var(--color-danger);
}

.btn-clear:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.btn-checkout {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  background: var(--color-primary);
  color: white;
  border-radius: var(--radius-md);
  font-weight: 600;
  font-size: 0.9375rem;
  transition: background var(--transition);
}

.btn-checkout:hover:not(.disabled) {
  background: var(--color-primary-dark);
}

.btn-checkout.disabled {
  opacity: 0.45;
  pointer-events: none;
}

.checkout-total {
  background: rgba(255, 255, 255, 0.2);
  padding: 4px 12px;
  border-radius: var(--radius-full);
  font-size: 0.875rem;
}
</style>
