<template>
  <li class="cart-item">
    <img :src="producto.img" :alt="producto.name" class="item-image" />
    <div class="item-details">
      <div class="item-top">
        <span class="item-name">{{ producto.name }}</span>
        <button class="btn-remove" @click="eliminarProducto(producto)" aria-label="Eliminar">
          <i class="fi fi-rr-trash"></i>
        </button>
      </div>
      <span class="item-unit-price">{{ formatUnitPrice(producto) }} c/u</span>
      <div class="item-bottom">
        <CartButtonComponent
          @take="updateQty"
          :enCarro="true"
          :cantidad="calcCantInCarro"
        />
        <span class="item-total">{{ formatPrice(producto.price * cant) }}</span>
      </div>
    </div>
  </li>
</template>

<script>
import CartButtonComponent from './CartButtonComponent.vue'
import currencyMixin from '@/mixins/currencyMixin'

export default {
  props: ['producto', 'eliminarProducto'],
  components: { CartButtonComponent },
  mixins: [currencyMixin],
  data () {
    return {
      cant: this.producto.cantidad
    }
  },
  computed: {
    calcCantInCarro () {
      return this.producto.cantidad
    }
  },
  methods: {
    updateQty (cant) {
      this.cant = cant
      this.$emit('updateCant', this.cant, this.producto)
    }
  }
}
</script>

<style scoped>
.cart-item {
  display: flex;
  gap: 14px;
  padding: 16px 24px;
  border-bottom: 1px solid var(--color-border);
}

.item-image {
  width: 72px;
  height: 72px;
  object-fit: cover;
  border-radius: var(--radius-md);
  background: var(--color-bg-warm);
  flex-shrink: 0;
}

.item-details {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
}

.item-top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;
}

.item-name {
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--color-text);
}

.btn-remove {
  width: 32px;
  height: 32px;
  border: none;
  background: transparent;
  border-radius: var(--radius-sm);
  color: var(--color-text-muted);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background var(--transition), color var(--transition);
}

.btn-remove:hover {
  background: var(--color-danger-light);
  color: var(--color-danger);
}

.item-unit-price {
  font-size: 0.8125rem;
  color: var(--color-text-muted);
}

.item-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 4px;
}

.item-total {
  font-size: 1rem;
  font-weight: 700;
  color: var(--color-primary-dark);
}
</style>
