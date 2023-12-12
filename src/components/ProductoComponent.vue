<template>
  <div class="producto">
    <img class="producto-image" :src="producto.img" :alt="producto.name" />
    <div class="info">
      <div class="cont">
        <h4>
          {{ producto.name.substring(0, 10)
          }}<span class="three-dots" v-if="producto.name.length > 15">...</span>
        </h4>
        |
        <h4 class="price">${{ producto.price }}</h4>
      </div>
      <div class="btn">
        <CartButton :enCarro="false" @take="take" />
        <button @click="agregarAlCarro(producto, cant)">
          <img src="/images/carrito2.png" width="20" height="20" alt="" />
          <span>Añadir</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import CartButton from './CartButtonComponent.vue'

export default {
  components: { CartButton },
  props: ['agregarAlCarro', 'producto'],
  data () {
    return {
      cant: 1
    }
  },
  methods: {
    take (qty) {
      this.cant = qty
    }
  }
}
</script>

<style scoped>

button {
  background-color: rgb(140, 199, 64);
  color: #fff;
  padding: 5px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
}

.producto {
  border: solid 1px #eee;
  box-shadow: 0 5px 5px rgb(0, 0, 0, 0.1);
  width: 30%;
  padding: 10px 15px;
  border-radius: 5px;
  margin-bottom: 10px;
  font-family: 'Courier New', Courier, monospace;
  font-size: 1.2rem;
}
h4 {
  font-weight: 700;
}

.btn {
  display: flex;
  gap: 5px;
}
h4.price {
  color: #359a2c;
  font-weight: bold;
}
.cont {
  display: flex;
  gap: 10px;
  align-items: center;
}
.info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
}

.tree-dots {
  font-weight: 300 !important;
}
img.producto-image {
  width: 100%;
  height: 300px;
}
</style>
