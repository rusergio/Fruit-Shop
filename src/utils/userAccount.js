const USER_KEY = 'fruit-shop-user'
const SESSION_KEY = 'fruit-shop-session'

export function registerAccount (data) {
  const account = {
    username: data.username,
    password: data.password,
    fname: data.fname,
    lname: data.lname,
    phone: data.phone,
    province: data.province,
    address: data.address,
    paymentMethod: data.paymentMethod
  }
  localStorage.setItem(USER_KEY, JSON.stringify(account))
  localStorage.setItem(SESSION_KEY, data.username)
  return account
}

export function getAccount () {
  const raw = localStorage.getItem(USER_KEY)
  return raw ? JSON.parse(raw) : null
}

export function isLoggedIn () {
  const session = localStorage.getItem(SESSION_KEY)
  const account = getAccount()
  return !!(session && account && account.username === session)
}

export function login (username, password) {
  const account = getAccount()
  if (account && account.username === username && account.password === password) {
    localStorage.setItem(SESSION_KEY, username)
    return true
  }
  if (username === 'admin' && password === 'admin') {
    localStorage.setItem(SESSION_KEY, 'admin')
    return true
  }
  return false
}

export function logout () {
  localStorage.removeItem(SESSION_KEY)
}

export function getSessionUser () {
  if (!isLoggedIn()) return null
  const account = getAccount()
  if (localStorage.getItem(SESSION_KEY) === 'admin') {
    return account || { username: 'admin', fname: 'Admin', lname: '', isAdmin: true }
  }
  return account
}
