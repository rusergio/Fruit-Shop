<script>
import Navbar from '@/components/NavbarComponent.vue'
import Productos from '@/components/ProductosComponent.vue'
import Title from '@/components/TitleComponent.vue'
import Layout from '@/components/LayoutComponent.vue'
import Footer from '@/components/FooterComponent.vue' 
export default {
  name: 'HomeComponent',
  components: {
    Navbar,
    Layout,
    Productos,
    Title,
    Footer
  },
  data () {
    return {
      productos: [
        { name: 'Banana', price: 1500, img: '/images/banana.jpg' },
        { name: 'Fresa', price: 2500, img: '/images/fresa.jpg' },
        { name: 'Cereza', price: 3000, img: '/images/cereza.jpg' },
        { name: 'Frambuesa', price: 3000, img: '/images/frambuesa.jpg' },
        { name: 'Fruta Bomba', price: 500, img: '/images/frutabomba.jpg' },
        { name: 'Naranja', price: 700, img: '/images/naranja.jpg' },
        { name: 'Pera', price: 1000, img: '/images/pera2.jpg' },
        { name: 'Sandía', price: 1000, img: '/images/sandia.jpg' },
        { name: 'Uva', price: 300, img: '/images/uva.jpg' },
        { name: 'Piña', price: 310, img: '/images/piña.jpg' },
        { name: 'Limon', price: 2500, img: '/images/limon2.jpg' },
        { name: 'Mandarina', price: 99.99, img: '/images/mandarina.jpg' },
        { name: 'Manzana', price: 4000, img: '/images/manzana.jpg' },
        { name: 'Mango', price: 1400, img: '/images/mango.jpg' },
        { name: 'Melocotón', price: 2000, img: '/images/melocoton.jpg' }
      ],
      carro: [],
      esCarroVisible: false,
      isAuth: false
    }
  },
  methods: {
    agregarAlCarro (producto, cant, desdeCarro = false) {
      if (this.carro.find(x => x.name === producto.name)) {
        const newCarro = this.carro.map(x =>
          x.name === producto.name
            ? {
                ...x,
                cantidad: desdeCarro ? cant : x.cantidad + cant
              }
            : x
        )
        this.carro = newCarro
      } else {
        this.carro = this.carro.concat({ ...producto, cantidad: cant })
      }
    },
    mostrarCarro () {
      this.esCarroVisible = !this.esCarroVisible
    },
    vaciarCarro () {
      this.carro = []
    },
    eliminarProductoCarro (prd) {
      console.log(prd)
      this.carro = this.carro.filter(producto => producto.name !== prd.name)
    }
  }
}
</script>

<template>
  <div style="background-color: #ebe9e9;">
    <Navbar
      :carro="carro"
      :esCarroVisible="esCarroVisible"
      :mostrarCarro="mostrarCarro"
      :vaciarCarro="vaciarCarro"
      :eliminarProducto="eliminarProductoCarro"
      :agregarAlCarro="agregarAlCarro"
    />
    <Layout>
      <Title/>
      <Productos :agregarAlCarro="agregarAlCarro" :productos="productos" />
    </Layout>
    <Footer/>
  </div>
</template>

<style scoped></style>