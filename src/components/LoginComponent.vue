<script>
import { login } from '@/utils/userAccount'

export default {
  name: 'LoginComponent',
  data () {
    return {
      username: '',
      password: '',
      rememberMe: false,
      error: ''
    }
  },
  methods: {
    submit (e) {
      e.preventDefault()
      this.error = ''

      if (login(this.username, this.password)) {
        return this.$router.push('/')
      }
      this.error = 'Usuario o contraseña incorrectos'
    }
  }
}
</script>

<template>
  <div class="auth-page">
    <div class="auth-card">
      <router-link to="/" class="back-link">
        <i class="fi fi-rr-arrow-small-left"></i>
        Volver a la tienda
      </router-link>

      <div class="auth-header">
        <div class="auth-icon">
          <i class="fi fi-rr-user"></i>
        </div>
        <h1>Inicia sesión</h1>
        <p>Accede a tu cuenta para pedidos más rápidos</p>
      </div>

      <form @submit="submit">
        <div class="form-group">
          <label for="username">Usuario</label>
          <input
            id="username"
            v-model="username"
            type="text"
            required
            placeholder="Tu nombre de usuario"
            autocomplete="username"
          />
        </div>

        <div class="form-group">
          <label for="password">Contraseña</label>
          <input
            id="password"
            v-model="password"
            type="password"
            required
            placeholder="••••••••"
            autocomplete="current-password"
          />
        </div>

        <div class="form-row">
          <label class="checkbox-label">
            <input v-model="rememberMe" type="checkbox" />
            <span>Recuérdame</span>
          </label>
        </div>

        <p v-if="error" class="form-error">{{ error }}</p>

        <button type="submit" class="btn-primary">Entrar</button>

        <p class="auth-footer">
          ¿No tienes cuenta?
          <router-link to="/register" class="link-accent">Crear cuenta</router-link>
        </p>
      </form>
    </div>
  </div>
</template>

<style scoped>
@import '@/assets/styles/form.css';

.form-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  flex-wrap: wrap;
  gap: 8px;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.875rem;
  color: var(--color-text-muted);
  cursor: pointer;
}

.checkbox-label input {
  accent-color: var(--color-primary);
  width: auto;
}

.auth-footer {
  text-align: center;
  margin: 24px 0 0;
  font-size: 0.875rem;
  color: var(--color-text-muted);
}

.link-accent {
  color: var(--color-primary);
  font-weight: 600;
  text-decoration: none !important;
}
</style>
