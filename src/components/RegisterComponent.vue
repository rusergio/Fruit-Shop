<script>
import ModernSelect from './ModernSelect.vue'
import OptionCards from './OptionCards.vue'
import provinces from '@/data/provinces'
import { registerAccount } from '@/utils/userAccount'

export default {
  name: 'RegisterComponent',
  components: { ModernSelect, OptionCards },
  data () {
    return {
      provinces,
      fname: '',
      lname: '',
      phone: '',
      province: '',
      address: '',
      paymentMethod: '',
      username: '',
      password: '',
      confirmPassword: '',
      paymentMethods: [
        {
          value: 'transferencia',
          title: 'Transferencia',
          description: 'Pago bancario o móvil',
          icon: 'fi fi-rr-bank'
        },
        {
          value: 'efectivo',
          title: 'Efectivo',
          description: 'Pago en dinero',
          icon: 'fi fi-rr-money'
        }
      ],
      error: ''
    }
  },
  methods: {
    submit (e) {
      e.preventDefault()
      this.error = ''

      if (this.password !== this.confirmPassword) {
        this.error = 'Las contraseñas no coinciden'
        return
      }
      if (this.password.length < 4) {
        this.error = 'La contraseña debe tener al menos 4 caracteres'
        return
      }
      if (!this.paymentMethod) {
        this.error = 'Selecciona un método de pago'
        return
      }

      registerAccount({
        username: this.username,
        password: this.password,
        fname: this.fname,
        lname: this.lname,
        phone: this.phone,
        province: this.province,
        address: this.address,
        paymentMethod: this.paymentMethod
      })

      this.$router.push('/payment')
    }
  }
}
</script>

<template>
  <div class="auth-page">
    <div class="auth-card register-card">
      <router-link to="/login" class="back-link">
        <i class="fi fi-rr-arrow-small-left"></i>
        Volver al inicio de sesión
      </router-link>

      <div class="auth-header">
        <div class="auth-icon">
          <i class="fi fi-rr-user-add"></i>
        </div>
        <h1>Crear cuenta</h1>
        <p>Regístrate una vez y tus datos quedarán guardados para futuros pedidos</p>
      </div>

      <form @submit="submit">
        <div class="form-row-2">
          <div class="form-group">
            <label for="fname">Nombre</label>
            <input id="fname" v-model="fname" type="text" required placeholder="Juan" />
          </div>
          <div class="form-group">
            <label for="lname">Apellidos</label>
            <input id="lname" v-model="lname" type="text" required placeholder="García" />
          </div>
        </div>

        <div class="form-group">
          <label for="phone">Teléfono</label>
          <div class="phone-input">
            <span class="phone-prefix">+53</span>
            <input id="phone" v-model="phone" type="tel" required maxlength="8" placeholder="12345678" />
          </div>
        </div>

        <ModernSelect
          v-model="province"
          :options="provinces"
          label="Provincia"
          placeholder="Elige tu provincia"
        />

        <div class="form-group">
          <label for="address">Dirección</label>
          <textarea
            id="address"
            v-model="address"
            required
            rows="3"
            placeholder="Calle, número, reparto, referencias..."
          ></textarea>
        </div>

        <OptionCards
          v-model="paymentMethod"
          label="Método de pago preferido"
          :options="paymentMethods"
        />

        <div class="form-divider">
          <span>Datos de acceso</span>
        </div>

        <div class="form-group">
          <label for="username">Usuario</label>
          <input id="username" v-model="username" type="text" required placeholder="Tu nombre de usuario" />
        </div>

        <div class="form-row-2">
          <div class="form-group">
            <label for="password">Contraseña</label>
            <input id="password" v-model="password" type="password" required placeholder="••••••••" />
          </div>
          <div class="form-group">
            <label for="confirmPassword">Confirmar</label>
            <input id="confirmPassword" v-model="confirmPassword" type="password" required placeholder="••••••••" />
          </div>
        </div>

        <p v-if="error" class="form-error">{{ error }}</p>

        <div class="form-actions">
          <button type="submit" class="btn-primary">Crear cuenta</button>
          <router-link to="/login" class="btn-secondary">Ya tengo cuenta</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
@import '@/assets/styles/form.css';
.register-card {
  max-width: 560px;
}
</style>
