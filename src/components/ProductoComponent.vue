<template>
  <article class="producto-card">
    <div class="producto-image-wrap">
      <img
        class="producto-image"
        :src="producto.img"
        :alt="producto.name"
        @error="onImageError"
      />
      <span class="price-badge">{{ formatUnitPrice(producto) }}</span>
    </div>
    <div class="producto-body">
      <h3 class="producto-name">{{ producto.name }}</h3>
      <div class="producto-actions">
        <CartButton :enCarro="false" @take="take" />
        <button class="btn-add" @click="agregarAlCarro(producto, cant)">
          <i class="fi fi-rr-shopping-cart-add"></i>
          <span>Añadir</span>
        </button>
      </div>
    </div>
  </article>
</template>

<script>
import CartButton from './CartButtonComponent.vue'
import currencyMixin from '@/mixins/currencyMixin'

export default {
  components: { CartButton },
  mixins: [currencyMixin],
  props: ['agregarAlCarro', 'producto'],
  data () {
    return {
      cant: 1
    }
  },
  methods: {
    take (qty) {
      this.cant = qty
    },
    onImageError (e) {
      e.target.src = '/images/shop.png'
    }
  }
}
</script>

<style scoped>
.producto-card {
  background: var(--color-surface);
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
  overflow: hidden;
  transition: transform var(--transition), box-shadow var(--transition);
  display: flex;
  flex-direction: column;
}

.producto-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.producto-image-wrap {
  position: relative;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  background: var(--color-bg-warm);
}

.producto-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.producto-card:hover .producto-image {
  transform: scale(1.05);
}

.price-badge {
  position: absolute;
  top: 12px;
  right: 12px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(4px);
  color: var(--color-primary-dark);
  font-size: 0.8125rem;
  font-weight: 700;
  padding: 6px 12px;
  border-radius: var(--radius-full);
  box-shadow: var(--shadow-sm);
}

.producto-body {
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  flex: 1;
}

.producto-name {
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-text);
  margin: 0;
  letter-spacing: -0.01em;
}

.producto-actions {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: auto;
}

.btn-add {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: var(--color-primary);
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: var(--radius-md);
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: background var(--transition), transform var(--transition);
}

.btn-add:hover {
  background: var(--color-primary-dark);
}

.btn-add:active {
  transform: scale(0.97);
}

.btn-add i {
  font-size: 1rem;
}
</style>
