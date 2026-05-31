<template>
  <div class="carro-wrapper">
    <button @click="mostrarCarro()" class="carro-btn" title="Ver carrito">
      <i class="fi fi-rr-shopping-cart"></i>
      <BubbleAlert v-if="cantidad !== 0" :value="cantidad" />
    </button>

    <transition name="fade">
      <div
        v-if="esCarroVisible"
        class="cart-backdrop"
        @click="mostrarCarro()"
      ></div>
    </transition>

    <transition name="slide">
      <DetallesCarro
        v-if="esCarroVisible"
        :vaciarCarro="vaciarCarro"
        :carro="carro"
        :eliminarProducto="eliminarProducto"
        :cerrarCarro="mostrarCarro"
        @updateCant="update"
      />
    </transition>
  </div>
</template>

<script>
import BubbleAlert from './BubbleAlertComponent.vue'
import DetallesCarro from './DetallesCarro.vue'

export default {
  components: {
    BubbleAlert,
    DetallesCarro
  },
  props: [
    'carro',
    'esCarroVisible',
    'mostrarCarro',
    'vaciarCarro',
    'eliminarProducto',
    'agregarAlCarro'
  ],
  methods: {
    update (cant, producto) {
      this.agregarAlCarro(producto, cant, true)
    }
  },
  computed: {
    cantidad () {
      return this.carro.reduce((acc, el) => acc + el.cantidad, 0)
    }
  }
}
</script>

<style scoped>
.carro-wrapper {
  position: relative;
}

.carro-btn {
  position: relative;
  width: 44px;
  height: 44px;
  border: none;
  background: transparent;
  border-radius: var(--radius-full);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  color: var(--color-text);
  transition: background var(--transition), color var(--transition);
}

.carro-btn:hover {
  background: var(--color-primary-light);
  color: var(--color-primary);
}

.cart-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.4);
  z-index: 200;
  backdrop-filter: blur(2px);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-enter,
.slide-leave-to {
  transform: translateX(100%);
}
</style>
