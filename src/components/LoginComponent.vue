<script>
export default {
  name: 'LoginComponent',
  data () {
    return {
      username: '',
      password: '',
      rememberMe: false
    }
  },
  methods: {
    submit () {
      if (this.username === 'admin' && this.password === 'admin') {
        return this.$router.push('/')
      }
    }
  }
}
</script>

<template>
  <div class="container">
    <md-card>
      <md-card-header>
        <h2 class="md-title">Inicia Sesión</h2>
      </md-card-header>

      <md-card-content>
        <form @submit="submit()">
          <md-field>
            <label>Usuario</label>
            <md-input required v-model="username"></md-input>
          </md-field>

          <md-field>
            <label>Contraseña</label>
            <md-input required type="password" v-model="password"></md-input>
          </md-field>

          <div class="middle-container">
            <md-switch v-model="rememberMe" class="md-primary">
              Recuérdame
            </md-switch>
            <router-link to="recovery-password">
              Has olvidado tu contraseña?
            </router-link>
          </div>

          <md-card-actions>
            <md-button type="submit" class="md-primary md-raised">
              Entrar
            </md-button>
            <div class="have-account">
              <span class="gray">Aun no tienes cuenta?</span>
              <router-link to="/">Crear cuenta</router-link>
            </div>
          </md-card-actions>
        </form>
      </md-card-content>
    </md-card>
  </div>
</template>

<style scoped>

.gray {
  color: #777;
}

h2 {
  text-align: center;
}

.container {
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.middle-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.md-card {
  width: 40%;
}

.md-button {
  width: 100%;
  text-transform: capitalize;
}

.md-card-actions {
  display: flex;
  flex-direction: column;
}

.have-account {
  display: flex;
  gap: 8px;
  margin-top: 10px;
}
</style>
