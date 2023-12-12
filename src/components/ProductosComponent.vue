<template>
  <div class="productos">
    <Producto
      v-for="(producto, index) in productos"
      :key="index"
      :agregarAlCarro="agregarAlCarro"
      :producto="producto"
    />
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
.productos {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
