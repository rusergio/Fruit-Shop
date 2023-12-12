<template>
  <div class="carro_container">
    <span class="bubble">
      <BubbleAlert v-if="cantidad !== 0" :value="cantidad" />
    </span>
    <button @click="mostrarCarro()" class="carro">
      <i class="fi fi-rr-shopping-cart sc-icon"></i>
    </button>
    <DetallesCarro
      v-if="esCarroVisible"
      :vaciarCarro="vaciarCarro"
      :carro="carro"
      :eliminarProducto="eliminarProducto"
      @updateCant="update"
    />
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
  data () {
    return {
      cantidadParcial: 0
    }
  },
  methods: {
    update (cant, producto) {
      this.agregarAlCarro(producto, cant, true)
    }
  },
  computed: {
    cantidad () {
      const tot = this.carro.reduce((acc, el) => acc + el.cantidad, 0)
      // return tot > 0 ? tot : this.cantidadParcial
      return tot
    }
  }
}
</script>

<style scoped>

.sc-icon {
  font-size: 1.8rem;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.5s ease;
}

.sc-icon:hover {
  /*  */
  background-color: #ddd;
}

.carro {
  background: white;
  border: none;
  padding: 15px;
  border-radius: 15px;
  cursor: pointer;
}

.bubble {
  position: relative;
  left: 70px;
  top: -30px;
}
</style>
