<template>
  <div class="home">
    <Navbar
      :carro="carro"
      :esCarroVisible="esCarroVisible"
      :mostrarCarro="mostrarCarro"
      :vaciarCarro="vaciarCarro"
      :eliminarProducto="eliminarProductoCarro"
      :agregarAlCarro="agregarAlCarro"
    />
    <main class="main">
      <Layout>
        <Title :total-productos="productos.length" />
        <section class="products-section">
          <div class="section-header">
            <div>
              <h2 class="section-title">Nuestro catálogo</h2>
              <p class="section-subtitle">
                {{ productosFiltrados.length }} de {{ productos.length }} productos
              </p>
            </div>
          </div>

          <div class="catalog-toolbar">
            <div class="search-box">
              <i class="fi fi-rr-search"></i>
              <input
                v-model="busqueda"
                type="search"
                placeholder="Buscar fruta..."
                aria-label="Buscar fruta"
              />
              <button
                v-if="busqueda"
                class="search-clear"
                @click="busqueda = ''"
                aria-label="Limpiar búsqueda"
              >
                <i class="fi fi-rr-cross-small"></i>
              </button>
            </div>
            <div class="category-filters">
              <button
                v-for="cat in categorias"
                :key="cat.id"
                class="filter-chip"
                :class="{ active: categoriaActiva === cat.id }"
                @click="categoriaActiva = cat.id"
              >
                {{ cat.label }}
              </button>
            </div>
          </div>

          <Productos
            :agregarAlCarro="agregarAlCarro"
            :productos="productosFiltrados"
          />
        </section>
      </Layout>
    </main>
    <Footer />
    <Toast :visible="toastVisible" :message="toastMessage" />
  </div>
</template>

<script>
import Navbar from '@/components/NavbarComponent.vue'
import Productos from '@/components/ProductosComponent.vue'
import Title from '@/components/TitleComponent.vue'
import Layout from '@/components/LayoutComponent.vue'
import Footer from '@/components/FooterComponent.vue'
import Toast from '@/components/ToastComponent.vue'
import productosData from '@/data/productos'

export default {
  name: 'HomeComponent',
  components: {
    Navbar,
    Layout,
    Productos,
    Title,
    Footer,
    Toast
  },
  data () {
    return {
      productos: productosData,
      carro: [],
      esCarroVisible: false,
      busqueda: '',
      categoriaActiva: 'todas',
      toastVisible: false,
      toastMessage: '',
      toastTimer: null,
      categorias: [
        { id: 'todas', label: 'Todas' },
        { id: 'tropical', label: 'Tropicales' },
        { id: 'citrica', label: 'Cítricas' },
        { id: 'roja', label: 'Rojas' },
        { id: 'verde', label: 'Verdes' },
        { id: 'exotica', label: 'Exóticas' }
      ]
    }
  },
  computed: {
    productosFiltrados () {
      const term = this.busqueda.trim().toLowerCase()
      return this.productos.filter(p => {
        const matchSearch = !term || p.name.toLowerCase().includes(term)
        const matchCategory = this.categoriaActiva === 'todas' || p.category === this.categoriaActiva
        return matchSearch && matchCategory
      })
    }
  },
  methods: {
    agregarAlCarro (producto, cant, desdeCarro = false) {
      if (this.carro.find(x => x.name === producto.name)) {
        this.carro = this.carro.map(x =>
          x.name === producto.name
            ? { ...x, cantidad: desdeCarro ? cant : x.cantidad + cant }
            : x
        )
      } else {
        this.carro = this.carro.concat({ ...producto, cantidad: cant })
      }
      if (!desdeCarro) {
        this.mostrarToast(`${producto.name} añadido al carrito`)
      }
    },
    mostrarToast (message) {
      this.toastMessage = message
      this.toastVisible = true
      clearTimeout(this.toastTimer)
      this.toastTimer = setTimeout(() => {
        this.toastVisible = false
      }, 2500)
    },
    mostrarCarro () {
      this.esCarroVisible = !this.esCarroVisible
    },
    vaciarCarro () {
      this.carro = []
    },
    eliminarProductoCarro (prd) {
      this.carro = this.carro.filter(producto => producto.name !== prd.name)
    }
  },
  beforeDestroy () {
    clearTimeout(this.toastTimer)
  }
}
</script>

<style scoped>
.home {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--color-bg);
}

.main {
  flex: 1;
  padding-bottom: 48px;
}

.products-section {
  margin-top: 8px;
}

.section-header {
  margin-bottom: 20px;
}

.section-title {
  font-size: 1.375rem;
  font-weight: 700;
  color: var(--color-text);
  margin: 0;
  letter-spacing: -0.02em;
}

.section-subtitle {
  font-size: 0.875rem;
  color: var(--color-text-muted);
  margin: 4px 0 0;
}

.catalog-toolbar {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 28px;
}

.search-box {
  position: relative;
  max-width: 400px;
}

.search-box i.fi-rr-search {
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--color-text-muted);
  font-size: 0.9375rem;
  pointer-events: none;
}

.search-box input {
  width: 100%;
  padding: 12px 40px 12px 42px;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  font-size: 0.9375rem;
  font-family: inherit;
  background: var(--color-surface);
  color: var(--color-text);
  transition: border-color var(--transition), box-shadow var(--transition);
}

.search-box input:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(22, 163, 74, 0.12);
}

.search-box input::placeholder {
  color: var(--color-text-muted);
}

.search-clear {
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  width: 28px;
  height: 28px;
  border: none;
  background: var(--color-bg);
  border-radius: var(--radius-full);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-muted);
  transition: background var(--transition);
}

.search-clear:hover {
  background: var(--color-border);
}

.category-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.filter-chip {
  padding: 8px 16px;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-full);
  background: var(--color-surface);
  color: var(--color-text-muted);
  font-size: 0.8125rem;
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;
  transition: all var(--transition);
}

.filter-chip:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
}

.filter-chip.active {
  background: var(--color-primary);
  border-color: var(--color-primary);
  color: white;
}
</style>
