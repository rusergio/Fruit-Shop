<template>
  <div v-if="productos.length" class="productos-grid">
    <Producto
      v-for="producto in productos"
      :key="producto.name"
      :agregarAlCarro="agregarAlCarro"
      :producto="producto"
    />
  </div>
  <div v-else class="empty-state">
    <div class="empty-icon">
      <i class="fi fi-rr-search"></i>
    </div>
    <p class="empty-title">No se encontraron frutas</p>
    <p class="empty-text">Prueba con otro nombre o cambia el filtro</p>
  </div>
</template>

<script>
import Producto from './ProductoComponent.vue'

export default {
  components: { Producto },
  props: ['productos', 'agregarAlCarro']
}
</script>

<style scoped>
.productos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 24px;
}

.empty-state {
  text-align: center;
  padding: 64px 24px;
}

.empty-icon {
  width: 64px;
  height: 64px;
  background: var(--color-bg);
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: var(--color-text-muted);
  margin: 0 auto 16px;
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

@media (max-width: 640px) {
  .productos-grid {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 16px;
  }
}
</style>
