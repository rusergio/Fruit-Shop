<script>
export default {
  name: 'PaymentComponent',
  data: () => ({
    provinces: [
      'Pinar del Río',
      'Mayabeque',
      'La Habana',
      'Artemisa',
      'Matanzas',
      'Cienfuegos',
      'Villa Clara',
      'Sancti Spíritus',
      'Ciego de Ávila',
      'Camaguey',
      'Las Tunas',
      'Granma',
      'Santiago de Cuba',
      'Guantánamo'
    ],
    provinceSelected: '',
    fname: '',
    lname: '',
    phone: ''
  }),
  methods: {
    submit () {
      // TODO: peticion de hacer la compra con fetch
    }
  }
}
</script>

<template>
  <div class="container">
  <md-card>
    <md-card-header>
      <h2 class="md-title">Dirección de envío</h2>
    </md-card-header>

    <md-card-content>
      <form @submit="submit()">
        <md-field>
          <label for="country">Ubicación</label>
          <md-select required name="province" id="province" v-model="provinceSelected">
            <md-option value="default">Elige una provincia</md-option>
            <md-option
              v-for="(province, index) of provinces"
              :key="index"
              :value="province"
            >
              {{ province }}
            </md-option>
          </md-select>
        </md-field>

        <md-field class="input-container">
          <label for="fname">Nombre</label>
          <md-input type="text" required id="fname" v-model="fname"></md-input>
        </md-field>

        <md-field class="input-container">
          <label for="lname">Apellidos</label>
          <md-input type="text" required id="lname" v-model="lname"></md-input>
        </md-field>

        <md-field class="input-container">
          <label for="phone">Número de teléfono</label>
          <span class="md-prefix">+53</span>
          <md-input
            type="tel"
            required
            name="phone"
            maxlength="8"
            id="phone"
            v-model="phone"
          ></md-input>
        </md-field>

        <div class="button-container">
          <md-button type="submit" class="md-primary md-raised">Guardar</md-button>
          <md-button class="md-raised">
            <router-link to="/">Cancelar</router-link>
          </md-button>
        </div>
      </form>
    </md-card-content>
  </md-card>
</div>

</template>

<style scoped>
h2 {
  font-size: 2rem;
  color: #09f;
  text-align: center;
}

label {
  font-size: 1rem;
}

span.md-prefix {
  color: #000 !important;
}

.md-card {
  width: 40%;
}

form {
  display: flex;
  flex-direction: column;
  width: 600px;
  align-items: center;
  justify-content: center;
}

.container {
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.md-field {
  width: 500px;
}

.md-button {
  width: 250px;
}
.button-container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}
</style>
