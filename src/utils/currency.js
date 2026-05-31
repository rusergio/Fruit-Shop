import Vue from 'vue'

const STORAGE_KEY = 'fruit-shop-currency'

export const CURRENCIES = {
  USD: { symbol: '$', code: 'USD', locale: 'en-US', rate: 1 },
  EUR: { symbol: '€', code: 'EUR', locale: 'de-DE', rate: 0.92 }
}

export const currencyState = Vue.observable({
  currency: localStorage.getItem(STORAGE_KEY) || 'USD'
})

export function setCurrency (code) {
  if (!CURRENCIES[code]) return
  currencyState.currency = code
  localStorage.setItem(STORAGE_KEY, code)
}

export function convertPrice (usdAmount) {
  const config = CURRENCIES[currencyState.currency]
  return usdAmount * config.rate
}

export function formatPrice (usdAmount) {
  const config = CURRENCIES[currencyState.currency]
  const amount = convertPrice(usdAmount)
  return new Intl.NumberFormat(config.locale, {
    style: 'currency',
    currency: config.code,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount)
}

export function formatUnitPrice (producto) {
  const price = formatPrice(producto.price)
  if (producto.unit) {
    const unitLabel = producto.unit === 'lb' ? 'lb' : 'u.'
    return `${price}/${unitLabel}`
  }
  return price
}
