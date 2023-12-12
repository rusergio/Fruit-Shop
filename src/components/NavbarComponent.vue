<template>
  <nav>
    <Logo />
    <div class="right-side">
      <Carro
        :carro="carro"
        :esCarroVisible="esCarroVisible"
        :mostrarCarro="mostrarCarro"
        :vaciarCarro="vaciarCarro"
        :eliminarProducto="eliminarProducto"
        :agregarAlCarro="agregarAlCarro"
      />
      <router-link to="/login">
        <i class="fi fi-rr-user"></i>
      </router-link>
    </div>
  </nav>
</template>

<script>
import Logo from './LogoComponents.vue'
import Carro from './CarroComponent.vue'

export default {
  components: {
    Logo,
    Carro
  },
  props: [
    'carro',
    'esCarroVisible',
    'mostrarCarro',
    'vaciarCarro',
    'eliminarProducto',
    'agregarAlCarro',
    'showLogin'
  ]
}
</script>

<style scoped>
nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 75px;
  justify-content: space-between;
  padding: 0 25px;
  box-shadow: 0 2px 3px rgb(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  background-color: #fff;
}

.fi.fi-rr-user {
  border: none;
  padding: 8px;
  color: #000;
  font-size: 1.8rem;
  transition: all 0.5s ease;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.fi.fi-rr-user:hover {
  background: #ddd;
}

.right-side {
  display: flex;
  align-items: center;
}

</style>
