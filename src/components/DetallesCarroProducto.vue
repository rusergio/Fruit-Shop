<template>
  <li class="producto">
    <div class="left-side">
      <img :src="producto.img" :alt="producto.name" width="60" height="62" />
      <div class="price-name">
        <span class="name-producto"
          >{{ producto.name.substring(0, 15)
          }}<span v-if="producto.name.length > 15">...</span></span
        >
        <span class="total-price"> ${{ producto.price }} </span>
        <div class="total-price-sub">
          <CartButtonComponent
            @take="updateQty"
            :styles="cartButtonStyles"
            :enCarro="true"
            :cantidad="calcCantInCarro"
          />
          <div>
            <small style="display: block">Total</small>
            <span class="total-price__span">${{ producto.price * cant }}</span>
          </div>
        </div>
      </div>
    </div>
    <button @click="eliminarProducto(producto)">
      <i class="fi fi-rr-trash"></i>
    </button>
  </li>
</template>

<script>
import CartButtonComponent from './CartButtonComponent.vue'

export default {
  props: ['producto', 'eliminarProducto'],
  components: { CartButtonComponent },
  data () {
    return {
      cartButtonStyles: {
        padding: '0 10px'
      },
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
.name-producto {
  letter-spacing: 0.5px;
}
.total-price {
  color: rgb(140, 198, 63);
  font-weight: 600;
}
.total-price__span {
  font-weight: bold;
  color: rgb(140, 198, 63);
}
.producto {
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 20px;
  border-bottom: solid 1px #aaa;
}

.price-name {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.total-price-sub {
  display: flex;
  gap: 10px;
}

.left-side {
  display: flex;
}

button {
  border: none;
  padding: 5px;
  border-radius: 3px;
}

button:hover {
  opacity: 0.7;
}

img {
  border: 1px solid #aaa;
  padding: 5px 5px;
  border-radius: 3px;
  margin-right: 5px;
}
</style>
