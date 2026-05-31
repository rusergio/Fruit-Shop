import { currencyState, setCurrency, CURRENCIES } from '@/utils/currency'

export default {
  computed: {
    currency () {
      return currencyState.currency
    },
    currencySymbol () {
      return CURRENCIES[currencyState.currency].symbol
    }
  },
  methods: {
    formatPrice (usdAmount) {
      const currency = this.currency
      const config = CURRENCIES[currency]
      const amount = usdAmount * config.rate
      return new Intl.NumberFormat(config.locale, {
        style: 'currency',
        currency: config.code,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(amount)
    },
    formatUnitPrice (producto) {
      const price = this.formatPrice(producto.price)
      if (producto.unit) {
        const unitLabel = producto.unit === 'lb' ? 'lb' : 'u.'
        return `${price}/${unitLabel}`
      }
      return price
    },
    setCurrency (code) {
      setCurrency(code)
    }
  }
}
