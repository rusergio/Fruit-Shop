<template>
  <div class="detallesCarro">
    <div class="header">
      <div class="subheader">
        <span class="title">Mi Carrito</span>
        <span class="subtitle"> Productos ({{ carro.length }})</span>
      </div>
      <div>
        <button @click="vaciarCarro()" class="vaciar-carro" :disabled="carro.length === 0">
          <i class="fi fi-rr-trash"></i>
          <span> Vaciar carrito </span>
        </button>
      </div>
    </div>
    <ul>
      <DetalleCarroProducto
        v-for="producto in carro"
        :producto="producto"
        :key="producto.name"
        :eliminarProducto="eliminarProducto"
        @updateCant="updateCant"
      />
    </ul>
    <div class="footer">
      <button class="pay-button" :disabled="carro.length === 0">
        <router-link :to="carro.length > 0 ? '/payment': '/'">
          <span>Proceder con el pago</span>
          <span class="total-payment">$ {{ calcTotalToPay() }}</span>
        </router-link>
      </button>
    </div>
  </div>
</template>

<script>
import DetalleCarroProducto from './DetallesCarroProducto.vue'

export default {
  components: { DetalleCarroProducto },
  props: ['carro', 'vaciarCarro', 'eliminarProducto'],
  data () {
    return {}
  },
  methods: {
    calcTotalToPay () {
      const tot = this.carro.reduce((acc, el) => acc + el.price * el.cantidad, 0)
      return tot
    },
    updateCant (cant, producto) {
      this.$emit('updateCant', cant, producto)
    }
  },
  mounted () {}
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
}

a span {
  color: #fff;
}

.subheader {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.subtitle {
  color: rgb(140, 198, 63);
}

.title {
  font-size: 1.5rem;
  margin-bottom: 5px;
}

.vaciar-carro {
  padding: 10px 15px;
  background: rgb(140, 198, 63);
  color: #fff;
  border: none;
  border-radius: 3px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  transition: all 0.5s ease;
}

.vaciar-carro:hover {
  background: rgb(98, 138, 44);
}
.vaciar-carro:disabled{
  cursor: not-allowed;
}

.footer {
  width: 100%;
  display: flex;
  justify-content: center;
}

.pay-button {
  text-transform: uppercase;
  padding: 10px 20px;
  margin: 15px 40px;
  color: #fff;
  width: 100%;
  background: rgb(140, 198, 63);
  border: none;
  border-radius: 3px;
  transition: all 0.5s ease;
}

.pay-button:hover {
  background: rgb(98, 138, 44);
}

.pay-button:disabled {
  cursor: not-allowed;
}

.total-payment {
  padding: 5px 10px;
  border-radius: 15px;
  background-color: rgb(98, 138, 44);
  line-height: 1.5;
  margin-left: 5px;
}

.detallesCarro {
  background-color: #fff;
  position: absolute;
  margin-top: 30px;
  box-shadow: 1px 5px 5px rgb(0, 0, 0, 0.3);
  border-radius: 5px;
  width: 500px;
  right: 5px;
}

ul {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
}
</style>
