<script>
import ModernSelect from './ModernSelect.vue'
import OptionCards from './OptionCards.vue'
import provinces from '@/data/provinces'
import { getSessionUser, isLoggedIn } from '@/utils/userAccount'

export default {
  name: 'PaymentComponent',
  components: { ModernSelect, OptionCards },
  data () {
    return {
      provinces,
      loggedIn: false,
      useSavedData: true,
      fname: '',
      lname: '',
      phone: '',
      province: '',
      address: '',
      paymentMethod: '',
      paymentTiming: '',
      transferReference: '',
      transferAmount: '',
      submitted: false,
      error: '',
      paymentMethods: [
        {
          value: 'transferencia',
          title: 'Transferencia',
          description: 'Banco o billetera móvil',
          icon: 'fi fi-rr-bank'
        },
        {
          value: 'efectivo',
          title: 'Efectivo',
          description: 'Pago en dinero',
          icon: 'fi fi-rr-money'
        }
      ],
      paymentTimings: [
        {
          value: 'al_llegar',
          title: 'Pagar al llegar',
          description: 'Pagas cuando recibas tu pedido',
          icon: 'fi fi-rr-box-open'
        },
        {
          value: 'pronto',
          title: 'Pagar pronto',
          description: 'Realizas el pago ahora mismo',
          icon: 'fi fi-rr-bolt'
        }
      ]
    }
  },
  computed: {
    isPayNow () {
      return this.paymentTiming === 'pronto'
    },
    isTransfer () {
      return this.paymentMethod === 'transferencia'
    },
    showTransferFields () {
      return this.isPayNow && this.isTransfer
    },
    showCashNowInfo () {
      return this.isPayNow && this.paymentMethod === 'efectivo'
    },
    showPayOnArrivalInfo () {
      return this.paymentTiming === 'al_llegar'
    }
  },
  created () {
    this.loggedIn = isLoggedIn()
    if (this.loggedIn) {
      this.loadUserData()
    }
  },
  methods: {
    loadUserData () {
      const user = getSessionUser()
      if (!user || user.isAdmin) return
      this.fname = user.fname || ''
      this.lname = user.lname || ''
      this.phone = user.phone || ''
      this.province = user.province || ''
      this.address = user.address || ''
      this.paymentMethod = user.paymentMethod || ''
    },
    submit (e) {
      e.preventDefault()
      this.error = ''

      if (!this.paymentMethod) {
        this.error = 'Selecciona un método de pago'
        return
      }
      if (!this.paymentTiming) {
        this.error = 'Selecciona cuándo deseas pagar'
        return
      }
      if (this.showTransferFields) {
        if (!this.transferReference.trim()) {
          this.error = 'Ingresa el número de referencia de la transferencia'
          return
        }
        if (!this.transferAmount.trim()) {
          this.error = 'Ingresa el monto transferido'
          return
        }
      }

      this.submitted = true
    }
  }
}
</script>

<template>
  <div class="auth-page">
    <div class="auth-card payment-card">
      <router-link to="/" class="back-link">
        <i class="fi fi-rr-arrow-small-left"></i>
        Volver a la tienda
      </router-link>

      <div v-if="submitted" class="success-view">
        <div class="auth-icon">
          <i class="fi fi-rr-check"></i>
        </div>
        <h1>¡Pedido confirmado!</h1>
        <p v-if="paymentTiming === 'al_llegar'">
          Tu pedido será entregado en <strong>{{ address }}</strong>, {{ province }}.
          El pago se realizará al momento de la entrega.
        </p>
        <p v-else-if="isTransfer">
          Hemos recibido tu comprobante de transferencia. Tu pedido será procesado pronto.
        </p>
        <p v-else>
          Tu pedido ha sido registrado. Prepara el efectivo para completar el pago.
        </p>
        <router-link to="/" class="btn-primary success-btn">Volver a la tienda</router-link>
      </div>

      <template v-else>
        <div class="auth-header">
          <div class="auth-icon">
            <i class="fi fi-rr-truck-side"></i>
          </div>
          <h1>Envío y pago</h1>
          <p>Completa los datos de entrega y elige cómo pagar</p>
        </div>

        <div v-if="loggedIn && useSavedData" class="account-banner">
          <i class="fi fi-rr-badge-check"></i>
          <div class="account-banner-text">
            <strong>Datos guardados en tu cuenta</strong>
            <p>{{ fname }} {{ lname }} · {{ address }}, {{ province }}</p>
          </div>
          <button type="button" class="btn-edit" @click="useSavedData = false">Editar</button>
        </div>

        <form @submit="submit">
          <template v-if="!loggedIn || !useSavedData">
            <h3 class="section-title">Datos personales</h3>
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

            <h3 class="section-title">Dirección de envío</h3>

            <ModernSelect
              v-model="province"
              :options="provinces"
              label="Provincia"
              placeholder="Elige tu provincia"
            />

            <div class="form-group">
              <label for="address">Dirección completa</label>
              <textarea
                id="address"
                v-model="address"
                required
                rows="3"
                placeholder="Calle, número, reparto, referencias..."
              ></textarea>
            </div>
          </template>

          <h3 class="section-title">Método de pago</h3>
          <OptionCards v-model="paymentMethod" :options="paymentMethods" />

          <h3 class="section-title">¿Cuándo deseas pagar?</h3>
          <OptionCards v-model="paymentTiming" :options="paymentTimings" />

          <div v-if="showPayOnArrivalInfo" class="info-box">
            <div class="info-box-title">
              <i class="fi fi-rr-info"></i>
              Pago contra entrega
            </div>
            <p>
              Pagas cuando recibas tu encomenda en la puerta de tu casa.
              Aceptamos {{ paymentMethod === 'transferencia' ? 'transferencia móvil' : 'efectivo' }} al momento de la entrega.
            </p>
          </div>

          <div v-if="showTransferFields" class="transfer-section">
            <div class="bank-details">
              <h4>Datos para transferir ahora</h4>
              <div class="bank-row">
                <span>Banco</span>
                <span>Banco Metropolitano</span>
              </div>
              <div class="bank-row">
                <span>Cuenta</span>
                <span>9234 5678 9012 3456</span>
              </div>
              <div class="bank-row">
                <span>Titular</span>
                <span>Fruit Shop S.A.</span>
              </div>
              <div class="bank-row">
                <span>Billetera móvil</span>
                <span>+53 5 123 4567</span>
              </div>
            </div>

            <div class="form-group">
              <label for="transferAmount">Monto transferido</label>
              <input
                id="transferAmount"
                v-model="transferAmount"
                type="number"
                step="0.01"
                min="0"
                required
                placeholder="0.00"
              />
            </div>

            <div class="form-group">
              <label for="transferReference">Nº de referencia / comprobante</label>
              <input
                id="transferReference"
                v-model="transferReference"
                type="text"
                required
                placeholder="Ej: TRX-20240531-001"
              />
            </div>
          </div>

          <div v-if="showCashNowInfo" class="info-box">
            <div class="info-box-title">
              <i class="fi fi-rr-info"></i>
              Pago inmediato en efectivo
            </div>
            <p>
              Un repartidor se comunicará contigo para coordinar la recogida del pago
              antes de procesar tu pedido.
            </p>
          </div>

          <p v-if="error" class="form-error">{{ error }}</p>

          <div v-if="!loggedIn" class="register-hint">
            <i class="fi fi-rr-lightbulb-on"></i>
            <span>
              ¿Compras seguido?
              <router-link to="/register" class="link-accent">Crea una cuenta</router-link>
              y guarda tus datos para no repetirlos.
            </span>
          </div>

          <div class="form-actions">
            <button type="submit" class="btn-primary">Confirmar pedido</button>
            <router-link to="/" class="btn-secondary">Cancelar</router-link>
          </div>
        </form>
      </template>
    </div>
  </div>
</template>

<style scoped>
@import '@/assets/styles/form.css';

.payment-card {
  max-width: 580px;
}

.btn-edit {
  padding: 6px 12px;
  border: 1px solid var(--color-primary);
  background: white;
  color: var(--color-primary);
  border-radius: var(--radius-sm);
  font-size: 0.75rem;
  font-weight: 600;
  cursor: pointer;
  font-family: inherit;
  white-space: nowrap;
  transition: background var(--transition);
}

.btn-edit:hover {
  background: var(--color-primary-light);
}

.transfer-section {
  margin-top: 4px;
}

.register-hint {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 12px 14px;
  background: var(--color-accent-light);
  border-radius: var(--radius-md);
  font-size: 0.8125rem;
  color: var(--color-text-muted);
  margin-bottom: 16px;
  line-height: 1.5;
}

.register-hint i {
  color: var(--color-accent);
  margin-top: 2px;
}

.link-accent {
  color: var(--color-primary);
  font-weight: 600;
  text-decoration: none !important;
}

.success-view {
  text-align: center;
}

.success-view h1 {
  font-size: 1.5rem;
  margin: 0 0 12px;
}

.success-view p {
  font-size: 0.9375rem;
  color: var(--color-text-muted);
  line-height: 1.6;
  margin: 0 0 24px;
}

.success-btn {
  display: inline-block;
  text-decoration: none !important;
  text-align: center;
}
</style>
